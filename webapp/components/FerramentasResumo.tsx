'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MessageSquare, Layers, Film, Headphones } from 'lucide-react'

const PLAYER_URL = 'https://ett-player.vercel.app/'

const modulos = [
  { icon: MessageSquare, label: 'Treino de fala com IA' },
  { icon: Layers, label: 'Flashcards de vocabulário' },
  { icon: Film, label: 'Séries com legenda' },
  { icon: Headphones, label: 'Audiobook e rádio' },
]

export default function FerramentasResumo() {
  return (
    <section id="ferramentas" className="section-padding bg-dark-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/25 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-5">
              Já está no ar
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              E entre um encontro e outro,
              <br />
              você tem as ferramentas.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              O <strong className="text-white">ETT Player</strong> reúne o material de apoio dos
              participantes num app só. Não é promessa de roadmap — está funcionando, você pode
              abrir agora e ver.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {modulos.map((m) => (
                <li key={m.label} className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-9 h-9 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center shrink-0">
                    <m.icon className="w-4 h-4 text-neon-green" />
                  </span>
                  {m.label}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={PLAYER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-neon-green text-black font-bold text-sm hover:bg-neon-green/90 transition-all hover:shadow-neon-green-lg hover:-translate-y-0.5"
              >
                Abrir o ETT Player
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/detalhes/#ferramentas"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-dark-border text-gray-300 font-semibold text-sm hover:border-neon-green/40 hover:text-white transition-all"
              >
                Ver todas as ferramentas
              </Link>
            </div>
          </motion.div>

          {/* Screenshot */}
          <motion.a
            href={PLAYER_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group block rounded-2xl border border-dark-border bg-dark-card overflow-hidden shadow-2xl hover:border-neon-green/40 transition-all"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-dark border-b border-dark-border">
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
              alt="ETT Player — app com as ferramentas de apoio dos participantes do ETT"
              width={1600}
              height={1000}
              className="w-full h-auto"
            />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
