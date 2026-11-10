import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BusinessSchoolDetalhe from '@/components/imersoes/BusinessSchoolDetalhe'

/**
 * Cherry Top Business School — Curitiba, 04 a 06/dez/2026.
 *
 * Fonte: mensagens do Prof. Leo (Cherry Top) de 31/10/2026 + os 3 reels em
 * novoConteudo/NovoCursoCherrytop/ (transcrição em
 * novoConteudo/cherrytop-business-school/TRANSCRICAO-REELS-2026-11-09.md).
 * Preço NÃO é publicado (decisão do Alessandro, 09/11): segue a regra das
 * outras imersões, "investimento informado pela Cherry Top". Local: IEP —
 * Instituto de Engenharia do Paraná (confirmado pelo Alessandro em 09/11).
 */

const SITE_URL = 'https://englishtalktime.com.br'
const URL = `${SITE_URL}/imersoes/business-school/`

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Imersões', item: `${SITE_URL}/imersoes/` },
        { '@type': 'ListItem', position: 3, name: 'Cherry Top Business School', item: URL },
      ],
    },
    {
      '@type': 'Event',
      '@id': `${URL}#curitiba-dez-2026`,
      name: 'Cherry Top Business School — imersão em inglês de negócios em Curitiba (dez/2026)',
      description:
        'Três dias presenciais de inglês de negócios (reunião, negociação, apresentação, business plan e cases em equipe), com pré-imersão online e estudo orientado. Turma bilíngue para o básico e imersão total do intermediário ao avançado. Certificado de 50 horas emitido pela Cherry Top.',
      startDate: '2026-12-04T08:00:00-03:00',
      endDate: '2026-12-06T18:00:00-03:00',
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
      // Quem organiza é a Cherry Top. Sem `offers`: valor sob consulta com ela.
      organizer: { '@type': 'Organization', name: 'Cherry Top', url: 'https://cherrytop.com.br' },
      inLanguage: ['en', 'pt-BR'],
      image: `${SITE_URL}/imersoes/business-school-2026/capa-v1.jpg`,
      url: URL,
    },
  ],
}

export const metadata: Metadata = {
  title: 'Cherry Top Business School em Curitiba — inglês de negócios, 04 a 06/dez',
  description:
    'Imersão de 3 dias em inglês de negócios oferecida pela Cherry Top no IEP (Instituto de Engenharia do Paraná), em Curitiba, de 04 a 06 de dezembro de 2026: reunião, negociação, apresentação, business plan e cases em equipe. Turma bilíngue para o básico, imersão total do intermediário ao avançado, certificado de 50 horas. Divulgada pelo English Talk Time.',
  keywords: [
    'inglês para negócios Curitiba',
    'imersão em inglês Curitiba',
    'business english Curitiba',
    'Cherry Top Business School',
    'inglês para reuniões',
    'curso intensivo de inglês Curitiba',
  ],
  alternates: { canonical: '/imersoes/business-school/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Cherry Top Business School — Curitiba, 04 a 06/dez',
    description: '3 dias de inglês de negócios em situações reais. Certificado de 50 horas.',
    url: URL,
    images: [
      {
        url: '/images/og-cherrytop-business-school.png',
        width: 1200,
        height: 630,
        alt: 'Cherry Top Business School — imersão em inglês de negócios em Curitiba',
      },
    ],
  },
}

export default function BusinessSchoolPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <BusinessSchoolDetalhe />
      <Footer />
    </>
  )
}
