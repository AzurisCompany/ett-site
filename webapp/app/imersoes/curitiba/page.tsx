import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImersaoDetalhe from '@/components/ImersaoDetalhe'

const SITE_URL = 'https://englishtalktime.com.br'
// Quem organiza é a Cherry Top (ela define inscrição, preço e condições). Sem `offers`:
// o preço é sob consulta com ela, e o ETT não publica faixa de valores.
const CHERRY_TOP = { '@type': 'Organization', name: 'Cherry Top', url: 'https://cherrytop.com.br' }

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
      '@id': `${SITE_URL}/imersoes/curitiba/#event-jul-2026`,
      name: 'Imersão em Inglês em Curitiba — edição de jul/2026 (realizada) — Cherry Top, com apoio do IEP',
      description:
        'Edição realizada de 29/07 a 02/08/2026: 5 dias de imersão presencial em inglês em Curitiba, oferecida pela Cherry Top com apoio do IEP — método Bonding + Native-like. Divulgação: English Talk Time.',
      startDate: '2026-07-29T09:00:00-03:00',
      endDate: '2026-08-02T18:00:00-03:00',
      // Já aconteceu, na data prevista: schema.org não tem "EventCompleted"; Scheduled + datas passadas é o correto.
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: 'IEP — Instituto de Engenharia do Paraná',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Rua Emiliano Perneta, 174',
          addressLocality: 'Curitiba',
          addressRegion: 'PR',
          addressCountry: 'BR',
        },
      },
      organizer: CHERRY_TOP,
      inLanguage: ['en', 'pt-BR'],
      image: `${SITE_URL}/images/og-ett-2026.png`,
      url: `${SITE_URL}/imersoes/curitiba/`,
    },
  ],
}

export const metadata: Metadata = {
  title:
    'Imersão em Inglês em Curitiba — edição de jul/2026 (realizada) | Cherry Top',
  description:
    'Edição realizada: a imersão em inglês da Cherry Top em Curitiba teve 5 dias presenciais (29/07 a 02/08/2026), com apoio do IEP. Em dez/2026 tem a Cherry Top Business School, também no IEP. Divulgada pelo English Talk Time.',
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
    title: 'Imersão em Inglês em Curitiba — edição de jul/2026 (realizada)',
    description:
      'Edição realizada da imersão da Cherry Top em Curitiba, com apoio do IEP. Próxima atividade em Curitiba: Cherry Top Business School, dez/2026.',
    url: 'https://englishtalktime.com.br/imersoes/curitiba/',
    images: [
      {
        url: '/images/og-ett-2026.png',
        width: 1200,
        height: 630,
        alt: 'Imersão em inglês em Curitiba — Cherry Top, com apoio do IEP',
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
        eyebrow="Cherry Top · apoio IEP"
        city="Curitiba"
        uf="PR"
        headline="Imersão da Cherry Top em Curitiba."
        intro="Edição realizada de 29/07 a 02/08/2026. Foi a primeira edição em Curitiba da imersão presencial da Cherry Top, com apoio do IEP (Instituto de Engenharia do Paraná): dias seguidos usando o inglês, sem precisar viajar. A imersão foi oferecida e conduzida pela Cherry Top; o ETT divulgou e repassou o contato de quem tinha interesse."
        turmas={[
          {
            label: 'Turma única — Primeira edição (realizada)',
            when: '29 de julho a 02 de agosto de 2026',
            detalhe: '5 dias de imersão presencial — formato Cherry Top',
            fim: '2026-08-02',
          },
        ]}
        format="5 dias de imersão presencial — formato Cherry Top"
        local={{
          name: 'IEP — Instituto de Engenharia do Paraná',
          address: 'Curitiba — PR',
        }}
        lideranca="Equipe Cherry Top — facilitadores trazidos de BH"
        metodologia="Bonding + Native-like"
        highlights={[
          'Primeira edição em Curitiba',
          'Em parceria com o IEP, instituição centenária da engenharia paranaense',
          'Método da Cherry Top: Bonding + Native-like',
          'Foco em profissionais de tech: devs, dados, IA, BI, cloud',
          'Os encontros do IEP Talks continuam aos sábados, pra seguir praticando depois',
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
        fotosLegenda="Veja fotos de imersões da Cherry Top na página principal de imersões."
        ctaLabel="Tenho interesse numa próxima edição"
        relacionada={{
          texto:
            'Em Curitiba, a próxima atividade da Cherry Top é a Business School, de 04 a 06 de dezembro de 2026, no IEP.',
          href: '/imersoes/business-school/',
          label: 'Conhecer a Business School →',
        }}
      />
      <Footer />
    </>
  )
}
