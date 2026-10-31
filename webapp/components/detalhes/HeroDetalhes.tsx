'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { ferramentasDisponiveis } from '@/lib/ferramentas'

/* Hero de /detalhes/ — só esta página usa. Desde 31/10/2026 o título deixou de
   ser "Do inglês travado ao inglês funcional" (promessa de resultado) e as
   métricas de 300h/3.000 palavras saíram do topo: viraram metas de referência,
   com aviso, mais abaixo (Results.tsx). */
const fatos = [
  'Encontros de conversação gratuitos, toda semana',
  `${ferramentasDisponiveis.length} ferramentas de prática no ar`,
  'Parceiros de ensino, imersão, conteúdo e carreira',
]

export default function HeroDetalhes() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/ETT-top01.webp"
          alt=""
          aria-hidden
          fill
          className="object-cover blur-lg scale-110 opacity-30"
          priority
          quality={70}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/92 via-surface/90 to-surface" />
        <div className="absolute inset-0 hero-grid opacity-50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-red/30 bg-brand-red/10 text-brand-red text-sm font-medium mb-8"
        >
          English Talk Time em detalhes
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink mb-6 leading-tight max-w-4xl mx-auto"
        >
          Como o ETT ajuda você a <span className="brand-red">acelerar sua prática</span> de
          inglês
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-ink-soft max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Uma combinação de ferramentas, rotina, conversação e experiências complementares para
          apoiar quem deseja desenvolver o uso do idioma. Você combina os recursos conforme seus
          objetivos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
        >
          <a
            href="#ferramentas"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-brand-red-deep text-white font-bold text-base hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red-lg"
          >
            Ver as ferramentas
          </a>
          <Link
            href="/#encontros"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-surface-line bg-surface-card text-ink font-semibold text-base hover:border-brand-red/40 transition-all"
          >
            Participar de um encontro
          </Link>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-muted"
        >
          {fatos.map((f) => (
            <li key={f} className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-brand-red" />
              {f}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
