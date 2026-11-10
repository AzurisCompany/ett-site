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
// Links atualizados em 09/11/2026 (adesao → ativacao; aceleracao ganhou checkout próprio).
export const CHECKOUT_ADESAO = 'https://azuris.com.br/ett/ativacao'
export const CHECKOUT_DEDICACAO = 'https://azuris.com.br/ett/assinatura'
export const CHECKOUT_ACELERACAO = 'https://azuris.com.br/ett/aceleracao'

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

/**
 * A porta de entrada: a ativação acompanhada (única, desde 09/11/2026).
 *
 * Decisões de 09/11/2026 (AUDITORIA-CONTEUDO-2026-11-09.md): o ETT Player
 * continua ABERTO pra experimentar — a ativação NÃO vende acesso às
 * ferramentas, vende orientação, plano, material e acompanhamento. Não
 * prometer conta, histórico, contador nem selo: as ferramentas guardam o
 * progresso só no navegador. Speak/Meet são a sala e a agenda dos encontros
 * gratuitos — nunca entram como item pago. Vídeos de demonstração ainda não
 * existem (fora da lista até serem gravados).
 */
export const portas: Porta[] = [
  {
    id: 'entrar',
    nome: 'Ativação acompanhada',
    preco: `R$ ${PRECO_ADESAO}`,
    precoNota: 'seu 1º mês · pagamento único',
    paraQuem:
      'Seu primeiro mês com orientação individual: alguém do ETT monta com você o plano de prática e configura as ferramentas do ETT Player pros seus objetivos.',
    itens: [
      '2 sessões individuais de 1 hora de orientação',
      'Diagnóstico de nível e vocabulário feito com você',
      'Plano de prática montado pros seus objetivos',
      'Material de prática personalizado',
      'Ferramentas do ETT Player configuradas pra sua rotina',
      'Acompanhamento durante os 30 dias',
    ],
    rodape:
      'Orientação de uso da plataforma, não aula particular. Cobrado uma vez, não vira mensalidade. As ferramentas do Player são abertas pra experimentar e os encontros são gratuitos pra todos. No dia 31 você escolhe uma trilha.',
    cta: 'Fazer minha ativação',
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

/** Definição única da meta da Aceleração — repetir igual em todo lugar. */
export const DIA_VALIDO = `dia em que você fez a prática do seu plano (cerca de 1 hora), nas ferramentas ou num encontro de conversação`

/**
 * O que acontece depois dos 30 dias. Desde 09/11/2026 as trilhas vendem a
 * CONTINUIDADE do acompanhamento (plano revisado, material atualizado,
 * feedback do ETT), não acesso às ferramentas — que continuam abertas.
 */
export const trilhas: Trilha[] = [
  {
    id: 'dedicacao',
    nome: 'Trilha de Dedicação',
    preco: `R$ ${PRECO_MENSAL}/mês`,
    custoReal: 'Sem meta: pratique no seu ritmo.',
    descricao:
      'O acompanhamento continua todo mês: plano de prática revisado, material personalizado atualizado e feedback do ETT, sem meta obrigatória.',
    condicao: `Cancela quando quiser, direto no checkout. Anual por R$ ${PRECO_ANUAL}.`,
    href: '/planos/dedicacao/',
  },
  {
    id: 'aceleracao',
    nome: 'Trilha de Aceleração',
    preco: 'R$ 0',
    precoAncora: `R$ ${PRECO_MENSAL}/mês`,
    custoReal: 'Custa 1h da sua dedicação por dia.',
    descricao: `O mesmo acompanhamento da Dedicação, sem mensalidade, enquanto você mantiver ${META_DIAS} dias válidos de prática por mês.`,
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

const REQUISITO_TRILHA = `Pra entrar nesta trilha, primeiro você faz a ativação acompanhada de R$ ${PRECO_ADESAO}, que é o seu 1º mês. A trilha começa no dia 31.`

const ITENS_ACOMPANHAMENTO = [
  'Plano de prática revisado todo mês',
  'Material personalizado atualizado com o seu vocabulário',
  'Acompanhamento e feedback do ETT',
]

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
    requisito: REQUISITO_TRILHA,
    nome: 'Trilha de Dedicação',
    preco: `R$ ${PRECO_MENSAL}`,
    precoNota: 'por mês',
    custoReal: 'Sem meta: pratique no seu ritmo.',
    paraQuem: 'O acompanhamento continua todo mês, sem meta obrigatória.',
    itens: [...ITENS_ACOMPANHAMENTO, `Anual por R$ ${PRECO_ANUAL} — dois meses de desconto`],
    rodape: 'Cancela quando quiser, direto no checkout.',
    cta: 'Ver a Trilha de Dedicação',
    href: '/planos/dedicacao/',
  },
  {
    id: 'aceleracao',
    etiqueta: 'Depois da ativação',
    requisito: REQUISITO_TRILHA,
    nome: 'Trilha de Aceleração',
    preco: 'R$ 0',
    precoAncora: `R$ ${PRECO_MENSAL}/mês`,
    custoReal: 'Custa 1h da sua dedicação por dia.',
    paraQuem: `O mesmo acompanhamento, sem mensalidade, pra quem mantém ${META_DIAS} dias válidos de prática por mês.`,
    itens: [
      ...ITENS_ACOMPANHAMENTO,
      'Encontros de conversação contam como dia válido',
      'Material impresso no primeiro mês de meta batida',
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
    intro: `R$ ${PRECO_ADESAO}, uma vez só: seu primeiro mês com duas sessões individuais de uma hora pra montar o seu plano de prática, configurar as ferramentas do ETT Player pros seus objetivos e organizar a sua rotina, mais o material personalizado e o acompanhamento durante os 30 dias.`,
    videoTitulo: 'Como funcionam as duas sessões da ativação',
    blocos: [
      {
        titulo: 'Duas sessões individuais de uma hora',
        texto:
          'É orientação de uso da plataforma, não aula particular de inglês. Na primeira, vocês fazem o diagnóstico juntos, montam o seu plano de prática e configuram a sua rotina. Na segunda, ajustam o que travou e escolhem conteúdo do seu nível nas ferramentas: a sua série, o seu livro, a sua rádio.',
      },
      {
        titulo: 'Material de prática personalizado',
        texto:
          'O material é gerado a partir do seu diagnóstico: as palavras que faltam pra você, no contexto que você usa. Não é apostila genérica de curso.',
      },
      {
        titulo: 'As ferramentas e os encontros são abertos',
        texto:
          'As ferramentas do ETT Player ficam abertas pra experimentar, e os encontros de conversação são gratuitos pra todos. A ativação não é o que dá acesso a eles: é o que te ajuda a usar tudo isso com um plano.',
      },
      {
        titulo: 'No dia 31, você escolhe sua trilha',
        texto:
          'Se quiser que o acompanhamento continue, escolhe a Trilha de Dedicação, no seu ritmo, ou a Trilha de Aceleração, sem mensalidade pra quem mantém a meta.',
      },
    ],
    inclui: portas[0].itens,
    observacao: `Cobrança única — não vira mensalidade. PIX ou cartão em até 3x. Compra pela internet tem 7 dias de arrependimento garantidos por lei. Nota fiscal emitida pela Azuris.`,
    ctaLabel: `Fazer minha ativação — R$ ${PRECO_ADESAO}`,
    ctaHref: CHECKOUT_ADESAO,
  },

  dedicacao: {
    slug: 'dedicacao',
    etiqueta: 'Depois da ativação',
    nome: 'Trilha de Dedicação',
    preco: `R$ ${PRECO_MENSAL}`,
    precoNota: 'por mês, a partir do 2º mês',
    requisito: `Pra assinar a Dedicação, primeiro você faz a ativação acompanhada de R$ ${PRECO_ADESAO}, que é o seu 1º mês. A mensalidade de R$ ${PRECO_MENSAL} começa no dia 31.`,
    destaqueFrase: 'Sem meta: pratique no seu ritmo.',
    intro:
      'O acompanhamento da ativação continua todo mês: plano de prática revisado, material atualizado e feedback do ETT. A sugestão é praticar cerca de uma hora por dia, mas ninguém cobra meta de você.',
    videoTitulo: 'O que você recebe na Trilha de Dedicação',
    blocos: [
      {
        titulo: 'Plano revisado todo mês',
        texto:
          'O seu plano de prática é revisto conforme você avança: o que já ficou fácil sai, o que ainda trava entra.',
      },
      {
        titulo: 'Material que acompanha o seu vocabulário',
        texto:
          'O material personalizado se refaz com as palavras que você ainda precisa, no contexto que você usa.',
      },
      {
        titulo: 'As ferramentas e os encontros continuam abertos',
        texto:
          'As ferramentas do ETT Player são abertas pra experimentar, e o encontro online de segunda e o IEP Talks de sábado são gratuitos pra todos. A assinatura não é o que dá acesso a eles.',
      },
      {
        titulo: 'Sem amarras',
        texto: `Cancela quando quiser, direto no checkout, sem multa e sem precisar falar com ninguém. Se preferir pagar de uma vez, o anual sai por R$ ${PRECO_ANUAL} — dois meses de desconto.`,
      },
    ],
    inclui: [...ITENS_ACOMPANHAMENTO, `Anual por R$ ${PRECO_ANUAL} — dois meses de desconto`],
    observacao: `A Trilha de Dedicação começa no dia 31, depois do primeiro mês incluído na ativação de R$ ${PRECO_ADESAO}. Nota fiscal emitida pela Azuris.`,
    ctaLabel: `Começar pela ativação — R$ ${PRECO_ADESAO}`,
    ctaHref: CHECKOUT_ADESAO,
    ctaNota: `Todo mundo começa pela ativação acompanhada: R$ ${PRECO_ADESAO}, uma vez, que é o seu primeiro mês, com duas sessões de orientação. No fim dos 30 dias, você assina a Trilha de Dedicação por R$ ${PRECO_MENSAL}/mês.`,
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
    intro: `O mesmo acompanhamento da Trilha de Dedicação, sem mensalidade. Você paga com prática: ${META_DIAS} dias válidos por mês.`,
    videoTitulo: 'Como a meta funciona na prática',
    blocos: [
      {
        titulo: `A meta: ${META_DIAS} dias válidos por mês`,
        texto: `Dia válido é o ${DIA_VALIDO}. Dá cerca de cinco dias por semana: fim de semana livre e margem pra semana ruim.`,
      },
      {
        titulo: 'Como a meta é acompanhada',
        texto:
          'Hoje você registra os seus dias de prática e o ETT confere no acompanhamento. A medição automática dentro do ETT Player ainda está em construção.',
      },
      {
        titulo: 'Prêmio no primeiro mês de meta batida',
        texto: `O seu material de prática impresso (R$ ${PRECO_APOSTILA}), entregue em mãos no IEP Talks ou enviado pra sua casa.`,
      },
      {
        titulo: 'E se eu não bater a meta?',
        texto:
          'Você tem um mês de recuperação. Se ainda assim não fechar, sua bolsa entra em pausa e você escolhe: assina a Trilha de Dedicação ou segue só nos encontros. Nunca existe cobrança automática — e bater a meta de novo devolve a gratuidade.',
      },
    ],
    inclui: [
      ...ITENS_ACOMPANHAMENTO,
      'Encontros de conversação contam como dia válido',
      'Material impresso no primeiro mês de meta batida',
    ],
    observacao:
      'Perder a bolsa nunca tira o seu acesso aos encontros nem às ferramentas abertas do ETT Player.',
    ctaLabel: `Começar pela ativação — R$ ${PRECO_ADESAO}`,
    ctaHref: CHECKOUT_ADESAO,
    ctaSecundario: {
      texto: 'Já fez a ativação?',
      label: 'Entrar na Trilha de Aceleração',
      href: CHECKOUT_ACELERACAO,
    },
    ctaNota: `Todo mundo começa pela ativação acompanhada: R$ ${PRECO_ADESAO}, uma vez, que é o seu primeiro mês. A partir do dia 31, a mensalidade da Aceleração fica em R$ 0 enquanto você mantiver a meta.`,
  },
}

/**
 * Prêmios publicados.
 *
 * ⚠️ Só entra aqui prêmio que já existe. Os prêmios de parceiro (aula
 * particular no IEP, revisão de currículo com a Coders, vaga em imersão da
 * Cherry Top) ficam FORA até os acordos estarem por escrito — prometer prêmio
 * de terceiro sem acordo é dívida publicada. O "selo de sequência no Player"
 * saiu em 09/11/2026: o Player não tem conta.
 */
export const premios = [
  {
    marco: 'No primeiro mês',
    premio: `Seu material de prática impresso (R$ ${PRECO_APOSTILA}), entregue em mãos no IEP Talks ou enviado pra sua casa.`,
  },
]

export const faqCobranca = [
  {
    pergunta: 'Preciso pagar pra ir nos encontros?',
    resposta:
      'Não. O encontro online de segunda, 20h, e o IEP Talks de sábado, 10h, são abertos pra qualquer pessoa, sem cadastro e sem pagar. Isso não muda. A ativação e as trilhas são pra quem quer orientação e acompanhamento entre um encontro e outro.',
  },
  {
    pergunta: `A ativação de R$ ${PRECO_ADESAO} vira mensalidade?`,
    resposta: `Não. É cobrança única e cobre o seu primeiro mês: as duas sessões individuais de 1 hora, o diagnóstico, o plano e o material personalizado. Só a partir do dia 31 existe mensalidade, e só se você escolher a Trilha de Dedicação.`,
  },
  {
    pergunta: 'Preciso pagar pra usar as ferramentas do ETT Player?',
    resposta:
      'Não. As ferramentas do ETT Player são abertas pra experimentar. O que a ativação acrescenta é a orientação individual, o plano de prática e o material personalizado pra você usar as ferramentas com método.',
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
    pergunta: 'Eu já tinha ativado o teste gratuito. Vou passar a pagar?',
    resposta:
      'Não. Quem ativou o teste gratuito de 30 dias até 09/11/2026 está isento da ativação. Não existe cobrança retroativa.',
  },
  {
    pergunta: 'Quem emite a nota fiscal?',
    resposta: 'A Azuris, empresa responsável pela plataforma.',
  },
]
