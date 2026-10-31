/**
 * Ferramentas do ETT — fonte única.
 *
 * ⚠️ Esta lista espelha o ETT Player EM PRODUÇÃO (https://ett-player.vercel.app/),
 * conferido em 31/10/2026. Só entra aqui o que o Player mostra, com o status
 * que o próprio Player dá a cada app. Ferramenta nova entra quando aparecer no
 * Player — não antes. Recurso planejado vai em `emConstrucao`, só com o nome.
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
    finalidade: 'Diagnóstico de nível e de vocabulário.',
    oQueFaz:
      'Estima seu nível e quantas palavras você já usa, com base nas listas Longman 3000 e Oxford 5000, e monta um plano de 90 dias a partir disso.',
    exemplo: 'Ver que você está em B1+ e acompanhar o plano no "dia 23 de 90".',
    status: 'disponivel',
  },
  {
    id: 'learning-dna',
    nome: 'Learning DNA',
    grupo: 'organizar',
    finalidade: 'Seu perfil de aprendizagem.',
    oQueFaz:
      'Mostra se você aprende mais vendo, ouvindo ou fazendo, pra escolher as ferramentas que combinam com você.',
    exemplo: 'Descobrir que seu perfil é visual-auditivo e priorizar séries e audiolivros.',
    status: 'disponivel',
  },
  {
    id: 'daily',
    nome: 'Daily',
    grupo: 'organizar',
    finalidade: 'Organizar a prática do dia.',
    oQueFaz: 'Planner do participante: lista o que praticar hoje e registra o progresso ao longo das semanas.',
    exemplo: 'Abrir o Daily de manhã e saber exatamente o que fazer em uma hora.',
    status: 'disponivel',
  },
  {
    id: 'flashcards',
    nome: 'Flashcards',
    grupo: 'vocabulario',
    finalidade: 'Revisão de vocabulário.',
    oQueFaz: 'Revisa as palavras no momento certo de cada uma e mostra quantas cartas estão pendentes no dia.',
    exemplo: 'Revisar 23 cartas do baralho de vocabulário de tecnologia em uns 12 minutos.',
    status: 'disponivel',
  },
  {
    id: 'formula-fluente',
    nome: 'Fórmula Fluente',
    grupo: 'vocabulario',
    finalidade: 'O guia de como organizar o estudo.',
    oQueFaz: 'Leitura em capítulos sobre como escolher o que estudar e montar uma rotina que se sustenta.',
    exemplo: 'Ler o capítulo "Escolha de palavras que importam" antes de montar seu baralho.',
    status: 'disponivel',
  },
  {
    id: 'audiobook',
    nome: 'AudioBook',
    grupo: 'vocabulario',
    finalidade: 'Leitura acompanhada de áudio.',
    oQueFaz: 'Ouve e lê livros em inglês por capítulo, retomando de onde parou.',
    exemplo: 'Seguir no capítulo 4 de um livro de não ficção no trajeto pro trabalho.',
    status: 'disponivel',
  },
  {
    id: 'legendas',
    nome: 'Legendas',
    grupo: 'escuta',
    finalidade: 'Séries com legenda.',
    oQueFaz: 'Assiste episódios com legenda em inglês e continua no minuto em que parou.',
    exemplo: 'Ver um episódio de série de tecnologia com a legenda em inglês ligada.',
    status: 'disponivel',
  },
  {
    id: 'radio',
    nome: 'Radio',
    grupo: 'escuta',
    finalidade: 'Inglês ao vivo, o dia todo.',
    oQueFaz: 'Rádios e noticiários em inglês transmitindo ao vivo.',
    exemplo: 'Deixar um noticiário de Nova York tocando enquanto cozinha.',
    status: 'disponivel',
  },
  {
    id: 'speak',
    nome: 'Speak',
    grupo: 'fala',
    finalidade: 'Conversa guiada.',
    oQueFaz: 'Você fala em inglês seguindo um roteiro e recebe correção na hora.',
    exemplo: 'Ensaiar uma apresentação de projeto antes da reunião de verdade.',
    status: 'disponivel',
  },
  {
    id: 'voice-agent-lab',
    nome: 'Voice Agent Lab',
    grupo: 'fala',
    finalidade: 'Conversa por voz com um agente de IA.',
    oQueFaz:
      'Experimento de conversa falada com uma IA em inglês. É prova de conceito e pode mudar a qualquer momento.',
    exemplo: 'Testar uma conversa curta por voz, sem roteiro.',
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
    finalidade: 'Os encontros de conversação.',
    oQueFaz: 'Mostra os encontros gratuitos do English Talk Time e onde participar — ou propor o seu.',
    exemplo: 'Ver o link do encontro de segunda e entrar às 20h.',
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
