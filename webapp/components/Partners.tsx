'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { parceirosPorCategoria, AVISO_PARCEIROS } from '@/lib/parceiros'

/* Parceiros em /detalhes/ — agrupados por categoria (lib/parceiros.ts).
   Até 31/10/2026 era "um ecossistema completo de especialistas", sem
   separação, com promessas de terceiros ("vagas no exterior em 30–45 dias",
   "salários 5x") e UTFPR/Hard Rock/Habitat — tudo isso saiu. */
export default function Partners() {
  return (
    <section id="parceiros" className="section-padding bg-surface-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-silver/30 text-brand-silver bg-brand-silver/5 mb-4">
            Parceiros
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-6">
            Quem oferece o quê
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed">
            O ETT conecta você a parceiros de ensino, imersão, conteúdo e carreira.{' '}
            {AVISO_PARCEIROS}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-10">
          {parceirosPorCategoria.map((cat) => (
            <div key={cat.id}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4 pb-2 border-b border-surface-line">
                <h3 className="text-sm font-bold uppercase tracking-widest text-ink">{cat.titulo}</h3>
                <span className="text-sm text-ink-subtle">{cat.descricao}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {cat.parceiros.map((p) => {
                  const externo = p.url?.startsWith('http')
                  const institucional = p.categoria === 'institucional'
                  return (
                    <div
                      key={p.id}
                      className="bg-surface-card border border-surface-line rounded-2xl p-6 flex gap-4"
                    >
                      {p.logo ? (
                        <div className="relative w-14 h-14 rounded-xl bg-surface-card border border-surface-line overflow-hidden shrink-0">
                          <Image src={p.logo} alt={`Logo ${p.nome}`} fill className="object-contain p-1.5" sizes="56px" />
                        </div>
                      ) : (
                        <div className="w-14 h-14 rounded-xl bg-brand-navy flex items-center justify-center shrink-0">
                          <span className="text-white font-bold text-sm">
                            {p.nome.split(/[\s&]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('')}
                          </span>
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-ink text-lg mb-2">{p.nome}</h4>
                        <p className="text-sm text-ink-soft leading-relaxed mb-2">
                          <span className="font-semibold text-ink-subtle">
                            {institucional ? 'Quem é: ' : 'Oferece: '}
                          </span>
                          {p.oferece}
                        </p>
                        <p className="text-sm text-ink-muted leading-relaxed">
                          <span className="font-semibold text-brand-red">Apoio do ETT: </span>
                          {p.apoioEtt}
                        </p>
                        {p.url && (
                          <a
                            href={p.url}
                            {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft hover:text-brand-red transition-colors"
                          >
                            {externo ? `Conhecer ${p.nome}` : 'Saber mais'}
                            {externo ? <ArrowUpRight className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                          </a>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
