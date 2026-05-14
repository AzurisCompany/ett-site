import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import FormulaFluente from '@/components/FormulaFluente'
import Footer from '@/components/Footer'

const SITE_URL = 'https://englishtalktime.com.br'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Fórmula Fluente',
      item: `${SITE_URL}/ff/`,
    },
  ],
}

export const metadata: Metadata = {
  title:
    'Fórmula Fluente — Como Treinar Fala em Inglês com Método | Metodologia ETT',
  description:
    'A metodologia que sustenta o treino de fala do ETT: Threshold + Imersão = Fluência. Os 4 pilares (escrever, falar, ouvir, ler), os 4 estágios da competência, plano em 10 passos e as 3 camadas de imersão. Adaptado de Frank Florida — +365 mil alunos.',
  keywords: [
    'como treinar fala em inglês',
    'metodologia para destravar inglês',
    'Fórmula Fluente',
    'Frank Florida método',
    'threshold inglês',
    'fluência em inglês método',
    'aprender inglês com método',
    'pilares da fluência',
  ],
  alternates: {
    canonical: '/ff/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Fórmula Fluente — Metodologia do treino de fala em inglês do ETT',
    description:
      'Threshold + Imersão = Fluência. O método que explica por que algumas pessoas chegam à fluência em meses e outras passam anos travadas.',
    url: 'https://englishtalktime.com.br/ff/',
    images: [
      {
        url: '/images/ETT-top01.png',
        width: 1200,
        height: 630,
        alt: 'Fórmula Fluente — metodologia de treino de fala em inglês do ETT',
      },
    ],
  },
}

export default function FormulaFluentePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <FormulaFluente />
      <Footer />
    </>
  )
}
