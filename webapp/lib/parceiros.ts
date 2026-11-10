/**
 * Parceiros do ETT — fonte única (home, /detalhes/, /imersoes/).
 *
 * Categorias aprovadas pelo Alessandro em 31/10/2026. UTFPR, Hard Rock e
 * Habitat saíram (decisão #2 de 01/08: o único presencial é o IEP Talks).
 *
 * Regras:
 * - `oferece` é o que o PARCEIRO entrega, sob as condições dele.
 * - `apoioEtt` é só o que o ETT faz de fato nessa parceria. Não prometer
 *   benefício, desconto ou prêmio de parceiro sem acordo por escrito
 *   (ver comentário de `premios` em lib/planos.ts).
 * - Nada de resultado quantificado de terceiro ("10× mais rápido", "vaga no
 *   exterior em 30 dias", "salário 5x") — não temos como verificar.
 */

export type CategoriaParceiro = 'ensino' | 'imersao' | 'conteudo' | 'carreira' | 'institucional'

export const categorias: { id: CategoriaParceiro; titulo: string; descricao: string }[] = [
  {
    id: 'ensino',
    titulo: 'Ensino e formação',
    descricao: 'Cursos e aulas, oferecidos pelo parceiro.',
  },
  {
    id: 'imersao',
    titulo: 'Imersão',
    descricao: 'Experiências intensivas, no Brasil e no exterior.',
  },
  {
    id: 'conteudo',
    titulo: 'Conteúdo',
    descricao: 'Material, artigos e método pra estudar por conta.',
  },
  {
    id: 'carreira',
    titulo: 'Carreira',
    descricao: 'Preparação pra trabalhar em inglês.',
  },
  {
    id: 'institucional',
    titulo: 'Institucional e comunidade',
    descricao: 'Quem recebe e mantém os encontros.',
  },
]

export type Parceiro = {
  id: string
  nome: string
  categoria: CategoriaParceiro
  logo: string | null
  /** O que o parceiro oferece, sob as condições dele. */
  oferece: string
  /** O que o ETT faz nessa parceria. */
  apoioEtt: string
  url: string | null
}

export const parceiros: Parceiro[] = [
  {
    id: 'beetools',
    nome: 'BeeTools',
    categoria: 'ensino',
    logo: '/images/logobeetools.webp',
    oferece:
      'Escola de inglês com cursos estruturados, uso de IA e gamificação. Certificada ETS® e parceira do programa #TôComProf do Governo Federal.',
    apoioEtt:
      'Indicação pra quem está começando do zero e precisa de base, além dos encontros e das ferramentas pra praticar junto com o curso.',
    url: 'https://www.beetools.com.br/',
  },
  {
    id: 'cherrytop',
    nome: 'Cherry Top',
    categoria: 'imersao',
    logo: '/images/logo-cherrytop.jpeg',
    oferece:
      'Imersões em inglês no Brasil (Immersion Village, Lagoa Santa/MG) e nos Estados Unidos (Flórida), com o método Bonding + Native-like.',
    apoioEtt:
      'Divulgação das turmas, encaminhamento de quem tem interesse e as ferramentas e os encontros pra praticar antes e depois da imersão.',
    url: 'https://cherrytop.com.br',
  },
  {
    id: 'aprendendoingles',
    nome: 'Aprendendo Inglês',
    categoria: 'conteudo',
    logo: '/images/aprendendoingles-logo.png',
    oferece:
      'Site brasileiro de conteúdo gratuito, criado por Rubens Queiroz de Almeida: dicas práticas, vídeos, músicas e histórias.',
    apoioEtt: 'Indicações semanais no blog do ETT, com resumo nosso e link pro artigo completo no site deles.',
    url: 'https://www.aprendendoingles.com.br/',
  },
  {
    id: 'formula-fluente',
    nome: 'Fórmula Fluente',
    categoria: 'conteudo',
    logo: null,
    oferece:
      'Método de organização do estudo criado por Frank Florida: blocos curtos, vocabulário relevante e repetição orientada.',
    apoioEtt: 'É a base de como as ferramentas do ETT organizam a rotina, e as aulas em vídeo estão dentro do ETT Player.',
    url: '/ff/',
  },
  {
    id: 'coders',
    nome: 'Coders',
    categoria: 'carreira',
    logo: '/images/coders_logo.jpg',
    oferece:
      'Mentoria de carreira internacional pra profissionais de tecnologia: currículo, LinkedIn, entrevistas e mudança de país.',
    apoioEtt: 'Indicação pra quem quer trabalhar fora, e os encontros pra treinar entrevista e conversa de trabalho em inglês.',
    url: 'https://www.coders.com.br/',
  },
  {
    id: 'iep',
    nome: 'IEP',
    categoria: 'institucional',
    logo: '/images/logoiep.jpg',
    oferece: 'Instituto de Engenharia do Paraná, em Curitiba. Recebe o IEP Talks todo sábado, das 10h às 12h.',
    apoioEtt: 'O ETT organiza o roteiro e a condução dos encontros presenciais.',
    url: 'https://iep.org.br/',
  },
  {
    id: 'dssbr',
    nome: 'DSSBR & GUBigData IA',
    categoria: 'institucional',
    logo: null,
    oferece: 'Comunidade de dados e IA que mantém o English Talk Time.',
    apoioEtt: 'O ETT nasceu dentro da comunidade e foi lançado no Congresso DSSBR 2026.',
    url: null,
  },
]

export const parceirosPorCategoria = categorias
  .map((c) => ({ ...c, parceiros: parceiros.filter((p) => p.categoria === c.id) }))
  .filter((c) => c.parceiros.length > 0)

/** Frase de responsabilidade — aparece onde houver oferta de parceiro. */
export const AVISO_PARCEIROS =
  'Cada parceiro é responsável pelos cursos, aulas e experiências que oferece, com preços, regras e condições próprios.'
