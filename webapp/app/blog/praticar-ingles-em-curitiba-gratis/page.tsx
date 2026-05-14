import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import { getBlogPost } from '@/lib/blog-posts'

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
        url: '/images/ETT-top01.png',
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
      dateModified: `${post.date}T09:00:00-03:00`,
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      mainEntityOfPage: `${SITE_URL}/blog/${SLUG}/`,
      url: `${SITE_URL}/blog/${SLUG}/`,
      inLanguage: 'pt-BR',
      keywords: 'praticar inglês Curitiba, onde treinar inglês Curitiba, meetup inglês',
      image: `${SITE_URL}/images/ETT-top01.png`,
      wordCount: 950,
      articleSection: post.category,
      about: {
        '@type': 'Place',
        name: 'Curitiba',
        address: {
          '@type': 'PostalAddress',
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
          Curitiba tem dezenas de escolas de inglês, professores particulares, plataformas
          online. O que falta — e o que destrava — são os{' '}
          <strong>lugares pra praticar a fala de fato</strong>: encontros recorrentes, com
          gente do seu nível e de níveis acima, em ambiente seguro pra errar. Esse artigo
          mapeia os 4 pontos onde o English Talk Time roda em Curitiba toda semana, todos
          gratuitos.
        </p>

        <h2>Por que &quot;praticar&quot; é diferente de &quot;estudar&quot; inglês</h2>
        <p>
          Estudar inglês é absorver — você lê, ouve, faz exercício, anota vocabulário.
          Praticar é o oposto: você <em>produz</em>. Fala em voz alta, escreve frase própria,
          improvisa resposta. A maioria dos brasileiros que &quot;trava&quot; tem ótimos
          números de estudo (anos de curso, milhares de horas de Netflix legendado) e quase
          zero números de prática (talvez 2-3 horas de fala em inglês na vida toda).
        </p>
        <p>
          Pra destravar você precisa de prática. E pra prática você precisa de um lugar — de
          preferência <strong>recorrente</strong> (pra criar hábito),{' '}
          <strong>em grupo</strong> (pra ter turn-taking real) e{' '}
          <strong>com método</strong> (pra não voltar ao bate-papo sobre o tempo toda vez).
        </p>

        <h2>Os 4 locais do ETT em Curitiba</h2>
        <p>
          O ETT faz rotação semanal entre 4 venues parceiros — a rotação é proposital. Cada
          ambiente puxa um tipo diferente de conversação:
        </p>

        <h3>1. IEP — Instituto de Engenharia do Paraná</h3>
        <p>
          Instituição centenária da engenharia paranaense. Espaço acadêmico e formal,
          perfeito pra conversação técnica e simulações de situação profissional (defesa
          de projeto, demo, apresentação executiva). Quem está em transição pra cargo mais
          sênior aproveita muito.
        </p>

        <h3>2. UTFPR — Universidade Tecnológica Federal do Paraná</h3>
        <p>
          A universidade pública mais ligada a tecnologia da região. Ambiente jovem, mente
          aberta, alunos de TI e engenharia com vontade de carreira internacional. Bom pra
          quem está começando ou cursando graduação/pós e quer um network universitário.
        </p>

        <h3>3. Hard Rock Cafe Curitiba</h3>
        <p>
          Encontro descontraído fora do ambiente acadêmico. Bar, música, ambiente real.
          Aqui o foco é small talk, networking informal e desbloquear a fala em situação de
          baixa pressão. Crítico porque a maioria das conversas reais em inglês acontece em
          contexto social, não em sala de aula.
        </p>

        <h3>4. Habitat — Sistema FIEP / Parque Tecnológico</h3>
        <p>
          Espaço de inovação e mobilidade ligado ao Sistema FIEP. Ambiente corporativo de
          startup, onde a conversa puxa pra negócios, produto e tecnologia aplicada.
          Ótimo pra quem trabalha em empresa de tech ou está empreendendo.
        </p>

        <h2>Como funciona cada encontro</h2>
        <p>
          Os 4 locais têm formatos diferentes (acadêmico, descontraído, corporativo,
          universitário), mas a estrutura do encontro é a mesma:
        </p>
        <ul>
          <li>
            <strong>10 min de warm-up</strong> — apresentação rápida, palavras-chave do dia,
            quebra-gelo.
          </li>
          <li>
            <strong>60 min de tópico principal</strong> — simulação de situação real, com
            roteiro flexível e feedback.
          </li>
          <li>
            <strong>15 min em pares</strong> — sub-sessões em duplas pra ninguém ficar
            calado.
          </li>
          <li>
            <strong>10 min de wrap-up</strong> — feedback, anotação de vocabulário novo,
            próximo passo individual.
          </li>
        </ul>
        <p>
          A agenda dos próximos encontros (com data, dia da semana e venue) está em{' '}
          <Link href="/agenda/">englishtalktime.com.br/agenda</Link>. Os detalhes do
          formato presencial em Curitiba estão em{' '}
          <Link href="/curitiba/">englishtalktime.com.br/curitiba</Link>.
        </p>

        <h2>E se eu não puder ir presencial?</h2>
        <p>
          Também tem encontro <Link href="/online/">online toda segunda às 20h</Link> via
          Google Meet — mesma estrutura, aberto pra todo o Brasil. Muita gente da
          comunidade de Curitiba faz os dois: 1 presencial por semana + o online de
          segunda. Não tem regra.
        </p>

        <h2>Conclusão prática</h2>
        <p>
          Em Curitiba você não precisa pagar pra praticar inglês. Você precisa{' '}
          <em>aparecer</em>. Os encontros do ETT são gratuitos, a rotação por 4 venues
          garante variedade de contexto, e a comunidade existe pra você não ter que destravar
          sozinho. Inscreva-se, pegue o link da agenda, escolha a próxima data que cabe na
          sua semana — e vai.
        </p>
      </BlogLayout>
    </>
  )
}
