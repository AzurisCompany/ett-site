/**
 * Ferramentas do ETT — fonte única.
 *
 * ⚠️ Esta lista espelha o ETT Player EM PRODUÇÃO (https://ett-player.vercel.app/),
 * conferido em 31/10/2026. Só entra aqui o que o Player mostra, com o status
 * que o próprio Player dá a cada app. Ferramenta nova entra quando aparecer no
 * Player — não antes. Recurso planejado vai em `emConstrucao`, só com o nome.
 *
 * Textos conferidos contra o código de cada app em 01/11/2026
 * (novoConteudo/ferramentas/LEVANTAMENTO-FERRAMENTAS-2026-11-01.md). A versão
 * longa de cada uma vive em lib/ferramentas-paginas.ts.
 *
 * O Player não tem link profundo por app: todos os links levam à raiz (que tem
 * portão de e-mail — ver PLANO-REVISAO-MARKETING-2026-08-01.md, decisão #3).
 */

export const PLAYER_URL = 'https://ett-player.vercel.app/'

export type StatusFerramenta = 'disponivel' | 'poc' | 'em-breve'

export const rotuloStatus: Record<StatusFerramenta, string> = {
  disponivel: 'Disponível',
  poc: 'Prova de conceito',
  'em-breve': 'Em breve',
}

export type GrupoFerramenta = 'organizar' | 'vocabulario' | 'escuta' | 'fala' | 'comunidade'

export const rotuloGrupo: Record<GrupoFerramenta, string> = {
  organizar: 'Diagnóstico e rotina',
  vocabulario: 'Vocabulário e leitura',
  escuta: 'Escuta',
  fala: 'Fala',
  comunidade: 'Conversação',
}

export type Ferramenta = {
  id: string
  nome: string
  grupo: GrupoFerramenta
  /** Para que serve, em uma linha. */
  finalidade: string
  /** O que a pessoa consegue fazer dentro do app. */
  oQueFaz: string
  /** Um uso concreto, do jeito que aparece no Player. */
  exemplo: string
  status: StatusFerramenta
}

export const ferramentas: Ferramenta[] = [
  {
    id: 'level-check',
    nome: 'Level Check',
    grupo: 'organizar',
    finalidade: 'Diagnóstico de vocabulário.',
    oQueFaz:
      'Você marca as palavras que não conhece numa lista de cerca de 3.000 palavras frequentes (Longman 3000) e recebe o nível estimado, a lista do que falta e um plano de estudo.',
    exemplo: 'Descobrir quais palavras de uso diário ainda faltam e estudá-las 10 por dia.',
    status: 'disponivel',
  },
  {
    id: 'learning-dna',
    nome: 'Learning DNA',
    grupo: 'organizar',
    finalidade: 'Seu perfil de aprendizagem.',
    oQueFaz:
      'Questionário de 30 afirmações que mostra se você prefere estudar vendo, ouvindo ou fazendo, com sugestões de estratégia para cada perfil.',
    exemplo: 'Descobrir que seu perfil é visual-auditivo e priorizar séries e audiolivros.',
    status: 'disponivel',
  },
  {
    id: 'daily',
    nome: 'Daily',
    grupo: 'organizar',
    finalidade: 'Planner de prática falada.',
    oQueFaz:
      'Versão digital do planner do ETT: diário de 30 dias, cartões de conversa e pitch cronometrado. Você responde falando e o app transcreve.',
    exemplo: 'Falar sobre o seu dia na página do diário, em vez de escrever.',
    status: 'disponivel',
  },
  {
    id: 'flashcards',
    nome: 'Flashcards',
    grupo: 'vocabulario',
    finalidade: 'Revisão de vocabulário.',
    oQueFaz:
      'Cartões com pronúncia, imagem, significado e exemplo, tudo com áudio. As palavras que você erra voltam até você acertar em dois dias seguidos.',
    exemplo: 'Fazer a sessão do dia com 20 palavras novas em poucos minutos.',
    status: 'disponivel',
  },
  {
    id: 'formula-fluente',
    nome: 'Fórmula Fluente',
    grupo: 'vocabulario',
    finalidade: 'As aulas do método, em vídeo.',
    oQueFaz:
      'As 83 aulas do Farol da Fluência, de Frank Florida, em português e com transcrição, sobre como organizar o estudo de um idioma.',
    exemplo: 'Assistir à aula sobre as primeiras 1.000 palavras antes de montar sua rotina.',
    status: 'disponivel',
  },
  {
    id: 'audiobook',
    nome: 'AudioBook',
    grupo: 'vocabulario',
    finalidade: 'Leitura acompanhada de áudio.',
    oQueFaz: 'Clássicos da literatura em inglês com o texto acompanhando o áudio, frase a frase. Clique numa palavra para salvá-la.',
    exemplo: 'Ouvir um capítulo de Peter Pan acompanhando o texto no trajeto pro trabalho.',
    status: 'disponivel',
  },
  {
    id: 'legendas',
    nome: 'Legendas',
    grupo: 'escuta',
    finalidade: 'Vídeos com legenda interativa.',
    oQueFaz:
      'Assiste vídeos com legenda em inglês, salva as palavras que não conhece, repete as falas e continua no minuto em que parou.',
    exemplo: 'Repetir três vezes uma fala difícil e salvar as palavras novas.',
    status: 'disponivel',
  },
  {
    id: 'radio',
    nome: 'Radio',
    grupo: 'escuta',
    finalidade: 'Inglês ao vivo, o dia todo.',
    oQueFaz: 'Rádios e noticiários em inglês transmitindo ao vivo.',
    exemplo: 'Deixar uma rádio americana tocando enquanto cozinha.',
    status: 'disponivel',
  },
  {
    id: 'speak',
    nome: 'Speak',
    grupo: 'comunidade',
    finalidade: 'A sala dos encontros de conversação.',
    oQueFaz:
      'Sala online com moderador, salas menores e cartões de tema. É onde acontece o encontro de segunda, às 20h.',
    exemplo: 'Entrar na sala às 20h de segunda e conversar em grupos pequenos.',
    status: 'disponivel',
  },
  {
    id: 'voice-agent-lab',
    nome: 'Voice Agent Lab',
    grupo: 'fala',
    finalidade: 'Conversa por voz em cenários.',
    oQueFaz:
      'Experimento de conversa por voz em cenários como hotel e entrevista. Está em modo demonstração e pode mudar a qualquer momento.',
    exemplo: 'Testar uma conversa curta no cenário de check-in de hotel.',
    status: 'poc',
  },
  {
    id: 'shadow-daily',
    nome: 'ShadowDaily',
    grupo: 'fala',
    finalidade: 'Shadowing: repetir junto com o áudio original.',
    oQueFaz: 'Repetir junto com um vídeo e comparar sua pronúncia com a original.',
    exemplo: 'Ainda não disponível.',
    status: 'em-breve',
  },
  {
    id: 'meet',
    nome: 'Meet',
    grupo: 'comunidade',
    finalidade: 'A agenda dos encontros da comunidade.',
    oQueFaz: 'Mostra os encontros gratuitos do English Talk Time e onde participar — ou propor o seu.',
    exemplo: 'Propor um encontro, convidar duas pessoas e acompanhar as confirmações.',
    status: 'disponivel',
  },
]

/** Ferramentas que o Player mostra como disponíveis. */
export const ferramentasDisponiveis = ferramentas.filter((f) => f.status === 'disponivel')

/**
 * Recursos planejados que ainda não estão no Player. Decisão do Alessandro
 * (31/10/2026): aparecem só como nome, numa linha "Em construção" — nunca com
 * descrição de funcionalidade, nunca como parte do que um plano entrega.
 */
export const emConstrucao = [
  'Diário escrito e falado',
  'Simulações com prompts de IA',
  'Sistema de recomendação',
  'Gamificação e ranking',
  'Técnica dos Pontinhos',
]

/**
 * Tela de cada ferramenta nos cartões da home (FerramentasResumo). São as
 * capturas usadas no vídeo institucional (D:\2026\31-videoETT\storyboard\
 * assets\telas — material do Alessandro, só leitura; aqui vão cópias
 * derivadas em webp). Nome com versão (-v1): o hosting faz cache de imagem
 * por 7 dias, então tela nova = nome novo. Level Check com o nome do usuário
 * desfocado; Flashcards sem a barra do navegador e a barra de tarefas.
 */
export const telaFerramenta: Partial<Record<string, string>> = {
  'level-check': '/images/ferramentas/cards/level-check-v1.webp',
  'learning-dna': '/images/ferramentas/cards/learning-dna-v1.webp',
  daily: '/images/ferramentas/cards/daily-v1.webp',
  flashcards: '/images/ferramentas/cards/flashcards-v1.webp',
  'formula-fluente': '/images/ferramentas/cards/formula-fluente-v1.webp',
  audiobook: '/images/ferramentas/cards/audiobook-v1.webp',
  legendas: '/images/ferramentas/cards/legendas-v1.webp',
  radio: '/images/ferramentas/cards/radio-v1.webp',
  speak: '/images/ferramentas/cards/speak-v1.webp',
  meet: '/images/ferramentas/cards/meet-v1.webp',
}
