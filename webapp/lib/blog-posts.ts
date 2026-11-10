export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  excerpt: string
  date: string // YYYY-MM-DD
  readMinutes: number
  category: string
  tags: string[]
  /**
   * Post de evento que já aconteceu (YYYY-MM-DD do evento). O post continua no ar,
   * ganha a faixa "Evento realizado em dd/mm/aaaa", desce pro fim da listagem e sai
   * do "Continue lendo".
   */
  realizado?: string
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'cherrytop-business-meal',
    title:
      'CherryTop Business Meal: uma hora de inglês de negócios, online e gratuita (realizado em 1º de agosto)',
    description:
      'Evento realizado. A Cherry Top, parceira que oferece as imersões divulgadas pelo ETT, fez no sábado 01/08/2026, das 12h às 13h, uma experiência online gratuita pra praticar negotiation, networking e team building em inglês.',
    excerpt:
      'Evento realizado em 1º de agosto: uma hora praticando inglês em situações de negócio — negociação, networking e trabalho em equipe. Online, gratuito, realização da Cherry Top.',
    date: '2026-07-27',
    realizado: '2026-08-01',
    readMinutes: 4,
    category: 'Encontros',
    tags: ['inglês de negócios', 'Cherry Top', 'networking', 'encontro online'],
  },
  {
    slug: 'parceria-aprendendo-ingles',
    title: 'ETT firma parceria com o Aprendendo Inglês',
    description:
      'O English Talk Time fecha parceria com o portal Aprendendo Inglês para dar aos participantes mais uma fonte confiável de conteúdo gratuito — artigos, músicas e newsletter diária — pra manter o inglês na rotina entre um encontro de conversação e outro.',
    excerpt:
      'Novidade na comunidade ETT: agora você conta com o conteúdo do Aprendendo Inglês — dicas práticas, Easy English Songs e uma newsletter diária — pra manter contato com o idioma todo dia, fora dos nossos encontros.',
    date: '2026-06-06',
    readMinutes: 3,
    category: 'Parcerias',
    tags: ['parceria', 'Aprendendo Inglês', 'rotina de estudo', 'conteúdo gratuito'],
  },
  {
    slug: 'como-destravar-conversacao-em-ingles',
    title:
      'Como Destravar a Conversação em Inglês (Quando Você Entende, Mas Trava na Hora de Falar)',
    description:
      'O bloqueio de fala em inglês não é falta de gramática — é falta de prática real e estruturada. Veja por que você trava e o que costuma ajudar a começar a falar.',
    excerpt:
      'Você estudou anos, entende um podcast, lê documentação técnica… mas na primeira reunião em inglês trava. Não é problema de vocabulário. É outra coisa — e dá pra trabalhar nisso com prática.',
    date: '2026-05-12',
    readMinutes: 8,
    category: 'Conversação',
    tags: ['destravar inglês', 'conversação', 'fala em inglês'],
  },
  {
    slug: 'praticar-ingles-em-curitiba-gratis',
    title:
      'Praticar Inglês em Curitiba de Graça: o IEP Talks, Todo Sábado às 10h (e o Online de Segunda)',
    description:
      'Onde praticar inglês em Curitiba sem pagar: o IEP Talks, encontro de conversação presencial do ETT todo sábado, das 10h às 12h, no IEP (Rua Emiliano Perneta, 174). Entrada franca, sem cadastro. E, pra quem não pode ir, o encontro online de segunda às 20h.',
    excerpt:
      'Em Curitiba sobram cursos pra estudar e faltam lugares pra praticar a fala. O IEP Talks é um deles: todo sábado de manhã, no Centro, aberto a qualquer pessoa, sem cadastro e sem pagar.',
    date: '2026-05-08',
    readMinutes: 5,
    category: 'Curitiba',
    tags: ['Curitiba', 'praticar inglês', 'conversação em inglês Curitiba'],
  },
  {
    slug: 'grupo-de-conversacao-vs-aula-particular',
    title:
      'Grupo de Conversação em Inglês vs. Aula Particular: Qual Realmente Destrava a Fala?',
    description:
      'Comparativo honesto entre grupo de conversação, aula particular 1-on-1 (Cambly, professor próprio) e apps. Onde cada um funciona — e onde não. Pra você não gastar errado.',
    excerpt:
      'Cambly, Tandem, Preply, aula com professor, conversation club, app de fluência — todo mundo promete a mesma coisa. A maioria entrega coisas diferentes. Aqui está a verdade sem patrocínio.',
    date: '2026-05-04',
    readMinutes: 9,
    category: 'Guia',
    tags: ['conversation club', 'aula particular', 'comparativo'],
  },
]

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit = 2): BlogPostMeta[] {
  return blogPosts.filter((p) => p.slug !== currentSlug && !p.realizado).slice(0, limit)
}
