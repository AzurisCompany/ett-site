'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CalendarDays, Clock, MapPin, Check } from 'lucide-react'
import { INSCRICAO_URL, evento, programacao, rastrearInscricao } from '@/lib/lancamento'

/* Hero da home enquanto o lançamento não acontece (até 27/10/2026, 17h15).
   Depois disso HeroHome devolve o HeroSimples sem precisar de deploy.
   Regras de copy da home continuam valendo: fato concreto (data, lugar,
   quem fala) no lugar de promessa; nada de "últimas vagas" ou contagem
   regressiva — os 60 lugares são informação, não pressão. */
const garantias = [
  'Entrada gratuita',
  `${evento.vagas} lugares abertos ao público`,
  'Inscritos no DSSBR também estão convidados',
]

export default function HeroLancamento() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
    >
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

      <div className="relative z-10 container mx-auto px-4 pt-28 pb-16">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          {/* Chamada */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-red/30 bg-brand-red/10 text-brand-red text-sm font-medium mb-7"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red-deep opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red-deep" />
              </span>
              Lançamento oficial · DSSBR 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink mb-6 leading-tight"
            >
              Uma tarde sobre <span className="brand-red">destravar o inglês</span>. De graça, em
              Curitiba.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-ink-soft max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              O <strong className="text-ink">English Talk Time</strong> é lançado no dia{' '}
              <strong className="text-ink">27 de outubro</strong>, no auditório do IEP. Cinco
              conversas sobre por que a gente trava pra falar inglês e o que ajuda a destravar — com
              a apresentação da plataforma do ETT e sorteio de prêmios no fim.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-7"
            >
              <a
                href={INSCRICAO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => rastrearInscricao('hero')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-brand-red-deep text-white font-bold text-lg hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red-lg hover:-translate-y-0.5"
              >
                Quero minha vaga gratuita
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <Link
                href="#lancamento"
                className="inline-flex items-center justify-center px-6 py-4 rounded-lg border border-surface-line text-ink-soft font-semibold hover:border-brand-red/40 hover:text-ink transition-all"
              >
                Ver a programação
              </Link>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-2 text-sm text-ink-muted"
            >
              {garantias.map((g) => (
                <li key={g} className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-brand-red shrink-0" />
                  {g}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Cartão do evento */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="tema-escuro bg-surface border border-surface-line rounded-3xl overflow-hidden shadow-2xl max-w-md w-full mx-auto"
          >
            <div className="h-1 bg-brand-red-deep" />
            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-5 mb-6">
                <div className="shrink-0 w-20 rounded-2xl bg-brand-red-deep text-white text-center py-2.5">
                  <p className="text-xs font-bold tracking-widest">{evento.mes}</p>
                  <p className="text-4xl font-bold leading-none">{evento.dia}</p>
                  <p className="text-xs font-medium mt-1">{evento.diaSemana}</p>
                </div>
                <ul className="space-y-2 text-sm text-ink-soft">
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-red shrink-0" />
                    {evento.horario}
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    {evento.local} · Curitiba
                  </li>
                  <li className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-brand-red shrink-0" />
                    Dentro do DSSBR 2026
                  </li>
                </ul>
              </div>

              <p className="text-xs font-bold uppercase tracking-wide text-ink-muted mb-3">
                Quem fala
              </p>
              <ul className="space-y-2.5">
                {programacao.map((p) => (
                  <li key={p.nome} className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 bg-white border border-surface-line">
                      <Image
                        src={p.foto ?? p.logo!}
                        alt={p.foto ? p.nome : p.org}
                        fill
                        sizes="40px"
                        className={p.foto ? 'object-cover' : 'object-contain p-1.5'}
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-ink leading-tight">{p.nome}</p>
                      <p className="text-xs text-ink-muted truncate">{p.org}</p>
                    </div>
                    <span className="ml-auto text-xs font-bold text-brand-red">{p.hora}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <p className="text-center text-sm text-ink-muted mt-12">
          Não está em Curitiba? O{' '}
          <Link href="#encontros" className="text-ink-soft underline underline-offset-4 hover:text-brand-red">
            encontro online de segunda, às 20h
          </Link>{' '}
          continua aberto toda semana, sem cadastro.
        </p>
      </div>
    </section>
  )
}
