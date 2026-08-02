'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

/* O encontro é gratuito; o programa (ferramentas, mentoria, material) é pago.
   Os dois fatos andam sempre juntos — ver PLANO-REVISAO-MARKETING-2026-08-01.md. */
const reassurances = [
  'Entrar no encontro é grátis — sem cadastro e sem cartão',
  'Online toda segunda + IEP Talks sábados em Curitiba',
  'Do básico-intermediário (A2) em diante',
]

export default function HeroSimples() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
    >
      {/* Fundo — a arte original tem slogans impressos ("Programa de Aceleração
          de Inglês", "Job Interview"...) que brigavam com o título. Fica só como
          textura: desfocada e bem escurecida. Trocar por foto real de encontro
          quando tivermos uma. */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-dark/92 via-dark/88 to-dark" />
        <div className="absolute inset-0 hero-grid opacity-60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-24 pb-16">
        {/* Selo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/10 text-neon-green text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green" />
          </span>
          Grupo aberto e gratuito · Toda segunda, 20h
        </motion.div>

        {/* Título — a promessa concreta, não a promessa de carreira */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto"
        >
          Um grupo pra você{' '}
          <span className="neon-green">falar inglês</span>
          <br className="hidden sm:block" /> toda semana.
        </motion.h1>

        {/* Subtítulo — o que é, quando, onde, quanto custa */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          O <strong className="text-white">English Talk Time</strong> é um grupo de conversação:
          encontro <strong className="text-white">online toda segunda às 20h</strong> e encontros{' '}
          <strong className="text-white">presenciais em Curitiba</strong>. Você entra, conversa e
          treina a fala com um roteiro que puxa a palavra de todo mundo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="text-base text-gray-400 max-w-2xl mx-auto mb-10"
        >
          <strong className="text-gray-300">Participar dos encontros é gratuito e vai continuar
          sendo.</strong> Quem quiser as ferramentas, o material e a mentoria individual entre um
          encontro e outro entra no programa —{' '}
          <Link href="#precos" className="text-gray-300 underline underline-offset-4 hover:text-neon-green transition-colors">
            veja os planos
          </Link>
          .
        </motion.p>

        {/* Tranquilizadores */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-gray-400"
        >
          {reassurances.map((r) => (
            <li key={r} className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-neon-green shrink-0" />
              {r}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
