'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Wallet, ShieldCheck, ArrowRight } from 'lucide-react'
import { cartoesHome, PRECO_ADESAO } from '@/lib/planos'

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
            Adesão ao programa: <span className="neon-green">R$ {PRECO_ADESAO}</span>.
            <br className="hidden sm:block" /> Depois, você escolhe.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            O encontro de segunda é aberto pra qualquer pessoa, sem cadastro e sem pagar — isso
            não muda. O que tem preço é a plataforma, o material didático e as horas de mentoria
            individual.
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

        {/* Box de escolha: as 4 opções, na ordem do funil */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 max-w-7xl mx-auto items-stretch">
          {cartoesHome.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative bg-dark-card border rounded-2xl p-6 flex flex-col ${
                c.destaque ? 'border-neon-green/35 shadow-neon-green' : 'border-dark-border'
              }`}
            >
              {c.etiqueta && (
                <span
                  className={`absolute -top-2.5 left-5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    c.destaque
                      ? 'bg-neon-green text-black'
                      : 'bg-dark-secondary text-gray-400 border border-dark-border'
                  }`}
                >
                  {c.etiqueta}
                </span>
              )}

              <h3 className="font-bold text-white text-lg mb-3 mt-2">{c.nome}</h3>

              <div className="flex items-baseline gap-2 flex-wrap mb-1">
                {c.precoAncora && (
                  <span className="text-gray-600 text-sm line-through">{c.precoAncora}</span>
                )}
                <span
                  className={`text-3xl font-black ${
                    c.destaque ? 'text-neon-green' : 'text-gray-100'
                  }`}
                >
                  {c.preco}
                </span>
                {c.precoNota && <span className="text-gray-500 text-sm">{c.precoNota}</span>}
              </div>

              {c.custoReal && (
                <p className="text-white text-sm font-semibold mb-2">{c.custoReal}</p>
              )}
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">{c.paraQuem}</p>

              <ul className="space-y-2.5 mb-5">
                {c.itens.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <Check
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        c.destaque ? 'text-neon-green' : 'text-tech-blue'
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-xs text-gray-500 leading-relaxed mb-6 mt-auto">{c.rodape}</p>

              <Link
                href={c.href}
                className={`w-full inline-flex items-center justify-center px-5 py-3.5 rounded-lg font-bold text-sm transition-all ${
                  c.destaque
                    ? 'bg-neon-green text-black hover:bg-neon-green/90 hover:shadow-neon-green-lg'
                    : 'border border-dark-border text-gray-200 hover:border-neon-green/40 hover:text-white'
                }`}
              >
                {c.cta}
              </Link>
            </motion.div>
          ))}
        </div>

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
            sentada com você montando seu plano, o seu material didático e a sua conta na
            plataforma. É isso, e só isso.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-8"
        >
          <Link
            href="/planos/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-neon-green hover:gap-2.5 transition-all"
          >
            Ver os planos em detalhe
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="max-w-3xl mx-auto text-sm text-gray-500 mt-6 leading-relaxed">
            <strong className="text-gray-300">Não quer nada disso?</strong> Aparecer num encontro
            pra ver como é continua livre pra qualquer pessoa, sem cadastro e sem pagar.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
