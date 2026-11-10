'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Wallet, MessagesSquare, Smartphone, UserRound, Handshake } from 'lucide-react'
import { cartoesHome, PRECO_ADESAO, PRECO_MENSAL, META_DIAS } from '@/lib/planos'

/* Quatro coisas diferentes, com quatro regras diferentes. Separadas pra que
   ninguém leia que paga pelo encontro (que é aberto) nem que o ETT vende o
   curso do parceiro. Valores só de lib/planos.ts. */
const blocos = [
  {
    icon: MessagesSquare,
    titulo: 'Encontros de conversação',
    preco: 'Gratuito',
    texto: 'Online toda segunda, 20h, e IEP Talks aos sábados, 10h, em Curitiba. Aberto a qualquer pessoa, sem cadastro e sem plano.',
  },
  {
    icon: Smartphone,
    titulo: 'Ferramentas do ETT Player',
    preco: 'Abertas pra experimentar',
    texto: 'Level Check, flashcards, séries com legenda, audiolivro, rádio e outras. Algumas em versão beta.',
  },
  {
    icon: UserRound,
    titulo: 'Orientação e acompanhamento',
    preco: `R$ ${PRECO_ADESAO} no 1º mês`,
    texto: `Ativação acompanhada: duas sessões individuais de 1h, plano e material personalizados. Depois, a Trilha de Dedicação (R$ ${PRECO_MENSAL}/mês) ou a de Aceleração, sem mensalidade com a meta.`,
  },
  {
    icon: Handshake,
    titulo: 'Cursos e imersões dos parceiros',
    preco: 'Condições de cada parceiro',
    texto: 'Ofertas independentes, com fornecedor, preço, regras e condições próprios. O ETT divulga e encaminha.',
  },
]

export default function Precos() {
  return (
    <section id="precos" className="section-padding bg-surface-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/25 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-4">
            <Wallet className="w-3.5 h-3.5" />
            Quanto custa
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4 leading-tight">
            O que é gratuito <span className="brand-red">e o que é pago</span>
          </h2>
          <p className="text-ink-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Os encontros são gratuitos e as ferramentas do ETT Player são abertas pra experimentar.
            O que tem preço é a orientação individual e o acompanhamento, e você só paga se quiser.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
          {blocos.map((b, i) => (
            <motion.div
              key={b.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`rounded-2xl p-5 border ${i === 0 ? 'border-brand-red/30 bg-brand-red/5' : 'border-surface-line bg-surface-card'}`}
            >
              <b.icon className="w-5 h-5 text-brand-red mb-3" />
              <h3 className="font-bold text-ink mb-1">{b.titulo}</h3>
              <p className="text-sm font-semibold text-brand-red mb-2">{b.preco}</p>
              <p className="text-sm text-ink-muted leading-relaxed">{b.texto}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-center text-xl sm:text-2xl font-bold text-ink mb-8">
          Orientação e acompanhamento: as opções
        </h3>

        {/* O caminho, em 2 passos: ninguém entra numa trilha sem a ativação */}
        <div className="max-w-4xl mx-auto mb-10 grid sm:grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-4">
          <div className="rounded-2xl border border-brand-red/35 bg-brand-red/5 px-5 py-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-red mb-1">Passo 1 · seu 1º mês</p>
            <p className="text-sm text-ink-soft leading-relaxed">
              <strong className="text-ink">Ativação acompanhada, R$ {PRECO_ADESAO}.</strong> Duas sessões individuais
              de orientação, plano e material personalizados e acompanhamento por 30 dias.
            </p>
          </div>
          <span className="hidden sm:block text-brand-red text-2xl font-bold" aria-hidden>→</span>
          <div className="rounded-2xl border border-surface-line bg-surface-card px-5 py-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-ink-muted mb-1">Passo 2 · a partir do dia 31</p>
            <p className="text-sm text-ink-soft leading-relaxed">
              <strong className="text-ink">Você escolhe uma trilha:</strong> Dedicação (R$ {PRECO_MENSAL}/mês) ou
              Aceleração (R$ 0 com {META_DIAS} dias válidos de prática por mês).
            </p>
          </div>
        </div>

        {/* Box de escolha: as 3 opções, na ordem do funil */}
        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto items-stretch">
          {cartoesHome.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative bg-surface-card border rounded-2xl p-6 flex flex-col ${
                c.destaque ? 'border-brand-red/35 shadow-brand-red' : 'border-surface-line'
              }`}
            >
              {c.etiqueta && (
                <span
                  className={`absolute -top-2.5 left-5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    c.destaque
                      ? 'bg-brand-red-deep text-white'
                      : 'bg-surface-alt text-ink-muted border border-surface-line'
                  }`}
                >
                  {c.etiqueta}
                </span>
              )}

              <h3 className="font-bold text-ink text-lg mb-3 mt-2">{c.nome}</h3>

              <div className="flex items-baseline gap-2 flex-wrap mb-1">
                {c.precoAncora && (
                  <span className="text-ink-faint text-sm line-through">{c.precoAncora}</span>
                )}
                <span
                  className={`text-3xl font-black ${
                    c.destaque ? 'text-brand-red' : 'text-ink'
                  }`}
                >
                  {c.preco}
                </span>
                {c.precoNota && <span className="text-ink-subtle text-sm">{c.precoNota}</span>}
              </div>

              {c.custoReal && (
                <p className="text-ink text-sm font-semibold mb-2">{c.custoReal}</p>
              )}
              <p className="text-ink-muted text-sm mb-5 leading-relaxed">{c.paraQuem}</p>

              <ul className="space-y-2.5 mb-5">
                {c.itens.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <Check
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        c.destaque ? 'text-brand-red' : 'text-brand-silver'
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-xs text-ink-subtle leading-relaxed mb-4 mt-auto">{c.rodape}</p>

              {c.requisito && (
                <p className="text-xs text-ink-soft leading-relaxed mb-4 rounded-lg border border-brand-red/25 bg-brand-red/5 px-3 py-2.5">
                  <strong className="text-ink">Antes, a ativação.</strong> {c.requisito}
                </p>
              )}

              <Link
                href={c.href}
                className={`w-full inline-flex items-center justify-center px-5 py-3.5 rounded-lg font-bold text-sm transition-all ${
                  c.destaque
                    ? 'bg-brand-red-deep text-white hover:bg-brand-red-deep/90 hover:shadow-brand-red-lg'
                    : 'border border-surface-line text-ink hover:border-brand-red/40 hover:text-ink'
                }`}
              >
                {c.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10"
        >
          <p className="max-w-3xl mx-auto text-sm text-ink-subtle leading-relaxed">
            <strong className="text-ink-soft">Não quer nada disso?</strong> Aparecer num encontro
            pra ver como é continua livre pra qualquer pessoa, sem cadastro e sem pagar.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
