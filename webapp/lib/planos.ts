/**
 * Modelo de cobrança do ETT — fonte única de verdade dos planos.
 *
 * A home (`components/Precos.tsx`) mostra o resumo e a `/planos/`
 * (`components/Planos.tsx`) mostra o detalhe; as duas leem daqui pra não
 * divergirem. Especificação completa (economia, prêmios, migração) em
 * `novoConteudo/MODELO-COBRANCA-ETT.md`.
 */

/**
 * URLs do checkout.
 *
 * ⚠️ É AQUI que se troca quando o gateway estiver ligado — mais nada precisa
 * mudar. Hoje apontam pras prévias internas (`app/planos/adesao/` e
 * `app/planos/assinatura/`), que mostram o resumo do pedido, deixam explícito
 * que o pagamento online ainda não abriu e mandam concluir pelo WhatsApp.
 *
 * Quando as URLs reais entrarem, **apagar as duas pastas de prévia** — inclusive
 * `planos/adesao/` e `planos/assinatura/` na raiz do repo, porque o `deploy.sh`
 * não remove diretórios órfãos.
 */
export const CHECKOUT_ADESAO: string | null = '/planos/adesao/'
export const CHECKOUT_ASSINATURA: string | null = '/planos/assinatura/'

export const PRECO_ADESAO = 70
export const PRECO_MENSAL = 39
export const PRECO_ANUAL = 390
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

/** A decisão da página: olhar ou entrar. Duas portas, não quatro cartões. */
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
      'Seu plano de estudos montado no encontro',
      'Conta no ETT Player e acesso à sala do ETT Speak',
      'Os 30 primeiros dias de plataforma já inclusos',
    ],
    rodape:
      'São duas horas de mentoria individual. Cobrado uma vez — não vira mensalidade.',
    cta: 'Fazer minha adesão',
    destaque: true,
  },
]

export type Trilha = {
  id: 'aceleracao' | 'livre'
  nome: string
  preco: string
  /** Preço riscado ao lado do R$ 0 — grátis sem âncora lê-se como "sem valor". */
  precoAncora?: string
  /** O preço na outra moeda. É ele que fica em destaque, não o zero. */
  custoReal: string
  descricao: string
  condicao: string
}

/** O que acontece depois dos 30 dias. Subordinado às portas, não concorrente. */
export const trilhas: Trilha[] = [
  {
    id: 'aceleracao',
    nome: 'Trilha de Aceleração',
    preco: 'R$ 0',
    precoAncora: `R$ ${PRECO_MENSAL}/mês`,
    custoReal: 'Custa 1 hora por dia.',
    descricao: `Enquanto você mantiver presença nos encontros e ${META_DIAS} dias válidos por mês, não paga mensalidade. A rotina é medida no próprio Player — não é na confiança.`,
    condicao: `Se parar, sua bolsa entra em pausa e você escolhe o mensal. Sem multa e sem cobrança retroativa.`,
  },
  {
    id: 'livre',
    nome: 'Trilha Livre',
    preco: `R$ ${PRECO_MENSAL}/mês`,
    custoReal: 'Sem rotina obrigatória.',
    descricao:
      'Player completo, plano personalizado e acompanhamento, no ritmo que você quiser. Ninguém cobra rotina de você.',
    condicao: `Cancela quando quiser, direto no checkout. Anual por R$ ${PRECO_ANUAL}.`,
  },
]

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
    premio: `Sua apostila personalizada impressa (R$ ${PRECO_APOSTILA}), entregue em mãos no IEP Talks ou enviada pra sua casa.`,
  },
  {
    marco: 'Nos meses seguintes',
    premio:
      'A apostila se refaz com o seu vocabulário atual — ela muda porque você mudou.',
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
    pergunta: 'A adesão de R$ 70 vira mensalidade?',
    resposta:
      'Não. É cobrança única. Ela inclui os dois encontros individuais de 1 hora e os 30 primeiros dias de plataforma. Só a partir do dia 31 é que existe mensalidade — e só se você escolher a Trilha Livre.',
  },
  {
    pergunta: 'E se eu não bater a meta da Aceleração?',
    resposta:
      'Sua bolsa entra em pausa, e você escolhe: assina a Trilha Livre ou segue só nos encontros abertos. Nunca existe cobrança automática — o pagamento só acontece se você decidir assinar. E bateu a meta de novo, volta a ser gratuito.',
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
