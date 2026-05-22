import type { Metadata } from 'next'

const SITE_URL = 'https://englishtalktime.com.br'

export const metadata: Metadata = {
  title: 'The Fluent Formula — Science-Based English Fluency Method | ETT',
  description:
    'The Fluent Formula method: why some learners reach fluency in months while others stay stuck for years. Threshold + Immersion = Fluency. Adapted from Frank Florida (13 languages, 365,000+ students).',
  keywords: [
    'english fluency method',
    'fluent formula',
    'how to become fluent in english',
    'english speaking threshold',
    'high frequency vocabulary english',
    'frank florida method',
    'english fluency for tech professionals',
    'scientific method to learn english',
  ],
  alternates: {
    canonical: `${SITE_URL}/en/method/`,
    languages: {
      'pt-BR': `${SITE_URL}/ff/`,
      en: `${SITE_URL}/en/method/`,
      es: `${SITE_URL}/es/metodo/`,
      'x-default': `${SITE_URL}/ff/`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${SITE_URL}/en/method/`,
    siteName: 'English Talk Time – ETT',
    title: 'The Fluent Formula — Threshold + Immersion = Fluency',
    description:
      'Science-based English fluency method adapted from Frank Florida — 13 languages, 365,000+ students trained.',
    images: [
      {
        url: '/images/ETT-top01.webp',
        width: 1200,
        height: 630,
        alt: 'The Fluent Formula — English fluency method',
      },
    ],
  },
}

export default function EnMethodLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
