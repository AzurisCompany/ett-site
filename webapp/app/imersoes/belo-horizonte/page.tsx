import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImersaoDetalhe from '@/components/ImersaoDetalhe'

const SITE_URL = 'https://englishtalktime.com.br'
// Quem organiza é a Cherry Top (ela define inscrição, preço e condições). Sem `offers`:
// o preço é sob consulta com ela, e o ETT não publica faixa de valores.
const CHERRY_TOP = { '@type': 'Organization', name: 'Cherry Top', url: 'https://cherrytop.com.br' }

const bhLocation = {
  '@type': 'Place',
  name: 'Immersion Village Brazil',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lagoa Santa',
    addressRegion: 'MG',
    addressCountry: 'BR',
  },
}

const bhTurmas = [
  {
    slug: 'omega-zeta-set-2026',
    name: 'Imersão em Inglês em Lagoa Santa (região de BH) — Turma OMEGA / ZETA (set/2026, realizada)',
    startDate: '2026-09-03T09:00:00-03:00',
    endDate: '2026-09-07T18:00:00-03:00',
    description:
      '5 dias de imersão em inglês da Cherry Top na Immersion Village Brazil (Lagoa Santa/MG). Advanced + Upper Intermediate + Intermediate. Hospedagem, refeições e certificado de 90h inclusos.',
  },
  {
    slug: 'gama-delta-out-2026',
    name: 'Imersão em Inglês em Lagoa Santa (região de BH) — Turma GAMA / DELTA (out/2026, realizada)',
    startDate: '2026-10-08T09:00:00-03:00',
    endDate: '2026-10-12T18:00:00-03:00',
    description:
      '5 dias de imersão em inglês da Cherry Top na Immersion Village Brazil. Pré-Intermediate + Intermediate + Advanced. Hospedagem, refeições e certificado de 90h inclusos.',
  },
  {
    slug: 'alpha-beta-nov-2026',
    name: 'Imersão em Inglês em Lagoa Santa (região de BH) — Turma ALPHA / BETA (nov/2026)',
    startDate: '2026-11-18T09:00:00-03:00',
    endDate: '2026-11-22T18:00:00-03:00',
    description:
      '5 dias de imersão em inglês da Cherry Top na Immersion Village Brazil. Elementary + iniciantes (com onboarding online prévio). Hospedagem, refeições e certificado de 90h inclusos.',
  },
]

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
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Belo Horizonte',
          item: `${SITE_URL}/imersoes/belo-horizonte/`,
        },
      ],
    },
    ...bhTurmas.map((t) => ({
      '@type': 'Event',
      '@id': `${SITE_URL}/imersoes/belo-horizonte/#${t.slug}`,
      name: t.name,
      description: t.description,
      startDate: t.startDate,
      endDate: t.endDate,
      // Turmas passadas continuam Scheduled (aconteceram na data); o nome diz "realizada".
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: bhLocation,
      organizer: CHERRY_TOP,
      maximumAttendeeCapacity: 8,
      inLanguage: ['en', 'pt-BR'],
      image: `${SITE_URL}/imersoes/bh-2026/01.jpeg`,
      url: `${SITE_URL}/imersoes/belo-horizonte/`,
    })),
  ],
}

export const metadata: Metadata = {
  title:
    'Imersão em Inglês em Lagoa Santa (região de BH) — Cherry Top · Immersion Village',
  description:
    'Imersão em inglês oferecida pela Cherry Top na Immersion Village Brazil, em Lagoa Santa (região de BH): 5 dias com hospedagem e refeições, até 8 pessoas por turma, certificado de 90h. Turmas de set e out/2026 realizadas; turma de 18–22/nov/2026. Divulgada pelo English Talk Time.',
  keywords: [
    'imersão em inglês Belo Horizonte',
    'imersão em inglês BH',
    'curso intensivo de inglês BH',
    'treino de fala em inglês BH',
    'Immersion Village Brazil',
    'Cherry Top Belo Horizonte',
    'Lagoa Santa inglês',
    'imersão em inglês com hospedagem',
  ],
  alternates: {
    canonical: '/imersoes/belo-horizonte/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Imersão em Inglês em Lagoa Santa (região de BH) — Cherry Top',
    description:
      '5 dias de imersão na sede da Cherry Top no Brasil, em Lagoa Santa (região de BH). Turmas de set e out/2026 realizadas; turma de nov/2026.',
    url: 'https://englishtalktime.com.br/imersoes/belo-horizonte/',
    images: [
      {
        url: '/imersoes/bh-2026/01.jpeg',
        width: 1200,
        height: 630,
        alt: 'Imersão em inglês em Lagoa Santa (região de BH) — Immersion Village Brazil',
      },
    ],
  },
}

const fotosBH = [
  '01', '02', '03', '04', '05', '06', '07', '08',
  '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
].map((n) => `/imersoes/bh-2026/${n}.jpeg`)

export default function BeloHorizontePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <ImersaoDetalhe
        eyebrow="Imersão Lagoa Santa (região de BH) • Cherry Top"
        city="Lagoa Santa (região de BH)"
        uf="MG"
        headline="5 dias na sede da Cherry Top, usando inglês o dia inteiro."
        intro="A Cherry Top recebe até 8 pessoas por turma na Immersion Village Brazil, em Lagoa Santa (região de BH), por 5 dias seguidos em inglês — com hospedagem, refeições e atividades inclusas e certificado de 90 horas emitido pela Cherry Top. A imersão é oferecida e conduzida pela Cherry Top; o ETT divulga e repassa o contato de quem tem interesse. Pra praticar antes e depois, os encontros do ETT são gratuitos e as ferramentas do ETT Player estão abertas pra experimentar."
        turmas={[
          {
            label: 'Turma 1 — OMEGA / ZETA',
            when: '03 a 07 de setembro de 2026',
            detalhe: 'Advanced + Upper Intermediate + Intermediate',
            fim: '2026-09-07',
          },
          {
            label: 'Turma 2 — GAMA / DELTA',
            when: '08 a 12 de outubro de 2026',
            detalhe: 'Pré-Intermediate + Intermediate + Advanced',
            fim: '2026-10-12',
          },
          {
            label: 'Turma 3 — ALPHA / BETA',
            when: '18 a 22 de novembro de 2026',
            detalhe: 'Elementary + iniciantes (com onboarding online prévio)',
            fim: '2026-11-22',
          },
        ]}
        format="5 dias de imersão presencial — formato Cherry Top"
        local={{
          name: 'Immersion Village Brazil',
          address: 'Lagoa Santa — MG (a 20 km do aeroporto de Confins)',
        }}
        lideranca="Equipe Cherry Top na Immersion Village Brazil"
        metodologia="Bonding + Native-like"
        highlights={[
          'Sede da Cherry Top no Brasil',
          'Até 8 pessoas por turma',
          'Inglês 24 horas por dia — regra "english only" durante toda a imersão',
          'Turmas organizadas por nível',
          'Certificado de 90 horas emitido pela Cherry Top',
        ]}
        inclusos={[
          'Programa completo de 5 dias',
          'Hospedagem na Immersion Village',
          'Refeições completas',
          'Material didático',
          'Certificado de 90 horas',
        ]}
        naoInclusos={[
          'Deslocamento até BH/Confins',
          'Gastos pessoais',
        ]}
        fotos={fotosBH}
        fotosLegenda="Fotos da Immersion Village Brazil e de edições anteriores da Cherry Top."
        ctaLabel="Quero participar da imersão em Lagoa Santa (região de BH)"
        vagasInfo="Até 8 pessoas por turma"
      />
      <Footer />
    </>
  )
}
