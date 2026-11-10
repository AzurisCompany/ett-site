import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImersaoDetalhe from '@/components/ImersaoDetalhe'

const SITE_URL = 'https://englishtalktime.com.br'
// Quem organiza é a Cherry Top (ela define inscrição, preço e condições). Sem `offers`:
// o preço é sob consulta com ela, e o ETT não publica faixa de valores.
const CHERRY_TOP = { '@type': 'Organization', name: 'Cherry Top', url: 'https://cherrytop.com.br' }

const flLocation = {
  '@type': 'Place',
  name: 'Windsor Cay Resort',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Orlando',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
}

const flTurmas = [
  {
    slug: 'turma-1-jan-2027',
    name: 'Imersão em Inglês na Flórida — Turma 1 (18 dias, jan/2027)',
    startDate: '2027-01-10T09:00:00-05:00',
    endDate: '2027-01-27T18:00:00-05:00',
    description:
      '18 dias de imersão internacional em inglês no Windsor Cay Resort, Flórida. Oferecida pela Cherry Top, método Bonding + Native-like. Conduzida por Leonarda Flyhigher (Cherry Top).',
  },
  {
    slug: 'turma-2-jan-mar-2027',
    name: 'Imersão em Inglês na Flórida — Turma 2 (30+ dias, jan-mar/2027)',
    startDate: '2027-01-29T09:00:00-05:00',
    endDate: '2027-03-01T18:00:00-05:00',
    description:
      '30+ dias de imersão internacional em inglês no Windsor Cay Resort, Flórida. Versão estendida, oferecida pela Cherry Top. Conduzida por Leonarda Flyhigher (Cherry Top).',
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
          name: 'Flórida',
          item: `${SITE_URL}/imersoes/florida/`,
        },
      ],
    },
    ...flTurmas.map((t) => ({
      '@type': 'Event',
      '@id': `${SITE_URL}/imersoes/florida/#${t.slug}`,
      name: t.name,
      description: t.description,
      startDate: t.startDate,
      endDate: t.endDate,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: flLocation,
      organizer: CHERRY_TOP,
      inLanguage: 'en',
      image: `${SITE_URL}/imersoes/florida-2027/cover.jpeg`,
      url: `${SITE_URL}/imersoes/florida/`,
    })),
  ],
}

export const metadata: Metadata = {
  title:
    'Imersão em Inglês na Flórida 2027 — Cherry Top · 18 ou 30 dias',
  description:
    'Imersão internacional oferecida pela Cherry Top no Windsor Cay Resort (Flórida, EUA), 100% em inglês. Turmas em 2027: 10–27/jan (18 dias) e 29/jan–01/mar. Conduzida por Leonarda Flyhigher. Divulgada pelo English Talk Time.',
  keywords: [
    'imersão em inglês Flórida',
    'imersão em inglês EUA',
    'imersão internacional inglês',
    'imersão em inglês nos Estados Unidos',
    'treino de fala em inglês imersão',
    'Windsor Cay Resort imersão',
    'Cherry Top Flórida',
    'Leonarda Flyhigher',
    'inglês native-like',
  ],
  alternates: {
    canonical: '/imersoes/florida/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Imersão em Inglês na Flórida 2027 — Cherry Top',
    description:
      'Imersão da Cherry Top em resort na Flórida, 100% em inglês. Turmas em 2027.',
    url: 'https://englishtalktime.com.br/imersoes/florida/',
    images: [
      {
        url: '/imersoes/florida-2027/cover.jpeg',
        width: 1200,
        height: 630,
        alt: 'Imersão em inglês na Flórida — Windsor Cay Resort × Cherry Top',
      },
    ],
  },
}

const fotosFlorida = [
  'cover',
  '01', '02', '03', '04', '05', '06', '07', '08', '09',
  '11', '12', '14', '15', '16', '17', '18', '19', '20',
  '21', '22', '23', '24', '25', '26', '28',
].map((n) => `/imersoes/florida-2027/${n}.jpeg`)

export default function FloridaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <ImersaoDetalhe
        eyebrow="Imersão Internacional • Cherry Top"
        city="Flórida"
        uf="EUA"
        headline="Imersão internacional da Cherry Top na Flórida."
        intro="A turma convive num resort na Flórida usando o inglês o dia inteiro — refeições juntos, atividades culturais e dias inteiros sem voltar para o português. A imersão é oferecida e conduzida pela Cherry Top, com Leonarda Flyhigher e um mentor residente nos EUA; o ETT divulga e repassa o contato de quem tem interesse. Pra praticar antes e depois, os encontros do ETT são gratuitos e as ferramentas do ETT Player estão abertas pra experimentar."
        turmas={[
          {
            label: 'Turma 1 — 18 dias',
            when: '10 a 27 de janeiro de 2027',
            detalhe: 'Versão intensiva — quarto individual ou compartilhado',
            fim: '2027-01-27',
          },
          {
            label: 'Turma 2 — 30+ dias',
            when: '29 de janeiro a 01 de março de 2027',
            detalhe: 'Versão estendida',
            fim: '2027-03-01',
          },
        ]}
        format="Imersão internacional — 100% em inglês 24h por dia"
        local={{
          name: 'Windsor Cay Resort',
          address: 'Flórida, EUA — região de Orlando',
        }}
        lideranca="Leonarda Flyhigher (Cherry Top) + mentor residente nos EUA"
        metodologia="Bonding + Native-like"
        highlights={[
          '2 turmas em 2027 — você escolhe a duração que faz sentido',
          'Windsor Cay Resort — infraestrutura completa, "férias em grande estilo"',
          'Inglês o dia inteiro, em convivência com a turma',
          'Conduzida pela equipe da Cherry Top',
          'Nível mínimo B1+ (intermediário), inclusive pra acompanhantes, porque a regra é english only',
        ]}
        inclusos={[
          'Programa de imersão completo',
          'Hospedagem no Windsor Cay Resort',
          'Coordenação Cherry Top (Immersion Tuition)',
          'Atividades culturais programadas',
          'Mentor residente nos EUA',
        ]}
        naoInclusos={[
          'Passagem aérea (~US$ 1.000, parcelável)',
          'Visto americano B1/B2',
          'Alimentação fora do resort',
          'Transporte local e ingressos turísticos',
        ]}
        fotos={fotosFlorida}
        fotosLegenda="Fotos do Windsor Cay Resort e de edições Cherry Top anteriores nos Estados Unidos."
        ctaLabel="Entrar na lista de interesse — Flórida 2027"
        vagasInfo="Vagas limitadas à capacidade do resort"
      />
      <Footer />
    </>
  )
}
