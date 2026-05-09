import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://englishtalktime.com.br'),
  title: 'ETT – English Talk Time | Programa de Aceleração de Inglês para o Mercado Internacional',
  description:
    'Pare de travar no inglês. O ETT é o programa de aceleração para profissionais de Tecnologia, Dados, IA e BI que precisam de inglês funcional para o mercado internacional. Metodologia Fórmula Fluente + IA + Comunidade.',
  keywords: [
    'inglês para tech',
    'inglês para programadores',
    'inglês acelerado',
    'aprender inglês rápido',
    'inglês mercado internacional',
    'dados inteligência artificial inglês',
    'English Talk Time',
    'ETT',
    'DSSBR',
    'GUBigData',
  ],
  authors: [{ name: 'DSSBR & GUBigData IA' }],
  creator: 'DSSBR & GUBigData IA',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://englishtalktime.com.br',
    siteName: 'English Talk Time – ETT',
    title: 'ETT – Do inglês travado ao inglês funcional para o mercado internacional',
    description:
      'Programa de aceleração de inglês para profissionais de Tecnologia, Dados, IA e BI. Metodologia Fórmula Fluente + ferramentas com IA + comunidade DSSBR.',
    images: [
      {
        url: '/images/ETT-top01.png',
        width: 1200,
        height: 630,
        alt: 'English Talk Time – Programa de Aceleração de Inglês',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ETT – English Talk Time | Inglês para o Mercado Internacional',
    description:
      'Aceleração de inglês para profissionais de tech. Metodologia Fórmula Fluente + IA. Comunidade DSSBR & GUBigData.',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'English Talk Time – ETT',
  description:
    'Programa de aceleração de inglês para profissionais de Tecnologia, Dados, IA e BI. Parte do ecossistema DSSBR & GUBigData IA.',
  url: 'https://englishtalktime.com.br',
  logo: '/images/Logo-ETT.png',
  foundingOrganization: {
    '@type': 'Organization',
    name: 'DSSBR & GUBigData IA',
  },
  educationalCredentialAwarded: 'Certificado de Inglês Funcional para o Mercado Internacional',
  teaches: 'Inglês para profissionais de Tecnologia e Dados',
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
      <body className="bg-dark text-gray-100 antialiased">{children}</body>
    </html>
  )
}
