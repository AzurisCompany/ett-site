import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Hammer } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  ferramentas,
  ferramentasDisponiveis,
  emConstrucao,
  rotuloGrupo,
  rotuloStatus,
  PLAYER_URL,
  type GrupoFerramenta,
} from '@/lib/ferramentas'
import { getPaginaFerramenta } from '@/lib/ferramentas-paginas'

/* Índice das ferramentas. Lista tudo o que o ETT Player mostra
   (lib/ferramentas.ts); as que têm página própria (lib/ferramentas-paginas.ts)
   viram cartão com resumo e captura de tela. Voice Agent Lab (modo
   demonstração) e ShadowDaily (em breve) aparecem só com o status, sem página
   — decisão de 01/11/2026. */

const SITE_URL = 'https://englishtalktime.com.br'

export const metadata: Metadata = {
  title: 'Ferramentas do ETT Player para praticar inglês',
  description:
    'Conheça cada ferramenta do ETT Player: teste de vocabulário, flashcards com áudio, legendas interativas, audiolivros, rádios ao vivo, planner de fala e encontros.',
  alternates: { canonical: '/ferramentas/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Ferramentas do ETT Player',
    description:
      'Teste de vocabulário, flashcards com áudio, legendas interativas, audiolivros, rádios ao vivo, planner de fala e encontros de conversação.',
    url: `${SITE_URL}/ferramentas/`,
    images: [{ url: '/images/og-ett-2026.png', width: 1200, height: 630, alt: 'ETT' }],
  },
}

const ordemGrupos: GrupoFerramenta[] = ['organizar', 'vocabulario', 'escuta', 'fala', 'comunidade']

export default function FerramentasPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Ferramentas', item: `${SITE_URL}/ferramentas/` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="bg-surface min-h-screen pt-16">
        <header className="relative pt-10 pb-10 md:pt-14 md:pb-14 hero-grid">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-5">
                ETT Player · {ferramentasDisponiveis.length} ferramentas no ar
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-5 leading-tight">
                As ferramentas do ETT, <span className="brand-red">uma a uma</span>
              </h1>
              <p className="text-ink-muted text-lg leading-relaxed">
                O que cada ferramenta faz, como funciona e o que tem dentro. Todas ficam reunidas
                no ETT Player.
              </p>
            </div>
          </div>
        </header>

        <section className="bg-surface-alt border-y border-surface-line">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-6xl mx-auto space-y-12">
              {ordemGrupos.map((g) => {
                const doGrupo = ferramentas.filter((f) => f.grupo === g)
                return (
                  <div key={g}>
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-subtle mb-4">
                      {rotuloGrupo[g]}
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {doGrupo.map((f) => {
                        const pagina = getPaginaFerramenta(f.id)
                        if (!pagina) {
                          return (
                            <div
                              key={f.id}
                              className="bg-surface-card border border-dashed border-surface-line rounded-2xl p-5"
                            >
                              <div className="flex items-start justify-between gap-3 mb-2">
                                <h3 className="font-bold text-ink">{f.nome}</h3>
                                <span className="shrink-0 px-2 py-0.5 rounded-full text-[11px] font-semibold border border-surface-line text-ink-subtle">
                                  {rotuloStatus[f.status]}
                                </span>
                              </div>
                              <p className="text-sm text-ink-muted leading-relaxed">{f.finalidade}</p>
                            </div>
                          )
                        }
                        return (
                          <Link
                            key={f.id}
                            href={`/ferramentas/${f.id}/`}
                            className="group bg-surface-card border border-surface-line rounded-2xl overflow-hidden flex flex-col hover:border-brand-red/40 hover:shadow-lg transition-all"
                          >
                            <div className="aspect-[16/10] overflow-hidden border-b border-surface-line bg-surface-alt">
                              <Image
                                src={pagina.imagem}
                                alt={pagina.alt}
                                width={1400}
                                height={875}
                                className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform"
                              />
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                              <h3 className="font-bold text-ink text-lg mb-1.5">{f.nome}</h3>
                              <p className="text-sm text-ink-muted leading-relaxed flex-1">
                                {pagina.descricao}
                              </p>
                              <span className="mt-4 text-sm font-semibold text-brand-red inline-flex items-center gap-1">
                                Ver como funciona
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                              </span>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              })}

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-subtle">
                <span className="inline-flex items-center gap-1.5 font-semibold text-ink-muted">
                  <Hammer className="w-4 h-4" />
                  Em construção:
                </span>
                {emConstrucao.join(' · ')}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">Comece com orientação</h2>
              <p className="text-ink-muted leading-relaxed mb-6">
                As ferramentas do ETT Player são abertas pra experimentar. Quem quiser usar com um
                plano faz a ativação acompanhada: duas sessões individuais pra configurar tudo pros seus
                objetivos. Algumas ferramentas estão em versão beta e podem mudar enquanto melhoram.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/planos/adesao/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-red-deep text-white font-bold text-sm hover:bg-brand-red-deep/90 transition-all"
                >
                  Orientação individual — R$ 97
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={PLAYER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-surface-line text-ink-soft font-semibold text-sm hover:border-brand-red/40 hover:text-ink transition-all"
                >
                  Abrir o ETT Player
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
