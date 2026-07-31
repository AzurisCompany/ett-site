import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Planos from '@/components/Planos'
import Footer from '@/components/Footer'
import { PRECO_ADESAO, PRECO_MENSAL, faqCobranca } from '@/lib/planos'

const SITE_URL = 'https://englishtalktime.com.br'

export const metadata: Metadata = {
  title: `Planos e preços do ETT — adesão de R$ ${PRECO_ADESAO} | English Talk Time`,
  description: `Encontros de conversação abertos e gratuitos. Adesão de R$ ${PRECO_ADESAO} (cobrança única) com 2 mentorias individuais e 30 dias de plataforma. Depois: Trilha de Aceleração gratuita por dedicação ou Trilha Livre por R$ ${PRECO_MENSAL}/mês.`,
  keywords: [
    'quanto custa English Talk Time',
    'preço curso de inglês para tech',
    'plano mensal inglês profissionais',
    'grupo de conversação em inglês preço',
    'mentoria de inglês individual',
  ],
  alternates: {
    canonical: '/planos/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: `Planos do ETT — uma entrada de R$ ${PRECO_ADESAO}, depois você escolhe`,
    description: `Teste 30 dias sem cartão. Adesão de R$ ${PRECO_ADESAO} com 2 mentorias individuais. Depois, mantenha a rotina e não pague nada, ou assine por R$ ${PRECO_MENSAL}/mês.`,
    url: `${SITE_URL}/planos/`,
    images: [
      {
        url: '/images/ETT-top01.webp',
        width: 1200,
        height: 630,
        alt: 'ETT — English Talk Time',
      },
    ],
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCobranca.map((f) => ({
    '@type': 'Question',
    name: f.pergunta,
    acceptedAnswer: { '@type': 'Answer', text: f.resposta },
  })),
}

export default function PlanosPage() {
  return (
    <main className="min-h-screen bg-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <Planos />
      <Footer />
    </main>
  )
}
