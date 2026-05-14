import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Imersoes from '@/components/Imersoes'
import Footer from '@/components/Footer'

const SITE_URL = 'https://englishtalktime.com.br'

const imersoesFaqs = [
  {
    q: 'Qual o nível mínimo de inglês pra participar de uma imersão?',
    a: 'Depende da imersão. Curitiba e Belo Horizonte aceitam a partir de A2 (básico-intermediário) — fazemos nivelamento antes. A Flórida exige B1+ porque é 100% em inglês 24h. Não sabe seu nível? A gente faz o teste antes da inscrição.',
  },
  {
    q: 'Quanto custa uma imersão em inglês ETT × Cherry Top?',
    a: 'Valores sob consulta. Preenche o formulário e o time do ETT te manda a proposta completa com tudo o que está incluído. Cada imersão tem condição específica — a gente alinha por conversa.',
  },
  {
    q: 'Como eu garanto minha vaga em uma imersão?',
    a: 'Vagas são confirmadas com uma taxa de pré-inscrição, que sinaliza seu compromisso real e segura sua posição na turma. Sem pré-inscrição, a vaga fica aberta — e elas costumam esgotar rápido.',
  },
  {
    q: 'O que está incluído em cada imersão?',
    a: 'Curitiba (jul/26): programa + materiais + coffee breaks + certificado. BH (set/out/nov 2026): programa de 5 dias + materiais + hospedagem + refeições + certificado de 90h. Flórida (jan–mar/27): programa + hospedagem em resort + atividades culturais + certificado. Passagem aérea e visto americano não estão inclusos na Flórida.',
  },
  {
    q: 'Imersão internacional na Flórida — preciso de visto?',
    a: 'Sim, precisa de visto americano B1/B2 válido. A Cherry Top orienta o processo, mas a obtenção é responsabilidade do aluno. Quem já tem visto B1/B2 está liberado direto.',
  },
  {
    q: 'Funciona pra quem nunca fez imersão antes?',
    a: 'Sim — e geralmente é exatamente quem mais ganha. Imersão é projetada pra gente que tá travada. O ambiente faz o trabalho de tirar você da zona de conforto sem te jogar no fundo do poço. Suporte 100% do tempo.',
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
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Imersões em inglês ETT × Cherry Top',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Imersão em Inglês em Curitiba (jul/2026)',
          url: `${SITE_URL}/imersoes/curitiba/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Imersão em Inglês em Belo Horizonte (set/out/nov 2026)',
          url: `${SITE_URL}/imersoes/belo-horizonte/`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Imersão em Inglês na Flórida, EUA (jan/fev 2027)',
          url: `${SITE_URL}/imersoes/florida/`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: imersoesFaqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export const metadata: Metadata = {
  title:
    'Imersões em Inglês — Curitiba, BH e Flórida 2026/2027 | Treino Intensivo ETT × Cherry Top',
  description:
    'Imersões em inglês para destravar a fala em 5 dias no Brasil (Curitiba e BH) ou até 30 dias na Flórida. Treino intensivo com método Bonding + Native-like da Cherry Top — 40+ anos formando profissionais fluentes. Vagas limitadas.',
  keywords: [
    'imersão em inglês',
    'imersão em inglês Brasil',
    'imersão em inglês Curitiba',
    'imersão em inglês Belo Horizonte',
    'imersão em inglês Flórida',
    'imersão em inglês EUA',
    'curso intensivo de inglês',
    'treino intensivo de fala em inglês',
    'Cherry Top imersão',
    'Bonding Native-like',
    'destravar inglês imersão',
  ],
  alternates: {
    canonical: '/imersoes/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Imersões em Inglês ETT × Cherry Top — Curitiba, BH e Flórida',
    description:
      'Em 5 dias no Brasil ou 30 dias na Flórida, treino intensivo de fala em inglês — método Bonding + Native-like.',
    url: 'https://englishtalktime.com.br/imersoes/',
    images: [
      {
        url: '/images/ETT-top01.png',
        width: 1200,
        height: 630,
        alt: 'Imersões em inglês ETT × Cherry Top — Curitiba, BH e Flórida',
      },
    ],
  },
}

export default function ImersoesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Imersoes />
      <Footer />
    </>
  )
}
