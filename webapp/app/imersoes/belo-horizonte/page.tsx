import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImersaoDetalhe from '@/components/ImersaoDetalhe'

const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`

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
    name: 'Imersão em Inglês em BH — Turma OMEGA / ZETA (set/2026)',
    startDate: '2026-09-03T09:00:00-03:00',
    endDate: '2026-09-07T18:00:00-03:00',
    description:
      '5 dias de treino intensivo de fala em inglês na Immersion Village Brazil (Lagoa Santa/MG). Advanced + Upper Intermediate + Intermediate. Hospedagem, refeições e certificado de 90h inclusos.',
  },
  {
    name: 'Imersão em Inglês em BH — Turma GAMA / DELTA (out/2026)',
    startDate: '2026-10-08T09:00:00-03:00',
    endDate: '2026-10-12T18:00:00-03:00',
    description:
      '5 dias de treino intensivo de fala em inglês na Immersion Village Brazil. Pré-Intermediate + Intermediate + Advanced. Hospedagem, refeições e certificado de 90h inclusos.',
  },
  {
    name: 'Imersão em Inglês em BH — Turma ALPHA / BETA (nov/2026)',
    startDate: '2026-11-18T09:00:00-03:00',
    endDate: '2026-11-22T18:00:00-03:00',
    description:
      '5 dias de treino intensivo de fala em inglês na Immersion Village Brazil. Elementary + iniciantes (com onboarding online prévio). Hospedagem, refeições e certificado de 90h inclusos.',
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
      name: t.name,
      description: t.description,
      startDate: t.startDate,
      endDate: t.endDate,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: bhLocation,
      organizer: { '@id': ORG_ID },
      performer: {
        '@type': 'Organization',
        name: 'Cherry Top Business Communication',
        url: 'https://cherrytop.com.br',
      },
      maximumAttendeeCapacity: 8,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/LimitedAvailability',
        url: `${SITE_URL}/imersoes/belo-horizonte/`,
        validFrom: '2026-01-01T00:00:00-03:00',
      },
      inLanguage: ['en', 'pt-BR'],
      image: `${SITE_URL}/imersoes/bh-2026/01.jpeg`,
      url: `${SITE_URL}/imersoes/belo-horizonte/`,
    })),
  ],
}

export const metadata: Metadata = {
  title:
    'Imersão em Inglês em Belo Horizonte — Set · Out · Nov 2026 | Treino de Fala ETT × Cherry Top',
  description:
    '5 dias de treino intensivo de fala em inglês na Immersion Village Brazil (Lagoa Santa/MG). 3 turmas em 2026: 03–07/set, 08–12/out e 18–22/nov. 90h de certificado, 8 vagas por turma, hospedagem e refeições inclusas. Bonding + Native-like.',
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
    title: 'Imersão em Inglês em BH 2026 — ETT × Cherry Top',
    description:
      '5 dias de imersão total na sede oficial Cherry Top do Brasil. 3 turmas em set, out e nov 2026.',
    url: 'https://englishtalktime.com.br/imersoes/belo-horizonte/',
    images: [
      {
        url: '/imersoes/bh-2026/01.jpeg',
        width: 1200,
        height: 630,
        alt: 'Imersão em inglês em Belo Horizonte — Immersion Village Brazil',
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
        eyebrow="Imersão Belo Horizonte • Cherry Top"
        city="Belo Horizonte"
        uf="MG"
        headline="5 dias na sede oficial Cherry Top. Inglês 24 horas por dia."
        intro="Você desloca-se até a Immersion Village Brazil, em Lagoa Santa/MG, e vive em inglês com até 8 colegas durante 5 dias seguidos — hospedagem, refeições e atividades inclusas. Sai com certificado de 90 horas e a fluência acelerada pela metodologia Bonding + Native-like, validada em 40+ anos de Cherry Top."
        turmas={[
          {
            label: 'Turma 1 — OMEGA / ZETA',
            when: '03 a 07 de setembro de 2026',
            detalhe: 'Advanced + Upper Intermediate + Intermediate',
          },
          {
            label: 'Turma 2 — GAMA / DELTA',
            when: '08 a 12 de outubro de 2026',
            detalhe: 'Pré-Intermediate + Intermediate + Advanced',
          },
          {
            label: 'Turma 3 — ALPHA / BETA',
            when: '18 a 22 de novembro de 2026',
            detalhe: 'Elementary + iniciantes (com onboarding online prévio)',
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
          'Sede oficial Cherry Top — 40+ anos de história em imersão',
          'Apenas 8 vagas por turma — alto contato e feedback individual',
          'Inglês 24 horas por dia — regra "english only" durante toda a imersão',
          'Foco em tech: devs, dados, IA, BI e cloud',
          '3 turmas confirmadas (set, out, nov) — você escolhe a melhor para seu nível',
          'Certificado de 90 horas reconhecido Cherry Top',
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
        fotosLegenda="Fotos da Immersion Village Brazil e edições anteriores Cherry Top — o ambiente que vai te receber."
        ctaLabel="Quero participar da imersão em BH"
        vagasInfo="8 vagas por turma — 3 turmas (set · out · nov 2026)"
      />
      <Footer />
    </>
  )
}
