'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Wallet, ShieldCheck, ArrowRight } from 'lucide-react'
import {
  portas,
  trilhas,
  CHECKOUT_ADESAO,
  PRECO_ADESAO,
} from '@/lib/planos'

/** Enquanto o link do gateway não existe, o botão leva ao formulário. */
const hrefAdesao = CHECKOUT_ADESAO ?? '/#inscricao'

export default function Precos() {
  return (
    <section id="precos" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/25 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
            <Wallet className="w-3.5 h-3.5" />
            Quanto custa
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Uma entrada de <span className="neon-green">R$ {PRECO_ADESAO}</span>.
            <br className="hidden sm:block" /> Depois, você escolhe.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            O encontro de segunda é aberto pra qualquer pessoa, sem cadastro e sem pagar — isso
            não muda. O que tem preço é a plataforma e as horas de mentoria individual.
          </p>
        </motion.div>

        {/* Quem já está numa trilha gratuita não passa a pagar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto mb-10 flex items-start gap-3 rounded-2xl border border-tech-blue/25 bg-tech-blue/5 px-5 py-4"
        >
          <ShieldCheck className="w-5 h-5 text-tech-blue shrink-0 mt-0.5" />
          <p className="text-sm text-gray-300 leading-relaxed">
            <strong className="text-white">
              Quem já está numa trilha gratuita não passa a pagar.
            </strong>{' '}
            Se você se cadastrou antes desta página mudar, sua adesão está isenta. Não existe
            cobrança retroativa.
          </p>
        </motion.div>

        {/* A decisão: olhar ou entrar */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto items-stretch">
          {portas.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative bg-dark-card border rounded-2xl p-6 sm:p-7 flex flex-col ${
                p.destaque ? 'border-neon-green/35 shadow-neon-green' : 'border-dark-border'
              }`}
            >
              <h3 className="font-bold text-white text-lg mb-3 mt-1">{p.nome}</h3>
              <div className="flex items-baseline gap-2 flex-wrap mb-1">
                <span
                  className={`text-4xl font-black ${
                    p.destaque ? 'text-neon-green' : 'text-gray-200'
                  }`}
                >
                  {p.preco}
                </span>
                <span className="text-gray-500 text-sm">{p.precoNota}</span>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{p.paraQuem}</p>

              <ul className="space-y-2.5 mb-6">
                {p.itens.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <Check
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        p.destaque ? 'text-neon-green' : 'text-tech-blue'
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-xs text-gray-500 leading-relaxed mb-6 mt-auto">{p.rodape}</p>

              <Link
                href={p.id === 'entrar' ? hrefAdesao : '/#inscricao'}
                className={`w-full inline-flex items-center justify-center px-5 py-3.5 rounded-lg font-bold text-sm transition-all ${
                  p.destaque
                    ? 'bg-neon-green text-black hover:bg-neon-green/90 hover:shadow-neon-green-lg'
                    : 'border border-dark-border text-gray-200 hover:border-neon-green/40 hover:text-white'
                }`}
              >
                {p.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* E depois dos 30 dias — subordinado às portas, não um terceiro cartão */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mt-6 rounded-2xl border border-dark-border bg-dark-secondary/40 p-6 sm:p-7"
        >
          <p className="text-sm text-gray-400 mb-5 leading-relaxed">
            <strong className="text-white">E depois dos 30 dias?</strong> Você escolhe como
            continuar. Nos dois casos mantém as ferramentas, as turmas por nível e o presencial de
            sábado.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {trilhas.map((t) => (
              <div key={t.id}>
                <div className="flex items-baseline gap-2 flex-wrap mb-1">
                  <span className="text-white font-bold text-sm">{t.nome}</span>
                  {t.precoAncora && (
                    <span className="text-gray-600 text-xs line-through">{t.precoAncora}</span>
                  )}
                  <span className="text-neon-green font-black">{t.preco}</span>
                </div>
                <p className="text-gray-200 text-sm font-semibold mb-1.5">{t.custoReal}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{t.descricao}</p>
              </div>
            ))}
          </div>

          <Link
            href="/planos/"
            className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-neon-green hover:gap-2.5 transition-all"
          >
            Ver os planos em detalhe
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* A objeção, respondida de frente */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mt-10 rounded-2xl border border-dark-border bg-dark-card/60 px-6 py-5"
        >
          <p className="text-white font-bold text-sm mb-2">
            “Por que R$ {PRECO_ADESAO} se o encontro de segunda é de graça?”
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            O encontro de segunda continua de graça — pra você, pra quem chegar hoje e pra quem
            nunca vai pagar nada. Os R$ {PRECO_ADESAO} pagam duas horas da agenda de uma pessoa
            sentada com você montando seu plano, mais a sua conta na plataforma. É isso, e só isso.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center text-sm text-gray-500 mt-8 leading-relaxed"
        >
          <strong className="text-gray-300">Não quer nada disso?</strong> Aparecer num encontro pra
          ver como é continua livre pra qualquer pessoa, sem cadastro e sem pagar.
        </motion.p>
      </div>
    </section>
  )
}
