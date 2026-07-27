'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Clock, Wallet, FlaskConical, Minus } from 'lucide-react'

type Trilha = {
  nome: string
  preco: string
  precoNota?: string
  destaque?: string
  paraQuem: string
  itens: { texto: string; tem: boolean }[]
  compromisso: string
  compromissoNota?: string
  cta: string
  cor: 'verde' | 'azul' | 'neutro'
}

const trilhas: Trilha[] = [
  {
    nome: 'Trilha de Aceleração',
    preco: 'R$ 0',
    precoNota: 'sempre',
    destaque: 'O programa completo',
    paraQuem: 'Pra quem vai fazer o programa de aceleração de verdade.',
    itens: [
      { texto: 'Encontros online e presenciais', tem: true },
      { texto: 'ETT Player completo — todas as ferramentas', tem: true },
      { texto: 'Plano de estudos personalizado', tem: true },
      { texto: 'Acompanhamento do seu progresso', tem: true },
    ],
    compromisso: 'Presença nos encontros + rotina de 1 hora por dia nas ferramentas.',
    compromissoNota:
      'A rotina é acompanhada mês a mês. Se você der uma pausa, não tem multa nem cobrança por trás — no máximo você passa a escolher outra trilha quando voltar.',
    cta: 'Quero a Trilha de Aceleração',
    cor: 'verde',
  },
  {
    nome: 'Trilha de Dedicação',
    preco: 'R$ 0',
    precoNota: 'sempre',
    paraQuem: 'Pra quem vem aos encontros mas não consegue fechar 1 hora todo dia.',
    itens: [
      { texto: 'Encontros online e presenciais', tem: true },
      { texto: 'Ferramentas em beta, enquanto estiverem em beta', tem: true },
      { texto: 'Comunidade e material de apoio', tem: true },
      { texto: 'ETT Player completo e plano personalizado', tem: false },
    ],
    compromisso: 'Só presença nos encontros. Sem rotina obrigatória.',
    compromissoNota:
      'Toda ferramenta nova entra em beta aberto — nesse período ela é gratuita pra você também. Quando sai do beta, fica com quem está na Aceleração ou num plano.',
    cta: 'Quero a Trilha de Dedicação',
    cor: 'azul',
  },
  {
    nome: 'Trilha Livre',
    preco: 'Plano mensal',
    precoNota: 'valor em definição',
    paraQuem: 'Pra quem quer tudo no próprio ritmo, sem compromisso nenhum.',
    itens: [
      { texto: 'Encontros online e presenciais', tem: true },
      { texto: 'ETT Player completo — todas as ferramentas', tem: true },
      { texto: 'Plano de estudos personalizado', tem: true },
      { texto: 'Acompanhamento do seu progresso', tem: true },
    ],
    compromisso: 'Nenhum. Ninguém cobra rotina de você.',
    compromissoNota:
      'Ainda estamos definindo o valor — e queremos definir junto com quem vai usar. No cadastro tem uma pergunta rápida sobre qual faixa faria sentido pra você.',
    cta: 'Quero ser avisado do plano',
    cor: 'neutro',
  },
]

const estilos = {
  verde: {
    card: 'border-neon-green/30 shadow-neon-green',
    preco: 'text-neon-green',
    check: 'text-neon-green',
    icone: 'text-neon-green',
    cta: 'bg-neon-green text-black hover:bg-neon-green/90 hover:shadow-neon-green-lg',
  },
  azul: {
    card: 'border-tech-blue/25',
    preco: 'text-tech-blue',
    check: 'text-tech-blue',
    icone: 'text-tech-blue',
    cta: 'border border-tech-blue/50 text-tech-blue hover:bg-tech-blue/10 hover:border-tech-blue',
  },
  neutro: {
    card: 'border-dark-border',
    preco: 'text-gray-300',
    check: 'text-gray-500',
    icone: 'text-gray-500',
    cta: 'border border-dark-border text-gray-300 hover:border-neon-green/40 hover:text-white',
  },
} as const

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
            Você paga com <span className="neon-green">dedicação</span> ou com plano.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Os encontros de conversação são gratuitos nas três trilhas. O que muda é o quanto
            você se compromete com a rotina — e é isso que define se você paga alguma coisa.
          </p>
        </motion.div>

        {/* Status honesto da fase atual */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto mb-10 flex items-start gap-3 rounded-2xl border border-tech-blue/25 bg-tech-blue/5 px-5 py-4"
        >
          <FlaskConical className="w-5 h-5 text-tech-blue shrink-0 mt-0.5" />
          <p className="text-sm text-gray-300 leading-relaxed">
            <strong className="text-white">Estamos em fase de testes.</strong> Hoje tudo está
            liberado, sem cobrança para ninguém. Quando os planos entrarem no ar,{' '}
            <strong className="text-white">
              quem já estiver numa trilha gratuita continua sem pagar
            </strong>{' '}
            — não existe cobrança retroativa.
          </p>
        </motion.div>

        {/* As trilhas */}
        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto items-stretch">
          {trilhas.map((t, i) => {
            const s = estilos[t.cor]
            return (
              <motion.div
                key={t.nome}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative bg-dark-card border rounded-2xl p-6 flex flex-col ${s.card}`}
              >
                {t.destaque && (
                  <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-neon-green text-black text-xs font-bold uppercase tracking-wide">
                    {t.destaque}
                  </span>
                )}

                <h3 className="font-bold text-white text-lg mb-2 mt-2">{t.nome}</h3>
                <div className="flex items-baseline gap-2 flex-wrap mb-1">
                  <span className={`text-3xl font-black ${s.preco}`}>{t.preco}</span>
                  {t.precoNota && <span className="text-gray-500 text-sm">{t.precoNota}</span>}
                </div>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{t.paraQuem}</p>

                <ul className="space-y-2.5 mb-6">
                  {t.itens.map((item) => (
                    <li
                      key={item.texto}
                      className={`flex items-start gap-2.5 text-sm ${
                        item.tem ? 'text-gray-300' : 'text-gray-600 line-through decoration-gray-700'
                      }`}
                    >
                      {item.tem ? (
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${s.check}`} />
                      ) : (
                        <Minus className="w-4 h-4 shrink-0 mt-0.5 text-gray-700" />
                      )}
                      {item.texto}
                    </li>
                  ))}
                </ul>

                <div className="rounded-xl bg-dark/60 border border-dark-border p-4 mb-6">
                  <p className="flex items-start gap-2.5 text-sm text-gray-300">
                    <Clock className={`w-4 h-4 shrink-0 mt-0.5 ${s.icone}`} />
                    <span>
                      <strong className="text-white">Compromisso:</strong> {t.compromisso}
                    </span>
                  </p>
                  {t.compromissoNota && (
                    <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                      {t.compromissoNota}
                    </p>
                  )}
                </div>

                <Link
                  href="#inscricao"
                  className={`mt-auto w-full inline-flex items-center justify-center px-5 py-3.5 rounded-lg font-bold text-sm transition-all ${s.cta}`}
                >
                  {t.cta}
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Regra dos encontros */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center text-sm text-gray-500 mt-10 leading-relaxed"
        >
          <strong className="text-gray-300">E se eu só quiser conhecer?</strong> Aparecer num
          encontro para ver como é continua livre para qualquer pessoa, sem cadastro e sem pagar.
          As trilhas existem para quem passa a participar com regularidade.
        </motion.p>
      </div>
    </section>
  )
}
