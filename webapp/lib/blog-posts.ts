export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  excerpt: string
  date: string // YYYY-MM-DD
  readMinutes: number
  category: string
  tags: string[]
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'como-destravar-conversacao-em-ingles',
    title:
      'Como Destravar a Conversação em Inglês (Quando Você Entende, Mas Trava na Hora de Falar)',
    description:
      'O bloqueio de fala em inglês não é falta de gramática — é falta de prática real e estruturada. Veja por que você trava e o caminho concreto pra começar a falar em 60 dias.',
    excerpt:
      'Você estudou anos, entende um podcast, lê documentação técnica… mas na primeira reunião em inglês trava. Não é problema de vocabulário. É outra coisa — e tem solução prática.',
    date: '2026-05-12',
    readMinutes: 8,
    category: 'Conversação',
    tags: ['destravar inglês', 'conversação', 'fala em inglês'],
  },
  {
    slug: 'praticar-ingles-em-curitiba-gratis',
    title:
      'Praticar Inglês em Curitiba: 4 Locais Onde Você Pode Conversar Toda Semana (Grátis)',
    description:
      'Onde praticar inglês em Curitiba presencialmente e sem pagar nada. Os 4 locais oficiais do ETT — IEP, UTFPR, Hard Rock Cafe e Habitat — e como funciona cada um.',
    excerpt:
      'Não adianta saber inglês na teoria se você não fala. E em Curitiba sobram cursos pra estudar e faltam lugares pra praticar. Aqui está o mapa dos 4 pontos de encontro grátis.',
    date: '2026-05-08',
    readMinutes: 6,
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
  return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, limit)
}
