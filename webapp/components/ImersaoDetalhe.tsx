'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Building2,
  GraduationCap,
  CheckCircle2,
  X,
} from 'lucide-react'

const FORM_URL = 'https://forms.gle/E4dV7dhEwASzVE4m6'

export type Turma = {
  label: string
  when: string
  detalhe?: string
}

export type ImersaoDetalheProps = {
  eyebrow: string
  city: string
  uf: string
  headline: string
  intro: string
  turmas: Turma[]
  format: string
  local: { name: string; address?: string }
  lideranca?: string
  metodologia: string
  highlights: string[]
  inclusos: string[]
  naoInclusos?: string[]
  fotos: string[]
  fotosLegenda: string
  ctaLabel: string
  vagasInfo?: string
}

export default function ImersaoDetalhe(props: ImersaoDetalheProps) {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <main className="bg-surface min-h-screen">
      {/* HERO */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 via-surface to-surface" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" />
        <div className="absolute top-40 left-0 w-96 h-96 bg-brand-silver/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <Link
            href="/imersoes"
            className="inline-flex items-center gap-1.5 text-ink-muted hover:text-brand-red text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para imersões
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-4">
              {props.eyebrow}
            </span>
            <div className="flex items-center gap-2 text-ink-muted text-sm mb-3">
              <MapPin className="w-4 h-4" />
              {props.city}, {props.uf}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink mb-6 leading-tight">
              {props.headline}
            </h1>
            <p className="text-ink-soft text-lg md:text-xl leading-relaxed">
              {props.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* PARCERIA CHERRY TOP — banner de autoridade */}
      <section className="bg-surface-alt border-y border-surface-line">
        <div className="container mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-5 md:gap-8 bg-surface-card border border-brand-red/20 rounded-2xl p-5 md:p-6"
          >
            <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-ink/5 border border-surface-line flex-shrink-0">
              <Image
                src="/images/logo-cherrytop.jpeg"
                alt="Cherry Top — parceira oficial ETT"
                fill
                className="object-contain p-1"
                sizes="80px"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="text-xs uppercase tracking-widest text-brand-red font-semibold mb-1">
                Imersão em parceria com
              </div>
              <div className="text-xl font-bold text-ink mb-1">
                Cherry Top Business Communication
              </div>
              <p className="text-ink-muted text-sm">
                <strong className="text-ink">40+ anos</strong> formando profissionais fluentes ·
                metodologia <strong className="text-ink">Bonding + Native-like</strong> ·
                fluência até <strong className="text-brand-red">10× mais rápido</strong>
              </p>
            </div>
            <a
              href="https://cherrytop.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-muted hover:text-brand-red inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              cherrytop.com.br <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* TURMAS / DATAS */}
      <section className="section-padding pt-8 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Coluna principal */}
            <div className="lg:col-span-2 space-y-6">
              {/* Turmas */}
              <div className="bg-surface-card border border-surface-line rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-brand-red" />
                  <h2 className="text-xl font-bold text-ink">
                    {props.turmas.length > 1 ? 'Turmas previstas' : 'Quando'}
                  </h2>
                </div>
                <div className="space-y-3">
                  {props.turmas.map((t, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-surface border border-surface-line hover:border-brand-red/30 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3 flex-wrap">
                        <div>
                          <div className="font-semibold text-ink">{t.label}</div>
                          <div className="text-brand-red text-sm font-medium mt-0.5">
                            {t.when}
                          </div>
                          {t.detalhe && (
                            <div className="text-ink-muted text-xs mt-1">{t.detalhe}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-surface-card border border-surface-line rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-brand-red" />
                  <h2 className="text-xl font-bold text-ink">Destaques desta imersão</h2>
                </div>
                <ul className="space-y-2.5">
                  {props.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-ink-soft">
                      <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* O que está incluído */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-surface-card border border-surface-line rounded-2xl p-6">
                  <h3 className="font-bold text-ink mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-red" />
                    Incluso
                  </h3>
                  <ul className="space-y-1.5 text-ink-muted text-sm">
                    {props.inclusos.map((i) => (
                      <li key={i}>· {i}</li>
                    ))}
                  </ul>
                </div>
                {props.naoInclusos && (
                  <div className="bg-surface-card border border-surface-line rounded-2xl p-6">
                    <h3 className="font-bold text-ink mb-3 flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400" />
                      Não incluso
                    </h3>
                    <ul className="space-y-1.5 text-ink-muted text-sm">
                      {props.naoInclusos.map((i) => (
                        <li key={i}>· {i}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar — info + CTA */}
            <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
              <div className="bg-gradient-to-br from-brand-red/10 via-surface-card to-brand-silver/10 border border-brand-red/30 rounded-2xl p-6">
                <div className="text-xs text-ink-muted uppercase tracking-wider mb-1">
                  Investimento
                </div>
                <div className="text-2xl font-bold text-ink mb-1">Sob consulta</div>
                <div className="text-ink-muted text-sm mb-5">
                  Vaga garantida com taxa de pré-inscrição
                </div>
                {props.vagasInfo && (
                  <div className="flex items-center gap-2 text-ink-soft text-sm mb-5 pb-5 border-b border-surface-line">
                    <Users className="w-4 h-4 text-brand-silver" />
                    {props.vagasInfo}
                  </div>
                )}
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-red-deep text-white font-bold text-base hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red"
                >
                  {props.ctaLabel}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-ink-subtle text-xs italic text-center mt-3">
                  Sem compromisso. Sem spam.
                </p>
              </div>

              <div className="bg-surface-card border border-surface-line rounded-2xl p-6 space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-brand-silver shrink-0 mt-0.5" />
                  <div>
                    <div className="text-ink font-semibold">{props.local.name}</div>
                    {props.local.address && (
                      <div className="text-ink-muted text-xs mt-0.5">
                        {props.local.address}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-brand-silver shrink-0 mt-0.5" />
                  <div className="text-ink-soft">{props.format}</div>
                </div>
                {props.lideranca && (
                  <div className="flex items-start gap-2">
                    <GraduationCap className="w-4 h-4 text-brand-silver shrink-0 mt-0.5" />
                    <div className="text-ink-soft">{props.lideranca}</div>
                  </div>
                )}
                <div className="pt-3 border-t border-surface-line text-ink-muted text-xs">
                  Metodologia: <span className="text-ink">{props.metodologia}</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* GALERIA DAS FOTOS DA PASTA */}
      <section className="section-padding bg-surface-alt border-y border-surface-line">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">
              {props.fotos.length > 0
                ? `${props.fotos.length} fotos da imersão`
                : 'Primeira edição — você pode estar aqui'}
            </h2>
            <p className="text-ink-muted text-lg">{props.fotosLegenda}</p>
          </motion.div>

          {props.fotos.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {props.fotos.map((src, i) => (
                <motion.button
                  key={src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: (i % 8) * 0.04 }}
                  onClick={() => setLightbox(src)}
                  className="relative aspect-square rounded-xl overflow-hidden bg-surface-card border border-surface-line hover:border-brand-red/40 transition-all group cursor-pointer"
                >
                  <Image
                    src={src}
                    alt={`Foto ${i + 1} — ${props.city}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-surface/0 group-hover:bg-surface/30 transition-colors" />
                </motion.button>
              ))}
            </div>
          ) : (
            <div className="bg-surface-card border border-dashed border-brand-red/30 rounded-2xl p-10 text-center max-w-2xl mx-auto">
              <div className="text-5xl mb-3">📸</div>
              <p className="text-ink-soft text-lg">
                Galeria desta edição será publicada após a realização.
              </p>
              <Link
                href="/imersoes#galeria-eua"
                className="inline-flex items-center gap-1.5 text-brand-red hover:underline text-sm mt-4"
              >
                Ver galeria das imersões já realizadas <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-ink mb-4">
              Vaga garantida com{' '}
              <span className="gradient-text">pré-inscrição.</span>
            </h2>
            <p className="text-ink-muted text-lg mb-8">
              Preencha o formulário em 2 minutos. A gente entra em contato com os
              detalhes da imersão e como confirmar sua vaga.
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-red-deep text-white font-bold text-lg hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red"
            >
              {props.ctaLabel}
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="mt-8">
              <Link
                href="/imersoes"
                className="text-ink-muted hover:text-brand-red text-sm transition-colors inline-flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Ver todas as imersões
              </Link>
            </div>
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
            <Image src={lightbox} alt="Foto imersão" fill className="object-contain" sizes="100vw" />
          </div>
        </div>
      )}
    </main>
  )
}
