'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

/* Posicionamento desde 31/10/2026: o ETT é uma PLATAFORMA de prática
   (ferramentas + conversação + parceiros), não um curso. Ver
   PLANO-REPOSICIONAMENTO-PLATAFORMA-2026-10-31.md antes de mexer na copy.
   Os três fatos de preço continuam juntos: encontro grátis, ferramentas
   abertas pra experimentar (orientação paga na ativação, desde 09/11/2026),
   parceiros com condições próprias. */
const reassurances = [
  'Encontros de conversação gratuitos, sem cadastro',
  'Ferramentas do ETT Player abertas pra experimentar',
  'Cursos e imersões oferecidos por parceiros',
]

export default function HeroSimples() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Fundo — só textura: desfocado e quase todo coberto. */}
      <div className="absolute inset-0">
        <Image
          src="/images/ETT-top01.webp"
          alt=""
          aria-hidden
          fill
          className="object-cover blur-lg scale-110 opacity-40"
          priority
          quality={70}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/92 via-surface/88 to-surface" />
        <div className="absolute inset-0 hero-grid opacity-60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center max-w-6xl mx-auto">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-red/30 bg-brand-red/10 text-brand-red text-sm font-medium mb-7"
            >
              Tecnologia, conversação e parceiros
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-ink mb-6 leading-tight"
            >
              Pratique mais inglês.{' '}
              <span className="brand-red">
                Com ferramentas, conversação e oportunidades reais.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-ink-soft max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              O <strong className="text-ink">English Talk Time</strong> reúne ferramentas
              digitais e inteligência artificial para apoiar sua prática diária, encontros de
              conversação para desenvolver sua comunicação e parceiros que oferecem cursos e
              experiências de imersão.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-5"
            >
              <a
                href="#ferramentas"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-brand-red-deep text-white font-bold text-base hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red-lg hover:-translate-y-0.5"
              >
                Conhecer as ferramentas
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#encontros"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-surface-line bg-surface-card text-ink font-semibold text-base hover:border-brand-red/40 transition-all"
              >
                Participar da conversação
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="mb-9"
            >
              <Link
                href="#como-funciona"
                className="text-sm text-ink-muted underline underline-offset-4 hover:text-brand-red transition-colors"
              >
                Como funciona o ETT
              </Link>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col gap-2 text-sm text-ink-muted items-center lg:items-start"
            >
              {reassurances.map((r) => (
                <li key={r} className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-red shrink-0" />
                  {r}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Visual — tela real do ETT Player, não foto de sala de aula */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative"
          >
            <div className="rounded-2xl border border-surface-line bg-surface-card overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-surface-alt border-b border-surface-line">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 flex-1 truncate text-xs text-ink-subtle font-mono">
                  ETT Player
                </span>
              </div>
              <Image
                src="/images/ett-player.webp"
                alt="Tela inicial do ETT Player, com as ferramentas de prática: diário de fala, encontros, flashcards, séries e audiolivro"
                width={1600}
                height={1000}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute -bottom-5 left-4 sm:left-6 right-4 sm:right-auto flex flex-wrap gap-2">
              {['Ferramentas', 'Conversação', 'Parceiros'].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-surface-card border border-surface-line text-ink-soft shadow-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
