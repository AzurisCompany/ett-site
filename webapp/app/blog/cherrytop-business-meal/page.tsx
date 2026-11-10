import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import { getBlogPost } from '@/lib/blog-posts'

const SLUG = 'cherrytop-business-meal'
const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`
// Evento realizado em 01/08/2026: os links da sala e do grupo de WhatsApp foram
// retirados da página de propósito (decisão de 09/11/2026).
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
        alt: 'CherryTop Business Meal — realizado no sábado, 1º de agosto de 2026, online e gratuito',
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
      dateModified: '2026-11-09T12:00:00-03:00',
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
        'Experiência imersiva online para praticar inglês de negócios — negotiation, networking e team building. Realização Cherry Top, divulgação English Talk Time. Evento realizado em 01/08/2026.',
      startDate: '2026-08-01T12:00:00-03:00',
      endDate: '2026-08-01T13:00:00-03:00',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
      location: {
        '@type': 'VirtualLocation',
        url: `${SITE_URL}/blog/${SLUG}/`,
        name: 'Online',
      },
      organizer: { '@type': 'Organization', name: 'Cherry Top', url: 'https://cherrytop.com.br' },
      isAccessibleForFree: true,
      inLanguage: ['pt-BR', 'en'],
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
        <figure className="mb-8 overflow-hidden rounded-2xl border border-surface-line">
          <Image
            src={COVER}
            alt="CherryTop Business Meal — realizado no sábado, 1º de agosto de 2026, online e gratuito"
            width={1200}
            height={630}
            className="w-full h-auto"
            priority
          />
        </figure>

        <p>
          <strong>Este evento já aconteceu</strong> no <strong>sábado, 1º de agosto de 2026, das
          12h às 13h</strong> (horário de Brasília). Deixamos o post no ar como registro do que
          foi o <strong>CherryTop Business Meal</strong>: uma experiência imersiva online, gratuita,
          pra praticar inglês em situações de negócio.
        </p>
        <p>
          A realização foi da <strong>Cherry Top</strong>, a parceira que oferece as imersões
          divulgadas pelo ETT. O English Talk Time divulgou pra comunidade, como uma hora extra de
          prática com um recorte diferente dos nossos encontros.
        </p>

        <h2>O que se praticou</h2>
        <p>
          O foco não era gramática. Eram três situações que aparecem no trabalho de quem usa
          inglês profissionalmente:
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

        <h2>Próximas atividades da Cherry Top</h2>
        <p>
          As imersões e os cursos são da Cherry Top: ela define inscrição, valores e condições, e o
          ETT divulga e repassa o contato de quem tem interesse. As turmas atuais estão em{' '}
          <Link href="/imersoes/">imersões</Link>.
        </p>

        <h2>E os encontros do ETT?</h2>
        <p>
          Os encontros de conversação do ETT são gratuitos, abertos a qualquer pessoa e sem
          cadastro: <strong>online às segundas, das 20h às 21h30</strong>, na sala do ETT Speak, e
          o <strong>IEP Talks, aos sábados, das 10h às 12h</strong>, no IEP (Rua Emiliano Perneta,
          174, Curitiba). As próximas datas ficam na <Link href="/agenda/">agenda</Link>.
        </p>

        <h2>Quer receber os próximos encontros por e-mail?</h2>
        <p>
          Se você prefere ser avisado em vez de ficar acompanhando o site, deixe nome e e-mail —
          são os dois únicos campos obrigatórios. A gente manda o link do encontro e a agenda.
        </p>
        <p>
          <Link href="/#inscricao">Tenho interesse — quero receber as datas dos encontros →</Link>
        </p>
        <p>
          Aparecer pra conhecer um encontro continua livre, sem cadastro nenhum.
        </p>
      </BlogLayout>
    </>
  )
}
