import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import { getBlogPost } from '@/lib/blog-posts'

const SLUG = 'parceria-aprendendo-ingles'
const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`
const PARTNER_URL = 'https://www.aprendendoingles.com.br/'
const post = getBlogPost(SLUG)!

export const metadata: Metadata = {
  title: `${post.title} | Blog ETT`,
  description: post.description,
  keywords: [
    'parceria Aprendendo Inglês',
    'English Talk Time parceria',
    'conteúdo gratuito de inglês',
    'aprender inglês com constância',
    'newsletter de inglês',
    'Easy English Songs',
  ],
  alternates: { canonical: `/blog/${SLUG}/` },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    title: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${SLUG}/`,
    publishedTime: `${post.date}T09:00:00-03:00`,
    authors: ['English Talk Time'],
    images: [
      {
        url: '/images/parceria-aprendendo-ingles.webp',
        width: 1200,
        height: 630,
        alt: 'Parceria English Talk Time e Aprendendo Inglês',
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
      datePublished: `${post.date}T09:00:00-03:00`,
      dateModified: `${post.date}T09:00:00-03:00`,
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      mainEntityOfPage: `${SITE_URL}/blog/${SLUG}/`,
      url: `${SITE_URL}/blog/${SLUG}/`,
      inLanguage: 'pt-BR',
      keywords:
        'parceria, Aprendendo Inglês, conteúdo gratuito, rotina de estudo, English Talk Time',
      image: `${SITE_URL}/images/parceria-aprendendo-ingles.webp`,
      wordCount: 500,
      articleSection: post.category,
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
            src="/images/parceria-aprendendo-ingles.webp"
            alt="Parceria English Talk Time e Aprendendo Inglês"
            width={1200}
            height={630}
            className="w-full h-auto"
            priority
          />
        </figure>

        <p>
          O English Talk Time — Programa de Aceleração de Inglês para o Mercado Internacional —
          acaba de firmar uma parceria com o portal{' '}
          <a href={PARTNER_URL} target="_blank" rel="noopener noreferrer">
            Aprendendo Inglês
          </a>
          , uma das iniciativas mais tradicionais de conteúdo gratuito para quem deseja aprender
          inglês de forma mais leve, prática e consistente.
        </p>
        <p>
          A parceria nasce com um objetivo claro: ajudar nossos participantes a manter contato
          diário com o idioma, aprender com bons materiais, criar rotina de estudo e
          complementar os encontros de conversação do ETT com conteúdos de qualidade.
        </p>
        <p>
          O Aprendendo Inglês oferece uma grande biblioteca de artigos, dicas práticas, músicas
          e newsletter diária. São recursos que conversam diretamente com a proposta do ETT:
          aprender inglês com constância, exposição real, prática, prazer e aplicação no dia a
          dia.
        </p>

        <h2>O que você pode acessar</h2>

        <h3>Dicas práticas para aprender inglês</h3>
        <p>
          Uma coleção de artigos sobre fluência, motivação, pronúncia, leitura, vocabulário,
          shadowing, aprendizado ativo, ansiedade ao falar, uso de séries, músicas, repetição
          espaçada e estratégias para estudar melhor. Ideal para quem quer entender como
          aprender inglês de forma mais inteligente e aplicar pequenas mudanças na rotina.
        </p>

        <h3>Músicas para aprender inglês</h3>
        <p>
          A série <strong>Easy English Songs</strong> reúne músicas conhecidas para praticar
          listening, vocabulário, pronúncia e compreensão de forma leve e prazerosa. É uma
          ótima forma de transformar momentos simples do dia em contato real com o inglês.
        </p>

        <h3>Newsletter diária</h3>
        <p>
          A <strong>Lista Aprendendo Inglês</strong> envia diariamente um texto ou piadinha em
          inglês por e-mail. É uma excelente ferramenta para manter constância, ampliar
          vocabulário e não deixar o inglês desaparecer da rotina.
        </p>

        <h2>Por que essa parceria é importante para o ETT?</h2>
        <p>
          No ETT, acreditamos que inglês não se desenvolve apenas assistindo aulas. É preciso
          criar rotina, praticar, errar, repetir, ouvir, falar e se expor ao idioma de forma
          constante.
        </p>
        <p>
          Com a parceria com o Aprendendo Inglês, nossos participantes passam a ter acesso a
          mais uma fonte de conteúdo confiável para apoiar a jornada de aprendizado, tanto para
          quem está começando quanto para quem já estudou bastante, mas ainda trava na fala.
        </p>
        <p>
          Essa parceria reforça a missão do ETT: conectar estudo, prática, comunidade e
          desenvolvimento profissional para ajudar mais pessoas a usarem o inglês em viagens,
          reuniões, entrevistas, networking, apresentações e oportunidades internacionais.
        </p>
        <p>
          Em breve, também anunciaremos novidades sobre uma nova iniciativa de formação em
          parceria. Enquanto isso, você já pode conferir as nossas{' '}
          <Link href="/blog/">indicações de leitura do Aprendendo Inglês aqui no blog</Link> —
          resumimos os melhores artigos do parceiro com o nosso ângulo pra quem é de tech.
        </p>
        <p>
          <a href={PARTNER_URL} target="_blank" rel="noopener noreferrer">
            Acesse os conteúdos do Aprendendo Inglês
          </a>{' '}
          e comece hoje a incluir mais inglês na sua rotina.
        </p>
      </BlogLayout>
    </>
  )
}
