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
      keywords: 'grupo de conversação, Cambly, aula particular, conversation club',
      image: `${SITE_URL}/images/ETT-top01.png`,
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
          é caro (em dinheiro e em meses perdidos). Esse artigo compara o que cada um
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
          <strong>Faz mal:</strong> tempo de produção. Em 50 minutos de aula, o aluno fala
          em média 15-20 minutos. O resto é professor explicando, corrigindo, dando exemplo.
          Pra destravar a fala você precisa de tempo de produção alto — não baixo.
        </p>
        <p>
          <strong>E o custo:</strong> R$ 50–150 por sessão. Pra criar hábito (3-5 sessões por
          semana) você gasta R$ 1.000–3.000/mês. Insustentável pra maioria.
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
          <strong>Faz bem:</strong> salto de nível rápido. 30 dias de imersão equivalem a
          6-12 meses de estudo regular pra quem já tem base. É de longe o método mais
          eficiente em ganho-por-dia.
        </p>
        <p>
          <strong>Faz mal:</strong> acesso. Custa caro (R$ 8k–30k+) e exige tempo de
          deslocamento. Não é uma rotina — é um evento. Se você não criar prática contínua
          depois, parte do ganho some em 3 meses.
        </p>
        <p>
          <strong>Observação:</strong> imersão funciona melhor depois de um período de
          conversação regular. Quem entra na imersão já tendo praticado fala num grupo
          aproveita 3-5x mais. Pelo nosso lado, a gente trabalha com a Cherry Top exatamente
          nessa lógica — veja{' '}
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
          metade — tempo de fala em grupo (não em monólogo), método e progressão de
          vocabulário, simulação de situação real, e custo baixo ou zero. É a opção que
          mais destrava por real gasto.
        </p>
        <p>
          <strong>Faz mal:</strong> não substitui correção individual detalhada. Pra quem
          tem prova de proficiência marcada em 2 meses, precisa também de aula 1-on-1 em
          paralelo. Mas pra destravar a fala pro mercado, é o método dominante.
        </p>

        <h2>Tabela de comparação rápida</h2>
        <p>
          Para o objetivo de <strong>destravar a fala em inglês pro trabalho</strong>:
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
          A maioria das pessoas que destravou bem combina pelo menos dois formatos:
        </p>
        <ul>
          <li>
            <strong>Stack barato e eficaz:</strong> grupo de conversação estruturado
            (2-3x/semana) + app de vocabulário (15 min/dia). Custo: ~R$ 0–50/mês. Funciona
            pra quase todo mundo.
          </li>
          <li>
            <strong>Stack pra prova específica:</strong> grupo de conversação + aula 1-on-1
            focada (1-2x/semana) na prova. Custo: ~R$ 400–800/mês.
          </li>
          <li>
            <strong>Stack pra salto de nível rápido:</strong> grupo de conversação 3
            meses antes + imersão de 1-4 semanas + grupo de conversação 3 meses depois.
            Custo: depende da imersão.
          </li>
        </ul>

        <h2>O ETT está em qual quadrante</h2>
        <p>
          O English Talk Time é grupo de conversação{' '}
          <strong>estruturado</strong> — não bate-papo. Cada encontro tem tópico anunciado
          antes, simulação real (entrevista, daily, demo, negociação), e ferramentas de IA
          que preparam você antes e consolidam depois. Encontros são gratuitos, online
          toda segunda e presenciais em Curitiba.{' '}
          <Link href="/conversacao/">Veja como funciona em detalhe</Link>.
        </p>
        <p>
          Pra quem quer o salto de nível, a gente trabalha com a Cherry Top em imersões
          intensivas — formato &quot;grupo + imersão&quot; descrito acima.{' '}
          <Link href="/imersoes/">Confira as próximas imersões</Link>.
        </p>

        <h2>Resumindo: por onde começar?</h2>
        <p>
          Se você tem orçamento curto e o objetivo é destravar pro mercado:{' '}
          <strong>grupo de conversação estruturado</strong> é o melhor ponto de partida.
          É grátis, tem comunidade, tem método, e o ganho por hora investida é o mais alto
          do mercado. Depois de 60-90 dias, dá pra avaliar se quer adicionar aula
          individual, imersão ou seguir só com o grupo.
        </p>
        <p>
          A pior decisão é gastar 6 meses tentando destravar sozinho com app —{' '}
          <em>isso não funciona</em> pra adulto que já entende inglês. Você precisa de
          gente.
        </p>
      </BlogLayout>
    </>
  )
}
