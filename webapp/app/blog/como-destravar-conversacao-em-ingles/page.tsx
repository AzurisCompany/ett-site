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
      keywords:
        'destravar inglês, conversação em inglês, fala em inglês, fluência, praticar inglês',
      image: `${SITE_URL}/images/ETT-top01.png`,
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
          fala é específico — e tem solução prática. Esse artigo explica por que você trava e
          o caminho concreto pra destravar em 60 dias.
        </p>

        <h2>Por que você entende, mas não consegue falar</h2>
        <p>
          A diferença entre entender e falar tem nome técnico:{' '}
          <strong>vocabulário passivo</strong> (recognition) vs.{' '}
          <strong>vocabulário ativo</strong> (production). Pesquisas de linguística aplicada
          mostram que a maioria dos adultos estudando inglês tem vocabulário passivo de
          5–10x o ativo. Você reconhece milhares de palavras quando ouve/lê — mas só consegue
          puxar centenas pra falar.
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

        <h2>O que destrava (validado pela ciência e prática)</h2>
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
          <em>usando elas em frases novas todo dia</em>. 10–20 palavras por dia, com produção
          obrigatória. Em 90 dias isso vira 1.000 palavras ativas — o suficiente pra
          conversação fluente em qualquer assunto comum.
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
          é o motor invisível: quem pratica 1h/dia por 90 dias destrava. Quem pratica 3h
          uma vez por semana, não.
        </p>

        <h2>Caminho concreto: 60 dias até falar com mais segurança</h2>
        <p>
          Aqui está um esqueleto prático que a gente vê funcionar com a comunidade do ETT:
        </p>
        <ul>
          <li>
            <strong>Semanas 1-2 — diagnóstico e primeiro encontro.</strong> Você faz o
            diagnóstico de vocabulário (saber exatamente onde estão suas lacunas) e participa
            do primeiro encontro de conversação. Quase ninguém fala muito no primeiro — é
            normal. O objetivo é só estar lá e ouvir como o grupo funciona.
          </li>
          <li>
            <strong>Semanas 3-4 — rotina diária + simulações.</strong> 1h/dia dividida em
            vocabulário (15 min), série com legenda (20 min), diário falado (5 min) e
            preparo do próximo encontro (20 min). No encontro, você começa a falar em pares
            primeiro — onde é seguro errar.
          </li>
          <li>
            <strong>Mês 2 — imersão em contexto.</strong> Você simula situações da sua área:
            daily, demo técnica, entrevista. As ferramentas de IA do programa geram prompts
            específicos pro seu nível. Você sai do encontro com um set novo de frases prontas
            pra reusar na semana.
          </li>
          <li>
            <strong>Marca dos 60 dias.</strong> Não vai ser fluência total — mas vai ser{' '}
            <em>conforto suficiente pra puxar conversa, pedir esclarecimento e responder
            sem travar.</em> A partir daí o ganho é exponencial.
          </li>
        </ul>

        <h2>Por onde começar agora</h2>
        <p>
          Se você está em Curitiba, dá pra começar essa semana mesmo — tem{' '}
          <Link href="/curitiba/">encontros presenciais semanais em 4 locais</Link> (IEP, UTFPR,
          Hard Rock e Habitat). Se está em outra cidade, o{' '}
          <Link href="/online/">encontro online é toda segunda às 20h</Link> via Google
          Meet, aberto pra todo o Brasil.
        </p>
        <p>
          Em qualquer um dos formatos, você entra no grupo, pega a agenda, recebe os
          materiais das ferramentas e começa a treinar a fala com método. Os encontros são
          gratuitos. A inscrição leva 2 minutos.
        </p>
        <p>
          <em>
            O bloqueio de fala não se resolve sozinho — mas se resolve. Quase todo profissional
            que destravou começou exatamente onde você está agora: entendendo bem, mas
            travando na hora. A diferença é o ambiente e o método.
          </em>
        </p>
      </BlogLayout>
    </>
  )
}
