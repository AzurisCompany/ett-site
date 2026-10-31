import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Analytics from '@/components/Analytics'
import CookieConsent from '@/components/CookieConsent'
import WhatsappFloat from '@/components/WhatsappFloat'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://englishtalktime.com.br'),
  title: 'English Talk Time — Ferramentas, conversação e parceiros para praticar inglês',
  description:
    'Plataforma de apoio à prática do inglês: ferramentas digitais com IA, encontros de conversação gratuitos — online toda segunda, 20h, e IEP Talks em Curitiba aos sábados, 10h — e parceiros que oferecem cursos e imersões.',
  keywords: [
    // intenção: praticar / treinar a fala
    'grupo de conversação em inglês',
    'conversação em inglês',
    'praticar inglês',
    'treinar inglês falando',
    'treino de fala em inglês',
    'speaking practice português',
    'encontros para falar inglês',
    'onde treinar inglês',
    'destravar inglês',
    'english speaking club',
    'english conversation club',
    'meetup inglês',
    'conversation club',
    // local
    'grupo de conversação em inglês Curitiba',
    'praticar inglês em Curitiba',
    'conversação em inglês Curitiba',
    'encontro de inglês Curitiba',
    'aulas de conversação Curitiba',
    'inglês Curitiba grátis',
    // online
    'praticar inglês online',
    'conversação em inglês online',
    'grupo de conversação online segunda',
    'praticar inglês online grátis',
    // tech (preservado)
    'inglês para tech',
    'inglês para programadores',
    'inglês para devs',
    'inglês para dados e IA',
    'inglês mercado internacional',
    // ferramentas / método
    'praticar inglês com IA',
    'ferramentas para aprender inglês',
    'plataforma para praticar inglês',
    'ferramentas para praticar inglês',
    'Fórmula Fluente',
    // marca
    'English Talk Time',
    'ETT',
    'DSSBR',
    'GUBigData',
  ],
  authors: [{ name: 'DSSBR & GUBigData IA' }],
  creator: 'DSSBR & GUBigData IA',
  publisher: 'English Talk Time – ETT',
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': 'https://englishtalktime.com.br/',
      en: 'https://englishtalktime.com.br/en/',
      es: 'https://englishtalktime.com.br/es/',
      'x-default': 'https://englishtalktime.com.br/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://englishtalktime.com.br',
    siteName: 'English Talk Time – ETT',
    title: 'English Talk Time — Pratique mais inglês com ferramentas, conversação e parceiros',
    description:
      'Ferramentas digitais para a prática diária, encontros de conversação gratuitos (online e em Curitiba) e parceiros com cursos e imersões.',
    images: [
      {
        url: '/images/og-ett-2026.png',
        width: 1200,
        height: 630,
        alt: 'English Talk Time — ferramentas, conversação e parceiros para praticar inglês',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'English Talk Time — Pratique mais inglês',
    description:
      'Ferramentas de prática, encontros de conversação gratuitos e parceiros com cursos e imersões.',
    images: ['/images/og-ett-2026.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const SITE_URL = 'https://englishtalktime.com.br'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'EducationalOrganization', 'LocalBusiness'],
      '@id': `${SITE_URL}/#organization`,
      name: 'English Talk Time – ETT',
      alternateName: ['ETT', 'English Talk Time'],
      description:
        'Plataforma de apoio à prática do inglês: ferramentas digitais com IA, encontros de conversação gratuitos (online e presenciais em Curitiba) e uma rede de parceiros que oferecem cursos e imersões.',
      slogan: 'Tecnologia, conversação e parceiros para você praticar mais inglês',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/ett-logo-2026.png`,
      },
      image: `${SITE_URL}/images/og-ett-2026.png`,
      foundingOrganization: {
        '@type': 'Organization',
        name: 'DSSBR & GUBigData IA',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Curitiba',
        addressRegion: 'PR',
        addressCountry: 'BR',
      },
      areaServed: [
        { '@type': 'City', name: 'Curitiba' },
        { '@type': 'AdministrativeArea', name: 'Paraná' },
        { '@type': 'Country', name: 'Brasil' },
        { '@type': 'VirtualLocation', name: 'Online' },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        availableLanguage: ['Portuguese', 'English'],
        areaServed: 'BR',
      },
      sameAs: [],
      keywords:
        'grupo de conversação em inglês, treino de fala em inglês, praticar inglês Curitiba, conversação online, encontros para falar inglês, destravar inglês, falar inglês fluente, rotina diária para estudar inglês, English speaking club, English conversation group Brazil, conversation club Curitiba, speaking practice, inglês para tech, inglês para Data Engineer, inglês para BI, inglês para DevOps, inglês para AI Engineer, role play entrevista inglês, preparar entrevista inglês tech, LinkedIn inglês profissional, ferramentas com IA para inglês, prompts ChatGPT inglês, séries com legenda inglês, audiobook inglês, Fórmula Fluente',
      teaches: [
        'English conversation practice',
        'Speaking training in English',
        'Business English for tech professionals',
        'English for Data, AI, BI and Cloud professionals',
      ],
      knowsLanguage: ['en', 'pt-BR'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'English Talk Time',
      description:
        'Plataforma de apoio à prática do inglês: ferramentas, conversação e parceiros.',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'pt-BR',
    },
  ],
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface text-ink antialiased">
        {children}
        <WhatsappFloat />
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  )
}
