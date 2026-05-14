import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Agenda from '@/components/Agenda'
import Footer from '@/components/Footer'
import { agendaEvents } from '@/lib/agenda-events'

const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`

export const metadata: Metadata = {
  title:
    'Agenda de Encontros — Grupo de Conversação em Inglês ETT | Online & Curitiba',
  description:
    'Próximos encontros para treinar a fala em inglês: online toda segunda (20h–21h30) e presenciais em Curitiba (IEP, UTFPR, Hard Rock, Habitat). Conversação guiada com ferramentas de apoio. Participe gratuitamente.',
  keywords: [
    'agenda grupo de conversação em inglês',
    'encontros para praticar inglês Curitiba',
    'praticar inglês online toda segunda',
    'treino de fala em inglês',
    'meetup inglês Curitiba',
    'conversação em inglês online grátis',
    'IEP Curitiba inglês',
    'UTFPR inglês',
    'Hard Rock Curitiba inglês',
    'Habitat Curitiba inglês',
  ],
  alternates: {
    canonical: '/agenda/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Agenda ETT — Próximos encontros de conversação em inglês',
    description:
      'Online toda segunda + presencial semanal em Curitiba (IEP, UTFPR, Hard Rock, Habitat). Treino de fala em inglês com ferramentas de apoio.',
    url: 'https://englishtalktime.com.br/agenda/',
    images: [
      {
        url: '/images/ETT-top01.png',
        width: 1200,
        height: 630,
        alt: 'Agenda ETT — encontros de conversação em inglês em Curitiba e online',
      },
    ],
  },
}

function buildAgendaJsonLd() {
  const today = new Date().toISOString().slice(0, 10)
  const futureEvents = agendaEvents.filter((e) => e.date >= today)

  const eventNodes = futureEvents.map((e) => {
    const isOnline = e.type === 'online'
    const startDate = `${e.date}T${e.startTime}:00-03:00`
    const endDate = `${e.date}T${e.endTime}:00-03:00`
    const description = isOnline
      ? 'Encontro online de conversação em inglês — treino de fala guiado com a comunidade ETT. Aberto e gratuito, via Google Meet.'
      : `Encontro presencial em ${e.city ?? 'Curitiba/PR'} para treinar a fala em inglês — conversação guiada com a comunidade ETT. Aberto e gratuito.`

    const location = isOnline
      ? {
          '@type': 'VirtualLocation',
          url: `${SITE_URL}/agenda/`,
          name: 'Online · Google Meet',
        }
      : {
          '@type': 'Place',
          name: e.location,
          address: {
            '@type': 'PostalAddress',
            streetAddress: e.venueAddress ?? 'Curitiba, PR, Brasil',
            addressLocality: 'Curitiba',
            addressRegion: 'PR',
            addressCountry: 'BR',
          },
        }

    return {
      '@type': 'Event',
      name: e.title,
      description,
      startDate,
      endDate,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: isOnline
        ? 'https://schema.org/OnlineEventAttendanceMode'
        : 'https://schema.org/OfflineEventAttendanceMode',
      location,
      organizer: { '@id': ORG_ID },
      isAccessibleForFree: true,
      inLanguage: ['pt-BR', 'en'],
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/agenda/`,
        validFrom: '2026-01-01T00:00:00-03:00',
      },
      audience: {
        '@type': 'Audience',
        audienceType:
          'Profissionais e estudantes de Tecnologia, Dados, IA, BI e Cloud',
      },
      image: `${SITE_URL}/images/ETT-top01.png`,
      url: `${SITE_URL}/agenda/`,
    }
  })

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Agenda',
            item: `${SITE_URL}/agenda/`,
          },
        ],
      },
      ...eventNodes,
    ],
  }
}

export default function AgendaPage() {
  const jsonLd = buildAgendaJsonLd()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Agenda />
      <Footer />
    </>
  )
}
