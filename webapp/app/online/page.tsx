import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Wifi,
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  MapPin,
  Globe2,
  Bell,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AvisoPausa from '@/components/encontros/AvisoPausa'
import ProximosOnline from '@/components/encontros/ProximosOnline'
import { SPEAK_URL } from '@/components/encontros/speak'
import { REINICIO } from '@/lib/agenda-events'

const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`
/* O encontro é aberto e sem cadastro: o CTA primário é a sala (ETT Speak) e a agenda.
   O formulário da home (RD Station) fica só como lembrete opcional das datas por e-mail.
   Ver AUDITORIA-CONTEUDO-2026-11-09.md (A6–A9). */
const FORM_URL = '/#inscricao'

export const metadata: Metadata = {
  title:
    'Conversação em Inglês Online Grátis — Toda Segunda às 20h | English Talk Time',
  description:
    'Encontro de conversação em inglês online e gratuito, toda segunda das 20h às 21h30, na sala do ETT Speak, direto no navegador. Aberto a qualquer pessoa, sem cadastro e sem pagar.',
  keywords: [
    'praticar inglês online',
    'praticar inglês online grátis',
    'conversação em inglês online',
    'grupo de conversação online',
    'conversação em inglês online segunda',
    'treino de fala em inglês online',
    'grupo para falar inglês online',
    'english speaking club online',
    'encontro de inglês online gratuito',
  ],
  alternates: { canonical: '/online/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Conversação em Inglês Online — Toda Segunda 20h | ETT',
    description:
      'Encontro semanal de conversação em inglês, online e gratuito, na sala do ETT Speak. Aberto a qualquer pessoa, sem cadastro.',
    url: `${SITE_URL}/online/`,
    images: [
      {
        url: '/images/og-ett-2026.png',
        width: 1200,
        height: 630,
        alt: 'Conversação em inglês online toda segunda — English Talk Time',
      },
    ],
  },
}

/* Sem datas no JSON-LD: o build pode ficar semanas sem rodar e uma data escrita
   no build vira data vencida. O encontro vai como série semanal (eventSchedule). */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Conversação Online',
          item: `${SITE_URL}/online/`,
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/online/#service`,
      serviceType: 'Encontro de Conversação em Inglês Online',
      name: 'Conversação em Inglês Online — Toda Segunda 20h',
      description:
        'Encontros online semanais e gratuitos de conversação em inglês, na sala do ETT Speak, direto no navegador. Abertos a qualquer pessoa, sem cadastro.',
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'Country', name: 'Brasil' },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/online/`,
      },
      url: `${SITE_URL}/online/`,
    },
    {
      '@type': 'Event',
      name: 'Encontro Online ETT — Conversação em Inglês',
      description:
        'Encontro semanal online de conversação em inglês na sala do ETT Speak. Gratuito, aberto a qualquer pessoa, sem cadastro.',
      startDate: `${REINICIO.online}T20:00:00-03:00`,
      endDate: `${REINICIO.online}T21:30:00-03:00`,
      eventSchedule: {
        '@type': 'Schedule',
        byDay: 'https://schema.org/Monday',
        repeatFrequency: 'P1W',
        startDate: REINICIO.online,
        startTime: '20:00',
        endTime: '21:30',
        scheduleTimezone: 'America/Sao_Paulo',
      },
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
      location: {
        '@type': 'VirtualLocation',
        url: SPEAK_URL,
        name: 'Online · sala do ETT Speak',
      },
      organizer: { '@id': ORG_ID },
      isAccessibleForFree: true,
      inLanguage: ['en', 'pt-BR'],
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/online/`,
      },
      image: `${SITE_URL}/images/og-ett-2026.png`,
      url: `${SITE_URL}/online/`,
    },
  ],
}

export default function OnlinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="bg-surface min-h-screen pt-16">
        {/* HERO */}
        <section className="relative section-padding overflow-hidden hero-grid">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-silver/8 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-silver/30 text-brand-silver bg-brand-silver/5 mb-6">
                <Wifi className="w-3.5 h-3.5" />
                Online · Toda Segunda · 20h
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink mb-6 leading-tight">
                Conversação em Inglês Online —{' '}
                <span className="gradient-text">Toda Segunda às 20h</span>
              </h1>
              <p className="text-ink-soft text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-6">
                Encontro semanal de conversação, <strong className="text-ink">gratuito</strong>, na
                sala do <strong className="text-ink">ETT Speak</strong>, direto no navegador. 1h30
                pra praticar a fala com outras pessoas. Aberto a qualquer pessoa, de qualquer lugar,
                sem cadastro.
              </p>
              <AvisoPausa tipo="online" className="mb-6" />
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={SPEAK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-red-deep text-white font-bold text-base hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red"
                >
                  Entrar na sala
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link
                  href="/agenda/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-surface-line text-ink font-semibold hover:border-brand-silver/50 hover:bg-surface-card transition-all"
                >
                  Ver a agenda
                </Link>
              </div>
              <p className="text-ink-subtle text-sm mt-4">
                A sala pede nome e e-mail na entrada, sem criar conta.{' '}
                <a href={FORM_URL} className="underline hover:text-brand-red">
                  Receber lembrete das datas por e-mail
                </a>
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-surface-line bg-surface-card text-sm text-ink-soft">
                  <Clock className="w-4 h-4 text-brand-silver" />
                  20h–21h30
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-surface-line bg-surface-card text-sm text-ink-soft">
                  <Wifi className="w-4 h-4 text-brand-silver" />
                  ETT Speak, no navegador
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-surface-line bg-surface-card text-sm text-ink-soft">
                  <Globe2 className="w-4 h-4 text-brand-silver" />
                  De qualquer lugar
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-surface-line bg-surface-card text-sm text-brand-red font-medium">
                  Gratuito
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="section-padding bg-surface-alt border-y border-surface-line">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight">
                Como funciona o <span className="gradient-text">encontro online</span>
              </h2>
              <p className="text-ink-muted text-lg">
                Sem inscrição, sem catraca e sem cartão. É só entrar na sala no horário.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[
                {
                  n: '1',
                  title: 'Veja a data',
                  body: 'Toda segunda, das 20h às 21h30 (horário de Brasília). As próximas datas estão logo abaixo e na agenda.',
                },
                {
                  n: '2',
                  title: 'Abra a sala',
                  body: 'No horário, clique em "Entrar na sala". O ETT Speak abre direto no navegador, sem instalar nada.',
                },
                {
                  n: '3',
                  title: 'Diga quem é',
                  body: 'A sala pede nome e e-mail na entrada. Não precisa criar conta nem pagar.',
                },
                {
                  n: '4',
                  title: 'Converse',
                  body: '1h30 de conversa em inglês com outras pessoas. Qualquer nível pode participar; rende mais a partir do A2.',
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="bg-surface-card border border-surface-line rounded-2xl p-5 card-hover relative overflow-hidden"
                >
                  <span className="absolute top-3 right-4 text-5xl font-black text-brand-silver/15 leading-none select-none">
                    {s.n}
                  </span>
                  <h3 className="font-bold text-ink text-base mb-2 pr-8 relative">
                    {s.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed relative">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROXIMAS DATAS */}
        <section id="datas" className="section-padding bg-surface">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-silver/30 text-brand-silver bg-brand-silver/5 mb-4">
                Próximas Segundas
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight">
                Próximas datas <span className="gradient-text">online</span>
              </h2>
              <p className="text-ink-muted text-lg">
                Todo encontro online segue o mesmo formato: 20h–21h30, na sala do ETT Speak.
              </p>
              <AvisoPausa tipo="online" className="mt-5" />
            </div>

            <ProximosOnline quantidade={4} />

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8">
              <Link
                href="/agenda/"
                className="inline-flex items-center gap-2 text-ink-muted hover:text-brand-red text-sm transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Ver agenda completa (online + presencial)
              </Link>
              <a
                href={FORM_URL}
                className="inline-flex items-center gap-2 text-ink-muted hover:text-brand-red text-sm transition-colors"
              >
                <Bell className="w-4 h-4" />
                Receber lembrete das datas por e-mail
              </a>
            </div>
          </div>
        </section>

        {/* POR QUE GRUPO */}
        <section className="section-padding bg-surface-alt border-y border-surface-line">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight">
                  Não é aula. <span className="gradient-text">É conversa em grupo.</span>
                </h2>
                <p className="text-ink-muted text-lg max-w-2xl mx-auto">
                  O encontro complementa o estudo individual e os cursos: é o espaço pra usar o
                  inglês com outras pessoas.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  {
                    title: 'Vozes e sotaques diferentes',
                    body: 'Em grupo você ouve gente de áreas, cidades e níveis diferentes, cada um com seu jeito de falar.',
                  },
                  {
                    title: 'Revezar a fala de verdade',
                    body: 'Interromper com educação, concordar, discordar, mudar de assunto, pedir esclarecimento: coisas que só se praticam com mais de uma pessoa na conversa.',
                  },
                  {
                    title: 'Gente pra praticar junto',
                    body: 'Os encontros reúnem pessoas que também querem praticar. Dá pra combinar conversa fora do encontro com quem você conhecer lá.',
                  },
                  {
                    title: 'Hábito semanal',
                    body: 'Dia e hora fixos ajudam a criar rotina: toda segunda às 20h tem um lugar pra falar inglês.',
                  },
                ].map((b) => (
                  <div
                    key={b.title}
                    className="bg-surface-card border border-surface-line rounded-2xl p-5"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-silver shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-ink text-base mb-2">{b.title}</h3>
                        <p className="text-ink-muted text-sm leading-relaxed">{b.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CROSS-LINK CURITIBA */}
        <section className="section-padding bg-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-surface-card border border-brand-red/30 rounded-3xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand-red font-semibold mb-1">
                    Mora em Curitiba?
                  </div>
                  <h3 className="font-bold text-ink text-xl md:text-2xl">
                    Tem presencial também — toda semana
                  </h3>
                </div>
              </div>
              <p className="text-ink-muted leading-relaxed mb-5">
                Pra quem está em Curitiba ou região, além do online de segunda, tem o IEP Talks:
                encontro presencial todo sábado, das 10h às 12h, no IEP. Nada te impede de fazer os
                dois.
              </p>
              <Link
                href="/curitiba/"
                className="inline-flex items-center gap-2 text-brand-red font-semibold hover:text-brand-red/80 transition-colors"
              >
                Ver encontros presenciais em Curitiba <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section-padding bg-surface-alt border-t border-surface-line">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-surface-card border border-brand-silver/30 rounded-3xl p-10 md:p-14 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-silver/8 to-brand-red/8 pointer-events-none" />
              <div className="relative">
                <Users className="w-10 h-10 text-brand-silver mx-auto mb-5" />
                <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight">
                  Segunda, 20h: <span className="gradient-text">venha conversar</span>
                </h2>
                <p className="text-ink-muted text-lg leading-relaxed mb-5 max-w-xl mx-auto">
                  Não precisa de inscrição. No horário, é só abrir a sala do ETT Speak.
                </p>
                <AvisoPausa tipo="online" className="mb-6" />
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a
                    href={SPEAK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-red-deep text-white font-bold text-base hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red-lg"
                  >
                    Entrar na sala
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <Link
                    href="/agenda/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-surface-line text-ink font-semibold hover:border-brand-silver/50 transition-all"
                  >
                    Ver a agenda
                  </Link>
                </div>
                <p className="text-ink-subtle text-sm mt-5">
                  Prefere ser avisado?{' '}
                  <a href={FORM_URL} className="underline hover:text-brand-red">
                    Receber lembrete das datas por e-mail
                  </a>{' '}
                  (você recebe o link da sala e as datas dos encontros).
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
