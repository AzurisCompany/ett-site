import type { Metadata } from 'next'

const SITE_URL = 'https://englishtalktime.com.br'

export const metadata: Metadata = {
  title: 'Schedule — Weekly Online English Conversation Meetings | ETT',
  description:
    'Next ETT online English conversation meetings — every Monday from 8pm to 9:30pm BRT (GMT-3). Free, structured speaking practice via Google Meet. Open to tech professionals worldwide.',
  keywords: [
    'english conversation meeting schedule',
    'weekly english speaking practice online',
    'free english meetup online',
    'monday english conversation',
    'english speaking club schedule',
    'english conversation group calendar',
  ],
  alternates: {
    canonical: `${SITE_URL}/en/schedule/`,
    languages: {
      'pt-BR': `${SITE_URL}/agenda/`,
      en: `${SITE_URL}/en/schedule/`,
      es: `${SITE_URL}/es/agenda/`,
      'x-default': `${SITE_URL}/agenda/`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${SITE_URL}/en/schedule/`,
    siteName: 'English Talk Time – ETT',
    title: 'Schedule — Weekly Online English Conversation Meetings',
    description:
      'Online English speaking practice every Monday, 8pm–9:30pm BRT (GMT-3). Free, structured, open globally.',
    images: [
      {
        url: '/images/ETT-top01.webp',
        width: 1200,
        height: 630,
        alt: 'ETT Schedule — Online English conversation meetings',
      },
    ],
  },
}

export default function EnScheduleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
