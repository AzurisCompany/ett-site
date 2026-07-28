'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Calendar,
  Clock,
  MapPin,
  Wifi,
  Users,
  Building2,
  GraduationCap,
  Music,
  Home,
  ExternalLink,
  ArrowRight,
  Lightbulb,
  BookMarked,
} from 'lucide-react'
import { eventosFuturos, type AgendaEvent } from '@/lib/agenda-events'

const SEMANAS = 4

const venues = [
  {
    icon: GraduationCap,
    name: 'IEP',
    desc: 'Instituto de Ensino e Pesquisa — parceiro pedagógico do ETT em Curitiba.',
  },
  {
    icon: Building2,
    name: 'UTFPR',
    desc: 'Universidade Tecnológica Federal do Paraná — alcance ao público universitário de TI.',
  },
  {
    icon: Music,
    name: 'Hard Rock',
    desc: 'Hard Rock Cafe — encontro descontraído fora do ambiente acadêmico.',
  },
  {
    icon: Home,
    name: 'Habitat',
    desc: 'Espaço Habitat — comunidade local, networking e prática de conversação.',
  },
]

export default function Agenda() {
  /**
   * Lista calculada no navegador, não no build: o site é export estático e um
   * build de semanas atrás mostraria encontros que já aconteceram (era o que
   * acontecia até 27/07/2026, com a agenda parada em "11 de maio a 4 de junho").
   */
  const [events, setEvents] = useState<AgendaEvent[] | null>(null)
  useEffect(() => {
    setEvents(eventosFuturos(SEMANAS))
  }, [])

  const onlineCount = events?.filter((e) => e.type === 'online').length ?? 0
  const presencialCount = events?.filter((e) => e.type === 'presencial').length ?? 0
  const periodo =
    events && events.length > 0
      ? `${events[0].dateLabel} a ${events[events.length - 1].dateLabel}`
      : 'próximas semanas'

  return (
    <main className="bg-dark min-h-screen pt-16">
      {/* HERO */}
      <section className="section-padding relative overflow-hidden hero-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-tech-blue/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-6">
              Próximos 30 dias
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="gradient-text">Agenda</span> ETT
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Online toda segunda. Presencial uma vez por semana, alternando entre IEP, UTFPR,
              Hard Rock e Habitat. Veja a próxima data e marque na sua agenda.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-tech-blue/30 bg-tech-blue/5">
                <Wifi className="w-5 h-5 text-tech-blue" />
                <span className="text-white font-bold text-lg">{onlineCount}</span>
                <span className="text-gray-400 text-sm">online</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neon-green/30 bg-neon-green/5">
                <Users className="w-5 h-5 text-neon-green" />
                <span className="text-white font-bold text-lg">{presencialCount}</span>
                <span className="text-gray-400 text-sm">presenciais</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-dark-border bg-dark-card">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span className="text-white font-bold text-lg">{events?.length ?? 0}</span>
                <span className="text-gray-400 text-sm">encontros</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RECORRÊNCIAS */}
      <section className="section-padding bg-dark-secondary border-t border-dark-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="bg-dark-card border border-tech-blue/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-tech-blue/10 border border-tech-blue/30 flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-tech-blue" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-tech-blue font-semibold">Recorrente</div>
                  <h3 className="font-bold text-white text-lg">Online · todas as segundas</h3>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                <Clock className="w-4 h-4" />
                <span>20h às 21h30</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sessão síncrona toda segunda à noite — prática de conversação ao vivo
                e suporte da comunidade.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="bg-dark-card border border-neon-green/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center">
                  <Users className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-neon-green font-semibold">Semanal</div>
                  <h3 className="font-bold text-white text-lg">Presencial · quartas ou quintas</h3>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                <MapPin className="w-4 h-4" />
                <span>4 locais em rotação · Curitiba/PR</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Um encontro por semana em local diferente: IEP, UTFPR, Hard Rock e Habitat.
                Networking, role-play e conversação ao vivo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
              Cronograma
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Encontros de <span className="gradient-text">{periodo}</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-3">
            {events === null
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={`skeleton-${i}`}
                    className="h-[96px] rounded-xl border border-dark-border bg-dark-card animate-pulse"
                  />
                ))
              : events.map((ev, i) => {
              const isOnline = ev.type === 'online'
              const Icon = isOnline ? Wifi : MapPin
              const dayNum = ev.dateLabel.split(' ')[0]
              const monthAbbr = ev.dateLabel.split(' de ')[1].slice(0, 3)
              const weekdayAbbr = ev.weekday.slice(0, 3).toLowerCase()
              return (
                <motion.div
                  key={ev.date}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.3, delay: (i % 4) * 0.04 }}
                  className={`relative bg-dark-card border rounded-xl p-3.5 card-hover ${
                    isOnline ? 'border-tech-blue/20' : 'border-neon-green/20'
                  } ${ev.highlight ? 'shadow-neon-green' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    {/* Date pill */}
                    <div
                      className={`shrink-0 w-14 rounded-lg border text-center py-1.5 ${
                        isOnline
                          ? 'border-tech-blue/30 bg-tech-blue/5'
                          : 'border-neon-green/30 bg-neon-green/5'
                      }`}
                    >
                      <div className={`text-[10px] uppercase tracking-wider font-bold ${
                        isOnline ? 'text-tech-blue' : 'text-neon-green'
                      }`}>
                        {weekdayAbbr}
                      </div>
                      <div className="text-white font-black text-xl leading-none my-0.5">
                        {dayNum}
                      </div>
                      <div className="text-gray-500 text-[10px] uppercase tracking-wider">
                        {monthAbbr}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span
                          className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${
                            isOnline
                              ? 'bg-tech-blue/10 text-tech-blue border-tech-blue/30'
                              : 'bg-neon-green/10 text-neon-green border-neon-green/30'
                          }`}
                        >
                          <Icon className="w-2.5 h-2.5" />
                          {ev.type}
                        </span>
                        {ev.partner && (
                          <span className="inline-flex px-1.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-tech-blue/10 text-tech-blue border border-tech-blue/30">
                            {ev.partner}
                          </span>
                        )}
                        <span className="ml-auto inline-flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          {ev.time}
                        </span>
                      </div>

                      <h3 className="font-bold text-white text-sm leading-snug mb-1 truncate">
                        {ev.title}
                      </h3>

                      <p className="text-xs text-gray-500 leading-snug truncate">
                        {ev.location}
                        {ev.city && <span className="text-gray-600"> · {ev.city}</span>}
                      </p>

                      {ev.timeNote && (
                        <p className={`text-[11px] mt-1 leading-tight ${
                          ev.highlight ? 'text-neon-green/80' : 'text-gray-500'
                        }`}>
                          {ev.timeNote}
                        </p>
                      )}

                      {ev.links && ev.links.length > 0 && (
                        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                          {ev.links.map((l) => (
                            <a
                              key={l.url}
                              href={l.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-neon-green hover:underline"
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

      {/* LOCAIS PRESENCIAIS */}
      <section className="section-padding bg-dark-secondary border-y border-dark-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
              4 Locais
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Nossos pontos de <span className="gradient-text">encontro</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A rotação semanal expõe a comunidade a contextos diferentes — acadêmico,
              corporativo, descontraído e local.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {venues.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-dark-card border border-dark-border rounded-2xl p-6 card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-neon-green/10 border border-neon-green/20 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-neon-green" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{v.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="inscricao" className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center bg-dark-card border border-neon-green/30 rounded-3xl p-10 md:p-14 shadow-neon-green relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-green/8 to-tech-blue/8 pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-neon-green" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-tech-blue/10 border border-tech-blue/30 flex items-center justify-center">
                  <BookMarked className="w-6 h-6 text-tech-blue" />
                </div>
              </div>

              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-5">
                Gratuito
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Quer receber as datas dos <span className="gradient-text">próximos encontros</span>?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                Deixe nome e e-mail e a gente avisa quando tiver encontro novo — online ou
                presencial. Aparecer para conhecer continua livre, sem cadastro.
              </p>

              <Link
                href="/#inscricao"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-neon-green text-black font-bold text-sm hover:bg-neon-green/90 transition-all hover:shadow-neon-green-lg"
              >
                Tenho interesse
                <ArrowRight className="w-4 h-4" />
              </Link>

              <p className="text-xs text-gray-500 mt-4">
                Sem custo. Sem venda no fim.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
