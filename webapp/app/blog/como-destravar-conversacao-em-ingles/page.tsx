import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import { getBlogPost } from '@/lib/blog-posts'

const SLUG = 'como-destravar-conversacao-em-ingles'
const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`
const post = getBlogPost(SLUG)!

export const metadata: Metadata = {
  title: `${post.title} | Blog ETT`,
  description: post.description,
  keywords: [
    'como destravar inglês',
    'destravar conversação em inglês',
    'travado no inglês',
    'medo de falar inglês',
    'fluência em inglês',
    'praticar inglês',
    'fala em inglês',
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
      keywords:
        'destravar inglês, conversação em inglês, fala em inglês, fluência, praticar inglês',
      image: `${SITE_URL}/images/og-ett-2026.png`,
      wordCount: 1300,
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
          Você estudou inglês por anos. Entende um podcast, lê documentação técnica
          sem dicionário, segue uma série legendada. Mas na primeira reunião internacional, na
          primeira call de entrevista, no primeiro stand-up com o time gringo —{' '}
          <strong>trava</strong>. As palavras somem. O cérebro entra em modo congelado. E você
          sai pensando: &quot;eu sei isso, por que não saiu?&quot;.
        </p>
        <p>
          Boa notícia: o problema não é falta de gramática nem de vocabulário. O bloqueio de
          fala é específico — e dá pra trabalhar nele com prática. Esse artigo explica por que
          você trava e o que costuma ajudar a destravar.
        </p>

        <h2>Por que você entende, mas não consegue falar</h2>
        <p>
          A diferença entre entender e falar tem nome técnico:{' '}
          <strong>vocabulário passivo</strong> (recognition) vs.{' '}
          <strong>vocabulário ativo</strong> (production). Em quem aprende uma língua
          estrangeira, o vocabulário que a pessoa reconhece costuma ser bem maior do que o que
          ela consegue usar. Você reconhece muitas palavras quando ouve ou lê — mas só uma
          parte delas sai na hora de falar.
        </p>
        <p>
          Some isso a três fatores que pioram o quadro:
        </p>
        <ul>
          <li>
            <strong>Translation mindset.</strong> Você ouve a pergunta em inglês, traduz pra
            português mentalmente, formula a resposta em português, traduz pra inglês,{' '}
            <em>depois</em> fala. O cérebro trava porque não dá tempo.
          </li>
          <li>
            <strong>Falta de turn-taking real.</strong> Aula tradicional é monólogo do
            professor. Você quase nunca tem que interromper, concordar, pedir esclarecimento.
            Aí na reunião real você não sabe como fazer isso.
          </li>
          <li>
            <strong>Medo de errar em frente aos colegas.</strong> O cérebro associa &quot;falar
            inglês&quot; a &quot;ser julgado&quot;. Resultado: silêncio defensivo.
          </li>
        </ul>

        <h2>O que NÃO destrava (mesmo que pareça)</h2>
        <p>
          A indústria de ensino de inglês vende muito caminho que não resolve o bloqueio:
        </p>
        <ul>
          <li>
            <strong>Mais gramática.</strong> Se você já entende, gramática não é seu gargalo.
            Decorar regras não faz a palavra sair na hora.
          </li>
          <li>
            <strong>Mais flashcards passivos.</strong> Cards de
            &quot;tradução-pra-tradução&quot; treinam reconhecimento, não produção. Sem usar
            a palavra em frase, ela não vira ativa.
          </li>
          <li>
            <strong>Aulas onde o professor fala mais que você.</strong> Você precisa de
            tempo de produção, não de tempo de input. Se a aula é monólogo, não destrava.
          </li>
          <li>
            <strong>Apps de &quot;fluência em 5 minutos&quot;.</strong> Não existe. Fluência
            funcional precisa de exposição diária e prática real de fala — não 5 minutos no
            ônibus.
          </li>
        </ul>

        <h2>O que costuma ajudar</h2>
        <p>
          O caminho que funciona combina quatro elementos:
        </p>
        <h3>1. Prática de fala em grupo, com tópicos guiados</h3>
        <p>
          Em grupo, você é forçado a tomar a vez de falar — interromper, concordar,
          discordar, pedir tempo pra pensar. Esses são os movimentos de fala real que aula 1-on-1
          não treina. E tópicos guiados (não bate-papo livre) garantem que você está
          praticando o vocabulário certo, não voltando às mesmas 200 palavras.{' '}
          <Link href="/conversacao/">
            Veja como o ETT estrutura cada encontro
          </Link>
          .
        </p>
        <h3>2. Repetição espaçada de vocabulário ATIVO</h3>
        <p>
          Em vez de flashcards passivos, você revisa palavras{' '}
          <em>usando elas em frases novas todo dia</em>: poucas palavras por dia, sempre com
          produção — dizer ou escrever uma frase sua com cada uma. É assim que uma palavra
          passa de reconhecida a usada.
        </p>
        <h3>3. Simulação de situações reais</h3>
        <p>
          Você não vai precisar falar sobre o tempo na reunião de quinta — vai precisar
          explicar um bug, dar update em sprint, fazer pitch em entrevista. Treine{' '}
          <em>isso</em>, com roteiro e feedback. Role-play estruturado funciona porque o
          cérebro precisa de repetição em contexto pra automatizar a produção.
        </p>
        <h3>4. Comunidade pra criar hábito</h3>
        <p>
          Sozinho, ninguém pratica. Aula individual é fácil de cancelar (&quot;tava
          cansado&quot;). Grupo gera compromisso — &quot;a galera vai estar lá&quot;. Hábito
          é o motor invisível: um pouco todo dia costuma render mais do que muito de vez em
          quando.
        </p>

        <h2>Um roteiro possível pras primeiras semanas</h2>
        <p>
          Não existe prazo garantido — cada pessoa parte de um ponto e tem uma rotina. Mas dá pra
          organizar o começo assim:
        </p>
        <ul>
          <li>
            <strong>Primeiras semanas — diagnóstico e primeiro encontro.</strong> Descubra onde
            estão suas lacunas de vocabulário (o Level Check, aberto pra experimentar no{' '}
            <Link href="/ferramentas/">ETT Player</Link>, faz esse diagnóstico) e vá ao primeiro
            encontro de conversação. Quase ninguém fala muito no primeiro — é normal. O objetivo é
            estar lá e ver como o grupo funciona.
          </li>
          <li>
            <strong>Depois — uma rotina diária curta.</strong> Um pouco de vocabulário, um vídeo
            com legenda em inglês e alguns minutos falando sozinho em voz alta sobre o seu dia.
            No encontro, comece falando em pares ou em grupo pequeno, onde é mais tranquilo errar.
          </li>
          <li>
            <strong>Com o tempo — situações da sua área.</strong> Leve pro encontro os temas que
            você vai precisar no trabalho: uma reunião, uma apresentação, uma entrevista. Saia de
            cada encontro com algumas frases novas pra reusar na semana.
          </li>
        </ul>
        <p>
          O que muda primeiro, pra muita gente, é o conforto: puxar conversa, pedir
          esclarecimento e responder sem congelar. Isso vem da prática acumulada, não de um
          número mágico de dias.
        </p>

        <h2>Por onde começar agora</h2>
        <p>
          Se você está em Curitiba, tem o <strong>IEP Talks</strong>, encontro presencial todo
          sábado, das 10h às 12h, no IEP (Rua Emiliano Perneta, 174, Centro). Se está em outra
          cidade, o <strong>encontro online é toda segunda, das 20h às 21h30</strong>, na sala do
          ETT Speak, direto no navegador.
        </p>
        <p>
          Os dois são gratuitos, abertos a qualquer pessoa e sem cadastro: é só aparecer. As
          próximas datas estão na <Link href="/agenda/">agenda</Link>. As ferramentas do ETT
          Player também estão abertas pra experimentar; se quiser orientação individual, um plano
          e material, existe a <Link href="/planos/adesao/">ativação acompanhada</Link>.
        </p>
        <p>
          <em>
            O bloqueio de fala não se resolve sozinho — mas dá pra trabalhar nele. Muita gente
            que hoje fala com mais segurança começou exatamente onde você está: entendendo bem,
            mas travando na hora. A diferença costuma ser ter onde praticar, com regularidade.
          </em>
        </p>
      </BlogLayout>
    </>
  )
}
