import type { Metadata } from 'next'

const SITE_URL = 'https://englishtalktime.com.br'

export const metadata: Metadata = {
  title: 'ETT — English Conversation Group for Tech Professionals | Online & Curitiba',
  description:
    'English conversation group with guided speaking practice and AI-powered learning tools. Weekly online meetings (every Monday) and in-person sessions in Curitiba, Brazil. For Tech, Data, AI and BI professionals worldwide.',
  keywords: [
    'english conversation group',
    'english conversation club',
    'speaking practice english',
    'english for tech professionals',
    'english for data engineer',
    'english for developers',
    'english for ai engineer',
    'english speaking club Brazil',
    'english conversation group Brazil',
    'practice english online',
    'AI tools learn english',
    'unblock english speaking',
    'english fluency program',
    'english for international job market',
    'Fluent Formula',
    'English Talk Time',
    'ETT',
  ],
  alternates: {
    canonical: `${SITE_URL}/en/`,
    languages: {
      'pt-BR': `${SITE_URL}/`,
      en: `${SITE_URL}/en/`,
      es: `${SITE_URL}/es/`,
      'x-default': `${SITE_URL}/`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${SITE_URL}/en/`,
    siteName: 'English Talk Time – ETT',
    title: 'ETT — English Conversation Group for Tech Professionals | Online & Curitiba',
    description:
      'Weekly online conversation meetings + AI-powered learning tools. Built for Tech, Data, AI and BI professionals targeting the international job market.',
    images: [
      {
        url: '/images/ETT-top01.webp',
        width: 1200,
        height: 630,
        alt: 'English Talk Time — English conversation group for tech professionals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ETT — English Conversation Group for Tech Professionals',
    description:
      'Online speaking practice every Monday + AI-powered learning tools. For tech, data, AI and BI professionals.',
    images: ['/images/ETT-top01.webp'],
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
