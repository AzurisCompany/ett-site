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
  /** logo do parceiro (em /public), pra atribuição visual */
  partnerLogo: string
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
    slug: 'guerras-de-sotaque-reino-unido',
    partnerName: 'Aprendendo Inglês',
    partnerUrl:
      'https://www.aprendendoingles.com.br/2026/05/23/as-guerras-de-sotaque-do-reino-unido/',
    partnerHome: 'https://www.aprendendoingles.com.br/',
    partnerLogo: '/images/aprendendoingles-logo.png',
    partnerAuthor: 'Rubens Queiroz de Almeida',
    partnerTitle: 'As "Guerras de Sotaque" do Reino Unido',
    title: 'Por que o seu sotaque de brasileiro não é defeito',
    description:
      'Um passeio pelos sotaques britânicos — do RP da elite ao inglês multicultural de Londres — mostra que sotaque é identidade, não erro. Resumo do artigo do parceiro Aprendendo Inglês + o ângulo do ETT pra quem trava com medo de "falar errado".',
    excerpt:
      'No Reino Unido o sotaque funciona como um "código de barras social" — e mesmo lá dentro existe preconceito entre regiões. O artigo do Rubens Queiroz mostra que manter a própria voz é orgulho, não deficiência. Nós explicamos por que isso importa pra quem aprende inglês no Brasil.',
    date: '2026-06-05',
    partnerDate: '2026-05-23',
    readMinutes: 4,
    category: 'Indicação',
    tags: ['sotaque', 'pronúncia', 'inglês britânico', 'destravar inglês', 'mentalidade'],
    summary: [
      'O artigo faz um tour pelos sotaques do Reino Unido e mostra como, lá dentro, a forma de falar funciona como um "código de barras sonoro": o Received Pronunciation (RP) — aquele inglês "da BBC", associado à elite e às escolas de prestígio — virou por décadas o padrão que abria portas, mesmo sendo falado hoje por menos de 3% da população. Quem não falava assim era injustamente lido como menos inteligente.',
      'A partir daí o texto desmonta esse preconceito de sotaque (o tal "accentism"): sotaques do norte como Geordie, Scouse e Yorkshire são vistos como simpáticos mas perdem espaço no mercado corporativo; o Brummie, de Birmingham, carregou fama de "menos atraente" até séries como Peaky Blinders ajudarem a virar o jogo. Ou seja: mesmo entre nativos, existe uma hierarquia social embutida no jeito de falar.',
      'O contraponto vem do Multicultural London English (MLE) — o inglês que nasceu nos bairros multiculturais de Londres, misturando influências jamaicanas, africanas e do sul da Ásia, e que hoje domina a fala da juventude e o grime/drill. Para os linguistas, é evolução natural da língua. A conclusão prática do autor é direta: sotaque é uma questão de identidade, e manter a própria voz é um ato de orgulho, não um defeito a ser apagado.',
    ],
    whyRead:
      'No ETT a gente vê muita gente de tech travar não por falta de vocabulário, mas por vergonha do próprio sotaque — "vão perceber que sou brasileiro". Este artigo é o antídoto: se nem os ingleses concordam sobre qual sotaque é o "certo", o seu sotaque de brasileiro também não é erro. O objetivo numa call internacional é ser entendido com clareza, não soar como a rainha. Leitura curta e libertadora pra quem precisa abrir a boca e praticar sem esse peso. Recomendamos.',
  },
  {
    slug: 'o-poder-da-palavra-ainda-no-ingles',
    partnerName: 'Aprendendo Inglês',
    partnerUrl:
      'https://www.aprendendoingles.com.br/2026/05/31/o-poder-de-uma-unica-palavra-como-o-ainda-pode-salvar-seu-ingles/',
    partnerHome: 'https://www.aprendendoingles.com.br/',
    partnerLogo: '/images/aprendendoingles-logo.png',
    partnerAuthor: 'Rubens Queiroz de Almeida',
    partnerTitle:
      "O Poder de uma Única Palavra: Como o 'Ainda' Pode Salvar seu Inglês",
    title: 'A palavra "ainda" pode destravar o seu inglês',
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
