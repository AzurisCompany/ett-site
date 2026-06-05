#!/usr/bin/env node
// Detector de novos artigos do parceiro (Aprendendo Inglês).
//
// Lê o RSS do parceiro, compara contra as indicações já publicadas em
// lib/partner-posts.ts e imprime em JSON os artigos AINDA NÃO publicados,
// do mais novo pro mais antigo.
//
// Uso:
//   node scripts/partner-feed.mjs            # imprime novos (texto legível)
//   node scripts/partner-feed.mjs --json     # imprime novos como JSON puro
//   node scripts/partner-feed.mjs --all      # imprime todos do feed (ignora dedupe)
//
// Sem dependências externas: usa fetch nativo (Node >= 18) + regex simples.
// É só um DETECTOR — quem escreve o resumo e adiciona em partner-posts.ts é
// o agente semanal (ver ../CLAUDE.md → seção "Indicações de parceiros").

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const FEED_URL = 'https://www.aprendendoingles.com.br/feed/'
const __dirname = dirname(fileURLToPath(import.meta.url))
const PARTNER_POSTS_FILE = join(__dirname, '..', 'lib', 'partner-posts.ts')

const args = process.argv.slice(2)
const asJson = args.includes('--json')
const showAll = args.includes('--all')

function decodeEntities(s) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    // entidades numéricas genéricas (&#124; &#8217; &#x2019; …)
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim()
}

// remove query string (?utm_source=…) e fragmento pra comparar URLs limpas
function cleanUrl(u) {
  return u.split('#')[0].split('?')[0]
}

function stripHtml(s) {
  return decodeEntities(s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '))
}

function pick(block, tag) {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'))
  return m ? m[1] : ''
}

function isoDate(rfc822) {
  // RFC822 -> YYYY-MM-DD (UTC). Sem libs.
  const t = Date.parse(rfc822)
  if (Number.isNaN(t)) return ''
  return new Date(t).toISOString().slice(0, 10)
}

function parseItems(xml) {
  const items = []
  const re = /<item>([\s\S]*?)<\/item>/g
  let m
  while ((m = re.exec(xml)) !== null) {
    const block = m[1]
    const link = cleanUrl(stripHtml(pick(block, 'link')))
    const title = stripHtml(pick(block, 'title'))
    const pubDate = stripHtml(pick(block, 'pubDate'))
    const desc = stripHtml(pick(block, 'description')).slice(0, 600)
    const categories = [...block.matchAll(/<category[^>]*>([\s\S]*?)<\/category>/gi)].map(
      (c) => decodeEntities(c[1])
    )
    items.push({ title, link, partnerDate: isoDate(pubDate), excerpt: desc, categories })
  }
  return items
}

// URLs de parceiro já publicadas (lê o .ts como texto, sem compilar).
function publishedPartnerUrls() {
  let txt = ''
  try {
    txt = readFileSync(PARTNER_POSTS_FILE, 'utf8')
  } catch {
    return new Set()
  }
  const urls = [...txt.matchAll(/partnerUrl:\s*\n?\s*'([^']+)'/g)].map((m) => m[1])
  return new Set(urls)
}

async function main() {
  const res = await fetch(FEED_URL, {
    headers: { 'user-agent': 'ETT-partner-feed/1.0 (+https://englishtalktime.com.br)' },
  })
  if (!res.ok) {
    console.error(`Falha ao buscar o feed: HTTP ${res.status}`)
    process.exit(1)
  }
  const xml = await res.text()
  const items = parseItems(xml)
  const published = publishedPartnerUrls()

  const fresh = showAll ? items : items.filter((it) => !published.has(it.link))

  if (asJson) {
    process.stdout.write(JSON.stringify(fresh, null, 2) + '\n')
    return
  }

  if (fresh.length === 0) {
    console.log('✓ Nada novo no feed do parceiro — tudo já publicado.')
    return
  }

  console.log(`\n${fresh.length} artigo(s) ainda não publicado(s) (mais novo primeiro):\n`)
  fresh.forEach((it, i) => {
    console.log(`${i + 1}. ${it.title}`)
    console.log(`   data:  ${it.partnerDate}`)
    console.log(`   link:  ${it.link}`)
    if (it.categories.length) console.log(`   tags:  ${it.categories.join(', ')}`)
    console.log(`   resumo: ${it.excerpt.slice(0, 160)}…\n`)
  })
  console.log(
    'Pra publicar: o agente lê o link, escreve o resumo original e adiciona um\n' +
      'objeto em lib/partner-posts.ts (ver instruções em CLAUDE.md).'
  )
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
