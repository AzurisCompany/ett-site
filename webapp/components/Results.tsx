'use client'

import { motion } from 'framer-motion'
import { Clock, BookOpen, Target, Info } from 'lucide-react'

/* /detalhes/ — "metas de referência". Até 31/10/2026 esta seção se chamava
   "Números que mostram por que o método funciona" e trazia "10 palavras por
   dia = fluência", "salários até 5x maiores" e uma gamificação (ranking,
   jackpot) que não existe no Player. Os números que ficaram são metas de
   ORGANIZAÇÃO da rotina, sempre com o aviso de que não são garantia. */
const metas = [
  {
    icon: Clock,
    valor: '~1h por dia',
    titulo: 'Rotina sugerida',
    texto: 'Em blocos curtos, ao longo do dia. É uma sugestão pra manter constância — ajuste ao seu tempo.',
  },
  {
    icon: BookOpen,
    valor: '10 a 20 palavras',
    titulo: 'Vocabulário novo por dia',
    texto: 'Um ritmo comum na Fórmula Fluente, com revisão das palavras difíceis. Serve pra organizar, não pra prometer prazo.',
  },
  {
    icon: Target,
    valor: '3.000 palavras',
    titulo: 'Horizonte de vocabulário',
    texto: 'As listas de alta frequência (Longman 3000, Oxford 5000) que o Level Check usa como referência pra mostrar sua evolução.',
  },
]

export default function Results() {
  return (
    <section id="metas" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-4">
            Metas de referência
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-6">
            Defina metas de prática e{' '}
            <span className="gradient-text">acompanhe sua evolução</span>
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed">
            Estes números ajudam a organizar a rotina. Cada pessoa avança no próprio ritmo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-8">
          {metas.map((m, i) => (
            <motion.div
              key={m.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface-card border border-surface-line rounded-2xl p-6"
            >
              <m.icon className="w-5 h-5 text-brand-red mb-4" />
              <div className="text-3xl font-black text-ink mb-1">{m.valor}</div>
              <div className="font-bold text-ink-soft text-sm mb-2">{m.titulo}</div>
              <p className="text-ink-muted text-sm leading-relaxed">{m.texto}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto flex items-start gap-3 rounded-2xl border border-brand-silver/30 bg-brand-silver/5 px-5 py-4">
          <Info className="w-5 h-5 text-brand-silver shrink-0 mt-0.5" />
          <p className="text-sm text-ink-soft leading-relaxed">
            <strong className="text-ink">Não são resultados garantidos.</strong> O ETT não promete
            fluência em prazo nenhum. O que as ferramentas fazem é registrar sua prática — palavras
            revisadas, episódios, conversas — pra você ver a evolução ao longo do tempo.
          </p>
        </div>
      </div>
    </section>
  )
}
