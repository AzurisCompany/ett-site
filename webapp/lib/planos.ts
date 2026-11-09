/**
 * Modelo de cobrança do ETT — fonte única de verdade dos planos.
 *
 * A home (`components/Precos.tsx`), a `/planos/` (`components/Planos.tsx`) e as
 * páginas de cada plano (`components/PlanoDetalhe.tsx`) leem daqui pra não
 * divergirem. Especificação completa (economia, prêmios, migração) em
 * `novoConteudo/MODELO-COBRANCA-ETT.md`.
 */

/**
 * URLs do checkout — gateway próprio, no ar desde 01/08/2026.
 *
 * ⚠️ É AQUI que se troca se o gateway mudar — mais nada precisa mudar.
 *
 * Adesão: cobrança única, PIX ou cartão em até 3x.
 * Assinatura: recorrente, mensal ou anual.
 *
 * As prévias internas de checkout (`app/planos/checkout/`) foram apagadas — não
 * recriar. Se um dia o gateway cair, o certo é tirar o botão do ar, não simular
 * um checkout.
 */
export const CHECKOUT_ADESAO = 'https://azuris.com.br/ett/adesao'
export const CHECKOUT_DEDICACAO = 'https://azuris.com.br/ett/assinatura'

/**
 * Desde 09/11/2026 a ativação é a ÚNICA porta de entrada (o teste grátis de 30
 * dias, "Quero conhecer", foi removido e fundido nela). R$ 67 → R$ 97.
 * ⚠️ O valor cobrado mora no gateway (azuris.com.br/ett/adesao): mudar lá também.
 */
export const PRECO_ADESAO = 97
export const PRECO_MENSAL = 37
export const PRECO_ANUAL = 370
/** Dias válidos por mês que revalidam a bolsa da Aceleração. */
export const META_DIAS = 20
/** Preço de venda da apostila — é a âncora que dá tamanho ao prêmio. */
export const PRECO_APOSTILA = 50

export type Porta = {
  id: 'entrar'
  nome: string
  preco: string
  precoNota: string
  paraQuem: string
  itens: string[]
  rodape: string
  cta: string
  destaque?: boolean
}

/** A porta de entrada: a ativação acompanhada (única, desde 09/11/2026). */
export const portas: Porta[] = [
  {
    id: 'entrar',
    nome: 'Ativação acompanhada',
    preco: `R$ ${PRECO_ADESAO}`,
    precoNota: 'seu 1º mês · pagamento único',
    paraQuem:
      'Sua entrada na plataforma: 30 dias com todas as ferramentas e orientação individual pra conhecer tudo, organizar a rotina de prática e configurar atividades pros seus objetivos.',
    itens: [
      'Todas as ferramentas do ETT Player por 30 dias',
      '2 sessões individuais de 1 hora de orientação',
      'Diagnóstico de nível e vocabulário (Level Check) e plano de prática montados com você',
      'Material de prática personalizado',
      'Vídeos de demonstração das ferramentas',
      'Conta no ETT Player e sala do ETT Speak',
      'Acompanhamento e feedback das ferramentas',
    ],
    rodape:
      'Orientação de uso da plataforma, não aula particular. Cobrado uma vez, não vira mensalidade. No dia 31 você escolhe uma trilha. Os encontros continuam abertos a todos.',
    cta: 'Fazer minha adesão',
    destaque: true,
  },
]

export type Trilha = {
  id: 'dedicacao' | 'aceleracao'
  nome: string
  preco: string
  /** Preço riscado ao lado do R$ 0 — grátis sem âncora lê-se como "sem valor". */
  precoAncora?: string
  /** O preço na outra moeda. É ele que fica em destaque, não o zero. */
  custoReal: string
  descricao: string
  condicao: string
  href: string
}

/**
 * O que acontece depois dos 30 dias. A Dedicação vem primeiro: é a opção
 * padrão, e a Aceleração é a exceção pra quem topa a rotina medida.
 */
export const trilhas: Trilha[] = [
  {
    id: 'dedicacao',
    nome: 'Trilha de Dedicação',
    preco: `R$ ${PRECO_MENSAL}/mês`,
    custoReal: 'Sem rotina obrigatória — 1h de dedicação por dia.',
    descricao:
      'Modalidade de acesso às ferramentas: Player completo, plano personalizado e acompanhamento, no ritmo que você quiser. O sistema registra sua evolução e devolve feedback das ferramentas.',
    condicao: `Cancela quando quiser, direto no checkout. Anual por R$ ${PRECO_ANUAL}.`,
    href: '/planos/dedicacao/',
  },
  {
    id: 'aceleracao',
    nome: 'Trilha de Aceleração',
    preco: 'R$ 0',
    precoAncora: `R$ ${PRECO_MENSAL}/mês`,
    custoReal: 'Custa 1h da sua dedicação por dia.',
    descricao: `Modalidade de acesso às ferramentas sem mensalidade: enquanto você mantiver presença nos encontros e ${META_DIAS} dias válidos por mês, não paga. O sistema acompanha e registra sua evolução — não é na confiança.`,
    condicao:
      'Se parar, sua bolsa entra em pausa e você escolhe o mensal. Sem multa e sem cobrança retroativa.',
    href: '/planos/aceleracao/',
  },
]

export type CartaoHome = {
  id: string
  /** Tag no topo do cartão: separa a entrada do que vem depois. */
  etiqueta?: string
  nome: string
  preco: string
  precoAncora?: string
  precoNota?: string
  /** O preço na outra moeda, em destaque. */
  custoReal?: string
  paraQuem: string
  itens: string[]
  rodape: string
  cta: string
  href: string
  destaque?: boolean
  /** Pré-requisito em destaque no cartão (as trilhas exigem a ativação antes). */
  requisito?: string
}

/**
 * As 3 opções como cartões cheios, na ordem do funil (ativação → trilhas). Cada botão leva à página
 * do plano, que explica e termina no checkout.
 */
export const cartoesHome: CartaoHome[] = [
  {
    id: 'entrar',
    etiqueta: 'Comece por aqui',
    nome: portas[0].nome,
    preco: portas[0].preco,
    precoNota: portas[0].precoNota,
    paraQuem: portas[0].paraQuem,
    itens: portas[0].itens,
    rodape: portas[0].rodape,
    cta: 'Ver a ativação acompanhada',
    href: '/planos/adesao/',
    destaque: true,
  },
  {
    id: 'dedicacao',
    etiqueta: 'Depois da ativação',
    requisito: `Pra entrar nesta trilha, primeiro você faz a ativação acompanhada de R$ ${PRECO_ADESAO}, que é o seu 1º mês. A trilha começa no dia 31.`,
    nome: 'Trilha de Dedicação',
    preco: `R$ ${PRECO_MENSAL}`,
    precoNota: 'por mês',
    custoReal: 'Sem rotina obrigatória — 1h de dedicação por dia.',
    paraQuem: 'Acesso às ferramentas no seu próprio ritmo.',
    itens: [
      'ETT Player completo — todas as ferramentas',
      'Plano de prática personalizado',
      'O sistema acompanha e registra sua evolução',
      'Acompanhamento e feedback das ferramentas',
      `Anual por R$ ${PRECO_ANUAL} — dois meses de desconto`,
    ],
    rodape: 'Cancela quando quiser, direto no checkout.',
    cta: 'Ver a Trilha de Dedicação',
    href: '/planos/dedicacao/',
  },
  {
    id: 'aceleracao',
    etiqueta: 'Depois da ativação',
    requisito: `Pra entrar nesta trilha, primeiro você faz a ativação acompanhada de R$ ${PRECO_ADESAO}, que é o seu 1º mês. A trilha começa no dia 31.`,
    nome: 'Trilha de Aceleração',
    preco: 'R$ 0',
    precoAncora: `R$ ${PRECO_MENSAL}/mês`,
    custoReal: 'Custa 1h da sua dedicação por dia.',
    paraQuem: 'Acesso às ferramentas pra quem topa manter a rotina e não quer pagar mensalidade.',
    itens: [
      'ETT Player completo — todas as ferramentas',
      'Presença nos encontros conta pra meta',
      'O sistema acompanha e registra sua evolução',
      'Acompanhamento e feedback das ferramentas',
      'Um prêmio a cada mês de meta batida',
    ],
    rodape: `${META_DIAS} dias válidos por mês. Se parar, sua bolsa entra em pausa — sem multa e sem cobrança retroativa.`,
    cta: 'Ver a Trilha de Aceleração',
    href: '/planos/aceleracao/',
  },
]

export type DetalhePlano = {
  slug: string
  etiqueta: string
  nome: string
  preco: string
  precoAncora?: string
  precoNota?: string
  destaqueFrase?: string
  intro: string
  /** Título do vídeo — vira legenda do embed e texto do placeholder. */
  videoTitulo: string
  /** ID do vídeo no YouTube. Sem isso, a página mostra o placeholder "Vídeo em breve". */
  videoId?: string
  blocos: { titulo: string; texto: string }[]
  inclui: string[]
  observacao: string
  ctaLabel: string
  ctaHref: string
  /** Aviso acima do botão final, quando o plano depende de outra coisa. */
  ctaNota?: string
  /** Pré-requisito mostrado logo abaixo do preço, no topo da página. */
  requisito?: string
  /** Link menor abaixo do botão (ex.: quem já fez a ativação assina direto). */
  ctaSecundario?: { texto: string; label: string; href: string }
}

export const detalhesPlanos: Record<string, DetalhePlano> = {
  adesao: {
    slug: 'adesao',
    etiqueta: 'Comece por aqui',
    nome: 'Ativação acompanhada',
    preco: `R$ ${PRECO_ADESAO}`,
    precoNota: 'seu 1º mês · cobrança única',
    intro: `R$ ${PRECO_ADESAO}, uma vez só, e você entra na plataforma: 30 dias com todas as ferramentas do ETT Player abertas e duas sessões individuais de uma hora pra conhecer as ferramentas, organizar sua rotina de prática e configurar atividades adequadas aos seus objetivos — mais o diagnóstico e o material personalizado.`,
    videoTitulo: 'Como funcionam as duas sessões da ativação',
    videoId: 'C9WizsadjSM',
    blocos: [
      {
        titulo: 'Duas sessões individuais de uma hora',
        texto:
          'É orientação de uso da plataforma, não aula particular de inglês. Na primeira, a gente roda o diagnóstico junto, monta o seu plano de estudos e configura a sua rotina diária. Uma semana depois vem o segundo, pra ajustar o que travou de verdade e ativar as ferramentas com conteúdo do seu nível — a sua série, o seu livro, a sua simulação.',
      },
      {
        titulo: 'Todas as ferramentas abertas por 30 dias',
        texto:
          'O Level Check estima o seu nível e mapeia quais palavras faltam. A partir daí, flashcards de vocabulário, séries com legenda, audiolivro, rádio, conversa guiada com correção e o plano diário ficam liberados, sem versão reduzida e sem trava por ferramenta. Os vídeos de demonstração ficam disponíveis pra assistir quando quiser.',
      },
      {
        titulo: 'Material de prática personalizado',
        texto:
          'O material é gerado a partir do seu diagnóstico: as palavras que faltam pra você, no contexto que você usa. Não é apostila genérica de curso — muda de pessoa pra pessoa, e muda de mês pra mês conforme você avança.',
      },
      {
        titulo: 'Os encontros continuam abertos',
        texto:
          'O encontro online de segunda, 20h, e o IEP Talks de sábado, 10h, em Curitiba, são abertos a todos, com ou sem adesão. A diferença é que você chega com o plano montado e sabendo o que praticar.',
      },
      {
        titulo: 'No dia 31, você escolhe sua trilha',
        texto:
          'Depois de 30 dias usando as ferramentas e participando dos encontros online e presenciais, você já sabe como a plataforma encaixa na sua rotina. Aí escolhe: a Trilha de Dedicação, no seu ritmo, ou a Trilha de Aceleração, sem mensalidade pra quem mantém a meta.',
      },
    ],
    inclui: portas[0].itens,
    observacao: `Cobrança única — não vira mensalidade. PIX ou cartão em até 3x. Compra pela internet tem 7 dias de arrependimento garantidos por lei. Nota fiscal emitida pela Azuris.`,
    ctaLabel: `Fazer minha adesão — R$ ${PRECO_ADESAO}`,
    ctaHref: CHECKOUT_ADESAO,
  },

  dedicacao: {
    slug: 'dedicacao',
    etiqueta: 'Depois da ativação',
    nome: 'Trilha de Dedicação',
    preco: `R$ ${PRECO_MENSAL}`,
    precoNota: 'por mês, a partir do 2º mês',
    requisito: `Pra assinar a Dedicação, primeiro você faz a ativação acompanhada de R$ ${PRECO_ADESAO}, que é o seu 1º mês. A mensalidade de R$ ${PRECO_MENSAL} começa no dia 31.`,
    destaqueFrase: 'Sem rotina obrigatória — 1h de dedicação por dia.',
    intro:
      'Uma modalidade de acesso às ferramentas, no seu ritmo, com acompanhamento. A dedicação sugerida é de uma hora por dia, mas ninguém mede e ninguém cobra meta de você.',
    videoTitulo: 'O que você recebe na Trilha de Dedicação',
    blocos: [
      {
        titulo: 'Todas as ferramentas, sem trava',
        texto:
          'ETT Player completo: diagnóstico, plano diário, flashcards, séries com legenda, audiolivro, rádio e conversa guiada. Nada fica bloqueado.',
      },
      {
        titulo: 'O sistema acompanha e registra sua evolução',
        texto:
          'Cada palavra revisada, cada episódio, cada simulação entra no seu histórico. As ferramentas devolvem feedback do que você está acertando e do que precisa voltar — você não estuda no escuro.',
      },
      {
        titulo: 'Os encontros continuam abertos',
        texto:
          'O encontro online de segunda e o IEP Talks de sábado são abertos a todos — a assinatura não é o que dá acesso a eles. É na conversa que o vocabulário sai do papel.',
      },
      {
        titulo: 'Sem amarras',
        texto: `Cancela quando quiser, direto no checkout, sem multa e sem precisar falar com ninguém. Se preferir pagar de uma vez, o anual sai por R$ ${PRECO_ANUAL} — dois meses de desconto.`,
      },
    ],
    inclui: [
      'ETT Player completo — todas as ferramentas',
      'Plano de estudos personalizado',
      'O sistema acompanha e registra sua evolução',
      'Acompanhamento e feedback das ferramentas',
      `Anual por R$ ${PRECO_ANUAL} — dois meses de desconto`,
    ],
    observacao: `A Trilha de Dedicação começa no dia 31, depois dos 30 dias inclusos na adesão de R$ ${PRECO_ADESAO}. Nota fiscal emitida pela Azuris.`,
    ctaLabel: `Começar pela ativação — R$ ${PRECO_ADESAO}`,
    ctaHref: CHECKOUT_ADESAO,
    ctaNota: `Todo mundo começa pela ativação acompanhada: R$ ${PRECO_ADESAO}, uma vez, que é o seu primeiro mês, com todas as ferramentas e duas sessões de orientação. No fim dos 30 dias, você assina a Trilha de Dedicação por R$ ${PRECO_MENSAL}/mês.`,
    ctaSecundario: {
      texto: 'Já fez a ativação?',
      label: `Assinar a Dedicação — R$ ${PRECO_MENSAL}/mês`,
      href: CHECKOUT_DEDICACAO,
    },
  },

  aceleracao: {
    slug: 'aceleracao',
    etiqueta: 'Depois da ativação',
    nome: 'Trilha de Aceleração',
    preco: 'R$ 0',
    precoAncora: `R$ ${PRECO_MENSAL}/mês`,
    requisito: `Pra entrar na Aceleração, primeiro você faz a ativação acompanhada de R$ ${PRECO_ADESAO}, que é o seu 1º mês. A partir do dia 31, a mensalidade fica em R$ 0 enquanto você mantiver a meta.`,
    destaqueFrase: 'Custa 1h da sua dedicação por dia.',
    intro:
      'Uma modalidade de acesso às ferramentas sem mensalidade. Você paga com uma hora da sua dedicação por dia — e o sistema acompanha isso por você.',
    videoTitulo: 'Como a meta funciona na prática',
    blocos: [
      {
        titulo: `A meta: ${META_DIAS} dias válidos por mês`,
        texto:
          'É cerca de uma hora por dia, cinco dias por semana. O que conta não é tempo de tela: é dia válido — o dia em que as tarefas daquele dia foram concluídas. Fim de semana livre, e sobra margem pra semana ruim.',
      },
      {
        titulo: 'O sistema acompanha e registra sua evolução',
        texto:
          'O contador fica visível o tempo todo no Player, então você sempre sabe onde está. Não é na confiança e não existe discussão sobre se a hora contou — é o mesmo histórico que devolve o feedback das ferramentas.',
      },
      {
        titulo: 'Cada mês de meta batida tem um prêmio',
        texto: `No primeiro, o seu material de prática impresso (R$ ${PRECO_APOSTILA}), entregue em mãos no IEP Talks ou enviado pra sua casa. Nos meses seguintes ele se refaz com o seu vocabulário atual — muda porque você mudou.`,
      },
      {
        titulo: 'E se eu não bater a meta?',
        texto:
          'Você tem um mês de recuperação. Se ainda assim não fechar, sua bolsa entra em pausa e você escolhe: assina a Trilha de Dedicação ou segue só nos encontros. Nunca existe cobrança automática — e bater a meta de novo devolve a gratuidade.',
      },
    ],
    inclui: [
      'ETT Player completo — todas as ferramentas',
      'Plano de estudos personalizado',
      'O sistema acompanha e registra sua evolução',
      'Acompanhamento e feedback das ferramentas',
      'Presença nos encontros conta pra meta',
      'Um prêmio a cada mês de meta batida',
    ],
    observacao:
      'Perder a bolsa nunca tira o seu acesso aos encontros. Eles são abertos de qualquer forma.',
    ctaLabel: `Fazer a ativação e começar — R$ ${PRECO_ADESAO}`,
    ctaHref: CHECKOUT_ADESAO,
    ctaNota: `Todo mundo começa pela ativação acompanhada: R$ ${PRECO_ADESAO}, uma vez, que é o seu primeiro mês. A partir do dia 31, a mensalidade da Aceleração fica em R$ 0 enquanto você mantiver a meta.`,
  },
}

/**
 * Prêmios publicados.
 *
 * ⚠️ Só entra aqui prêmio que já existe. Os prêmios de parceiro (aula
 * particular no IEP, revisão de currículo com a Coders, vaga em imersão da
 * Cherry Top) ficam FORA até os acordos estarem por escrito — prometer prêmio
 * de terceiro sem acordo é dívida publicada.
 */
export const premios = [
  {
    marco: 'No primeiro mês',
    premio: `Seu material de prática impresso (R$ ${PRECO_APOSTILA}), entregue em mãos no IEP Talks ou enviado pra sua casa.`,
  },
  {
    marco: 'Nos meses seguintes',
    premio:
      'O material se refaz com o seu vocabulário atual — ele muda porque você mudou.',
  },
  {
    marco: 'Sempre',
    premio: 'Selo de sequência no Player, com os meses acumulados ao lado do seu nome.',
  },
]

export const faqCobranca = [
  {
    pergunta: 'Preciso pagar pra ir nos encontros?',
    resposta:
      'Não. O encontro online de segunda, 20h, é aberto pra qualquer pessoa, sem cadastro e sem pagar. Isso não muda. Os planos existem pra quem quer as ferramentas e o acompanhamento entre um encontro e outro.',
  },
  {
    pergunta: `A adesão de R$ ${PRECO_ADESAO} vira mensalidade?`,
    resposta: `Não. É cobrança única. Ela é a ativação acompanhada: inclui os 30 primeiros dias com todas as ferramentas, as duas sessões individuais de 1 hora, o diagnóstico e o material personalizado. Só a partir do dia 31 é que existe mensalidade — e só se você escolher a Trilha de Dedicação.`,
  },
  {
    pergunta: 'E se eu não bater a meta da Aceleração?',
    resposta:
      'Sua bolsa entra em pausa, e você escolhe: assina a Trilha de Dedicação ou segue só nos encontros abertos. Nunca existe cobrança automática — o pagamento só acontece se você decidir assinar. E bateu a meta de novo, volta a ser gratuito.',
  },
  {
    pergunta: 'Como eu cancelo a assinatura?',
    resposta:
      'Direto no checkout, quando quiser, sem precisar falar com ninguém e sem multa.',
  },
  {
    pergunta: 'Posso desistir depois de pagar?',
    resposta:
      'Pode. Compra pela internet tem 7 dias de arrependimento garantidos pelo Código de Defesa do Consumidor (art. 49). Dentro desse prazo, devolvemos o valor integral.',
  },
  {
    pergunta: 'Eu já me cadastrei antes numa trilha gratuita. Vou passar a pagar?',
    resposta:
      'Não. Quem se cadastrou antes desta página mudar fica isento da adesão. Não existe cobrança retroativa.',
  },
  {
    pergunta: 'Quem emite a nota fiscal?',
    resposta: 'A Azuris, empresa responsável pela plataforma.',
  },
]
