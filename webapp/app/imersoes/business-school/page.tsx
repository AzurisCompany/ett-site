import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImersaoDetalhe from '@/components/ImersaoDetalhe'

/**
 * Cherry Top Business School — Curitiba, 04 a 06/dez/2026.
 *
 * Fonte: mensagens do Prof. Leo (Cherry Top) de 31/10/2026 + os 3 reels em
 * novoConteudo/NovoCursoCherrytop/ (transcrição em
 * novoConteudo/cherrytop-business-school/TRANSCRICAO-REELS-2026-11-09.md).
 * Preço NÃO é publicado (decisão do Alessandro, 09/11): segue a regra das
 * outras imersões, "investimento informado pela Cherry Top". Local em
 * Curitiba ainda a confirmar.
 */

const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`
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
        name: 'Curitiba',
        address: { '@type': 'PostalAddress', addressLocality: 'Curitiba', addressRegion: 'PR', addressCountry: 'BR' },
      },
      organizer: { '@id': ORG_ID },
      performer: {
        '@type': 'Organization',
        name: 'Cherry Top Global Business School',
        url: 'https://cherrytop.com.br',
      },
      inLanguage: ['en', 'pt-BR'],
      image: `${SITE_URL}/imersoes/business-school-2026/capa-v1.jpg`,
      url: URL,
    },
  ],
}

export const metadata: Metadata = {
  title: 'Cherry Top Business School em Curitiba — inglês de negócios, 04 a 06/dez',
  description:
    'Imersão de 3 dias em inglês de negócios oferecida pela Cherry Top em Curitiba, de 04 a 06 de dezembro de 2026: reunião, negociação, apresentação, business plan e cases em equipe. Turma bilíngue para o básico, imersão total do intermediário ao avançado, certificado de 50 horas. Divulgada pelo English Talk Time.',
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
        url: '/imersoes/business-school-2026/capa-v1.jpg',
        width: 1600,
        height: 900,
        alt: 'Cherry Top Business School — imersão em inglês de negócios em Curitiba',
      },
    ],
  },
}

const videos = [
  {
    src: '/videos/cherrytop-bs-reel1-v1.mp4',
    capa: '/videos/cherrytop-bs-reel1-v1-capa.jpg',
    titulo: '"Quem apresentou foi outro"',
  },
  {
    src: '/videos/cherrytop-bs-reel2-v1.mp4',
    capa: '/videos/cherrytop-bs-reel2-v1-capa.jpg',
    titulo: '"A cabeça trava"',
  },
  {
    src: '/videos/cherrytop-bs-reel3-v1.mp4',
    capa: '/videos/cherrytop-bs-reel3-v1-capa.jpg',
    titulo: '"Decorar o manual"',
  },
]

export default function BusinessSchoolPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <ImersaoDetalhe
        eyebrow="Business School • Cherry Top"
        city="Curitiba"
        uf="PR"
        headline="Três dias treinando o inglês das reuniões, negociações e apresentações."
        intro="A Cherry Top Business School é um treino presencial em situações reais de negócio: você participa de reuniões, defende um business plan, resolve cases em equipe e, no último dia, apresenta o seu projeto e recebe feedback na hora. Não precisa ser fluente: quem está no básico tem turma bilíngue, e do intermediário ao avançado é tudo em inglês. O curso é oferecido e conduzido pela Cherry Top; o ETT divulga e oferece ferramentas e encontros para praticar antes e depois."
        parceiroNome="Cherry Top Global Business School"
        videos={videos}
        videosTitulo="Gramática você tem. Falta treinar o inglês dos negócios."
        videosTexto="Muita gente estudou inglês por anos e trava quando alguém pergunta “So, what do you think?” numa reunião. A proposta da Business School é errar entre colegas, num ambiente de treino, para chegar mais preparado às reuniões de verdade."
        turmas={[
          {
            label: 'Turma de dezembro',
            when: '04 a 06 de dezembro de 2026 (sexta a domingo), das 8h às 18h',
            detalhe: 'Básico: turma bilíngue · Intermediário e avançado: imersão total em inglês',
            fim: '2026-12-06',
          },
        ]}
        cronogramaTitulo="Carga horária: 50 horas"
        cronograma={[
          {
            bloco: 'The Passport: pré-imersão online (10h)',
            detalhe: 'Programa de upgrade antes do presencial, para chegar à Business School com um inglês mais afiado.',
          },
          { bloco: 'Day 1, sexta 04/12 (10h)', detalhe: 'Presencial, das 8h às 18h.' },
          { bloco: 'Day 2, sábado 05/12 (10h)', detalhe: 'Presencial, das 8h às 18h.' },
          { bloco: 'Day 3, domingo 06/12 (10h)', detalhe: 'Presencial, das 8h às 18h, com a apresentação final dos projetos.' },
          { bloco: 'Day 4: estudo orientado (10h)', detalhe: 'Estudo guiado depois do presencial.' },
        ]}
        format="3 dias presenciais + 20h de atividades orientadas (online e estudo guiado)"
        local={{ name: 'Curitiba/PR', address: 'Local a confirmar pela Cherry Top' }}
        lideranca="Fundada por Leonarda Flyhigher, Business Strategist"
        metodologia="Strategic Business Communication"
        highlights={[
          'Situações reais de negócio: reunião, negociação e apresentação',
          'Business plan, case studies, design thinking, reports e team building, em equipe',
          'Apresentação final do seu projeto, com feedback na hora',
          'Turma bilíngue para quem está começando; imersão total do intermediário ao avançado',
          'Networking com outros profissionais',
          'Certificado de 50 horas emitido pela Cherry Top',
        ]}
        inclusos={[
          'The Passport: 10h de pré-imersão online',
          '3 dias presenciais, das 8h às 18h',
          '10h de estudo orientado',
          'Almoço nos dias presenciais',
          'Certificado de 50 horas',
        ]}
        naoInclusos={['Passagens aéreas', 'Hospedagem', 'Traslado']}
        sobreParceiro={{
          titulo: 'Quem oferece: Cherry Top Global Business School',
          intro:
            'A Cherry Top trabalha com comunicação empresarial em inglês desde 1985. Abaixo, como ela mesma se apresenta.',
          itens: [
            { rotulo: 'Desde 1985', texto: 'Fundada por Leonarda Flyhigher, Business Strategist.' },
            { rotulo: 'Nosso negócio', texto: 'Business Communication.' },
            {
              rotulo: 'Missão',
              texto: 'Acelerar o crescimento e a expansão de grandes negócios internacionais.',
            },
            { rotulo: 'Visão', texto: 'Ser o Global Business Hub mais eficiente e top of mind.' },
            {
              rotulo: 'Estratégia',
              texto: 'Strategic Business Communication e conexão de marcas líderes globalmente.',
            },
            {
              rotulo: 'Slogan',
              texto: '“Empowering Fluent 007 Elite Speakers for Proficient Business Communication.”',
            },
          ],
        }}
        fotos={[]}
        fotosLegenda=""
        ctaLabel="Quero participar da Business School"
      />
      <Footer />
    </>
  )
}
