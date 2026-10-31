'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  X,
  Gauge,
  MessagesSquare,
  Layers,
  Film,
} from 'lucide-react'
import { faqsImersoes } from '@/lib/imersoes'
import { useImersoesSeparadas } from '@/lib/useImersoes'

/* /imersoes/ é uma vitrine de experiências OFERECIDAS PELA CHERRY TOP.
   O ETT não opera imersão: divulga, encaminha o interesse e oferece ferramentas
   e encontros pra praticar antes e depois (PLANO-REPOSICIONAMENTO-PLATAFORMA-
   2026-10-31.md, §9). Dados e datas em lib/imersoes.ts; atual × encerrada é
   calculado no navegador. Nada de "10× mais rápido" nem "vagas limitadas". */

const FORM_URL = 'https://forms.gle/E4dV7dhEwASzVE4m6'
const CHERRY_URL = 'https://cherrytop.com.br'

const galeriaEua: string[] = [
  ...Array.from({ length: 16 }, (_, i) => i + 1)
    .filter((n) => n !== 14)
    .map((n) => `/imersoes/galeria-eua/${String(n).padStart(2, '0')}.jpg`),
  '/imersoes/galeria-eua/20.jpeg',
  '/imersoes/galeria-eua/21.jpeg',
  ...Array.from({ length: 10 }, (_, i) => i + 22).map((n) => `/imersoes/galeria-eua/${n}.jpg`),
]

/* Antes, durante e depois — só com ferramentas DISPONÍVEIS no Player. */
const complemento = [
  {
    quando: 'Antes',
    icon: Gauge,
    texto:
      'Faça o diagnóstico de nível no Level Check e revise vocabulário nos Flashcards pra chegar com mais repertório.',
  },
  {
    quando: 'Antes e durante',
    icon: Film,
    texto: 'Séries com legenda, audiolivro e rádio em inglês ajudam a acostumar o ouvido.',
  },
  {
    quando: 'Depois',
    icon: MessagesSquare,
    texto:
      'Os encontros de conversação gratuitos (online às segundas e IEP Talks aos sábados) mantêm o inglês em uso quando a imersão termina.',
  },
  {
    quando: 'Depois',
    icon: Layers,
    texto: 'Conversa guiada no Speak e o plano diário no Daily ajudam a manter a rotina de prática.',
  },
]

export default function Imersoes() {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const sep = useImersoesSeparadas()

  return (
    <main className="bg-surface min-h-screen">
      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 via-surface to-surface" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-6">
              Oferecidas pela Cherry Top
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink mb-6 leading-tight">
              Imersões em inglês oferecidas{' '}
              <span className="gradient-text">por nossos parceiros</span>
            </h1>
            <p className="text-ink-soft text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              Conheça experiências de imersão que ajudam você a ampliar o contato com o idioma. O
              ETT complementa essas oportunidades com ferramentas de prática e encontros de
              conversação.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#proximas"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-red-deep text-white font-bold text-base hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red"
              >
                Ver as próximas turmas
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={CHERRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-surface-line text-ink font-semibold hover:border-brand-red/50 hover:bg-surface-card transition-all"
              >
                Conhecer a Cherry Top
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUEM FAZ O QUÊ */}
      <section className="bg-surface-alt border-y border-surface-line">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[auto_1fr_1fr] gap-6 items-center bg-surface-card border border-surface-line rounded-2xl p-6">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-surface-card border border-surface-line mx-auto">
              <Image
                src="/images/logo-cherrytop.jpeg"
                alt="Logo da Cherry Top"
                fill
                className="object-contain p-1"
                sizes="80px"
              />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-ink-subtle font-semibold mb-1">
                Oferecido por
              </div>
              <div className="text-lg font-bold text-ink mb-1">Cherry Top Business Communication</div>
              <p className="text-ink-muted text-sm leading-relaxed">
                Programa, condução, inscrição, investimento e condições. Método Bonding +
                Native-like.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-brand-red font-semibold mb-1">
                Apoio do ETT
              </div>
              <p className="text-ink-muted text-sm leading-relaxed">
                Divulga as turmas, encaminha quem tem interesse e oferece ferramentas e encontros
                de conversação pra praticar antes e depois.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPORTUNIDADES ATUAIS */}
      <section id="proximas" className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-ink mb-4">Próximas turmas</h2>
            <p className="text-ink-muted max-w-2xl mx-auto text-lg">
              No Brasil e no exterior. Só aparecem aqui as turmas que ainda vão acontecer.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {sep === null
              ? Array.from({ length: 2 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-[520px] rounded-2xl bg-surface-card border border-surface-line animate-pulse"
                  />
                ))
              : sep.atuais.map((im) => (
                  <div
                    key={im.id}
                    className="group bg-surface-card border border-surface-line rounded-2xl overflow-hidden flex flex-col hover:border-brand-red/30 transition-all"
                  >
                    <Link href={im.detalheUrl} className="relative aspect-[16/9] bg-surface-alt overflow-hidden block">
                      <Image
                        src={im.capa}
                        alt={`Imersão em ${im.cidade}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-red-deep text-white">
                        {im.uf === 'EUA' ? 'No exterior' : 'No Brasil'}
                      </span>
                    </Link>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-ink-muted text-xs mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        {im.local}
                      </div>
                      <Link href={im.detalheUrl}>
                        <h3 className="text-2xl font-bold text-ink mb-1 hover:text-brand-red transition-colors">
                          {im.cidade}
                        </h3>
                      </Link>
                      <p className="text-sm text-ink-soft mb-4">
                        <span className="text-ink-subtle">Oferecido por</span>{' '}
                        <strong className="text-ink">{im.oferecidoPor}</strong>
                      </p>

                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex items-start gap-2 text-ink-soft">
                          <Calendar className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                          <div>
                            {im.turmas.map((t) => (
                              <div key={t.inicio} className="font-semibold">
                                {t.rotulo}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-ink-soft">
                          <Users className="w-4 h-4 text-brand-silver shrink-0 mt-0.5" />
                          <div>{im.formato}</div>
                        </div>
                      </div>

                      <ul className="space-y-1.5 mb-5 text-sm text-ink-muted">
                        {im.destaques.map((d) => (
                          <li key={d} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-red/70 shrink-0 mt-0.5" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="text-xs text-ink-subtle mb-5 pb-5 border-b border-surface-line">
                        <strong className="text-ink-soft">Investimento e inscrição:</strong>{' '}
                        definidos pela Cherry Top.
                      </p>

                      <div className="mt-auto flex flex-col sm:flex-row gap-3">
                        <Link
                          href={im.detalheUrl}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-red-deep text-white font-semibold text-sm hover:bg-brand-red-deep/90 transition-all"
                        >
                          Ver detalhes
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                          href={FORM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-surface-line text-ink-soft font-semibold text-sm hover:border-brand-red/40 transition-all"
                        >
                          Tenho interesse
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          {sep && sep.atuais.length === 0 && (
            <p className="text-center text-ink-muted max-w-xl mx-auto">
              Nenhuma turma aberta no momento. Deixe seu interesse no{' '}
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="text-brand-red underline">
                formulário
              </a>{' '}
              ou acompanhe direto no site da Cherry Top.
            </p>
          )}

          <p className="text-center text-xs text-ink-subtle mt-8 max-w-2xl mx-auto">
            O formulário é do ETT: encaminhamos seu interesse à Cherry Top, que entra em contato
            com a proposta. Se preferir, fale direto com eles em{' '}
            <a href={CHERRY_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-red">
              cherrytop.com.br
            </a>
            .
          </p>
        </div>
      </section>

      {/* ANTES, DURANTE E DEPOIS */}
      <section className="section-padding bg-surface-alt border-y border-surface-line">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Como o ETT complementa a imersão
            </h2>
            <p className="text-ink-muted text-lg">
              Nada disso é obrigatório pra fazer a imersão. É o que você pode usar pra aproveitar
              mais.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {complemento.map((c) => (
              <div key={c.texto} className="bg-surface-card border border-surface-line rounded-2xl p-5">
                <c.icon className="w-5 h-5 text-brand-red mb-3" />
                <div className="text-xs font-semibold uppercase tracking-widest text-brand-red mb-2">
                  {c.quando}
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">{c.texto}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/#ferramentas" className="text-sm font-semibold text-brand-red hover:underline">
              Ver todas as ferramentas →
            </Link>
          </div>
        </div>
      </section>

      {/* TURMAS ENCERRADAS */}
      {sep && sep.encerradas.length > 0 && (
        <section className="py-12 bg-surface">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-ink-subtle mb-4">
              Turmas encerradas
            </h2>
            <ul className="divide-y divide-surface-line border border-surface-line rounded-2xl bg-surface-card">
              {sep.encerradas.map((im) => (
                <li key={im.id} className="flex flex-wrap items-center justify-between gap-2 px-5 py-4 text-sm">
                  <span className="text-ink-soft">
                    <strong className="text-ink">{im.cidade}</strong> · {im.turmas.map((t) => t.rotulo).join(' · ')}
                  </span>
                  <span className="text-ink-subtle">Oferecido por {im.oferecidoPor}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* GALERIA */}
      <section id="galeria-eua" className="section-padding bg-surface-alt border-y border-surface-line">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Imersões da Cherry Top nos Estados Unidos
            </h2>
            <p className="text-ink-muted text-lg">
              Fotos de participantes de edições anteriores da Cherry Top nos EUA — a mesma
              operação que recebe as turmas de 2027.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galeriaEua.map((src, i) => (
              <button
                key={src}
                onClick={() => setLightbox(src)}
                className="relative aspect-square rounded-xl overflow-hidden bg-surface-card border border-surface-line hover:border-brand-red/40 transition-all group cursor-zoom-in"
              >
                <Image
                  src={src}
                  alt={`Imersão Cherry Top nos EUA — foto ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-8 text-center">
            Perguntas sobre as imersões
          </h2>
          <div className="space-y-3">
            {faqsImersoes.map((f, i) => (
              <div key={f.q} className="bg-surface-card border border-surface-line rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-ink">{f.q}</span>
                  <span className="text-brand-red text-xl leading-none">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-5 text-ink-muted text-sm leading-relaxed">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-black/95 tema-escuro backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-card border border-surface-line text-ink hover:bg-surface hover:border-brand-red/40 transition-all flex items-center justify-center"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative w-full max-w-5xl aspect-[4/3]">
            <Image src={lightbox} alt="Foto de imersão da Cherry Top" fill className="object-contain" sizes="100vw" />
          </div>
        </div>
      )}
    </main>
  )
}
