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
    'Fórmula Fluente — o Método de Frank Florida para Organizar o Estudo de Inglês | ETT',
  description:
    'Resumo do método da Fórmula Fluente, de Frank Florida, parceira do ETT: Threshold + Imersão = Fluência. Os 4 pilares (escrever, falar, ouvir, ler), os 4 estágios da competência, o plano em 10 passos e as 3 camadas de imersão.',
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
    languages: {
      'pt-BR': `${SITE_URL}/ff/`,
      'x-default': `${SITE_URL}/ff/`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Fórmula Fluente — o método de Frank Florida, parceiro do ETT',
    description:
      'Threshold + Imersão. O método de Frank Florida, da Fórmula Fluente, que organiza o estudo em blocos curtos, vocabulário relevante e repetição orientada. O ETT usa e apoia o método.',
    url: 'https://englishtalktime.com.br/ff/',
    images: [
      {
        url: '/images/og-ett-2026.png',
        width: 1200,
        height: 630,
        alt: 'Fórmula Fluente — método de Frank Florida, parceiro do ETT',
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
