'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { parceirosPorCategoria, AVISO_PARCEIROS } from '@/lib/parceiros'

/* Ordem de exibição = ordem das categorias; cada cartão carrega a sua. */
const cartoes = parceirosPorCategoria.flatMap((c) =>
  c.parceiros.map((p) => ({ ...p, categoriaTitulo: c.titulo }))
)

/* Parceiros separados por categoria, com "Oferecido por" × "Apoio do ETT".
   É o que desfaz a leitura de que o ETT ministra os cursos e as imersões
   (PLANO-REPOSICIONAMENTO-PLATAFORMA-2026-10-31.md, §8). Dados em
   lib/parceiros.ts. O id existe porque o rodapé e o hero apontam pra
   `/#parceiros`. */
export default function ParceirosFaixa() {
  return (
    <section id="parceiros" className="section-padding bg-surface-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-silver/30 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4 leading-tight">
            Uma plataforma que complementa{' '}
            <span className="brand-red">diferentes caminhos de aprendizado</span>
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed">
            O ETT conecta recursos digitais, encontros de conversação e oportunidades de
            parceiros. {AVISO_PARCEIROS}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartoes.map((p, i) => {
            const externo = p.url?.startsWith('http')
            const institucional = p.categoria === 'institucional'
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="bg-surface-card border border-surface-line rounded-2xl p-6 flex flex-col"
              >
                <span className="self-start px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wide bg-surface-alt border border-surface-line text-ink-muted mb-4">
                  {p.categoriaTitulo}
                </span>
                <div className="flex items-center gap-3 mb-4">
                  {p.logo ? (
                    <div className="relative w-12 h-12 rounded-xl bg-surface-card border border-surface-line overflow-hidden shrink-0">
                      <Image src={p.logo} alt={`Logo ${p.nome}`} fill className="object-contain p-1.5" sizes="48px" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-sm">
                        {p.nome.split(/[\s&]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('')}
                      </span>
                    </div>
                  )}
                  <h3 className="font-bold text-ink text-lg leading-tight">{p.nome}</h3>
                </div>

                <dl className="space-y-3 text-sm flex-1">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-subtle mb-0.5">
                      {institucional ? 'Quem é' : `Oferecido por ${p.nome}`}
                    </dt>
                    <dd className="text-ink-soft leading-relaxed">{p.oferece}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-brand-red mb-0.5">
                      Apoio do ETT
                    </dt>
                    <dd className="text-ink-muted leading-relaxed">{p.apoioEtt}</dd>
                  </div>
                </dl>

                {p.url && (
                  <a
                    href={p.url}
                    {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft hover:text-brand-red transition-colors self-start"
                  >
                    {externo ? `Conhecer ${p.nome}` : 'Saber mais'}
                    {externo ? <ArrowUpRight className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>

        <p className="text-center mt-10">
          <Link
            href="/imersoes/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:gap-3 transition-all"
          >
            Ver as imersões oferecidas pelos parceiros
            <ArrowRight className="w-4 h-4" />
          </Link>
        </p>
      </div>
    </section>
  )
}
