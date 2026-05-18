'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'

const imersoes = [
  {
    city: 'Curitiba',
    uf: 'PR',
    when: '29/jul — 02/ago 2026',
    detail: '5 dias presenciais · 1ª edição local',
    href: '/imersoes/curitiba/',
    badge: '1ª EDIÇÃO',
    accent: 'neon-green',
  },
  {
    city: 'Belo Horizonte',
    uf: 'MG',
    when: 'Set · Out · Nov 2026',
    detail: '3 turmas · 5 dias · hospedagem inclusa',
    href: '/imersoes/belo-horizonte/',
    accent: 'tech-blue',
  },
  {
    city: 'Flórida',
    uf: 'EUA',
    when: 'Jan / Fev 2027',
    detail: '18 ou 30+ dias · resort completo',
    href: '/imersoes/florida/',
    accent: 'purple',
  },
]

const accentMap = {
  'neon-green': 'border-neon-green/30 hover:border-neon-green/60 text-neon-green',
  'tech-blue': 'border-tech-blue/30 hover:border-tech-blue/60 text-tech-blue',
  purple: 'border-purple-400/30 hover:border-purple-400/60 text-purple-300',
}

export default function ImersoesTeaser() {
  return (
    <section className="section-padding bg-dark-secondary border-y border-dark-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
            Imersões 2026/2027 · em parceria com Cherry Top
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Acelere com uma{' '}
            <span className="gradient-text">imersão presencial</span>
          </h2>
          <p className="text-gray-400 text-lg">
            5 dias no Brasil ou até 30 dias na Flórida — treino intensivo de fala em
            inglês com a metodologia <strong className="text-white">Bonding +
            Native-like</strong> da Cherry Top (40+ anos formando profissionais
            fluentes).
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {imersoes.map((im, i) => (
            <motion.div
              key={im.city}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={im.href}
                className={`block bg-dark-card border rounded-2xl p-6 transition-all card-hover ${accentMap[im.accent as keyof typeof accentMap]}`}
              >
                {im.badge && (
                  <span className="inline-block mb-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-neon-green text-dark">
                    {im.badge}
                  </span>
                )}
                <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  {im.city}, {im.uf}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{im.city}</h3>
                <div className="flex items-start gap-2 mb-2 text-sm">
                  <Calendar className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">{im.when}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{im.detail}</div>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t border-dark-border inline-flex items-center gap-1.5 text-sm font-semibold">
                  Ver detalhes <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/imersoes/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neon-green text-dark font-bold text-base hover:bg-neon-green/90 transition-all hover:shadow-neon-green"
          >
            Ver todas as imersões
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
