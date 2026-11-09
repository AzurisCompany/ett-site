'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Hammer } from 'lucide-react'
import {
  ferramentas,
  ferramentasDisponiveis,
  emConstrucao,
  rotuloGrupo,
  rotuloStatus,
  PLAYER_URL,
  telaFerramenta,
  type GrupoFerramenta,
  type StatusFerramenta,
} from '@/lib/ferramentas'
import { idsComPagina } from '@/lib/ferramentas-paginas'
import { cn } from '@/lib/utils'

/* As ferramentas são o centro da proposta, não acessório de curso
   (PLANO-REPOSICIONAMENTO-PLATAFORMA-2026-10-31.md, §6). Tudo vem de
   lib/ferramentas.ts, que espelha o ETT Player em produção — não escrever
   ferramenta à mão aqui. CTA primário = ativação acompanhada (/planos/adesao/); Player = secundário
   (decisão #3 de 01/08). */

const ordemGrupos: GrupoFerramenta[] = ['organizar', 'vocabulario', 'escuta', 'fala', 'comunidade']

const estiloStatus: Record<StatusFerramenta, string> = {
  disponivel: 'bg-brand-red/10 text-brand-red border-brand-red/25',
  poc: 'bg-brand-silver/10 text-brand-silver border-brand-silver/30',
  'em-breve': 'bg-surface-alt text-ink-subtle border-surface-line',
}

export default function FerramentasResumo() {
  return (
    <section id="ferramentas" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/25 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-5">
            ETT Player · {ferramentasDisponiveis.length} ferramentas no ar
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-5 leading-tight">
            Ferramentas para praticar <span className="brand-red">no seu ritmo</span>
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed">
            Use ferramentas para praticar vocabulário, escuta, pronúncia e comunicação no seu
            próprio ritmo. Estão todas reunidas no{' '}
            <strong className="text-ink">ETT Player</strong>.{' '}
            <Link href="/ferramentas/" className="text-brand-red font-semibold hover:underline">
              Veja cada uma em detalhe
            </Link>
            .
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-10">
          {ordemGrupos.map((g) => {
            const doGrupo = ferramentas.filter((f) => f.grupo === g)
            return (
              <div key={g}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-subtle mb-4">
                  {rotuloGrupo[g]}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {doGrupo.map((f, i) => (
                    <motion.div
                      key={f.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className={cn(
                        'bg-surface-card border border-surface-line rounded-2xl p-5 flex flex-col overflow-hidden',
                        f.status !== 'disponivel' && 'border-dashed'
                      )}
                    >
                      {telaFerramenta[f.id] && (
                        <div className="-mx-5 -mt-5 mb-4 aspect-[16/10] overflow-hidden border-b border-surface-line bg-surface-alt">
                          <Image
                            src={telaFerramenta[f.id]!}
                            alt={`Tela do ETT ${f.nome}`}
                            width={900}
                            height={562}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      )}
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="font-bold text-ink text-base">{f.nome}</h4>
                        <span
                          className={cn(
                            'shrink-0 px-2 py-0.5 rounded-full text-[11px] font-semibold border',
                            estiloStatus[f.status]
                          )}
                        >
                          {rotuloStatus[f.status]}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-ink-soft mb-1.5">{f.finalidade}</p>
                      <p className="text-sm text-ink-muted leading-relaxed flex-1">{f.oQueFaz}</p>
                      {f.status !== 'em-breve' && (
                        <p className="text-xs text-ink-subtle mt-3 pt-3 border-t border-surface-line leading-relaxed">
                          <span className="font-semibold text-ink-muted">Na prática:</span>{' '}
                          {f.exemplo}
                        </p>
                      )}
                      {idsComPagina.has(f.id) && (
                        <Link
                          href={`/ferramentas/${f.id}/`}
                          className="mt-3 text-sm font-semibold text-brand-red hover:underline inline-flex items-center gap-1"
                        >
                          Ver como funciona
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Em construção — só o nome (decisão de 31/10/2026) */}
        <div className="max-w-6xl mx-auto mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-subtle">
          <span className="inline-flex items-center gap-1.5 font-semibold text-ink-muted">
            <Hammer className="w-4 h-4" />
            Em construção:
          </span>
          {emConstrucao.join(' · ')}
        </div>

        <p className="max-w-6xl mx-auto mt-3 text-xs text-ink-subtle">
          Algumas ferramentas estão em versão beta e podem mudar enquanto melhoram.
        </p>

        <div className="max-w-6xl mx-auto mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/planos/adesao/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-red-deep text-white font-bold text-sm hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red-lg hover:-translate-y-0.5"
          >
            Começar na plataforma
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={PLAYER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-surface-line text-ink-soft font-semibold text-sm hover:border-brand-red/40 hover:text-ink transition-all"
          >
            Abrir o ETT Player
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
