import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Analytics from '@/components/Analytics'
import CookieConsent from '@/components/CookieConsent'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://englishtalktime.com.br'),
  title: 'ETT — Grupo de Conversação em Inglês e Treino de Fala | Curitiba & Online',
  description:
    'Grupo de conversação em inglês com treino de fala guiado e ferramentas de apoio com IA. Encontros semanais online (toda segunda) e presenciais em Curitiba — IEP, UTFPR, Hard Rock e Habitat. Para profissionais de Tecnologia, Dados, IA e BI.',
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
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://englishtalktime.com.br',
    siteName: 'English Talk Time – ETT',
    title: 'ETT — Grupo de Conversação em Inglês | Treino de Fala com Ferramentas de IA',
    description:
      'Encontros semanais para treinar a fala em inglês — online toda segunda e presenciais em Curitiba. Método Fórmula Fluente + ferramentas com IA + comunidade DSSBR & GUBigData.',
    images: [
      {
        url: '/images/ETT-top01.png',
        width: 1200,
        height: 630,
        alt: 'English Talk Time — Grupo de Conversação em Inglês em Curitiba e Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ETT — Grupo de Conversação em Inglês | Treino de Fala com Ferramentas',
    description:
      'Treine a fala em inglês em encontros semanais online e presenciais em Curitiba — com método, ferramentas de IA e comunidade tech.',
    images: ['/images/ETT-top01.png'],
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
        'Grupo de conversação em inglês e treino de fala com ferramentas de apoio com IA. Encontros semanais online e presenciais em Curitiba para profissionais de Tecnologia, Dados, IA e BI.',
      slogan: 'Do inglês travado ao inglês funcional para o mercado internacional',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/Logo-ETT.png`,
      },
      image: `${SITE_URL}/images/ETT-top01.png`,
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
        'grupo de conversação em inglês, treino de fala em inglês, praticar inglês Curitiba, conversação online, encontros para falar inglês, English speaking club, inglês para tech, Fórmula Fluente',
      educationalCredentialAwarded:
        'Certificado de Inglês Funcional para o Mercado Internacional',
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
        'Grupo de conversação em inglês com treino de fala e ferramentas de apoio com IA.',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'pt-BR',
    },
  ],
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
      <body className="bg-dark text-gray-100 antialiased">
        {children}
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  )
}
