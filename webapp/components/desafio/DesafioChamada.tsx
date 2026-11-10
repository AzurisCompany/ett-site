import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { DESAFIO_WHATSAPP } from '@/lib/desafio'

/* Chamada do Desafio de 7 dias na home (desde 09/11/2026). Gratuito; leva ao
   WhatsApp do Miguel com a mensagem pronta e à página /desafio/. */
export default function DesafioChamada() {
  return (
    <section className="py-12 bg-surface">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="rounded-3xl border border-brand-red/30 bg-gradient-to-br from-brand-red/10 via-surface-card to-brand-silver/10 p-7 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-4">
              Gratuito · comece hoje
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3 leading-tight">
              Desafio de 7 dias: <span className="gradient-text">uma ferramenta por dia</span>
            </h2>
            <p className="text-ink-muted leading-relaxed">
              Cada dia você escolhe uma ferramenta do ETT Player, pratica uns 15 minutos e conta pro
              Miguel no WhatsApp como foi. No fim, você participa do encontro de conversação e responde um feedback rápido.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:min-w-[240px]">
            <a
              href={DESAFIO_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-red-deep text-white font-bold hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red"
            >
              <MessageCircle className="w-5 h-5" />
              Quero participar
            </a>
            <Link
              href="/desafio/"
              className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-brand-red hover:underline"
            >
              Como funciona o desafio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
