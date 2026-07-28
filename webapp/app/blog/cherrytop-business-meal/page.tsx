import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import { getBlogPost } from '@/lib/blog-posts'

const SLUG = 'cherrytop-business-meal'
const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`
const SALA_URL = 'https://ett-speak.vercel.app/r/cherrytop'
const GRUPO_URL = 'https://chat.whatsapp.com/LEpi3Cm9cWv20kBHg5xjdb'
const COVER = '/images/cherrytop-business-meal.webp'
const post = getBlogPost(SLUG)!

export const metadata: Metadata = {
  title: `${post.title} | Blog ETT`,
  description: post.description,
  keywords: [
    'inglês de negócios',
    'business english online',
    'CherryTop Business Meal',
    'praticar inglês negociação',
    'networking em inglês',
    'encontro online de inglês gratuito',
  ],
  alternates: { canonical: `/blog/${SLUG}/` },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    title: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${SLUG}/`,
    publishedTime: `${post.date}T18:00:00-03:00`,
    authors: ['English Talk Time'],
    images: [
      {
        url: COVER,
        width: 1200,
        height: 630,
        alt: 'CherryTop Business Meal — sábado, 1º de agosto, 12h, online e gratuito',
      },
    ],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.category,
          item: `${SITE_URL}/blog/${SLUG}/`,
        },
      ],
    },
    {
      '@type': 'BlogPosting',
      '@id': `${SITE_URL}/blog/${SLUG}/#post`,
      headline: post.title,
      description: post.description,
      datePublished: `${post.date}T18:00:00-03:00`,
      dateModified: `${post.date}T18:00:00-03:00`,
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      mainEntityOfPage: `${SITE_URL}/blog/${SLUG}/`,
      url: `${SITE_URL}/blog/${SLUG}/`,
      inLanguage: 'pt-BR',
      keywords:
        'inglês de negócios, business english, negotiation, networking, team building, Cherry Top, encontro online gratuito',
      image: `${SITE_URL}${COVER}`,
      wordCount: 700,
      articleSection: post.category,
    },
    {
      '@type': 'Event',
      name: 'CherryTop Business Meal',
      description:
        'Experiência imersiva online para praticar inglês de negócios — negotiation, networking e team building. Realização Cherry Top Business Communication, divulgação English Talk Time.',
      startDate: '2026-08-01T12:00:00-03:00',
      endDate: '2026-08-01T13:00:00-03:00',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
      location: {
        '@type': 'VirtualLocation',
        url: `${SITE_URL}/blog/${SLUG}/`,
        name: 'Online',
      },
      organizer: { '@type': 'Organization', name: 'Cherry Top Business Communication' },
      isAccessibleForFree: true,
      inLanguage: ['pt-BR', 'en'],
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/blog/${SLUG}/`,
        validFrom: '2026-07-27T00:00:00-03:00',
      },
      image: `${SITE_URL}${COVER}`,
      url: `${SITE_URL}/blog/${SLUG}/`,
    },
  ],
}

export default function Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogLayout post={post}>
        <figure className="mb-8 overflow-hidden rounded-2xl border border-dark-border">
          <Image
            src={COVER}
            alt="CherryTop Business Meal — sábado, 1º de agosto, 12h às 13h, online e gratuito"
            width={1200}
            height={630}
            className="w-full h-auto"
            priority
          />
        </figure>

        <p>
          No <strong>sábado, 1º de agosto de 2026, das 12h às 13h</strong> (horário de Brasília),
          acontece o <strong>CherryTop Business Meal</strong> — uma experiência imersiva online
          pra praticar inglês em situações de negócio. É gratuito, e no dia é só entrar na sala
          no horário.
        </p>
        <p>
          A realização é da <strong>Cherry Top Business Communication</strong>, parceira do ETT
          nas imersões. O English Talk Time está divulgando pra comunidade — quem participa dos
          nossos encontros de segunda tem aqui uma hora extra de prática, com um recorte
          diferente.
        </p>

        <h2>O que se pratica</h2>
        <p>
          O foco não é gramática. São três situações que aparecem no trabalho de quem usa inglês
          profissionalmente:
        </p>
        <ul>
          <li>
            <strong>Negotiation</strong> — defender uma posição, pedir e conceder, fechar acordo
            sem soar agressivo nem sumir da conversa.
          </li>
          <li>
            <strong>Networking</strong> — se apresentar, puxar assunto, sair do “nice to meet
            you” e transformar um contato em conversa de verdade.
          </li>
          <li>
            <strong>Team Building</strong> — falar em grupo, discordar com educação, alinhar
            trabalho com gente que você não conhece.
          </li>
        </ul>
        <p>
          É o tipo de prática que raramente cabe numa aula: você precisa de outras pessoas na
          mesa. Daí o formato de <em>meal</em> — uma conversa em grupo, como acontece num almoço
          de negócios.
        </p>

        <h2>Como participar</h2>
        <p>
          No sábado, ao meio-dia, é só abrir a sala do encontro:
        </p>
        <p>
          <a href={SALA_URL} target="_blank" rel="noopener noreferrer">
            Entrar na sala do CherryTop Business Meal →
          </a>
        </p>
        <p>
          Vale entrar também no <strong>grupo de WhatsApp da atividade</strong> — é por lá que a
          equipe da Cherry Top organiza as vagas e avisa qualquer mudança. E tem um detalhe que
          faz diferença: na <strong>tarde de sábado</strong>, a equipe dá assistência online{' '}
          <strong>one-to-one</strong> somente para quem estiver no grupo.
        </p>
        <p>
          <a href={GRUPO_URL} target="_blank" rel="noopener noreferrer">
            Entrar no grupo de WhatsApp do CherryTop Business Meal
          </a>
        </p>

        <h2>“Meu inglês de negócios não é bom o suficiente”</h2>
        <p>
          É exatamente pra isso que serve. A sala é de gente treinando, não de gente exibindo
          fluência — a mesma lógica dos encontros do ETT: ninguém é corrigido em público e
          ninguém mede seu nível na porta.
        </p>

        <h2>E os encontros do ETT?</h2>
        <p>
          Seguem normalmente. O <strong>encontro de conversação do ETT é toda segunda, das 20h
          às 21h30</strong>, online e gratuito — e uma vez por semana tem presencial em Curitiba,
          alternando entre IEP, UTFPR, Hard Rock Cafe e Habitat. Dá pra ver as próximas datas
          na <Link href="/agenda/">agenda</Link>.
        </p>
        <p>
          O Business Meal de sábado é um extra: mesmo público, tema mais específico, realização
          do parceiro.
        </p>

        <h2>Quer receber os próximos encontros por e-mail?</h2>
        <p>
          Se você prefere ser avisado em vez de ficar acompanhando o site, deixe nome e e-mail —
          são os dois únicos campos obrigatórios. A gente avisa quando tiver encontro novo,
          online ou presencial.
        </p>
        <p>
          <Link href="/#inscricao">Tenho interesse — quero receber as datas dos encontros →</Link>
        </p>
        <p>
          Sem custo e sem venda no fim. Aparecer pra conhecer um encontro continua livre, sem
          cadastro nenhum.
        </p>
      </BlogLayout>
    </>
  )
}
