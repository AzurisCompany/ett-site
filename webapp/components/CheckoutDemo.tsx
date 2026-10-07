'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Lock, MessageCircle, ArrowLeft, Info } from 'lucide-react'

const WHATSAPP_NUMBER = '5541998003687'

export type PedidoDemo = {
  titulo: string
  subtitulo: string
  /** Pra onde o "voltar" leva — a página do plano que originou o pedido. */
  voltarHref: string
  itens: { descricao: string; valor: string }[]
  total: string
  totalNota: string
  inclui: string[]
  observacao: string
  mensagemWhatsapp: string
}

export default function CheckoutDemo({ pedido }: { pedido: PedidoDemo }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    pedido.mensagemWhatsapp,
  )}`

  return (
    <section className="pt-32 pb-20 bg-surface min-h-screen">
      <div className="container mx-auto px-4 max-w-2xl">
        <Link
          href={pedido.voltarHref}
          className="inline-flex items-center gap-1.5 text-sm text-ink-subtle hover:text-brand-red transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>

        {/* O pagamento online ainda não abriu — isso precisa ficar claro antes de tudo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-start gap-3 rounded-2xl border border-brand-silver/30 bg-brand-silver/5 px-5 py-4 mb-6"
        >
          <Info className="w-5 h-5 text-brand-silver shrink-0 mt-0.5" />
          <p className="text-sm text-ink-soft leading-relaxed">
            <strong className="text-ink">
              O pagamento online ainda não está aberto.
            </strong>{' '}
            Esta é a prévia do resumo do pedido. Pra garantir sua vaga agora, fale com a gente pelo
            WhatsApp — a adesão é concluída direto com uma pessoa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="rounded-2xl border border-surface-line bg-surface-card overflow-hidden"
        >
          <div className="px-6 py-5 border-b border-surface-line">
            <h1 className="text-xl font-bold text-ink">{pedido.titulo}</h1>
            <p className="text-ink-muted text-sm mt-1">{pedido.subtitulo}</p>
          </div>

          {/* Resumo do pedido */}
          <div className="px-6 py-5 border-b border-surface-line">
            <p className="text-xs uppercase tracking-widest text-ink-subtle font-semibold mb-4">
              Resumo do pedido
            </p>
            <ul className="space-y-3">
              {pedido.itens.map((item) => (
                <li
                  key={item.descricao}
                  className="flex items-start justify-between gap-4 text-sm"
                >
                  <span className="text-ink-soft">{item.descricao}</span>
                  <span className="text-ink-muted shrink-0 font-mono">{item.valor}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-baseline justify-between gap-4 mt-5 pt-5 border-t border-surface-line">
              <span className="text-ink font-bold">Total</span>
              <div className="text-right">
                <span className="text-3xl font-black text-brand-red">{pedido.total}</span>
                <span className="block text-ink-subtle text-xs mt-0.5">{pedido.totalNota}</span>
              </div>
            </div>
          </div>

          {/* O que está incluso */}
          <div className="px-6 py-5 border-b border-surface-line">
            <p className="text-xs uppercase tracking-widest text-ink-subtle font-semibold mb-4">
              O que está incluso
            </p>
            <ul className="space-y-2.5">
              {pedido.inclui.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <Check className="w-4 h-4 shrink-0 mt-0.5 text-brand-red" />
                  {i}
                </li>
              ))}
            </ul>
          </div>

          {/* Ações */}
          <div className="px-6 py-6 space-y-3">
            <button
              type="button"
              disabled
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-surface border border-surface-line text-ink-faint font-bold text-sm cursor-not-allowed"
            >
              <Lock className="w-4 h-4" />
              Pagamento online em breve
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-brand-red-deep text-white font-bold text-sm hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red-lg"
            >
              <MessageCircle className="w-4 h-4" />
              Concluir pelo WhatsApp
            </a>

            <Link
              href="/#inscricao"
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg border border-surface-line text-ink-soft font-semibold text-sm hover:border-brand-red/40 hover:text-ink transition-all"
            >
              Prefiro deixar meus dados no formulário
            </Link>
          </div>
        </motion.div>

        <p className="text-ink-faint text-xs leading-relaxed mt-6 text-center">
          {pedido.observacao}
        </p>
      </div>
    </section>
  )
}
