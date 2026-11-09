import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Info, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ferramentas, rotuloGrupo, rotuloStatus, PLAYER_URL } from '@/lib/ferramentas'
import { paginasFerramentas, getPaginaFerramenta } from '@/lib/ferramentas-paginas'

/* Página de uma ferramenta. Conteúdo em lib/ferramentas-paginas.ts (escrito a
   partir do código de cada app — só o que existe); nome, grupo e status vêm de
   lib/ferramentas.ts. CTA primário = ativação acompanhada (/planos/adesao/); abrir a ferramenta =
   secundário (decisão #3 de 01/08). */

const SITE_URL = 'https://englishtalktime.com.br'

export function generateStaticParams() {
  return paginasFerramentas.map((p) => ({ id: p.id }))
}

function dados(id: string) {
  const pagina = getPaginaFerramenta(id)
  const base = ferramentas.find((f) => f.id === id)
  if (!pagina || !base) return null
  return { pagina, base }
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const d = dados(params.id)
  if (!d) return {}
  const url = `${SITE_URL}/ferramentas/${d.pagina.id}/`
  return {
    title: `${d.base.nome} | Ferramentas do ETT`,
    description: d.pagina.descricao,
    alternates: { canonical: `/ferramentas/${d.pagina.id}/` },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      title: `${d.base.nome} — ETT Player`,
      description: d.pagina.descricao,
      url,
      images: [{ url: d.pagina.imagem, width: 1400, height: 875, alt: d.pagina.alt }],
    },
  }
}

export default function FerramentaPage({ params }: { params: { id: string } }) {
  const d = dados(params.id)
  if (!d) notFound()
  const { pagina, base } = d
  const url = `${SITE_URL}/ferramentas/${pagina.id}/`
  // Speak e Meet são dos encontros (gratuitos): o CTA leva à agenda, não ao plano.
  const encontro = pagina.id === 'speak' || pagina.id === 'meet'

  const outras = paginasFerramentas.filter((p) => p.id !== pagina.id)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Ferramentas', item: `${SITE_URL}/ferramentas/` },
          { '@type': 'ListItem', position: 3, name: base.nome, item: url },
        ],
      },
      {
        '@type': 'WebApplication',
        name: `ETT ${base.nome}`,
        description: pagina.descricao,
        url,
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web',
        image: `${SITE_URL}${pagina.imagem}`,
        provider: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  }

  const abrir = pagina.linkDireto ?? { url: PLAYER_URL, rotulo: 'Abrir no ETT Player' }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="bg-surface min-h-screen pt-16">
        {/* TOPO */}
        <header className="relative pt-10 pb-12 md:pt-14 md:pb-16 overflow-hidden hero-grid">
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto">
              <Link
                href="/ferramentas/"
                className="inline-flex items-center gap-1.5 text-ink-muted hover:text-brand-red text-sm transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" /> Todas as ferramentas
              </Link>

              <div className="flex flex-wrap items-center gap-2 mb-5 text-xs">
                <span className="px-2.5 py-1 rounded-full border border-brand-red/30 text-brand-red bg-brand-red/5 font-semibold uppercase tracking-wider">
                  ETT {base.nome}
                </span>
                <span className="px-2.5 py-1 rounded-full border border-surface-line text-ink-muted font-semibold">
                  {rotuloGrupo[base.grupo]}
                </span>
                <span className="px-2.5 py-1 rounded-full border border-surface-line text-ink-muted font-semibold">
                  {rotuloStatus[base.status]}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-5 leading-tight max-w-4xl">
                {pagina.titulo}
              </h1>
              <p className="text-ink-soft text-lg leading-relaxed max-w-3xl">{pagina.resumo}</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                {encontro ? (
                  <Link
                    href="/agenda/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-red-deep text-white font-bold text-sm hover:bg-brand-red-deep/90 transition-all"
                  >
                    Ver os próximos encontros
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <Link
                    href="/planos/adesao/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-red-deep text-white font-bold text-sm hover:bg-brand-red-deep/90 transition-all"
                  >
                    Começar na plataforma
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
                <a
                  href={abrir.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-surface-line text-ink-soft font-semibold text-sm hover:border-brand-red/40 hover:text-ink transition-all"
                >
                  {abrir.rotulo}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Captura de tela real do app em produção (01/11/2026) */}
              <figure className="mt-10">
                <div className="rounded-2xl overflow-hidden border border-surface-line shadow-xl bg-surface-card">
                  <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-surface-line bg-surface-alt">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <Image
                    src={pagina.imagem}
                    alt={pagina.alt}
                    width={1400}
                    height={875}
                    priority
                    className="w-full h-auto"
                  />
                </div>
                <figcaption className="text-xs text-ink-subtle mt-2">
                  Tela do ETT {base.nome} em funcionamento.
                </figcaption>
              </figure>
            </div>
          </div>
        </header>

        {/* CORPO */}
        <section className="bg-surface-alt border-y border-surface-line">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_320px] gap-10">
              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-bold text-ink mb-3">Para quem é</h2>
                  <p className="text-ink-muted leading-relaxed">{pagina.paraQuem}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ink mb-4">Como funciona</h2>
                  <ol className="space-y-3">
                    {pagina.comoFunciona.map((passo, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="shrink-0 w-7 h-7 rounded-full bg-brand-red-deep text-white text-sm font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                        <p className="text-ink-muted leading-relaxed pt-0.5">{passo}</p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ink mb-4">O que dá para fazer</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {pagina.recursos.map((r) => (
                      <div
                        key={r.titulo}
                        className="bg-surface-card border border-surface-line rounded-2xl p-5"
                      >
                        <h3 className="font-bold text-ink mb-1.5 flex items-start gap-2">
                          <Check className="w-4 h-4 text-brand-red mt-1 shrink-0" />
                          {r.titulo}
                        </h3>
                        <p className="text-sm text-ink-muted leading-relaxed">{r.texto}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ink mb-3">O que tem dentro</h2>
                  <div className="space-y-3">
                    {pagina.conteudo.map((p, i) => (
                      <p key={i} className="text-ink-muted leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="space-y-6">
                <div className="bg-surface-card border border-surface-line rounded-2xl p-5">
                  <h2 className="font-bold text-ink mb-3 flex items-center gap-2">
                    <Info className="w-4 h-4 text-brand-silver" />
                    Bom saber
                  </h2>
                  <ul className="space-y-2.5">
                    {pagina.bomSaber.map((b, i) => (
                      <li key={i} className="text-sm text-ink-muted leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface-card border border-surface-line rounded-2xl p-5">
                  <h2 className="font-bold text-ink mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-brand-red" />
                    Pratique conversando
                  </h2>
                  <p className="text-sm text-ink-muted leading-relaxed mb-3">
                    As ferramentas ajudam na rotina. Os encontros de conversação são gratuitos e
                    abertos: online às segundas, às 20h, e o IEP Talks aos sábados, às 10h, em
                    Curitiba.
                  </p>
                  <Link
                    href={pagina.relacionado?.href ?? '/agenda/'}
                    className="text-sm font-semibold text-brand-red hover:underline inline-flex items-center gap-1"
                  >
                    {pagina.relacionado?.rotulo ?? 'Ver a agenda de encontros'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* OUTRAS FERRAMENTAS */}
        <section className="section-padding bg-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-ink mb-5">Outras ferramentas do ETT Player</h2>
              <div className="flex flex-wrap gap-2">
                {outras.map((o) => {
                  const f = ferramentas.find((x) => x.id === o.id)
                  return (
                    <Link
                      key={o.id}
                      href={`/ferramentas/${o.id}/`}
                      className="px-4 py-2 rounded-full border border-surface-line bg-surface-card text-sm font-semibold text-ink-soft hover:border-brand-red/40 hover:text-ink transition-colors"
                    >
                      {f?.nome ?? o.id}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
