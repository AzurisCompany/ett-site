// Indicações de conteúdo de parceiros.
//
// Cada item vira UMA página em /blog/indicacoes/<slug>/ com um resumo ORIGINAL
// nosso (campo `summary`) + link pro artigo completo no site do parceiro.
//
// IMPORTANTE: nunca copie o texto integral do parceiro. O `summary` é conteúdo
// original do ETT (resenha/curadoria); o leitor termina a leitura no site dele.
//
// Fluxo automatizado: `npm run partner:feed` lê o RSS do parceiro e mostra os
// artigos ainda não publicados aqui. O agente semanal (ver CLAUDE.md) lê cada
// novo artigo, escreve o resumo original e adiciona um objeto neste array.

export interface PartnerPost {
  /** slug da nossa URL: /blog/indicacoes/<slug>/ */
  slug: string
  /** nome do parceiro, ex.: 'Aprendendo Inglês' */
  partnerName: string
  /** URL do artigo completo no site do parceiro (CTA principal) */
  partnerUrl: string
  /** homepage do parceiro (atribuição) */
  partnerHome: string
  /** autor original do artigo, se houver */
  partnerAuthor?: string
  /** título original do artigo no parceiro */
  partnerTitle: string
  /** título da NOSSA página (pode adaptar o original) */
  title: string
  /** meta description / subtítulo — nosso ângulo */
  description: string
  /** resumo curto pra listagem do blog */
  excerpt: string
  /** data de publicação NO NOSSO site (YYYY-MM-DD) */
  date: string
  /** data de publicação ORIGINAL no parceiro (YYYY-MM-DD) */
  partnerDate: string
  /** tempo estimado de leitura do nosso resumo, em minutos */
  readMinutes: number
  category: string
  tags: string[]
  /** resumo ORIGINAL nosso, em parágrafos (cada string = um <p>) */
  summary: string[]
  /** por que o ETT recomenda / pra quem é (um parágrafo) */
  whyRead: string
}

export const partnerPosts: PartnerPost[] = [
  {
    slug: 'o-poder-da-palavra-ainda-no-ingles',
    partnerName: 'Aprendendo Inglês',
    partnerUrl:
      'https://www.aprendendoingles.com.br/2026/05/31/o-poder-de-uma-unica-palavra-como-o-ainda-pode-salvar-seu-ingles/',
    partnerHome: 'https://www.aprendendoingles.com.br/',
    partnerAuthor: 'Rubens Queiroz de Almeida',
    partnerTitle:
      "O Poder de uma Única Palavra: Como o 'Ainda' Pode Salvar seu Inglês",
    title: 'A palavra "ainda" pode destravar o seu inglês (indicação de leitura)',
    description:
      'Trocar "eu não falo inglês" por "eu não falo inglês… ainda" muda a forma como o seu cérebro encara o aprendizado. Resumo do artigo do parceiro Aprendendo Inglês + o ângulo do ETT.',
    excerpt:
      'Uma única palavra muda a frase de uma sentença definitiva ("não falo inglês") pra um processo em andamento ("não falo inglês… ainda"). O artigo do Rubens Queiroz mostra por que isso importa — e nós explicamos como aplicar no treino de fala.',
    date: '2026-06-05',
    partnerDate: '2026-05-31',
    readMinutes: 3,
    category: 'Indicação',
    tags: ['mentalidade de crescimento', 'aprender inglês', 'motivação', 'destravar inglês'],
    summary: [
      'O artigo parte de uma observação simples e poderosa: a frase "eu não falo inglês" é processada pelo cérebro como um estado fixo, definitivo — algo que você é, não algo que você está construindo. E estado fixo gera frustração, comparação injusta e desistência.',
      'A virada é acrescentar uma palavra no fim: "eu não falo inglês… ainda". O texto se apoia na ideia de Mentalidade de Crescimento (Carol Dweck) pra mostrar como esse "ainda" transforma uma falha estática num processo dinâmico — você passa a se comparar com o seu próprio progresso, não com poliglotas.',
      'O autor dá exemplos práticos de reformulação: "eles falam rápido demais" vira "não acompanho essa velocidade ainda"; "minha pronúncia é ruim" vira "minha pronúncia não está clara ainda"; "nunca vou aprender os tempos verbais" vira "não dominei o Present Perfect ainda". Pequena mudança de linguagem, grande mudança de atitude.',
    ],
    whyRead:
      'No ETT a gente vê isso toda semana no grupo de conversação: quem trava não é quem sabe menos, é quem se convenceu de que "não fala inglês" como se fosse um veredito. Esse artigo é uma leitura curta e prática pra quebrar exatamente esse bloqueio mental antes de abrir a boca pra praticar. Recomendamos.',
  },
]

export function getPartnerPost(slug: string): PartnerPost | undefined {
  return partnerPosts.find((p) => p.slug === slug)
}
