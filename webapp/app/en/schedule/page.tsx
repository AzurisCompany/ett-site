import Link from 'next/link'
import { ArrowRight, Calendar, Clock, Wifi, Globe, Users, MapPin } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { agendaEvents } from '@/lib/agenda-events'

const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`
const LEAD_FORM_URL = 'https://forms.gle/jpK8bR4houvAXTwm9'

function buildJsonLd() {
  const today = new Date().toISOString().slice(0, 10)
  const futureOnline = agendaEvents.filter((e) => e.date >= today && e.type === 'online')

  const eventNodes = futureOnline.map((e) => ({
    '@type': 'Event',
    name: 'ETT — Online English Conversation Meeting',
    description:
      'Free online English conversation meeting — structured speaking practice with the ETT community, via Google Meet.',
    startDate: `${e.date}T${e.startTime}:00-03:00`,
    endDate: `${e.date}T${e.endTime}:00-03:00`,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    location: {
      '@type': 'VirtualLocation',
      url: `${SITE_URL}/en/schedule/`,
      name: 'Online · Google Meet',
    },
    organizer: { '@id': ORG_ID },
    isAccessibleForFree: true,
    inLanguage: ['en', 'pt-BR'],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: LEAD_FORM_URL,
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Tech, Data, AI, BI and Cloud professionals worldwide',
    },
    image: `${SITE_URL}/images/ETT-top01.webp`,
    url: `${SITE_URL}/en/schedule/`,
  }))

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/en/` },
          { '@type': 'ListItem', position: 2, name: 'Schedule', item: `${SITE_URL}/en/schedule/` },
        ],
      },
      ...eventNodes,
    ],
  }
}

function monthName(month: string): string {
  const months: Record<string, string> = {
    janeiro: 'January',
    fevereiro: 'February',
    março: 'March',
    abril: 'April',
    maio: 'May',
    junho: 'June',
    julho: 'July',
    agosto: 'August',
    setembro: 'September',
    outubro: 'October',
    novembro: 'November',
    dezembro: 'December',
  }
  return months[month.toLowerCase()] ?? month
}

function weekdayEn(weekday: string): string {
  const days: Record<string, string> = {
    Segunda: 'Monday',
    Terça: 'Tuesday',
    Quarta: 'Wednesday',
    Quinta: 'Thursday',
    Sexta: 'Friday',
    Sábado: 'Saturday',
    Domingo: 'Sunday',
  }
  return days[weekday] ?? weekday
}

function formatDateLabelEn(dateLabel: string): string {
  // "11 de maio" -> "May 11"
  const parts = dateLabel.split(' de ')
  if (parts.length !== 2) return dateLabel
  const [day, month] = parts
  return `${monthName(month)} ${day}`
}

export default function EnSchedulePage() {
  const jsonLd = buildJsonLd()
  const today = new Date().toISOString().slice(0, 10)
  const onlineEvents = agendaEvents.filter((e) => e.date >= today && e.type === 'online').slice(0, 8)
  const inPersonCount = agendaEvents.filter((e) => e.date >= today && e.type === 'presencial').length

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
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-6">
                Online · every Monday
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Weekly online <span className="gradient-text">English conversation meetings</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
                Free structured speaking practice via Google Meet — every Monday from{' '}
                <strong className="text-white">8pm to 9:30pm BRT (GMT-3)</strong>.
                Open to tech professionals worldwide. Just sign up and we send you the link.
              </p>
              <a
                href={LEAD_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-neon-green text-dark font-bold text-base hover:bg-neon-green/90 transition-all hover:shadow-neon-green"
              >
                Sign up for the next meeting
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* INFO BAR */}
        <section className="bg-dark-secondary border-y border-dark-border py-8">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="flex items-start gap-3 bg-dark-card border border-dark-border rounded-xl p-4">
                <Clock className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-sm">Time</div>
                  <div className="text-gray-400 text-sm">Mondays · 8pm–9:30pm BRT (GMT-3)</div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-dark-card border border-dark-border rounded-xl p-4">
                <Wifi className="w-5 h-5 text-tech-blue shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-sm">Format</div>
                  <div className="text-gray-400 text-sm">Google Meet · 90 minutes</div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-dark-card border border-dark-border rounded-xl p-4">
                <Globe className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-sm">Open to</div>
                  <div className="text-gray-400 text-sm">Anywhere in the world</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UPCOMING EVENTS */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Upcoming <span className="gradient-text">online meetings</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Mark your calendar. New session every Monday — same time, same Google Meet link after sign up.
              </p>
            </div>

            {onlineEvents.length === 0 ? (
              <p className="text-center text-gray-400 max-w-md mx-auto">
                No confirmed online events in the coming days. Sign up to get notified when the next one is scheduled.
              </p>
            ) : (
              <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
                {onlineEvents.map((e) => {
                  const [day] = e.dateLabel.split(' de ')
                  const monthAbbr = formatDateLabelEn(e.dateLabel).split(' ')[0].slice(0, 3)
                  return (
                    <div
                      key={e.date}
                      className="bg-dark-card border border-tech-blue/20 rounded-xl p-4 card-hover"
                    >
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 w-16 rounded-lg border border-tech-blue/30 bg-tech-blue/5 text-center py-2">
                          <div className="text-[10px] uppercase tracking-wider font-bold text-tech-blue">
                            {weekdayEn(e.weekday).slice(0, 3)}
                          </div>
                          <div className="text-white font-black text-xl leading-none my-0.5">
                            {day}
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
                              8pm BRT
                            </span>
                          </div>
                          <h3 className="font-bold text-white text-sm leading-snug mb-1">
                            ETT Online Meeting
                          </h3>
                          <p className="text-xs text-gray-500 leading-snug">
                            Google Meet · 90 min · free
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            <div className="text-center mt-10">
              <a
                href={LEAD_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-neon-green text-dark font-bold text-base hover:bg-neon-green/90 transition-all hover:shadow-neon-green"
              >
                Sign up — get the meeting link
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* IN-PERSON MENTION */}
        {inPersonCount > 0 && (
          <section className="section-padding bg-dark-secondary border-y border-dark-border">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto bg-dark-card border border-neon-green/20 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-neon-green font-semibold mb-1">
                      In-person — Curitiba, Brazil
                    </div>
                    <h3 className="font-bold text-white text-lg md:text-xl leading-snug">
                      Are you in Curitiba? We also meet in person, weekly.
                    </h3>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                  We rotate between 4 venues in Curitiba (IEP, UTFPR, Hard Rock Cafe, Habitat / FIEP).
                  The in-person sessions are described in Portuguese — the schedule page in PT has all the details and venue addresses.
                </p>
                <Link
                  href="/agenda/"
                  className="inline-flex items-center gap-2 text-neon-green font-semibold hover:text-neon-green/80 transition-colors text-sm"
                >
                  See full schedule (in Portuguese) <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-dark-card border border-neon-green/30 rounded-3xl p-10 md:p-14 shadow-neon-green relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/8 to-tech-blue/8 pointer-events-none" />
              <div className="relative">
                <Users className="w-10 h-10 text-neon-green mx-auto mb-5" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Don't miss <span className="gradient-text">the next session</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-7 max-w-xl mx-auto">
                  Quick signup — you'll receive the Google Meet link, the welcome material and the
                  community access.
                </p>
                <a
                  href={LEAD_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-neon-green text-dark font-bold text-base hover:bg-neon-green/90 transition-all hover:shadow-neon-green-lg"
                >
                  Sign me up
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-gray-500 text-xs mt-4 italic">
                  Free. No commitment. No spam.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="en" />
    </>
  )
}
