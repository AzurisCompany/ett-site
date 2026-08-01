/**
 * Modelo de cobrança do ETT — fonte única de verdade dos planos.
 *
 * A home (`components/Precos.tsx`), a `/planos/` (`components/Planos.tsx`) e as
 * páginas de cada plano (`components/PlanoDetalhe.tsx`) leem daqui pra não
 * divergirem. Especificação completa (economia, prêmios, migração) em
 * `novoConteudo/MODELO-COBRANCA-ETT.md`.
 */

/**
 * URLs do checkout.
 *
 * ⚠️ É AQUI que se troca — mais nada precisa mudar.
 *
 * `CHECKOUT_ADESAO` já é o gateway real (PIX ou cartão em até 3x), funcionando
 * de ponta a ponta.
 *
 * `CHECKOUT_DEDICACAO` **ainda aponta pra prévia interna** de propósito: a
 * página `https://azuris.com.br/ett/assinatura` abre com os preços certos, mas
 * o botão devolve 500 até rodar a migração de produção que cria a coluna
 * `assinaturas.produto_slug`. Assim que a migração rodar, trocar por essa URL e
 * apagar `app/planos/checkout/`.
 */
export const CHECKOUT_ADESAO = 'https://azuris.com.br/ett/adesao'
export const CHECKOUT_DEDICACAO = '/planos/checkout/dedicacao/'

export const PRECO_ADESAO = 67
export const PRECO_MENSAL = 37
export const PRECO_ANUAL = 370
/** Dias válidos por mês que revalidam a bolsa da Aceleração. */
export const META_DIAS = 20
/** Preço de venda da apostila — é a âncora que dá tamanho ao prêmio. */
export const PRECO_APOSTILA = 50

export type Porta = {
  id: 'conhecer' | 'entrar'
  nome: string
  preco: string
  precoNota: string
  paraQuem: string
  itens: string[]
  rodape: string
  cta: string
  destaque?: boolean
}

/** A decisão da página: olhar ou entrar. */
export const portas: Porta[] = [
  {
    id: 'conhecer',
    nome: 'Quero conhecer',
    preco: 'R$ 0',
    precoNota: '30 dias · sem cartão',
    paraQuem: 'Pra quem não vai decidir nada antes de ver por dentro.',
    itens: [
      'Plataforma completa por 30 dias',
      'Diagnóstico ETT FluenteLevel',
      'Vídeos de demonstração das ferramentas',
      '30 minutos de apresentação, individuais',
      'Acompanhamento e feedback das ferramentas',
    ],
    rodape:
      'No dia 31 as ferramentas fecham. Seu diagnóstico e seu plano continuam visíveis, e os encontros continuam livres.',
    cta: 'Começar o teste',
  },
  {
    id: 'entrar',
    nome: 'Quero entrar',
    preco: `R$ ${PRECO_ADESAO}`,
    precoNota: 'uma vez',
    paraQuem: 'Pra quem já decidiu e quer começar com o plano montado.',
    itens: [
      '2 encontros de 1 hora, individuais',
      'Material didático personalizado',
      'Entrada nos encontros de conversação',
      'Conta no ETT Player e sala do ETT Speak',
      'Os 30 primeiros dias de plataforma já inclusos',
    ],
    rodape:
      'São duas horas de mentoria individual. Cobrado uma vez — não vira mensalidade.',
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
      'Player completo, plano personalizado e acompanhamento, no ritmo que você quiser. O sistema registra sua evolução e devolve feedback das ferramentas.',
    condicao: `Cancela quando quiser, direto no checkout. Anual por R$ ${PRECO_ANUAL}.`,
    href: '/planos/dedicacao/',
  },
  {
    id: 'aceleracao',
    nome: 'Trilha de Aceleração',
    preco: 'R$ 0',
    precoAncora: `R$ ${PRECO_MENSAL}/mês`,
    custoReal: 'Custa 1h da sua dedicação por dia.',
    descricao: `Enquanto você mantiver presença nos encontros e ${META_DIAS} dias válidos por mês, não paga mensalidade. O sistema acompanha e registra sua evolução — não é na confiança.`,
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
}

/**
 * As 4 opções como cartões cheios, na ordem do funil. Cada botão leva à página
 * do plano, que explica e termina no checkout.
 */
export const cartoesHome: CartaoHome[] = [
  {
    id: 'conhecer',
    etiqueta: 'Comece por aqui',
    nome: portas[0].nome,
    preco: portas[0].preco,
    precoNota: portas[0].precoNota,
    paraQuem: portas[0].paraQuem,
    itens: portas[0].itens,
    rodape: portas[0].rodape,
    cta: 'Conhecer o teste de 30 dias',
    href: '/planos/conhecer/',
  },
  {
    id: 'entrar',
    etiqueta: 'Comece por aqui',
    nome: portas[1].nome,
    preco: portas[1].preco,
    precoNota: portas[1].precoNota,
    paraQuem: portas[1].paraQuem,
    itens: portas[1].itens,
    rodape: portas[1].rodape,
    cta: 'Ver a adesão',
    href: '/planos/adesao/',
    destaque: true,
  },
  {
    id: 'dedicacao',
    etiqueta: 'A partir do dia 31',
    nome: 'Trilha de Dedicação',
    preco: `R$ ${PRECO_MENSAL}`,
    precoNota: 'por mês',
    custoReal: 'Sem rotina obrigatória — 1h de dedicação por dia.',
    paraQuem: 'Pra quem quer tudo no próprio ritmo.',
    itens: [
      'ETT Player completo — as 10 ferramentas',
      'Encontros online e presenciais',
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
    etiqueta: 'A partir do dia 31',
    nome: 'Trilha de Aceleração',
    preco: 'R$ 0',
    precoAncora: `R$ ${PRECO_MENSAL}/mês`,
    custoReal: 'Custa 1h da sua dedicação por dia.',
    paraQuem: 'Pra quem topa manter a rotina e não quer pagar mensalidade.',
    itens: [
      'ETT Player completo — as 10 ferramentas',
      'Encontros online e presenciais',
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
  /** Placeholder do vídeo — trocar pelo embed quando gravar. */
  videoTitulo: string
  blocos: { titulo: string; texto: string }[]
  inclui: string[]
  observacao: string
  ctaLabel: string
  ctaHref: string
  /** Aviso acima do botão final, quando o plano depende de outra coisa. */
  ctaNota?: string
}

export const detalhesPlanos: Record<string, DetalhePlano> = {
  conhecer: {
    slug: 'conhecer',
    etiqueta: 'Comece por aqui',
    nome: 'Quero conhecer',
    preco: 'R$ 0',
    precoNota: '30 dias · sem cartão',
    intro:
      'Trinta dias com a plataforma inteira aberta, sem cartão e sem compromisso. Existe pra você ver por dentro antes de decidir qualquer coisa.',
    videoTitulo: 'Um tour de 3 minutos pela plataforma',
    blocos: [
      {
        titulo: 'Começa por um diagnóstico, não por uma aula',
        texto:
          'O ETT FluenteLevel mede o seu nível e mapeia quais palavras faltam pro inglês que você precisa usar no trabalho. O resultado não é uma nota — é um plano de estudos com o que estudar primeiro.',
      },
      {
        titulo: 'As 10 ferramentas ficam abertas',
        texto:
          'Revisão inteligente de vocabulário, séries com legenda, audiobook, rádio e notícias, diário falado e escrito, simulações com IA. Tudo liberado, sem versão reduzida e sem trava por ferramenta.',
      },
      {
        titulo: 'E tem gente do outro lado',
        texto:
          'Você agenda 30 minutos individuais com alguém do ETT pra passear pela plataforma e tirar dúvidas. Os vídeos de demonstração ficam disponíveis pra assistir quando quiser, quantas vezes quiser.',
      },
      {
        titulo: 'O que acontece no dia 31',
        texto:
          'As ferramentas fecham, mas o seu diagnóstico e o seu plano continuam visíveis. E os encontros de conversação continuam livres, como sempre foram — eles nunca dependeram de plano.',
      },
    ],
    inclui: portas[0].itens,
    observacao:
      'Não pedimos cartão de crédito. Não existe cobrança automática no fim dos 30 dias.',
    ctaLabel: 'Começar o teste de 30 dias',
    ctaHref: '/#inscricao',
  },

  adesao: {
    slug: 'adesao',
    etiqueta: 'Adesão ao programa',
    nome: 'Quero entrar',
    preco: `R$ ${PRECO_ADESAO}`,
    precoNota: 'cobrança única',
    intro: `R$ ${PRECO_ADESAO}, uma vez só. É a sua adesão ao programa: duas horas de mentoria individual, o material didático e a entrada nos encontros de conversação.`,
    videoTitulo: 'Como funcionam os dois encontros da adesão',
    blocos: [
      {
        titulo: 'Dois encontros de uma hora, só seus',
        texto:
          'No primeiro, a gente roda o diagnóstico junto, monta o seu plano de estudos e configura a sua rotina diária. Uma semana depois vem o segundo, pra ajustar o que travou de verdade e ativar as ferramentas com conteúdo do seu nível — a sua série, o seu livro, a sua simulação.',
      },
      {
        titulo: 'Material didático personalizado',
        texto:
          'O material é gerado a partir do seu diagnóstico: as palavras que faltam pra você, no contexto que você usa. Não é apostila genérica de curso — muda de pessoa pra pessoa, e muda de mês pra mês conforme você avança.',
      },
      {
        titulo: 'Entrada nos encontros de conversação',
        texto:
          'Encontro online toda segunda, 20h, e o IEP Talks presencial todo sábado, 10h, em Curitiba. Você entra com o plano montado e sabendo o que praticar, em vez de aparecer e torcer.',
      },
      {
        titulo: 'Os 30 primeiros dias já estão inclusos',
        texto:
          'A adesão não é uma taxa — ela já vem com o primeiro mês de plataforma completa. Só a partir do dia 31 é que você escolhe entre a Trilha de Dedicação e a Trilha de Aceleração.',
      },
    ],
    inclui: portas[1].itens,
    observacao: `Cobrança única — não vira mensalidade. PIX ou cartão em até 3x. Compra pela internet tem 7 dias de arrependimento garantidos por lei. Nota fiscal emitida pela Azuris.`,
    ctaLabel: `Fazer minha adesão — R$ ${PRECO_ADESAO}`,
    ctaHref: CHECKOUT_ADESAO,
  },

  dedicacao: {
    slug: 'dedicacao',
    etiqueta: 'A partir do dia 31',
    nome: 'Trilha de Dedicação',
    preco: `R$ ${PRECO_MENSAL}`,
    precoNota: 'por mês',
    destaqueFrase: 'Sem rotina obrigatória — 1h de dedicação por dia.',
    intro:
      'A plataforma inteira no seu ritmo, com acompanhamento. A dedicação sugerida é de uma hora por dia, mas ninguém mede e ninguém cobra meta de você.',
    videoTitulo: 'O que você recebe na Trilha de Dedicação',
    blocos: [
      {
        titulo: 'As 10 ferramentas, sem trava',
        texto:
          'ETT Player completo: revisão inteligente de vocabulário, séries com legenda, audiobook, rádio e notícias, diário, simulações com IA, material personalizado e o resto. Nada fica bloqueado.',
      },
      {
        titulo: 'O sistema acompanha e registra sua evolução',
        texto:
          'Cada palavra revisada, cada episódio, cada simulação entra no seu histórico. As ferramentas devolvem feedback do que você está acertando e do que precisa voltar — você não estuda no escuro.',
      },
      {
        titulo: 'Encontros online e presenciais',
        texto:
          'Encontro online toda segunda e o IEP Talks presencial todo sábado, além das turmas por nível. A conversa é onde o vocabulário sai do papel.',
      },
      {
        titulo: 'Sem amarras',
        texto: `Cancela quando quiser, direto no checkout, sem multa e sem precisar falar com ninguém. Se preferir pagar de uma vez, o anual sai por R$ ${PRECO_ANUAL} — dois meses de desconto.`,
      },
    ],
    inclui: [
      'ETT Player completo — as 10 ferramentas',
      'Plano de estudos personalizado',
      'O sistema acompanha e registra sua evolução',
      'Acompanhamento e feedback das ferramentas',
      'Encontros online e presenciais',
      `Anual por R$ ${PRECO_ANUAL} — dois meses de desconto`,
    ],
    observacao: `A Trilha de Dedicação começa no dia 31, depois dos 30 dias inclusos na adesão de R$ ${PRECO_ADESAO}. Nota fiscal emitida pela Azuris.`,
    ctaLabel: `Assinar — R$ ${PRECO_MENSAL}/mês`,
    ctaHref: CHECKOUT_DEDICACAO,
  },

  aceleracao: {
    slug: 'aceleracao',
    etiqueta: 'A partir do dia 31',
    nome: 'Trilha de Aceleração',
    preco: 'R$ 0',
    precoAncora: `R$ ${PRECO_MENSAL}/mês`,
    destaqueFrase: 'Custa 1h da sua dedicação por dia.',
    intro:
      'Aqui você não paga mensalidade. Paga com uma hora da sua dedicação por dia — e o sistema acompanha isso por você.',
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
        texto: `No primeiro, o seu material didático impresso (R$ ${PRECO_APOSTILA}), entregue em mãos no IEP Talks ou enviado pra sua casa. Nos meses seguintes ele se refaz com o seu vocabulário atual — muda porque você mudou.`,
      },
      {
        titulo: 'E se eu não bater a meta?',
        texto:
          'Você tem um mês de recuperação. Se ainda assim não fechar, sua bolsa entra em pausa e você escolhe: assina a Trilha de Dedicação ou segue só nos encontros. Nunca existe cobrança automática — e bater a meta de novo devolve a gratuidade.',
      },
    ],
    inclui: [
      'ETT Player completo — as 10 ferramentas',
      'Plano de estudos personalizado',
      'O sistema acompanha e registra sua evolução',
      'Acompanhamento e feedback das ferramentas',
      'Encontros online e presenciais',
      'Um prêmio a cada mês de meta batida',
    ],
    observacao:
      'Perder a bolsa nunca tira o seu acesso aos encontros. Eles são abertos de qualquer forma.',
    ctaLabel: `Fazer a adesão e começar — R$ ${PRECO_ADESAO}`,
    ctaHref: CHECKOUT_ADESAO,
    ctaNota: `A Aceleração começa depois da adesão ao programa, como todo mundo. A mensalidade é que fica em R$ 0 enquanto você mantiver a meta.`,
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
    premio: `Seu material didático impresso (R$ ${PRECO_APOSTILA}), entregue em mãos no IEP Talks ou enviado pra sua casa.`,
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
    resposta: `Não. É cobrança única. Ela inclui os dois encontros individuais de 1 hora, o material didático e os 30 primeiros dias de plataforma. Só a partir do dia 31 é que existe mensalidade — e só se você escolher a Trilha de Dedicação.`,
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
    resposta: 'A Azuris, empresa responsável pelo programa.',
  },
]
