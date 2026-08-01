'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowLeft, PlayCircle, Info } from 'lucide-react'
import type { DetalhePlano } from '@/lib/planos'

export default function PlanoDetalhe({ plano }: { plano: DetalhePlano }) {
  return (
    <>
      {/* Cabeçalho */}
      <section className="pt-32 pb-12 bg-dark">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/#precos"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-neon-green transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Todas as opções
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
              {plano.etiqueta}
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              {plano.nome}
            </h1>

            <div className="flex items-baseline gap-3 flex-wrap mb-3">
              {plano.precoAncora && (
                <span className="text-gray-600 text-lg line-through">{plano.precoAncora}</span>
              )}
              <span className="text-4xl font-black text-neon-green">{plano.preco}</span>
              {plano.precoNota && (
                <span className="text-gray-500 text-sm">{plano.precoNota}</span>
              )}
            </div>

            {plano.destaqueFrase && (
              <p className="text-white font-semibold text-lg mb-4">{plano.destaqueFrase}</p>
            )}

            <p className="text-gray-400 text-lg leading-relaxed">{plano.intro}</p>
          </motion.div>
        </div>
      </section>

      {/* Espaço do vídeo — trocar o placeholder pelo embed quando gravar */}
      <section className="pb-14 bg-dark">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="aspect-video w-full rounded-2xl border border-dark-border bg-dark-card flex flex-col items-center justify-center text-center px-6">
            <PlayCircle className="w-12 h-12 text-gray-700 mb-4" />
            <p className="text-gray-400 font-semibold">{plano.videoTitulo}</p>
            <p className="text-gray-600 text-sm mt-1">Vídeo em breve</p>
          </div>
        </div>
      </section>

      {/* Explicação */}
      <section className="section-padding bg-dark-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/25 to-transparent" />
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-10">
            {plano.blocos.map((b, i) => (
              <motion.div
                key={b.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  {b.titulo}
                </h2>
                <p className="text-gray-400 leading-relaxed">{b.texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* O que está incluso */}
      <section className="section-padding bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/25 to-transparent" />
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-white mb-6">O que está incluso</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {plano.inclui.map((i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-gray-300 rounded-xl border border-dark-border bg-dark-card px-4 py-3"
              >
                <Check className="w-4 h-4 shrink-0 mt-0.5 text-neon-green" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-dark-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/25 to-transparent" />
        <div className="container mx-auto px-4 max-w-2xl text-center">
          {plano.ctaNota && (
            <div className="flex items-start gap-3 text-left rounded-2xl border border-tech-blue/25 bg-tech-blue/5 px-5 py-4 mb-6">
              <Info className="w-5 h-5 text-tech-blue shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300 leading-relaxed">{plano.ctaNota}</p>
            </div>
          )}

          <Link
            href={plano.ctaHref}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-neon-green text-black font-bold hover:bg-neon-green/90 transition-all hover:shadow-neon-green-lg"
          >
            {plano.ctaLabel}
          </Link>

          <p className="text-gray-500 text-xs leading-relaxed mt-6">{plano.observacao}</p>

          <Link
            href="/#precos"
            className="inline-block mt-6 text-sm font-semibold text-neon-green hover:underline"
          >
            Comparar com as outras opções
          </Link>
        </div>
      </section>
    </>
  )
}
