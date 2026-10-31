import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Imersoes from '@/components/Imersoes'
import Footer from '@/components/Footer'
import { faqsImersoes } from '@/lib/imersoes'

const SITE_URL = 'https://englishtalktime.com.br'

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
          name: 'Imersões',
          item: `${SITE_URL}/imersoes/`,
        },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Imersões em inglês oferecidas pela Cherry Top',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Imersão em Inglês em Curitiba (jul/2026)',
          url: `${SITE_URL}/imersoes/curitiba/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Imersão em Inglês em Belo Horizonte (set/out/nov 2026)',
          url: `${SITE_URL}/imersoes/belo-horizonte/`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Imersão em Inglês na Flórida, EUA (jan/fev 2027)',
          url: `${SITE_URL}/imersoes/florida/`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqsImersoes.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export const metadata: Metadata = {
  title:
    'Imersões em inglês oferecidas por parceiros — BH e Flórida | ETT',
  description:
    'Imersões em inglês oferecidas pela Cherry Top, no Brasil (Belo Horizonte) e nos EUA (Flórida). O English Talk Time divulga as turmas e complementa com ferramentas de prática e encontros de conversação.',
  keywords: [
    'imersão em inglês',
    'imersão em inglês Brasil',
    'imersão em inglês Curitiba',
    'imersão em inglês Belo Horizonte',
    'imersão em inglês Flórida',
    'imersão em inglês EUA',
    'treino intensivo de fala em inglês',
    'Cherry Top imersão',
    'Bonding Native-like',
    'destravar inglês imersão',
  ],
  alternates: {
    canonical: '/imersoes/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Imersões em inglês oferecidas pela Cherry Top',
    description:
      'Turmas no Brasil e nos EUA, oferecidas pela Cherry Top. O ETT complementa com ferramentas e encontros de conversação.',
    url: 'https://englishtalktime.com.br/imersoes/',
    images: [
      {
        url: '/images/og-ett-2026.png',
        width: 1200,
        height: 630,
        alt: 'Imersões em inglês oferecidas pela Cherry Top',
      },
    ],
  },
}

export default function ImersoesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Imersoes />
      <Footer />
    </>
  )
}
