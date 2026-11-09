'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Video, MapPin, ArrowUpRight, CalendarDays, MessageCircle, PartyPopper } from 'lucide-react'
import {
  CONTATO_IEP_TALKS,
  REINICIO,
  anuncioReinicioAtivo,
  encontrosOnlineRecorrentes,
  encontrosPresenciaisRecorrentes,
} from '@/lib/agenda-events'

const SPEAK_URL = 'https://ett-speak.vercel.app/'

/* O presencial semanal é o IEP Talks, no IEP. UTFPR, Hard Rock e Habitat saíram
   da copy (decisão #2 de 01/08/2026, reconfirmada em 31/10) — não é rodízio.
   Ver PLANO-REVISAO-MARKETING-2026-08-01.md, decisão #2. */
const detalhesPresencial = [
  'Sábados, das 10h às 12h',
  'IEP — Instituto de Engenharia do Paraná',
  'Entrada franca, é só chegar',
]

const curta = (iso: string) => `${iso.slice(8, 10)}/${iso.slice(5, 7)}`

/* As datas vêm dos geradores de lib/agenda-events.ts (os mesmos da /agenda/), que já
   respeitam a data de volta dos encontros (REINICIO). Calculadas no navegador: o site
   é export estático e o build pode ser antigo. */

export default function ProximosEncontros() {
  const [datas, setDatas] = useState<{ iso: string; label: string }[] | null>(null)
  const [proxIep, setProxIep] = useState<string | null>(null)
  const [anuncio, setAnuncio] = useState(false)

  useEffect(() => {
    const hoje = new Date()
    setDatas(encontrosOnlineRecorrentes(3, hoje).map((e) => ({ iso: e.date, label: e.dateLabel })))
    setProxIep(encontrosPresenciaisRecorrentes(1, hoje)[0]?.dateLabel ?? null)
    setAnuncio(anuncioReinicioAtivo(hoje))
  }, [])

  return (
    <section id="encontros" className="section-padding bg-surface-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {anuncio && (
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red-deep text-white text-sm font-bold mb-5">
              <PartyPopper className="w-4 h-4" />
              Voltamos! Online a partir de {curta(REINICIO.online)} · IEP Talks a partir de {curta(REINICIO.presencial)}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4">
            Inglês se desenvolve praticando. <span className="brand-red">Venha conversar.</span>
          </h2>
          <p className="text-ink-muted max-w-3xl mx-auto text-lg leading-relaxed">
            Os encontros de conversação do English Talk Time criam oportunidades para praticar
            inglês com outras pessoas, compartilhar experiências e ganhar confiança na
            comunicação. Eles complementam o estudo individual, os cursos e as atividades com
            ferramentas digitais.
          </p>
          <p className="text-ink-soft max-w-3xl mx-auto mt-4 font-semibold">
            Gratuitos e abertos a qualquer pessoa: não precisa de cadastro nem de plano.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Online */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="bg-surface-card border border-brand-red/25 rounded-2xl p-7 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center">
                <Video className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <h3 className="font-bold text-ink text-lg leading-tight">Online</h3>
                <p className="text-sm text-brand-red">Toda segunda, 20h às 21h30</p>
              </div>
            </div>

            <p className="text-ink-muted text-sm leading-relaxed mb-5">
              De qualquer lugar do Brasil, direto no navegador. Sem instalar nada.
            </p>

            {/* Próximas datas */}
            <div className="space-y-2 mb-6">
              {datas
                ? datas.map((d, i) => (
                    <div
                      key={d.iso}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 border ${
                        i === 0
                          ? 'bg-brand-red/5 border-brand-red/30'
                          : 'bg-surface/50 border-surface-line'
                      }`}
                    >
                      <span className="flex items-center gap-2 text-sm text-ink-soft">
                        <CalendarDays
                          className={`w-4 h-4 ${i === 0 ? 'text-brand-red' : 'text-ink-faint'}`}
                        />
                        Segunda, {d.label}
                      </span>
                      {i === 0 && (
                        <span className="text-xs font-bold text-brand-red uppercase tracking-wide">
                          Próximo
                        </span>
                      )}
                    </div>
                  ))
                : // placeholder até o cálculo no cliente
                  Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-[46px] rounded-xl bg-surface/50 border border-surface-line animate-pulse"
                    />
                  ))}
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-3">
              <a
                href={SPEAK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-red-deep text-white font-bold text-sm hover:bg-brand-red-deep/90 transition-all"
              >
                Entrar na sala
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="#inscricao"
                className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-lg border border-surface-line text-ink-soft font-semibold text-sm hover:border-brand-red/40 hover:text-ink transition-all"
              >
                Receber o lembrete
              </Link>
            </div>
          </motion.div>

          {/* Presencial */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-surface-card border border-brand-silver/25 rounded-2xl p-7 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-brand-silver/10 border border-brand-silver/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-brand-silver" />
              </div>
              <div>
                <h3 className="font-bold text-ink text-lg leading-tight">Presencial</h3>
                <p className="text-sm text-brand-silver">IEP Talks · sábados, 10h</p>
              </div>
            </div>

            <p className="text-ink-muted text-sm leading-relaxed mb-5">
              Todo sábado, no mesmo lugar.{' '}
              {proxIep && (
                <>
                  Próximo: <strong className="text-ink">sábado, {proxIep}</strong>.
                </>
              )}
            </p>

            <ul className="space-y-2 mb-6">
              {detalhesPresencial.map((l) => (
                <li
                  key={l}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 bg-surface/50 border border-surface-line text-sm text-ink-soft"
                >
                  <MapPin className="w-4 h-4 text-ink-faint shrink-0" />
                  {l}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col sm:flex-row gap-3">
              <a
                href={CONTATO_IEP_TALKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-red-deep text-white font-bold text-sm hover:bg-brand-red-deep/90 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Fale com o {CONTATO_IEP_TALKS.nome}
              </a>
              <Link
                href="/agenda/"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-brand-silver/50 text-brand-silver font-bold text-sm hover:bg-brand-silver/10 hover:border-brand-silver transition-all"
              >
                Ver a agenda
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
