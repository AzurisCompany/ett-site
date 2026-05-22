import type { Metadata } from 'next'

const SITE_URL = 'https://englishtalktime.com.br'

export const metadata: Metadata = {
  title: 'Agenda — Encuentros Online Semanales en Inglés | ETT',
  description:
    'Próximos encuentros online de conversación en inglés ETT — todos los lunes de 20h a 21h30 BRT (GMT-3). Práctica de habla estructurada y gratuita vía Google Meet. Abierto a profesionales tech de toda LATAM.',
  keywords: [
    'agenda conversación en inglés',
    'práctica de inglés online semanal',
    'meetup inglés online gratis',
    'conversación inglés lunes',
    'club de conversación inglés agenda',
    'grupo conversación inglés LATAM calendario',
  ],
  alternates: {
    canonical: `${SITE_URL}/es/agenda/`,
    languages: {
      'pt-BR': `${SITE_URL}/agenda/`,
      en: `${SITE_URL}/en/schedule/`,
      es: `${SITE_URL}/es/agenda/`,
      'x-default': `${SITE_URL}/agenda/`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_419',
    url: `${SITE_URL}/es/agenda/`,
    siteName: 'English Talk Time – ETT',
    title: 'Agenda — Encuentros Online Semanales en Inglés',
    description:
      'Práctica de speaking en inglés online todos los lunes, 20h–21h30 BRT (GMT-3). Gratis, estructurado, abierto a LATAM.',
    images: [
      {
        url: '/images/ETT-top01.webp',
        width: 1200,
        height: 630,
        alt: 'Agenda ETT — Encuentros online de conversación en inglés',
      },
    ],
  },
}

export default function EsAgendaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
