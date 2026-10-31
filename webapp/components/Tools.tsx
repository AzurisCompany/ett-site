'use client'

import { motion } from 'framer-motion'
import { Hammer } from 'lucide-react'
import {
  ferramentas,
  ferramentasDisponiveis,
  emConstrucao,
  rotuloGrupo,
  rotuloStatus,
  type StatusFerramenta,
} from '@/lib/ferramentas'
import { cn } from '@/lib/utils'

/* Ferramentas em /detalhes/ — versão completa (com exemplo de uso).
   Dados em lib/ferramentas.ts, espelho do ETT Player. Até 31/10/2026 esta
   lista anunciava Diário, AI Prompt, Sistema de Recomendação e GameZone como
   prontos; agora eles aparecem só pelo nome, em "Em construção". */

const estiloStatus: Record<StatusFerramenta, string> = {
  disponivel: 'bg-brand-red/10 text-brand-red border-brand-red/25',
  poc: 'bg-brand-silver/10 text-brand-silver border-brand-silver/30',
  'em-breve': 'bg-surface-alt text-ink-subtle border-surface-line',
}

export default function Tools() {
  return (
    <section id="ferramentas" className="section-padding bg-surface-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-silver/30 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-4">
            Ferramentas · {ferramentasDisponiveis.length} no ar
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-6">
            As ferramentas, uma a uma
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed">
            Cada uma cuida de um pedaço da prática: diagnóstico, rotina, vocabulário, escuta e
            fala. Juntas, ajudam a manter contato frequente com o idioma — no seu ritmo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {ferramentas.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className={cn(
                'bg-surface-card border border-surface-line rounded-2xl p-5 flex flex-col',
                f.status !== 'disponivel' && 'border-dashed'
              )}
            >
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="font-bold text-ink text-base">{f.nome}</h3>
                <span
                  className={cn(
                    'shrink-0 px-2 py-0.5 rounded-full text-[11px] font-semibold border',
                    estiloStatus[f.status]
                  )}
                >
                  {rotuloStatus[f.status]}
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-silver mb-3">
                {rotuloGrupo[f.grupo]}
              </p>
              <p className="text-sm font-medium text-ink-soft mb-1.5">{f.finalidade}</p>
              <p className="text-sm text-ink-muted leading-relaxed flex-1">{f.oQueFaz}</p>
              {f.status !== 'em-breve' && (
                <p className="text-xs text-ink-subtle mt-3 pt-3 border-t border-surface-line leading-relaxed">
                  <span className="font-semibold text-ink-muted">Na prática:</span> {f.exemplo}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-subtle">
          <span className="inline-flex items-center gap-1.5 font-semibold text-ink-muted">
            <Hammer className="w-4 h-4" />
            Em construção:
          </span>
          {emConstrucao.join(' · ')}
        </div>

        <div className="text-center mt-10">
          <a
            href="#player"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-brand-red-deep text-white font-bold text-base hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red-lg"
          >
            Ver o ETT Player
          </a>
        </div>
      </div>
    </section>
  )
}
