'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Gift, MapPin, Check } from 'lucide-react'
import {
  INSCRICAO_URL,
  MAPA_URL,
  evento,
  programacao,
  rastrearInscricao,
  useLancamentoAtivo,
} from '@/lib/lancamento'

/* Programação do lançamento (logo abaixo do hero). Dados em lib/lancamento.ts.
   Some sozinho depois do evento. */

const porQueVir = [
  'Ouvir por que tanta gente desiste do inglês — de quem ensina e aprende há 30 anos.',
  'Entender como funciona uma imersão em inglês, no Brasil e no exterior.',
  'Discutir o que a IA muda no jeito de aprender (e o que ela não muda).',
  'Conhecer o IEP Talks, o grupo de conversação que se reúne no IEP.',
  'Ver a plataforma do ETT por dentro e concorrer no sorteio de prêmios.',
]

const perguntas = [
  {
    q: 'É pago?',
    a: `Não. A entrada é gratuita para quem se inscrever. São ${evento.vagas} lugares abertos ao público.`,
  },
  {
    q: 'Preciso estar inscrito no congresso DSSBR?',
    a: 'Não. A inscrição no lançamento é gratuita e feita à parte. Quem já está inscrito no DSSBR também está convidado.',
  },
  {
    q: 'Onde fica?',
    a: `No ${evento.local} — Instituto de Engenharia do Paraná, ${evento.endereco}.`,
    mapa: true,
  },
]

export default function LancamentoDSSBR() {
  const ativo = useLancamentoAtivo()
  if (!ativo) return null

  return (
    <section id="lancamento" className="section-padding bg-surface-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4">
            A programação da tarde
          </h2>
          <p className="text-ink-muted max-w-2xl mx-auto text-lg">
            {evento.dataExtenso}, {evento.horario}, no {evento.local}. Pode chegar pra uma palestra
            ou ficar a tarde toda.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-8 max-w-6xl mx-auto">
          {/* Por que vir + perguntas */}
          <div className="flex flex-col gap-6">
            <div className="bg-surface-card border border-surface-line rounded-2xl p-6">
              <h3 className="font-bold text-ink text-lg mb-4">O que você leva da tarde</h3>
              <ul className="space-y-3">
                {porQueVir.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-ink-soft leading-relaxed">
                    <Check className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={INSCRICAO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => rastrearInscricao('programacao')}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-brand-red-deep text-white font-bold hover:bg-brand-red-deep/90 transition-all"
              >
                Quero minha vaga gratuita
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            <div className="bg-surface-card border border-surface-line rounded-2xl p-6">
              <h3 className="font-bold text-ink text-lg mb-4">Perguntas rápidas</h3>
              <dl className="space-y-4">
                {perguntas.map((p) => (
                  <div key={p.q}>
                    <dt className="font-semibold text-ink text-sm">{p.q}</dt>
                    <dd className="text-sm text-ink-muted leading-relaxed mt-1">
                      {p.a}
                      {p.mapa && (
                        <>
                          {' '}
                          <a
                            href={MAPA_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-brand-red font-semibold hover:underline"
                          >
                            <MapPin className="w-3.5 h-3.5" />
                            Ver no mapa
                          </a>
                        </>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Grade */}
          <div>
            <ol className="space-y-3">
              {programacao.map((p, i) => (
                <motion.li
                  key={p.nome}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex gap-4 rounded-2xl bg-surface-card border border-surface-line p-4 sm:p-5"
                >
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 bg-white border border-surface-line">
                    {/* sem foto da pessoa, vai a logo da organização */}
                    <Image
                      src={p.foto ?? p.logo!}
                      alt={p.foto ? p.nome : p.org}
                      fill
                      sizes="64px"
                      className={p.foto ? 'object-cover' : 'object-contain p-2'}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-brand-red mb-0.5">{p.hora}</p>
                    <p className="font-semibold text-ink leading-snug">{p.titulo}</p>
                    <p className="text-sm text-ink-muted mt-1">
                      {p.nome} · {p.org}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
            <p className="flex items-start gap-2 text-sm text-ink-muted mt-4">
              <Gift className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              Encerramento com a apresentação da plataforma do ETT e sorteio de prêmios.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
