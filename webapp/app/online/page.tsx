import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Wifi,
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  MapPin,
  Globe2,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { agendaEvents } from '@/lib/agenda-events'

const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`
const FORM_URL = 'https://forms.gle/jpK8bR4houvAXTwm9'

export const metadata: Metadata = {
  title:
    'Conversação em Inglês Online Grátis — Toda Segunda às 20h | English Talk Time',
  description:
    'Grupo de conversação em inglês online e gratuito, toda segunda às 20h–21h30 via Google Meet. Treino de fala estruturado para profissionais de tech do Brasil inteiro. Ferramentas de apoio com IA inclusas.',
  keywords: [
    'praticar inglês online',
    'praticar inglês online grátis',
    'conversação em inglês online',
    'grupo de conversação online',
    'conversação em inglês online segunda',
    'treino de fala em inglês online',
    'grupo para falar inglês online',
    'inglês online via Google Meet',
    'english speaking club online',
    'inglês para tech online',
  ],
  alternates: { canonical: '/online/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Conversação em Inglês Online — Toda Segunda 20h | ETT',
    description:
      'Grupo de conversação semanal online e gratuito. Treino de fala estruturado com ferramentas de apoio com IA. Aberto a todo o Brasil.',
    url: `${SITE_URL}/online/`,
    images: [
      {
        url: '/images/ETT-top01.png',
        width: 1200,
        height: 630,
        alt: 'Conversação em inglês online toda segunda — grupo ETT',
      },
    ],
  },
}

const today = new Date().toISOString().slice(0, 10)
const proximosOnline = agendaEvents
  .filter((e) => e.type === 'online' && e.date >= today)
  .slice(0, 8)

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
      serviceType: 'Grupo de Conversação em Inglês Online',
      name: 'Conversação em Inglês Online — Toda Segunda 20h',
      description:
        'Encontros online semanais, gratuitos e estruturados de treino de fala em inglês via Google Meet. Para profissionais de Tecnologia, Dados, IA e BI de todo o Brasil.',
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'Country', name: 'Brasil' },
      audience: {
        '@type': 'Audience',
        audienceType:
          'Profissionais e estudantes de Tecnologia, Dados, IA, BI e Cloud',
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
        url: FORM_URL,
      },
      url: `${SITE_URL}/online/`,
    },
    ...proximosOnline.slice(0, 4).map((e) => ({
      '@type': 'Event',
      name: 'Encontro Online ETT — Grupo de Conversação em Inglês',
      description:
        'Encontro semanal online de conversação em inglês via Google Meet — treino de fala guiado com a comunidade ETT. Gratuito e aberto.',
      startDate: `${e.date}T${e.startTime}:00-03:00`,
      endDate: `${e.date}T${e.endTime}:00-03:00`,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
      location: {
        '@type': 'VirtualLocation',
        url: `${SITE_URL}/online/`,
        name: 'Online · Google Meet',
      },
      organizer: { '@id': ORG_ID },
      isAccessibleForFree: true,
      inLanguage: ['pt-BR', 'en'],
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/online/`,
        validFrom: '2026-01-01T00:00:00-03:00',
      },
      image: `${SITE_URL}/images/ETT-top01.png`,
      url: `${SITE_URL}/online/`,
    })),
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

      <main className="bg-dark min-h-screen pt-16">
        {/* HERO */}
        <section className="relative section-padding overflow-hidden hero-grid">
          <div className="absolute inset-0 bg-gradient-to-b from-tech-blue/8 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-6">
                <Wifi className="w-3.5 h-3.5" />
                Online · Toda Segunda · 20h
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Conversação em Inglês Online —{' '}
                <span className="gradient-text">Toda Segunda às 20h</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
                Grupo de conversação semanal <strong className="text-white">gratuito</strong>{' '}
                via Google Meet. 1h30 de treino de fala estruturado, com ferramentas de apoio
                com IA. Aberto a profissionais de tech do Brasil inteiro.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neon-green text-dark font-bold text-base hover:bg-neon-green/90 transition-all hover:shadow-neon-green"
                >
                  Receber o link do próximo encontro
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="#datas"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-dark-border text-white font-semibold hover:border-tech-blue/50 hover:bg-dark-card transition-all"
                >
                  Ver próximas datas
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-dark-border bg-dark-card text-sm text-gray-300">
                  <Clock className="w-4 h-4 text-tech-blue" />
                  20h–21h30
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-dark-border bg-dark-card text-sm text-gray-300">
                  <Wifi className="w-4 h-4 text-tech-blue" />
                  Google Meet
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-dark-border bg-dark-card text-sm text-gray-300">
                  <Globe2 className="w-4 h-4 text-tech-blue" />
                  Brasil inteiro
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-dark-border bg-dark-card text-sm text-neon-green font-medium">
                  Gratuito
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="section-padding bg-dark-secondary border-y border-dark-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Como funciona o <span className="gradient-text">encontro online</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Sem catraca, sem mensalidade. Você se inscreve, recebe o link, entra na sala
                e participa.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[
                {
                  n: '1',
                  title: 'Inscrição',
                  body: 'Preenche o formulário com nome, email e nível. Demora 2 minutos.',
                },
                {
                  n: '2',
                  title: 'Recebe o link',
                  body: 'A gente manda o link do Google Meet + a agenda do mês + materiais iniciais das ferramentas.',
                },
                {
                  n: '3',
                  title: 'Entra na sala',
                  body: 'Segunda às 20h, abre o Meet. Grupo pequeno (15-25 pessoas) — todo mundo fala.',
                },
                {
                  n: '4',
                  title: 'Treina e volta',
                  body: '1h30 de conversação guiada. Sai com o vocabulário do dia anotado e a tarefa pro próximo encontro.',
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="bg-dark-card border border-dark-border rounded-2xl p-5 card-hover relative overflow-hidden"
                >
                  <span className="absolute top-3 right-4 text-5xl font-black text-tech-blue/15 leading-none select-none">
                    {s.n}
                  </span>
                  <h3 className="font-bold text-white text-base mb-2 pr-8 relative">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed relative">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROXIMAS DATAS */}
        <section id="datas" className="section-padding bg-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-4">
                Próximas Segundas
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Próximas datas <span className="gradient-text">online</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Todo encontro online segue o mesmo formato: 20h–21h30, Google Meet, treino de fala
                guiado com tópico anunciado antes.
              </p>
            </div>

            {proximosOnline.length === 0 ? (
              <p className="text-center text-gray-400 max-w-md mx-auto">
                Sem datas online confirmadas nos próximos dias.
                <br />
                <Link href="/agenda/" className="text-tech-blue underline mt-2 inline-block">
                  Ver agenda completa
                </Link>
              </p>
            ) : (
              <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-3">
                {proximosOnline.map((ev) => {
                  const dayNum = ev.dateLabel.split(' ')[0]
                  const monthAbbr = ev.dateLabel.split(' de ')[1].slice(0, 3)
                  return (
                    <div
                      key={ev.date}
                      className="relative bg-dark-card border border-tech-blue/20 rounded-xl p-3.5 card-hover"
                    >
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 w-14 rounded-lg border border-tech-blue/30 bg-tech-blue/5 text-center py-1.5">
                          <div className="text-[10px] uppercase tracking-wider font-bold text-tech-blue">
                            {ev.weekday.slice(0, 3).toLowerCase()}
                          </div>
                          <div className="text-white font-black text-xl leading-none my-0.5">
                            {dayNum}
                          </div>
                          <div className="text-gray-500 text-[10px] uppercase tracking-wider">
                            {monthAbbr}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-tech-blue/10 text-tech-blue border border-tech-blue/30">
                              <Wifi className="w-2.5 h-2.5" />
                              online
                            </span>
                            <span className="ml-auto inline-flex items-center gap-1 text-xs text-gray-400">
                              <Clock className="w-3 h-3" />
                              {ev.time}
                            </span>
                          </div>
                          <h3 className="font-bold text-white text-sm leading-snug mb-1 truncate">
                            {ev.title}
                          </h3>
                          <p className="text-xs text-gray-500 leading-snug truncate">
                            Online · Google Meet
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            <div className="text-center mt-8">
              <Link
                href="/agenda/"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-green text-sm transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Ver agenda completa (online + presencial)
              </Link>
            </div>
          </div>
        </section>

        {/* POR QUE GRUPO */}
        <section className="section-padding bg-dark-secondary border-y border-dark-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Não é aula 1-on-1.{' '}
                  <span className="gradient-text">É grupo. Por isso funciona.</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Pra destravar a conversação, você precisa de coisas que aula individual
                  não entrega.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  {
                    title: 'Múltiplos sotaques e vocabulários',
                    body: 'Em grupo você ouve gente diferente — sotaque do nordeste, do sul, profissional de dados, de UX, de cloud. É o que você vai encontrar no mercado real.',
                  },
                  {
                    title: 'Turn-taking de verdade',
                    body: 'Interromper educadamente, concordar, discordar, mudar de assunto, pedir esclarecimento. Em aula 1-on-1 o professor te dá espaço. Em grupo, você toma o espaço — como na vida real.',
                  },
                  {
                    title: 'Networking internacional',
                    body: 'Os participantes do ETT são profissionais e estudantes de tech do Brasil inteiro. Sai um job remoto, sai uma indicação, sai um colega pra praticar fora dos encontros.',
                  },
                  {
                    title: 'Hábito comunitário',
                    body: 'Quem pratica em grupo cria rotina. Aula 1-on-1 é fácil de cancelar — "tava cansado". Grupo gera compromisso ("a galera vai estar lá").',
                  },
                ].map((b) => (
                  <div
                    key={b.title}
                    className="bg-dark-card border border-dark-border rounded-2xl p-5"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-tech-blue shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-white text-base mb-2">{b.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{b.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CROSS-LINK CURITIBA */}
        <section className="section-padding bg-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-dark-card border border-neon-green/30 rounded-3xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-neon-green font-semibold mb-1">
                    Mora em Curitiba?
                  </div>
                  <h3 className="font-bold text-white text-xl md:text-2xl">
                    Tem presencial também — toda semana
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-5">
                Pra quem está em Curitiba ou região, além do online de segunda, tem encontro
                presencial semanal em rotação pelo IEP, UTFPR, Hard Rock Cafe e Habitat. Nada
                te impede de fazer os dois.
              </p>
              <Link
                href="/curitiba/"
                className="inline-flex items-center gap-2 text-neon-green font-semibold hover:text-neon-green/80 transition-colors"
              >
                Ver encontros presenciais em Curitiba <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section-padding bg-dark-secondary border-t border-dark-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-dark-card border border-tech-blue/30 rounded-3xl p-10 md:p-14 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/8 to-neon-green/8 pointer-events-none" />
              <div className="relative">
                <Users className="w-10 h-10 text-tech-blue mx-auto mb-5" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  A próxima segunda <span className="gradient-text">vai te encontrar falando</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-7 max-w-xl mx-auto">
                  Inscrição grátis em 2 minutos. Recebe o link do Google Meet, a agenda
                  completa e o material de boas-vindas.
                </p>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-neon-green text-dark font-bold text-base hover:bg-neon-green/90 transition-all hover:shadow-neon-green-lg"
                >
                  Quero o link do próximo encontro online
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-gray-500 text-xs mt-4 italic">
                  Gratuito. Sem compromisso. Sem spam.
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
