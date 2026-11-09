'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'
import { useImersoesSeparadas } from '@/lib/useImersoes'

/* Teaser de /detalhes/. Lê lib/imersoes.ts e mostra só turmas futuras,
   calculadas no navegador — a versão anterior tinha as datas à mão e
   anunciava Curitiba (jul/2026) como "1ª edição" meses depois. */
export default function ImersoesTeaser() {
  const sep = useImersoesSeparadas()

  return (
    <section className="section-padding bg-surface border-y border-surface-line">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-4">
            Oferecidas pela Cherry Top
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-ink mb-4 leading-tight">
            Imersões de <span className="gradient-text">parceiros</span>
          </h2>
          <p className="text-ink-muted text-lg">
            Experiências intensivas no Brasil e nos Estados Unidos, com programa, preço e
            condições da Cherry Top. O ETT divulga e complementa com ferramentas e encontros.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {sep === null
            ? Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="h-44 rounded-2xl bg-surface-card border border-surface-line animate-pulse" />
              ))
            : sep.atuais.map((im) => (
                <Link
                  key={im.id}
                  href={im.detalheUrl}
                  className="block bg-surface-card border border-surface-line hover:border-brand-red/40 rounded-2xl p-6 transition-all card-hover"
                >
                  <div className="flex items-center gap-1.5 text-ink-muted text-xs mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    {im.cidade}, {im.uf}
                  </div>
                  <h3 className="text-2xl font-bold text-ink mb-1">{im.titulo ?? im.cidade}</h3>
                  <p className="text-xs text-ink-subtle mb-3">Oferecido por {im.oferecidoPor}</p>
                  <div className="flex items-start gap-2 text-sm text-ink-soft">
                    <Calendar className="w-4 h-4 shrink-0 mt-0.5 text-brand-red" />
                    <div>
                      {im.turmas.map((t) => (
                        <div key={t.inicio}>{t.rotulo}</div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5 pt-5 border-t border-surface-line inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red">
                    Ver detalhes <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/imersoes/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-red-deep text-white font-bold text-base hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red"
          >
            Ver todas as imersões
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
