import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import { getBlogPost } from '@/lib/blog-posts'

const SLUG = 'grupo-de-conversacao-vs-aula-particular'
const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`
const post = getBlogPost(SLUG)!

export const metadata: Metadata = {
  title: `${post.title} | Blog ETT`,
  description: post.description,
  keywords: [
    'grupo de conversação vs aula particular',
    'Cambly vale a pena',
    'conversation club',
    'aula particular inglês',
    'qual o melhor método para aprender inglês',
    'praticar inglês',
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
      dateModified: '2026-11-09T09:00:00-03:00',
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      mainEntityOfPage: `${SITE_URL}/blog/${SLUG}/`,
      url: `${SITE_URL}/blog/${SLUG}/`,
      inLanguage: 'pt-BR',
      keywords: 'grupo de conversação, Cambly, aula particular, conversation club',
      image: `${SITE_URL}/images/og-ett-2026.png`,
      wordCount: 1400,
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
        <p>
          Cambly, Preply, Tandem, professor próprio, conversation club, app de fluência —
          todo mundo promete a mesma coisa: você vai falar inglês. Mas a verdade prática é
          que <strong>cada formato resolve um problema diferente</strong>. Escolher o errado
          custa dinheiro e tempo. Esse artigo compara o que cada um
          realmente entrega — sem patrocínio, com base no que a gente vê na comunidade.
        </p>

        <h2>O que cada formato faz bem (e mal)</h2>

        <h3>Aula 1-on-1 (Cambly, Preply, professor próprio)</h3>
        <p>
          <strong>Faz bem:</strong> correção pontual de pronúncia e gramática. Bom pra quem
          precisa de feedback individual detalhado, está se preparando pra uma prova específica
          (TOEFL, IELTS) ou tem dúvida técnica de gramática.
        </p>
        <p>
          <strong>Faz mal:</strong> tempo de produção. Numa aula, boa parte do tempo costuma ir
          pro professor explicando, corrigindo e dando exemplo. Pra destravar a fala você
          precisa de tempo de produção alto — não baixo.
        </p>
        <p>
          <strong>E o custo:</strong> paga-se por sessão. Pra criar hábito com várias sessões por
          semana, a conta mensal fica alta pra boa parte das pessoas.
        </p>

        <h3>Apps de fluência (Duolingo, Babbel, Cake)</h3>
        <p>
          <strong>Fazem bem:</strong> vocabulário básico, exposure inicial, criar mini-hábito.
          Ótimos pra quem está começando do zero ou quer manter contato leve com o idioma.
        </p>
        <p>
          <strong>Fazem mal:</strong> não treinam fala. Você responde gamificações,
          completa lacunas, repete áudios — mas não{' '}
          <em>conversa</em>. Conversação é improvisação em tempo real com outra pessoa
          imprevisível. App é o oposto disso.
        </p>

        <h3>Imersão (intercâmbio, programa intensivo)</h3>
        <p>
          <strong>Faz bem:</strong> concentração. Você passa dias inteiros usando o idioma,
          com uma intensidade difícil de reproduzir na rotina — especialmente pra quem já tem
          alguma base.
        </p>
        <p>
          <strong>Faz mal:</strong> acesso. Costuma ser o formato mais caro e exige tempo e
          deslocamento. Não é uma rotina — é um evento. Sem prática contínua depois, parte do
          que se ganhou tende a se perder.
        </p>
        <p>
          <strong>Observação:</strong> imersão funciona melhor depois de um período de
          conversação regular: quem chega já acostumado a falar em grupo tende a aproveitar
          mais. É por isso que o ETT divulga as imersões oferecidas pela Cherry Top, nossa
          parceira — veja{' '}
          <Link href="/imersoes/">englishtalktime.com.br/imersoes</Link>.
        </p>

        <h3>Conversation club tradicional (Meetup, escola de inglês)</h3>
        <p>
          <strong>Faz bem:</strong> é grátis (ou barato) e dá tempo de fala em grupo.
          Quebra o isolamento de quem estuda sozinho.
        </p>
        <p>
          <strong>Faz mal:</strong> sem método, vira bate-papo. Toda semana você fala
          sobre o tempo, comida, fim de semana — não evolui. Não tem feedback estruturado,
          não tem progressão de vocabulário, não tem simulação de situação real. É melhor
          que nada, mas estaciona rápido.
        </p>

        <h3>Grupo de conversação estruturado (ETT e similares)</h3>
        <p>
          <strong>Faz bem:</strong> combina o que cada um dos outros formatos faz pela
          metade — tempo de fala em grupo (não em monólogo), roteiro e tema em cada encontro,
          situações reais, e custo baixo ou zero. Pra quem quer praticar a fala gastando pouco,
          é um ótimo ponto de partida.
        </p>
        <p>
          <strong>Faz mal:</strong> não substitui correção individual detalhada. Pra quem
          tem prova de proficiência marcada para breve, vale ter aula 1-on-1 em paralelo.
        </p>

        <h2>Tabela de comparação rápida</h2>
        <p>
          Na nossa leitura (é opinião da equipe do ETT, não resultado de pesquisa), para o
          objetivo de <strong>destravar a fala em inglês pro trabalho</strong>:
        </p>
        <ul>
          <li>
            <strong>Tempo de produção por R$:</strong> Conversation estruturado &gt; Conversation
            tradicional &gt; Imersão &gt; Aula 1-on-1 &gt; App.
          </li>
          <li>
            <strong>Comunidade e hábito:</strong> Conversation estruturado &gt; Imersão &gt;
            Conversation tradicional &gt; Aula 1-on-1 &gt; App.
          </li>
          <li>
            <strong>Método e progressão:</strong> Imersão &gt; Conversation estruturado &gt; Aula
            1-on-1 &gt; Conversation tradicional &gt; App.
          </li>
          <li>
            <strong>Correção individual detalhada:</strong> Aula 1-on-1 &gt; Imersão &gt;
            Conversation estruturado &gt; App &gt; Conversation tradicional.
          </li>
          <li>
            <strong>Custo:</strong> App &gt; Conversation estruturado &gt; Conversation
            tradicional &gt; Aula 1-on-1 &gt; Imersão (do mais barato pro mais caro).
          </li>
        </ul>

        <h2>Como combinar de forma inteligente</h2>
        <p>
          Muita gente combina pelo menos dois formatos. Alguns exemplos:
        </p>
        <ul>
          <li>
            <strong>Combinação barata:</strong> grupo de conversação estruturado (uma ou duas
            vezes por semana) + um app ou ferramenta de vocabulário alguns minutos por dia.
          </li>
          <li>
            <strong>Combinação pra prova específica:</strong> grupo de conversação + aula 1-on-1
            focada na prova.
          </li>
          <li>
            <strong>Combinação com imersão:</strong> grupo de conversação antes, a imersão, e
            grupo de conversação depois, pra manter o inglês em uso.
          </li>
        </ul>

        <h2>O ETT está em qual quadrante</h2>
        <p>
          O English Talk Time é grupo de conversação{' '}
          <strong>estruturado</strong> — não bate-papo. Cada encontro tem tema, perguntas e
          rodadas, em grupos pequenos, pra todo mundo falar. Os encontros são gratuitos, abertos
          a qualquer pessoa e sem cadastro: online toda segunda às 20h, na sala do ETT Speak, e o
          IEP Talks, presencial, aos sábados às 10h, no IEP, em Curitiba. Entre um encontro e
          outro, as ferramentas do <Link href="/ferramentas/">ETT Player</Link> estão abertas pra
          experimentar.{' '}
          <Link href="/agenda/">Veja as próximas datas na agenda</Link>.
        </p>
        <p>
          Pra quem quer uma imersão, o ETT divulga as imersões oferecidas pela Cherry Top —
          inscrição, valores e condições são definidos por ela.{' '}
          <Link href="/imersoes/">Confira as turmas</Link>.
        </p>

        <h2>Resumindo: por onde começar?</h2>
        <p>
          Se você tem orçamento curto e o objetivo é destravar pro mercado:{' '}
          <strong>grupo de conversação estruturado</strong> é um bom ponto de partida. É
          grátis, tem comunidade e tem roteiro. Depois de algumas semanas de prática, dá pra
          avaliar se quer adicionar aula individual, imersão ou seguir só com o grupo.
        </p>
        <p>
          O que raramente funciona pra adulto que já entende inglês é tentar destravar a fala
          só com app, sozinho. Pra conversar, você precisa de gente.
        </p>
      </BlogLayout>
    </>
  )
}
