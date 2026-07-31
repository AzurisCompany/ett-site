'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Check,
  Target,
  Gift,
  CalendarDays,
  Users,
  ShieldCheck,
  HelpCircle,
} from 'lucide-react'
import {
  portas,
  trilhas,
  premios,
  faqCobranca,
  CHECKOUT_ADESAO,
  PRECO_ADESAO,
  PRECO_MENSAL,
  META_DIAS,
} from '@/lib/planos'

const hrefAdesao = CHECKOUT_ADESAO

const encontros = [
  {
    icon: Users,
    titulo: 'Encontro Online ETT',
    quando: 'Toda segunda, 20h às 21h30',
    quem: 'Aberto a qualquer pessoa, sem cadastro e sem pagar. Não entra em plano nenhum.',
  },
  {
    icon: CalendarDays,
    titulo: 'IEP Talks — presencial',
    quando: 'Todo sábado, 10h às 12h · IEP, Curitiba',
    quem: 'Encontro presencial semanal. É também onde as apostilas são entregues em mãos.',
  },
]

export default function Planos() {
  return (
    <>
      {/* Abertura */}
      <section className="pt-32 pb-14 bg-dark relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Adesão ao programa: <span className="neon-green">R$ {PRECO_ADESAO}</span>. Depois,
              você escolhe.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              O encontro de segunda é aberto pra qualquer pessoa, sem cadastro e sem pagar — isso
              não muda. O que tem preço é a plataforma, o material didático e as horas de
              mentoria individual.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="max-w-3xl mx-auto mt-8 flex items-start gap-3 rounded-2xl border border-tech-blue/25 bg-tech-blue/5 px-5 py-4"
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
        </div>
      </section>

      {/* As duas portas */}
      <section className="pb-16 bg-dark">
        <div className="container mx-auto px-4">
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
                <h2 className="font-bold text-white text-lg mb-3 mt-1">{p.nome}</h2>
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
        </div>
      </section>

      {/* Depois dos 30 dias */}
      <section className="section-padding bg-dark-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/25 to-transparent" />
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-4"
          >
            E depois dos 30 dias?
          </motion.h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
            Você escolhe como continuar. Nos dois casos mantém as ferramentas, o acompanhamento e
            os encontros online e presenciais.
          </p>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto items-stretch">
            {trilhas.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-dark-card border border-dark-border rounded-2xl p-6 sm:p-7 flex flex-col"
              >
                <h3 className="font-bold text-white text-lg mb-3">{t.nome}</h3>
                <div className="flex items-baseline gap-2.5 flex-wrap mb-2">
                  {t.precoAncora && (
                    <span className="text-gray-600 text-base line-through">{t.precoAncora}</span>
                  )}
                  <span className="text-3xl font-black text-neon-green">{t.preco}</span>
                </div>
                <p className="text-white font-semibold mb-3">{t.custoReal}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{t.descricao}</p>
                <p className="text-gray-500 text-xs leading-relaxed mt-auto">{t.condicao}</p>

                <Link
                  href={t.href}
                  className="mt-6 w-full inline-flex items-center justify-center px-5 py-3 rounded-lg border border-dark-border text-gray-200 font-bold text-sm hover:border-neon-green/40 hover:text-white transition-all"
                >
                  Ver a {t.nome}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Como a meta funciona */}
      <section className="section-padding bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/25 to-transparent" />
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
              <Target className="w-3.5 h-3.5" />A meta
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              {META_DIAS} dias válidos por mês.
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Na Trilha de Aceleração você não paga em dinheiro — paga em rotina. É cerca de{' '}
                <strong className="text-white">uma hora por dia, cinco dias por semana</strong>.
              </p>
              <p>
                O que conta não é tempo de tela: é{' '}
                <strong className="text-white">dia válido</strong> — o dia em que as tarefas
                daquele dia foram concluídas. O Player mostra o contador o tempo todo, então você
                sempre sabe onde está, e não existe discussão sobre se a hora contou.
              </p>
              <p>
                No fim do mês, bateu a meta: a gratuidade se renova e o prêmio do mês é liberado.
                Não bateu: você tem um mês de recuperação. Se ainda assim não fechar, sua bolsa
                entra em pausa e você escolhe o que fazer.{' '}
                <strong className="text-white">Nunca existe cobrança automática</strong> — e bater
                a meta de novo devolve a gratuidade.
              </p>
              <p className="text-gray-500 text-sm">
                Perder a bolsa nunca tira o seu acesso aos encontros. Eles são abertos de qualquer
                forma.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prêmios */}
      <section className="section-padding bg-dark-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/25 to-transparent" />
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
              <Gift className="w-3.5 h-3.5" />
              Prêmios
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight">
              Cada mês de meta batida tem um prêmio.
            </h2>

            <ul className="space-y-4">
              {premios.map((p) => (
                <li
                  key={p.marco}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 rounded-xl border border-dark-border bg-dark-card p-5"
                >
                  <span className="text-neon-green font-bold text-sm shrink-0 sm:w-44">
                    {p.marco}
                  </span>
                  <span className="text-gray-300 text-sm leading-relaxed">{p.premio}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Os encontros */}
      <section className="section-padding bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/25 to-transparent" />
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight"
          >
            Os encontros
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {encontros.map((e) => (
              <div
                key={e.titulo}
                className="rounded-2xl border border-dark-border bg-dark-card p-6"
              >
                <span className="w-10 h-10 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center mb-4">
                  <e.icon className="w-5 h-5 text-neon-green" />
                </span>
                <h3 className="font-bold text-white mb-1">{e.titulo}</h3>
                <p className="text-neon-green text-sm font-semibold mb-3">{e.quando}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{e.quem}</p>
              </div>
            ))}
          </div>

          <Link
            href="/agenda/"
            className="inline-block mt-6 text-sm font-semibold text-neon-green hover:underline"
          >
            Ver a agenda completa →
          </Link>
        </div>
      </section>

      {/* FAQ de cobrança */}
      <section className="section-padding bg-dark-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/25 to-transparent" />
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              Cobrança
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight">
              Perguntas sobre pagamento
            </h2>

            <div className="space-y-3">
              {faqCobranca.map((f) => (
                <details
                  key={f.pergunta}
                  className="group rounded-xl border border-dark-border bg-dark-card px-5 py-4"
                >
                  <summary className="cursor-pointer list-none font-semibold text-white text-sm flex items-start justify-between gap-4">
                    {f.pergunta}
                    <span className="text-neon-green shrink-0 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="text-gray-400 text-sm leading-relaxed mt-3">{f.resposta}</p>
                </details>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fechamento */}
      <section className="py-16 bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/25 to-transparent" />
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-white font-bold mb-2">
            “Por que R$ {PRECO_ADESAO} se o encontro de segunda é de graça?”
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            O encontro de segunda continua de graça — pra você, pra quem chegar hoje e pra quem
            nunca vai pagar nada. Os R$ {PRECO_ADESAO} pagam duas horas da agenda de uma pessoa
            sentada com você montando seu plano, o seu material didático e a sua conta na
            plataforma. É isso, e só isso.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={hrefAdesao}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-neon-green text-black font-bold text-sm hover:bg-neon-green/90 transition-all hover:shadow-neon-green-lg"
            >
              Fazer minha adesão — R$ {PRECO_ADESAO}
            </Link>
            <Link
              href="/#inscricao"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-dark-border text-gray-300 font-semibold text-sm hover:border-neon-green/40 hover:text-white transition-all"
            >
              Começar o teste de 30 dias
            </Link>
          </div>

          <p className="text-gray-600 text-xs mt-6">
            Trilha de Dedicação por R$ {PRECO_MENSAL}/mês a partir do dia 31. Cancela quando quiser.
          </p>
        </div>
      </section>
    </>
  )
}
