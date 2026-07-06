'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  ArrowUpRight,
  MessageSquare,
  Layers,
  Film,
  Headphones,
  BarChart3,
  Sparkles,
  Check,
} from 'lucide-react'

const PLAYER_URL = 'https://ett-player.vercel.app/'

const modules = [
  { icon: MessageSquare, label: 'Speak', desc: 'Conversa guiada com correção na hora' },
  { icon: Layers, label: 'Flashcards', desc: 'Vocabulário com repetição espaçada' },
  { icon: Film, label: 'Legendas & Séries', desc: 'Estudo por episódio, palavra a palavra' },
  { icon: Headphones, label: 'AudioBook & Rádio', desc: 'Escuta contínua em inglês real' },
  { icon: BarChart3, label: 'Level Check & Learning DNA', desc: 'Diagnóstico do seu nível e estilo' },
  { icon: Sparkles, label: 'Voice Agent Lab', desc: 'Prática de fala com IA' },
]

export default function PlayerShowcase() {
  return (
    <section id="player" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />

      {/* Background glow */}
      <div
        className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #00BFFF 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green" />
            </span>
            As ferramentas já estão no ar
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Não é promessa. É o{' '}
            <span className="gradient-text">ETT Player</span> — e já está funcionando.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Todas as ferramentas com IA reunidas em um só lugar. Metodologia, conversação,
            flashcards, séries, audiobook e simulação com IA — o app lembra exatamente
            onde você parou e continua de lá.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Screenshot in a browser frame */}
          <motion.a
            href={PLAYER_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="group block rounded-2xl border border-dark-border bg-dark-card overflow-hidden shadow-2xl hover:border-neon-green/40 hover:shadow-neon-green transition-all"
          >
            {/* Fake browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-dark-secondary border-b border-dark-border">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 flex-1 truncate text-xs text-gray-500 font-mono">
                ett-player.vercel.app
              </span>
              <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-neon-green transition-colors" />
            </div>
            <Image
              src="/images/ett-player.webp"
              alt="ETT Player — app com as ferramentas de inglês com IA: Fórmula Fluente, Meet, Speak e Daily"
              width={1600}
              height={1000}
              className="w-full h-auto"
            />
          </motion.a>

          {/* Modules + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {modules.map((mod) => (
                <div key={mod.label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center flex-shrink-0">
                    <mod.icon className="w-4 h-4 text-neon-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{mod.label}</div>
                    <div className="text-gray-500 text-xs leading-snug">{mod.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-neon-green/20 bg-dark-card p-6">
              <p className="flex items-start gap-2 text-gray-300 text-sm mb-5">
                <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                <span>
                  <strong className="text-white">Acesso gratuito</strong> pra quem participa do
                  programa. Cadastre-se para receber seu login e um{' '}
                  <strong className="text-white">plano de estudos personalizado</strong> ao seu nível.
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={PLAYER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-neon-green text-black font-bold text-sm hover:bg-neon-green/90 transition-all hover:shadow-neon-green-lg hover:-translate-y-0.5"
                >
                  Explorar o ETT Player
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="#inscricao"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-tech-blue/50 text-tech-blue font-bold text-sm hover:bg-tech-blue/10 hover:border-tech-blue transition-all"
                >
                  Quero meu acesso grátis
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
