'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, ArrowRight } from 'lucide-react'

/**
 * Mini-captura logo depois de `ProximosEncontros`.
 *
 * Motivo: o formulário completo fica no fim da home, DEPOIS da seção de preços.
 * Quem não estava pronto pra decidir sobre plano ia embora antes de encontrar
 * um campo de e-mail. Esta faixa pega a pessoa no momento em que ela acabou de
 * ver a data do próximo encontro. Ver PLANO-REVISAO-MARKETING-2026-08-01.md, P1.
 *
 * Não duplica o formulário de propósito — leva pra `#inscricao`, que é o único
 * ponto de captura (RD Station). Dois formulários iguais na mesma página
 * bagunçam a medição de conversão.
 */
export default function CapturaRapida() {
  return (
    <section className="bg-dark border-y border-dark-border py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-5 sm:gap-8 text-center sm:text-left"
        >
          <span className="w-12 h-12 shrink-0 rounded-xl bg-neon-green/10 border border-neon-green/20 flex items-center justify-center">
            <Mail className="w-5 h-5 text-neon-green" />
          </span>

          <div className="flex-1">
            <h3 className="text-white font-bold text-lg leading-snug mb-1">
              Quer o link da próxima segunda no seu e-mail?
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Nome e e-mail, menos de um minuto. Você recebe o link do encontro online, as datas do
              IEP Talks e mais informações sobre o programa — e alguém da equipe entra em contato
              para tirar suas dúvidas. É grátis e não tem nada pra decidir agora.
            </p>
          </div>

          <Link
            href="#inscricao"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-neon-green text-black font-bold text-sm hover:bg-neon-green/90 transition-all hover:shadow-neon-green hover:-translate-y-0.5"
          >
            Quero receber
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
