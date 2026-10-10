'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CalendarDays, MapPin, Users, ArrowUpRight, Gift } from 'lucide-react'

/* Lançamento oficial do ETT dentro do congresso DSSBR 2026 (27–29/10, IEP).
   Materiais originais em novoConteudo/lancamento-dssbr-2026/.
   Inscrição pelo Google Forms do Alessandro — 60 lugares abertos ao público. */
const INSCRICAO_URL = 'https://forms.gle/aTbkieevUxouRU6e8'

/* Depois do evento a seção some sozinha. Checado no navegador, não no build:
   o export estático pode ficar semanas sem rodar. */
const FIM_DO_EVENTO = new Date('2026-10-27T16:30:00-03:00')

const programacao = [
  {
    hora: '13h30',
    nome: 'Alessandro Binhara',
    org: 'English Talk Time',
    titulo: 'Lançamento do ETT: do inglês travado ao inglês funcional',
    foto: null,
  },
  {
    hora: '14h00',
    nome: 'Rubens Queiroz',
    org: 'Unicamp · criador do portal Aprendendo Inglês',
    titulo: 'Por que você desiste do inglês? O que 30 anos aprendendo e ensinando me ensinaram',
    foto: '/images/lancamento/rubens-queiroz.webp',
  },
  {
    hora: '15h30',
    nome: 'José Motta Filho',
    org: 'Silicon Valley Brasil',
    titulo: 'AI para além dos prompts: uma conversa franca sobre os novos tempos da Educação',
    foto: '/images/lancamento/jose-motta.webp',
  },
]

const fatos = [
  { icon: CalendarDays, texto: 'Terça, 27 de outubro · 13h30 às 16h30' },
  { icon: MapPin, texto: 'Auditório do IEP · Rua Emiliano Perneta, 174 — Centro, Curitiba' },
  { icon: Users, texto: '60 lugares abertos ao público · entrada gratuita com inscrição' },
]

export default function LancamentoDSSBR() {
  const [encerrado, setEncerrado] = useState(false)

  useEffect(() => {
    setEncerrado(new Date() > FIM_DO_EVENTO)
  }, [])

  if (encerrado) return null

  return (
    <section id="lancamento" className="bg-surface py-14 sm:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="tema-escuro bg-surface border border-surface-line rounded-3xl max-w-5xl mx-auto overflow-hidden"
        >
          <div className="h-1 bg-brand-red-deep" />

          <div className="p-6 sm:p-10 grid lg:grid-cols-[1fr_1.15fr] gap-10">
            {/* Chamada */}
            <div className="flex flex-col">
              <span className="self-start inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-red/40 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-wide mb-5">
                Lançamento oficial · DSSBR 2026
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">
                O ETT vai ser lançado no congresso DSSBR, no IEP.
              </h2>

              <p className="text-ink-soft leading-relaxed mb-6">
                Uma tarde sobre aprender inglês de verdade: o lançamento do English Talk Time e
                duas palestras convidadas. Ao final, apresentação completa da plataforma do ETT e
                sorteio de prêmios. Quem já está inscrito no DSSBR também está convidado.
              </p>

              <ul className="space-y-3 mb-8">
                {fatos.map(({ icon: Icon, texto }) => (
                  <li key={texto} className="flex items-start gap-3 text-sm text-ink-soft">
                    <Icon className="w-5 h-5 text-brand-red shrink-0 mt-px" />
                    {texto}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href={INSCRICAO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-brand-red-deep text-white font-bold hover:bg-brand-red-deep/90 transition-all"
                >
                  Quero me inscrever no lançamento
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                <p className="text-xs text-ink-muted mt-3">
                  Inscrição gratuita pelo Google Forms. Os 60 lugares são por ordem de inscrição.
                </p>
              </div>
            </div>

            {/* Programação */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-ink-muted mb-4">
                Programação · Auditório do IEP
              </h3>
              <ol className="space-y-3">
                {programacao.map((p) => (
                  <li
                    key={p.nome}
                    className="flex gap-4 rounded-2xl bg-surface-card border border-surface-line p-4"
                  >
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-white border border-surface-line">
                      {p.foto ? (
                        <Image src={p.foto} alt={p.nome} fill sizes="56px" className="object-cover" />
                      ) : (
                        <Image
                          src="/images/ett-simbolo-positiva.svg"
                          alt="English Talk Time"
                          fill
                          sizes="56px"
                          className="object-contain p-2.5"
                        />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-brand-red mb-0.5">{p.hora}</p>
                      <p className="font-semibold text-ink leading-snug">{p.titulo}</p>
                      <p className="text-sm text-ink-muted mt-1">
                        {p.nome} · {p.org}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="flex items-start gap-2 text-sm text-ink-muted mt-4">
                <Gift className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                Encerramento com a apresentação da plataforma do ETT e sorteio de prêmios.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
