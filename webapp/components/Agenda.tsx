'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock,
  ExternalLink,
  MapPin,
  MessageCircle,
  Navigation,
  PartyPopper,
  UserCheck,
  Video,
  Wifi,
} from 'lucide-react'
import {
  CONTATO_IEP_TALKS,
  IEP_ENDERECO,
  IEP_MAPA,
  REINICIO,
  anuncioReinicioAtivo,
  eventosFuturos,
  type AgendaEvent,
} from '@/lib/agenda-events'

const SEMANAS = 4
const SPEAK_URL = 'https://ett-speak.vercel.app/'

/** "2026-11-16" → "16/11" */
const curta = (iso: string) => `${iso.slice(8, 10)}/${iso.slice(5, 7)}`

/* Só o IEP Talks como presencial (decisão #2 de 01/08/2026, reconfirmada em 31/10):
   UTFPR, Hard Rock e Habitat saíram da copy. */

const primeiraVez = [
  { icon: UserCheck, titulo: 'Sem cadastro', texto: 'Não precisa se inscrever nem ter plano. É só aparecer no horário.' },
  { icon: CalendarDays, titulo: 'Qualquer nível', texto: 'Quem está começando participa junto com quem já conversa com mais facilidade.' },
  { icon: Video, titulo: 'Online pelo navegador', texto: 'A sala abre direto no navegador, sem instalar nada. No IEP, basta chegar.' },
]

export default function Agenda() {
  /**
   * Lista calculada no navegador, não no build: o site é export estático e um
   * build de semanas atrás mostraria encontros que já aconteceram (era o que
   * acontecia até 27/07/2026, com a agenda parada em "11 de maio a 4 de junho").
   */
  const [events, setEvents] = useState<AgendaEvent[] | null>(null)
  const [hojeIso, setHojeIso] = useState<string | null>(null)
  const [anuncio, setAnuncio] = useState(false)
  useEffect(() => {
    const hoje = new Date()
    setEvents(eventosFuturos(SEMANAS, hoje))
    setHojeIso(
      `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, '0')}-${String(hoje.getDate()).padStart(2, '0')}`,
    )
    setAnuncio(anuncioReinicioAtivo(hoje))
  }, [])

  const proximo = (tipo: AgendaEvent['type']) => events?.find((e) => e.type === tipo)
  const aindaNaoVoltou = (tipo: AgendaEvent['type']) =>
    !!hojeIso && hojeIso < (tipo === 'online' ? REINICIO.online : REINICIO.presencial)

  const periodo =
    events && events.length > 0
      ? `${events[0].dateLabel} a ${events[events.length - 1].dateLabel}`
      : 'próximas semanas'

  const onlineProx = proximo('online')
  const iepProx = proximo('presencial')

  return (
    <main className="bg-surface min-h-screen pt-16">
      {/* HERO */}
      <section className="pt-16 pb-12 md:pt-20 relative overflow-hidden hero-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative max-w-5xl text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-6">
            Gratuito e aberto
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink mb-5 leading-tight">
            <span className="gradient-text">Agenda</span> ETT
          </h1>
          <p className="text-ink-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Dois encontros de conversação em inglês por semana: online às segundas, 20h, e o IEP
            Talks aos sábados, 10h, em Curitiba.
          </p>

          {anuncio && (
            <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-5 py-3 rounded-2xl bg-brand-red/10 border border-brand-red/30 text-ink-soft">
              <PartyPopper className="w-5 h-5 text-brand-red" />
              <strong className="text-ink">
                {aindaNaoVoltou('online') ? 'Os encontros estão voltando.' : 'Os encontros voltaram.'}
              </strong>
              <span>
                Online a partir de <strong className="text-ink">segunda, {curta(REINICIO.online)}</strong> · IEP
                Talks a partir de <strong className="text-ink">sábado, {curta(REINICIO.presencial)}</strong>
              </span>
            </div>
          )}
        </div>
      </section>

      {/* OS DOIS ENCONTROS */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Online */}
            <div className="bg-surface-card border border-surface-line rounded-2xl p-7 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-silver/10 border border-brand-silver/30 flex items-center justify-center">
                    <Wifi className="w-6 h-6 text-brand-silver" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-brand-silver font-semibold">Online</div>
                    <h2 className="font-bold text-ink text-xl">Encontro de segunda</h2>
                  </div>
                </div>
                {aindaNaoVoltou('online') && (
                  <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-bold bg-brand-red-deep text-white">
                    Volta {curta(REINICIO.online)}
                  </span>
                )}
              </div>
              <ul className="space-y-2.5 text-ink-soft mb-6">
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-brand-red shrink-0" />
                  Toda segunda, das 20h às 21h30
                </li>
                <li className="flex items-center gap-2.5">
                  <Video className="w-4 h-4 text-brand-red shrink-0" />
                  Na sala do ETT Speak, direto no navegador
                </li>
                <li className="flex items-center gap-2.5">
                  <CalendarDays className="w-4 h-4 text-brand-red shrink-0" />
                  {onlineProx ? (
                    <span>
                      Próximo: <strong className="text-ink">segunda, {onlineProx.dateLabel}</strong>
                    </span>
                  ) : (
                    <span className="h-5 w-40 rounded bg-surface-alt animate-pulse" />
                  )}
                </li>
              </ul>
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
                  href="/#inscricao"
                  className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-lg border border-surface-line text-ink-soft font-semibold text-sm hover:border-brand-red/40 hover:text-ink transition-all"
                >
                  Receber o lembrete
                </Link>
              </div>
            </div>

            {/* IEP Talks */}
            <div className="bg-surface-card border border-brand-red/30 rounded-2xl p-7 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-brand-red font-semibold">Presencial · Curitiba</div>
                    <h2 className="font-bold text-ink text-xl">IEP Talks</h2>
                  </div>
                </div>
                {aindaNaoVoltou('presencial') && (
                  <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-bold bg-brand-red-deep text-white">
                    Volta {curta(REINICIO.presencial)}
                  </span>
                )}
              </div>
              <ul className="space-y-2.5 text-ink-soft mb-6">
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-brand-red shrink-0" />
                  Todo sábado, das 10h às 12h · entrada franca
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-1" />
                  <span>
                    IEP, Instituto de Engenharia do Paraná
                    <span className="block text-sm text-ink-muted">{IEP_ENDERECO}</span>
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CalendarDays className="w-4 h-4 text-brand-red shrink-0" />
                  {iepProx ? (
                    <span>
                      Próximo: <strong className="text-ink">sábado, {iepProx.dateLabel}</strong>
                    </span>
                  ) : (
                    <span className="h-5 w-40 rounded bg-surface-alt animate-pulse" />
                  )}
                </li>
              </ul>
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <a
                  href={CONTATO_IEP_TALKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:flex-[1.6] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-red-deep text-white font-bold text-sm hover:bg-brand-red-deep/90 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Dúvidas? Fale com o {CONTATO_IEP_TALKS.nome}
                </a>
                <a
                  href={IEP_MAPA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-surface-line text-ink-soft font-semibold text-sm hover:border-brand-red/40 hover:text-ink transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  Como chegar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRÓXIMAS DATAS */}
      <section className="py-16 md:py-20 bg-surface-alt border-y border-surface-line">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-4">
              Próximas datas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
              Encontros de <span className="gradient-text">{periodo}</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-3">
            {events === null
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={`skeleton-${i}`}
                    className="h-[104px] rounded-xl border border-surface-line bg-surface-card animate-pulse"
                  />
                ))
              : events.map((ev, i) => {
                  const isOnline = ev.type === 'online'
                  const Icon = isOnline ? Wifi : MapPin
                  const dayNum = ev.dateLabel.split(' ')[0]
                  const monthAbbr = ev.dateLabel.split(' de ')[1].slice(0, 3)
                  const weekdayAbbr = ev.weekday.slice(0, 3).toLowerCase()
                  const primeiraDaVolta = ev.date === (isOnline ? REINICIO.online : REINICIO.presencial)
                  return (
                    <motion.div
                      key={ev.date + ev.type}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.3, delay: (i % 4) * 0.04 }}
                      className={`relative bg-surface-card border rounded-xl p-4 ${
                        isOnline ? 'border-surface-line' : 'border-brand-red/20'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`shrink-0 w-14 rounded-lg border text-center py-1.5 ${
                            isOnline ? 'border-brand-silver/30 bg-brand-silver/5' : 'border-brand-red/30 bg-brand-red/5'
                          }`}
                        >
                          <div
                            className={`text-[10px] uppercase tracking-wider font-bold ${
                              isOnline ? 'text-brand-silver' : 'text-brand-red'
                            }`}
                          >
                            {weekdayAbbr}
                          </div>
                          <div className="text-ink font-black text-xl leading-none my-0.5">{dayNum}</div>
                          <div className="text-ink-subtle text-[10px] uppercase tracking-wider">{monthAbbr}</div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5 mb-1">
                            <span
                              className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${
                                isOnline
                                  ? 'bg-brand-silver/10 text-brand-silver border-brand-silver/30'
                                  : 'bg-brand-red/10 text-brand-red border-brand-red/30'
                              }`}
                            >
                              <Icon className="w-2.5 h-2.5" />
                              {ev.type}
                            </span>
                            {primeiraDaVolta && anuncio && (
                              <span className="inline-flex px-1.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-red-deep text-white">
                                Volta
                              </span>
                            )}
                            {ev.partner && (
                              <span className="inline-flex px-1.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-brand-silver/10 text-brand-silver border border-brand-silver/30">
                                {ev.partner}
                              </span>
                            )}
                            <span className="ml-auto inline-flex items-center gap-1 text-xs text-ink-muted">
                              <Clock className="w-3 h-3" />
                              {ev.time}
                            </span>
                          </div>

                          <h3 className="font-bold text-ink text-sm leading-snug mb-1">{ev.title}</h3>
                          <p className="text-xs text-ink-subtle leading-snug">
                            {isOnline ? ev.location : ev.venueAddress ?? ev.location}
                          </p>
                          {ev.timeNote && <p className="text-[11px] mt-1 leading-tight text-ink-subtle">{ev.timeNote}</p>}

                          {ev.links && ev.links.length > 0 && (
                            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                              {ev.links.map((l) => (
                                <a
                                  key={l.url}
                                  href={l.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-red hover:underline"
                                >
                                  {l.label}
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
          </div>
        </div>
      </section>

      {/* PRIMEIRA VEZ */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-8 text-center">Primeira vez?</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {primeiraVez.map((p) => (
              <div key={p.titulo} className="bg-surface-card border border-surface-line rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-brand-red" />
                </div>
                <h3 className="font-bold text-ink text-lg mb-1.5">{p.titulo}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="inscricao" className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-surface-card border border-brand-red/30 rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-red/8 to-brand-silver/8 pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-5 leading-tight">
                Quer receber as datas dos <span className="gradient-text">próximos encontros</span>?
              </h2>
              <p className="text-ink-muted text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                Deixe nome e e-mail e a gente avisa quando tiver encontro novo, online ou presencial.
                Aparecer para conhecer continua livre, sem cadastro.
              </p>
              <Link
                href="/#inscricao"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-brand-red-deep text-white font-bold text-sm hover:bg-brand-red-deep/90 transition-all"
              >
                Tenho interesse
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-ink-subtle mt-4">Sem custo e sem compromisso.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
