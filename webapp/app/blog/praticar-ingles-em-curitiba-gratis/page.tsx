import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import { getBlogPost } from '@/lib/blog-posts'
import { CONTATO_IEP_TALKS, IEP_MAPA } from '@/lib/agenda-events'

const SLUG = 'praticar-ingles-em-curitiba-gratis'
const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`
const post = getBlogPost(SLUG)!

export const metadata: Metadata = {
  title: `${post.title} | Blog ETT`,
  description: post.description,
  keywords: [
    'praticar inglês em Curitiba',
    'praticar inglês Curitiba grátis',
    'onde treinar inglês Curitiba',
    'inglês Curitiba',
    'meetup inglês Curitiba',
    'grupo de conversação Curitiba',
    'IEP Talks',
    'inglês sábado Curitiba',
  ],
  alternates: { canonical: `/blog/${SLUG}/` },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    title: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${SLUG}/`,
    publishedTime: `${post.date}T09:00:00-03:00`,
    authors: ['DSSBR & GUBigData IA'],
    images: [
      {
        url: '/images/og-ett-2026.png',
        width: 1200,
        height: 630,
        alt: post.title,
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
      // Reescrito em 09/11/2026 para o IEP Talks (os antigos locais saíram).
      dateModified: '2026-11-09T09:00:00-03:00',
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      mainEntityOfPage: `${SITE_URL}/blog/${SLUG}/`,
      url: `${SITE_URL}/blog/${SLUG}/`,
      inLanguage: 'pt-BR',
      keywords: 'praticar inglês Curitiba, onde treinar inglês Curitiba, IEP Talks, grupo de conversação Curitiba',
      image: `${SITE_URL}/images/og-ett-2026.png`,
      wordCount: 700,
      articleSection: post.category,
      about: {
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
        <p>
          Curitiba tem dezenas de escolas de inglês, professores particulares e plataformas
          online. O que falta são <strong>lugares pra praticar a fala de fato</strong>: encontros
          recorrentes, com gente de vários níveis, num ambiente em que errar é normal. Este post
          mostra onde o English Talk Time faz isso em Curitiba — o <strong>IEP Talks</strong>, todo
          sábado de manhã — e a alternativa online pra quem não pode ir.
        </p>

        <h2>Por que &quot;praticar&quot; é diferente de &quot;estudar&quot; inglês</h2>
        <p>
          Estudar inglês é absorver: você lê, ouve, faz exercício, anota vocabulário. Praticar é o
          oposto: você <em>produz</em>. Fala em voz alta, improvisa resposta, se vira quando falta
          a palavra. Muita gente que &quot;trava&quot; tem anos de curso e muitas horas de série
          legendada, mas quase nenhuma hora de fala.
        </p>
        <p>
          Pra praticar você precisa de um lugar — de preferência <strong>recorrente</strong> (pra
          virar hábito), <strong>em grupo</strong> (pra ter conversa de verdade, com turnos) e{' '}
          <strong>com roteiro</strong> (pra não cair sempre no papo sobre o tempo).
        </p>

        <h2>IEP Talks: o encontro presencial do ETT em Curitiba</h2>
        <ul>
          <li>
            <strong>Quando:</strong> todo sábado, das 10h às 12h. As próximas datas ficam na{' '}
            <Link href="/agenda/">agenda</Link>.
          </li>
          <li>
            <strong>Onde:</strong> no IEP — Instituto de Engenharia do Paraná, Rua Emiliano Perneta,
            174, Centro, Curitiba.{' '}
            <a href={IEP_MAPA} target="_blank" rel="noopener noreferrer">
              Ver no mapa
            </a>
            .
          </li>
          <li>
            <strong>Quanto custa:</strong> nada. A entrada é franca, sem cadastro e sem plano.
          </li>
          <li>
            <strong>Pra quem:</strong> qualquer pessoa que queira praticar inglês, de qualquer
            área e em qualquer nível. Não tem prova de nível na porta.
          </li>
        </ul>

        <h2>Como funciona o encontro</h2>
        <p>
          Não é aula: não tem professor explicando gramática na frente. É uma roda de conversação
          com tema, perguntas e rodadas, pra ninguém ficar encarando o silêncio sem saber o que
          dizer. A conversa acontece em grupos pequenos e com rodízio, então todo mundo fala — e
          ninguém é corrigido em público.
        </p>
        <p>
          Pra participar, é só chegar no horário. Não precisa avisar antes nem preparar nada. Se
          tiver alguma dúvida sobre o IEP Talks,{' '}
          <a href={CONTATO_IEP_TALKS.whatsapp} target="_blank" rel="noopener noreferrer">
            fale com o {CONTATO_IEP_TALKS.nome} pelo WhatsApp
          </a>
          .
        </p>

        <h2>E se eu não puder ir no sábado?</h2>
        <p>
          Tem o <strong>encontro online, toda segunda, das 20h às 21h30</strong>, na sala do ETT
          Speak, direto no navegador. A estrutura é a mesma, também é gratuito, sem cadastro, e
          aberto pra quem está em qualquer lugar. Tem gente que faz os dois: o IEP Talks no sábado
          e o online na segunda. Não tem regra.
        </p>

        <h2>Conclusão prática</h2>
        <p>
          Em Curitiba você não precisa pagar pra praticar a fala em inglês. Você precisa{' '}
          <em>aparecer</em>. Escolha um sábado na <Link href="/agenda/">agenda</Link>, vá ao IEP
          às 10h — ou entre no online de segunda — e comece.
        </p>
      </BlogLayout>
    </>
  )
}
