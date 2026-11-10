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
          name: 'Cherry Top Business School — inglês de negócios em Curitiba (dez/2026)',
          url: `${SITE_URL}/imersoes/business-school/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Imersão em Inglês em Lagoa Santa, região de BH (turmas de 2026)',
          url: `${SITE_URL}/imersoes/belo-horizonte/`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Imersão em Inglês na Flórida, EUA (jan–mar/2027)',
          url: `${SITE_URL}/imersoes/florida/`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Imersão em Inglês em Curitiba — edição de jul/2026 (realizada)',
          url: `${SITE_URL}/imersoes/curitiba/`,
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
    'Imersões em inglês oferecidas pela Cherry Top — Business School em Curitiba, região de BH e Flórida | ETT',
  description:
    'Imersões e cursos em inglês oferecidos pela Cherry Top: Business School de inglês de negócios em Curitiba (dez/2026), imersão em Lagoa Santa, região de BH, e imersão internacional na Flórida (2027). O English Talk Time divulga as turmas e repassa o contato de quem tem interesse.',
  keywords: [
    'imersão em inglês',
    'imersão em inglês Brasil',
    'imersão em inglês Curitiba',
    'imersão em inglês Belo Horizonte',
    'Cherry Top Business School',
    'inglês para negócios Curitiba',
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
      'Business School em Curitiba, imersão na região de BH e na Flórida, oferecidas pela Cherry Top. O ETT divulga e repassa o contato de quem tem interesse.',
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
