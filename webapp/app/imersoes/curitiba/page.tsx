import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImersaoDetalhe from '@/components/ImersaoDetalhe'

const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`

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
          name: 'Curitiba',
          item: `${SITE_URL}/imersoes/curitiba/`,
        },
      ],
    },
    {
      '@type': 'Event',
      name: 'Imersão em Inglês em Curitiba — ETT × Cherry Top',
      description:
        '5 dias de treino intensivo de fala em inglês em Curitiba, em parceria com Cherry Top e IEP. Primeira edição ETT na capital paranaense — método Bonding + Native-like para profissionais de tech.',
      startDate: '2026-07-29T09:00:00-03:00',
      endDate: '2026-08-02T18:00:00-03:00',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: 'IEP — Instituto de Engenharia do Paraná',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Curitiba',
          addressRegion: 'PR',
          addressCountry: 'BR',
        },
      },
      organizer: { '@id': ORG_ID },
      performer: {
        '@type': 'Organization',
        name: 'Cherry Top Business Communication',
        url: 'https://cherrytop.com.br',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/LimitedAvailability',
        url: `${SITE_URL}/imersoes/curitiba/`,
        validFrom: '2026-01-01T00:00:00-03:00',
      },
      inLanguage: ['en', 'pt-BR'],
      image: `${SITE_URL}/images/ETT-top01.png`,
      url: `${SITE_URL}/imersoes/curitiba/`,
    },
  ],
}

export const metadata: Metadata = {
  title:
    'Imersão em Inglês em Curitiba — 29/jul a 02/ago 2026 | Treino de Fala ETT × Cherry Top',
  description:
    'Primeira imersão ETT em Curitiba: 5 dias presenciais (29/07 a 02/08/2026) de treino intensivo de fala em inglês, em parceria com Cherry Top e IEP. Para profissionais de tech. Vagas extremamente limitadas.',
  keywords: [
    'imersão em inglês Curitiba',
    'curso intensivo de inglês Curitiba',
    'treino de fala em inglês Curitiba',
    'imersão presencial Curitiba 2026',
    'ETT Curitiba',
    'Cherry Top Curitiba',
    'IEP Curitiba inglês',
  ],
  alternates: {
    canonical: '/imersoes/curitiba/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Imersão em Inglês em Curitiba — 29/jul a 02/ago 2026',
    description:
      'Primeira edição ETT × Cherry Top em Curitiba. 5 dias presenciais de treino intensivo de fala em inglês com o IEP.',
    url: 'https://englishtalktime.com.br/imersoes/curitiba/',
    images: [
      {
        url: '/images/ETT-top01.png',
        width: 1200,
        height: 630,
        alt: 'Imersão em inglês em Curitiba — ETT × Cherry Top × IEP',
      },
    ],
  },
}

export default function CuritibaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <ImersaoDetalhe
        eyebrow="Primeira edição em Curitiba • Cherry Top"
        city="Curitiba"
        uf="PR"
        headline="Primeira edição ETT em Curitiba — você pode estar aqui."
        intro="A imersão chega à capital paranaense em parceria com a Cherry Top e o IEP (Instituto de Engenharia do Paraná). Profissionais de tech do PR e arredores vão viver dias seguidos em inglês, com simulações reais de reuniões, demos e entrevistas internacionais — sem precisar viajar. Turma pequena, alto contato, vagas extremamente limitadas."
        turmas={[
          {
            label: 'Turma única — Primeira edição',
            when: '29 de julho a 02 de agosto de 2026',
            detalhe: '5 dias de imersão presencial — formato Cherry Top, perfil tech',
          },
        ]}
        format="5 dias de imersão presencial — formato Cherry Top"
        local={{
          name: 'IEP — Instituto de Engenharia do Paraná (a confirmar)',
          address: 'Curitiba — PR',
        }}
        lideranca="Equipe Cherry Top — facilitadores trazidos de BH"
        metodologia="Bonding + Native-like"
        highlights={[
          'Primeira edição em Curitiba — vagas extremamente limitadas',
          'Em parceria com o IEP, instituição centenária da engenharia paranaense',
          'Metodologia Cherry Top — Bonding + Native-like, até 10× mais rápido',
          'Foco em profissionais de tech: devs, dados, IA, BI, cloud',
          'Networking presencial com a comunidade ETT de Curitiba',
          'Sem precisar viajar — você dorme em casa, vive em inglês durante o dia',
        ]}
        inclusos={[
          'Programa completo presencial',
          'Material didático',
          'Coffee breaks',
          'Certificado Cherry Top',
        ]}
        naoInclusos={[
          'Hospedagem (a imersão é diurna)',
          'Deslocamento até o local',
          'Refeições principais',
        ]}
        fotos={[]}
        fotosLegenda="Esta é a primeira edição em Curitiba — fotos serão publicadas após a realização. Veja as imersões já realizadas pela Cherry Top na página principal de imersões."
        ctaLabel="Garantir minha vaga em Curitiba"
        vagasInfo="Vagas extremamente limitadas — primeira edição"
      />
      <Footer />
    </>
  )
}
