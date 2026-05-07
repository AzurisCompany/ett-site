'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Zap, ChevronDown, Cpu, Globe, TrendingUp, Clock } from 'lucide-react'

const stats = [
  { value: '300h', label: 'de contato estruturado', icon: Clock },
  { value: '3.000', label: 'palavras para fluência', icon: TrendingUp },
  { value: '1h/dia', label: 'de imersão diária', icon: Cpu },
  { value: '5+', label: 'parceiros especializados', icon: Globe },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/ETT-top01.png"
          alt="ETT Background"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/85 via-dark/75 to-dark" />
        {/* Grid pattern */}
        <div className="absolute inset-0 hero-grid opacity-60" />
        {/* Side vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/60" />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,255,157,0.12) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,191,255,0.12) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/10 text-neon-green text-sm font-medium mb-8"
        >
          <Zap className="w-4 h-4" />
          <span>+365 mil alunos já acelerados com a Fórmula Fluente</span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto"
        >
          Do inglês{' '}
          <span className="neon-green">travado</span>{' '}
          ao inglês{' '}
          <span className="neon-blue">funcional</span>{' '}
          <br className="hidden md:block" />
          para o mercado internacional
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Programa de aceleração criado pelo ecossistema{' '}
          <span className="text-white font-semibold">DSSBR & GUBigData IA</span>{' '}
          para profissionais de{' '}
          <span className="text-tech-blue font-medium">Tecnologia, Dados, IA e BI</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link
            href="#inscricao"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-neon-green text-black font-bold text-base sm:text-lg hover:bg-neon-green/90 transition-all hover:shadow-neon-green-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Quero participar do próximo encontro gratuito
          </Link>
          <Link
            href="#ferramentas"
            className="w-full sm:w-auto px-8 py-4 rounded-lg border border-tech-blue/50 text-tech-blue font-bold text-base sm:text-lg hover:bg-tech-blue/10 hover:border-tech-blue transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Ver as ferramentas com IA
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              className="flex flex-col items-center gap-1 px-4 py-3 rounded-xl bg-dark-card/80 border border-dark-border backdrop-blur-sm"
            >
              <stat.icon className="w-4 h-4 text-neon-green mb-1" />
              <span className="text-xl font-bold text-neon-green">{stat.value}</span>
              <span className="text-xs text-gray-400 text-center">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-1"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  )
}
