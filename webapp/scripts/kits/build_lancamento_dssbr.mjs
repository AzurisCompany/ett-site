// Artes do kit "lancamento-dssbr-2026" (lançamento do ETT no DSSBR, 27/10/2026).
//
// Diferente dos kits anteriores (PIL, paleta neon antiga), este monta cada arte em HTML/CSS e
// fotografa no Chromium: usa a identidade nova (marinho/vermelho/prata), a logo negativa em SVG
// e a Inter versionada, exatamente como o site. Uso:
//   node scripts/kits/build_lancamento_dssbr.mjs
// Saída: public/divulgacao/lancamento-dssbr-2026/assets/ (5 formatos canônicos)
//        + banner.webp e o JPEG do e-mail (Chromium não exporta webp; sai pelo PIL depois):
//   python3 -c "from PIL import Image; K='public/divulgacao/lancamento-dssbr-2026/'; b=Image.open(K+'assets/banner.png').convert('RGB'); b.save(K+'assets/banner.webp','WEBP',quality=86,method=6); b.resize((1200,675),Image.LANCZOS).save(K+'EmailLancamento-<MMDD>.jpg','JPEG',quality=86,optimize=True,progressive=True)"
//   ⚠️ JPEG do e-mail com NOME NOVO a cada versão (cache de 7 dias no hosting) e atualizar o email.html.
//        public/images/og-lancamento-dssbr-2026.png (cartão de compartilhamento da home)
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
// Playwright da máquina do Alessandro (mesmo do gerador de logos).
const { chromium } = require('/mnt/d/2026/01-enrequecimento/node_modules/playwright')

const WEBAPP = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..')
const PUB = path.join(WEBAPP, 'public')
const OUT = path.join(PUB, 'divulgacao', 'lancamento-dssbr-2026', 'assets')
const url = (p) => 'file://' + path.join(PUB, p)
const font = (w) => 'file://' + path.join(WEBAPP, 'scripts', 'fonts', `Inter-${w}.ttf`)

// Mesmos dados de lib/lancamento.ts (fonte de verdade do site).
const palestrantes = [
  { nome: 'Alessandro Binhara', curto: 'Alessandro', org: 'English Talk Time', hora: '13h30', img: url('images/ett-simbolo-positiva.svg'), logo: true },
  { nome: 'Rubens Queiroz', curto: 'Rubens', org: 'Unicamp · Aprendendo Inglês', hora: '14h00', img: url('images/lancamento/rubens-queiroz.webp') },
  { nome: 'Maria Leonardo Aparecida', curto: 'Maria Leonardo', org: 'Cherry Top', hora: '14h45', img: url('images/logo-cherrytop.jpeg'), logo: true },
  { nome: 'José Motta Filho', curto: 'José Motta', org: 'Silicon Valley Brasil', hora: '15h30', img: url('images/lancamento/jose-motta.webp') },
  { nome: 'Miguel Donizete', curto: 'Miguel', org: 'IEP · UTFPR', hora: '16h30', img: url('images/lancamento/miguel-donizete.webp') },
]

const FORMATOS = [
  ['banner.png', 1920, 1080, 'wide'],
  ['og-1200x630.png', 1200, 630, 'wide'],
  ['feed-1080x1080.png', 1080, 1080, 'square'],
  ['feed-1080x1350.png', 1080, 1350, 'tall'],
  ['story-1080x1920.png', 1080, 1920, 'story'],
]

const avatar = (p, cls) =>
  `<div class="av ${cls}"><img src="${p.img}" style="${p.logo ? 'object-fit:contain;padding:14%' : 'object-fit:cover'}"></div>`

function html(W, H, kind) {
  const u = W / 100 // tudo em frações da largura: o mesmo layout serve 1920 e 1200
  const wide = kind === 'wide'
  const s = { square: 0.86, tall: 1, story: 1.08 }[kind] ?? 1
  const k = kind === 'story' ? 2.05 : 1 // escala da lista de palestrantes

  const lista = palestrantes
    .map(
      (p) => `<div class="row">${avatar(p, 'sm')}<div class="who"><b>${p.nome}</b><span>${p.org}</span></div><i>${p.hora}</i></div>`,
    )
    .join('')
  const grade = palestrantes
    .map((p) => `<div class="cell">${avatar(p, 'lg')}<b>${p.curto}</b><i>${p.hora}</i></div>`)
    .join('')

  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Inter;font-weight:400;src:url(${font(400)})}
@font-face{font-family:Inter;font-weight:600;src:url(${font(600)})}
@font-face{font-family:Inter;font-weight:700;src:url(${font(700)})}
@font-face{font-family:Inter;font-weight:800;src:url(${font(800)})}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${W}px;height:${H}px;overflow:hidden}
body{font-family:Inter;color:#fff;position:relative;
  background:radial-gradient(ellipse at 85% 0%,rgba(215,34,41,.28),transparent 55%),
             radial-gradient(ellipse at 0% 100%,rgba(168,169,172,.14),transparent 50%),
             linear-gradient(160deg,#0A1630 0%,#122650 60%,#162B4E 100%)}
.wrap{position:absolute;inset:0;padding:${wide ? 5 * u : 7 * u}px;display:flex;flex-direction:column}
.top{display:flex;align-items:center;justify-content:space-between;gap:${2 * u}px}
.logo{height:${(wide ? 4.6 : 7.4 * s) * u}px}
.dss{font-weight:700;font-size:${(wide ? 1.35 : 2.3 * s) * u}px;color:#C9CDD6;letter-spacing:.04em;text-align:right;line-height:1.3}
.badge{display:inline-block;align-self:flex-start;margin-top:${(wide ? 3.2 : 5 * s) * u}px;padding:${(wide ? .55 : .9) * u}px ${(wide ? 1.3 : 2) * u}px;
  border-radius:999px;background:#D72229;font-weight:800;font-size:${(wide ? 1.25 : 2.2 * s) * u}px;letter-spacing:.08em;text-transform:uppercase}
h1{font-weight:800;line-height:1.04;letter-spacing:-.02em;margin-top:${(wide ? 1.8 : 3 * s) * u}px;font-size:${(wide ? 5.4 : 9.4 * s) * u}px}
h1 em{font-style:normal;color:#F05A60}
.quando{display:flex;align-items:center;gap:${(wide ? 1.6 : 3) * u}px;margin-top:${(wide ? 2.6 : 4.4 * s) * u}px}
.dia{background:#fff;color:#162B4E;border-radius:${(wide ? 1 : 1.8) * u}px;text-align:center;padding:${(wide ? .6 : 1.1) * u}px ${(wide ? 1.4 : 2.4) * u}px;line-height:1}
.dia small{display:block;font-weight:800;color:#D72229;letter-spacing:.12em;font-size:${(wide ? 1.2 : 2.2 * s) * u}px}
.dia strong{display:block;font-weight:800;font-size:${(wide ? 4 : 7.4 * s) * u}px}
.info{font-size:${(wide ? 1.65 : 3 * s) * u}px;line-height:1.4;color:#D1D5DB}
.info b{color:#fff}
.card{background:rgba(10,22,48,.72);border:1px solid #24395F;border-radius:${1.6 * k * u}px;padding:${1.8 * k * u}px}
.card h2{font-size:${1.1 * k * u}px;letter-spacing:.12em;color:#A8A9AC;font-weight:700;margin-bottom:${1.1 * k * u}px}
.row{display:flex;align-items:center;gap:${1.1 * k * u}px;padding:${.62 * k * u}px 0;border-top:1px solid rgba(36,57,95,.7)}
.row:first-of-type{border-top:0}
.who{flex:1;min-width:0;display:flex;flex-direction:column}
.who b{font-size:${1.45 * k * u}px;font-weight:700}
.who span{font-size:${1.08 * k * u}px;color:#9CA3AF;margin-top:${.15 * u}px}
.row i{font-style:normal;font-weight:800;color:#F05A60;font-size:${1.3 * k * u}px}
.av{border-radius:50%;overflow:hidden;background:#fff;flex-shrink:0;border:${Math.max(2, .25 * u)}px solid rgba(255,255,255,.9)}
.av img{width:100%;height:100%;display:block}
.av.sm{width:${3.9 * k * u}px;height:${3.9 * k * u}px}
.av.lg{width:${15 * s * u}px;height:${15 * s * u}px}
.grade{display:flex;justify-content:space-between;margin-top:${(kind === 'square' ? 4 : 6) * s * u}px}
.cell{width:18.4%;display:flex;flex-direction:column;align-items:center;text-align:center}
.cell b{font-size:${2.15 * s * u}px;font-weight:700;margin-top:${1.2 * u}px;line-height:1.15}
.cell i{font-style:normal;font-weight:800;color:#F05A60;font-size:${2.15 * s * u}px;margin-top:${.4 * u}px}
.foot{position:absolute;left:0;right:0;bottom:${kind === 'story' ? 5.5 * u : 0}px;background:#D72229;display:flex;align-items:center;justify-content:center;
  gap:${2 * u}px;flex-wrap:wrap;text-align:center;padding:${(wide ? 1.25 : 2.4 * s) * u}px ${4 * u}px;font-weight:700;font-size:${(wide ? 1.55 : 2.7 * s) * u}px}
.foot span{opacity:.9;font-weight:600}
.cols{display:flex;gap:${4 * u}px;flex:1;min-height:0}
.cols>.l{flex:1.15;display:flex;flex-direction:column}
.cols>.r{flex:1;display:flex;align-items:center}
.extra{margin-top:auto;padding-bottom:${(kind === 'story' ? 20 : 12) * u}px;font-size:${3 * s * u}px;color:#D1D5DB;line-height:1.4}
.extra b{color:#fff}
</style></head><body><div class="wrap">
  <div class="top"><img class="logo" src="${url('images/ett-logo-horizontal-negativa.svg')}"><div class="dss">CONGRESSO<br>DSSBR 2026</div></div>
  ${
    wide
      ? `<div class="cols"><div class="l">
          <span class="badge">Lançamento oficial</span>
          <h1>Uma tarde sobre <em>destravar o inglês</em>.</h1>
          <div class="quando"><div class="dia"><small>OUT</small><strong>27</strong></div>
            <div class="info"><b>Terça · 13h30 às 17h15</b><br>Auditório do IEP · Curitiba</div></div>
        </div><div class="r"><div class="card" style="width:100%"><h2>QUEM FALA</h2>${lista}</div></div></div>`
      : `<span class="badge">Lançamento oficial</span>
         <h1>Uma tarde sobre <em>destravar o inglês</em>.</h1>
         <div class="quando"><div class="dia"><small>OUT</small><strong>27</strong></div>
           <div class="info"><b>Terça · 13h30 às 17h15</b><br>Auditório do IEP · Curitiba</div></div>
         ${kind === 'story' ? `<div class="card" style="margin-top:${5 * u}px"><h2>QUEM FALA</h2>${lista}</div>` : `<div class="grade">${grade}</div>`}
         ${kind === 'square' ? '' : `<p class="extra">Palestras, a plataforma do ETT ao vivo e <b>sorteio de prêmios</b>.</p>`}`
  }
</div>
<div class="foot"><b>Entrada gratuita · 60 lugares</b><span>Inscrição: englishtalktime.com.br</span></div>
</body></html>`
}

fs.mkdirSync(OUT, { recursive: true })
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'kit-lanc-'))
const browser = await chromium.launch()
for (const [nome, W, H, kind] of FORMATOS) {
  const page = await browser.newPage({ viewport: { width: W, height: H } })
  const f = path.join(tmp, nome + '.html')
  fs.writeFileSync(f, html(W, H, kind))
  await page.goto('file://' + f)
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(300)
  const dest = path.join(OUT, nome)
  await page.screenshot({ path: dest })
  if (nome === 'og-1200x630.png') fs.copyFileSync(dest, path.join(PUB, 'images', 'og-lancamento-dssbr-2026.png'))
  console.log('  ', nome, W + 'x' + H, (fs.statSync(dest).size / 1024).toFixed(0) + 'KB')
  await page.close()
}
await browser.close()
fs.rmSync(tmp, { recursive: true, force: true })
console.log('OK →', OUT)
