/**
 * Imersões dos parceiros — fonte única de /imersoes/.
 *
 * Quem oferece é a Cherry Top: inscrição, taxa de pré-inscrição, preço,
 * contrato e condições são dela (confirmado pelo Alessandro em 31/10/2026).
 * O ETT divulga, encaminha o interesse e oferece ferramentas e encontros
 * pra praticar antes e depois.
 *
 * ⚠️ Datas em ISO. Atual × encerrada é calculado NO NAVEGADOR
 * (`useImersoesSeparadas`, em lib/useImersoes.ts), igual à agenda: o build pode ficar semanas sem
 * rodar, e "próxima a acontecer" escrito à mão já ficou vencido uma vez
 * (Curitiba, jul/2026, ainda era "próxima" em outubro).
 */

export type Turma = { inicio: string; fim: string; rotulo: string }

export type ImersaoParceiro = {
  id: string
  /** Nome do curso no cartão; sem ele, o cartão usa a cidade. */
  titulo?: string
  cidade: string
  uf: string
  oferecidoPor: string
  local: string
  formato: string
  turmas: Turma[]
  destaques: string[]
  capa: string
  detalheUrl: string
}

export const imersoes: ImersaoParceiro[] = [
  {
    id: 'curitiba-2026',
    cidade: 'Curitiba',
    uf: 'PR',
    oferecidoPor: 'Cherry Top, com apoio do IEP',
    local: 'Curitiba/PR',
    formato: '5 dias, presencial',
    turmas: [{ inicio: '2026-07-29', fim: '2026-08-02', rotulo: '29/jul a 02/ago de 2026' }],
    destaques: ['Primeira edição em Curitiba', 'Apoio institucional do IEP'],
    capa: '/images/ETT-top01.webp',
    detalheUrl: '/imersoes/curitiba/',
  },
  {
    id: 'belo-horizonte-2026',
    cidade: 'Belo Horizonte',
    uf: 'MG',
    oferecidoPor: 'Cherry Top',
    local: 'Immersion Village Brazil, Lagoa Santa/MG (20 km do aeroporto de Confins)',
    formato: '5 dias, com hospedagem e refeições',
    turmas: [
      { inicio: '2026-09-03', fim: '2026-09-07', rotulo: '03 a 07/set de 2026' },
      { inicio: '2026-10-08', fim: '2026-10-12', rotulo: '08 a 12/out de 2026' },
      { inicio: '2026-11-18', fim: '2026-11-22', rotulo: '18 a 22/nov de 2026' },
    ],
    destaques: ['Sede da Cherry Top no Brasil', 'Até 8 pessoas por turma', 'Certificado de 90 horas, emitido pela Cherry Top'],
    capa: '/imersoes/bh-2026/01.jpeg',
    detalheUrl: '/imersoes/belo-horizonte/',
  },
  {
    id: 'business-school-curitiba-2026',
    titulo: 'Cherry Top Business School',
    cidade: 'Curitiba',
    uf: 'PR',
    oferecidoPor: 'Cherry Top Global Business School',
    local: 'Curitiba/PR (local a confirmar)',
    formato: '3 dias presenciais (8h às 18h) + pré-imersão online e estudo orientado',
    turmas: [{ inicio: '2026-12-04', fim: '2026-12-06', rotulo: '04 a 06/dez de 2026' }],
    destaques: [
      'Inglês de negócios: reunião, negociação e apresentação',
      'Turma bilíngue para o básico; imersão total do intermediário ao avançado',
      'Certificado de 50 horas, emitido pela Cherry Top',
    ],
    capa: '/imersoes/business-school-2026/capa-v1.jpg',
    detalheUrl: '/imersoes/business-school/',
  },
  {
    id: 'florida-2027',
    cidade: 'Flórida',
    uf: 'EUA',
    oferecidoPor: 'Cherry Top',
    local: 'Windsor Cay Resort, Flórida, EUA',
    formato: 'Internacional, 100% em inglês',
    turmas: [
      { inicio: '2027-01-10', fim: '2027-01-27', rotulo: 'Turma 1: 10 a 27/jan de 2027 (18 dias)' },
      { inicio: '2027-01-29', fim: '2027-03-01', rotulo: 'Turma 2: 29/jan a 01/mar de 2027' },
    ],
    destaques: [
      'Conduzida por Leonarda Flyhigher (Cherry Top)',
      'Hospedagem em resort',
      'Passagem aérea e visto americano não estão inclusos',
    ],
    capa: '/imersoes/florida-2027/cover.jpeg',
    detalheUrl: '/imersoes/florida/',
  },
]

/** Turma ainda não terminou (fim ≥ hoje, no fuso de Brasília). */
function turmaAberta(t: Turma, agora: Date) {
  return new Date(`${t.fim}T23:59:59-03:00`) >= agora
}

export type ImersoesSeparadas = {
  /** Imersões com pelo menos uma turma futura — só com as turmas futuras. */
  atuais: ImersaoParceiro[]
  /** Imersões sem nenhuma turma futura. */
  encerradas: ImersaoParceiro[]
}

export function separarImersoes(agora: Date): ImersoesSeparadas {
  const atuais: ImersaoParceiro[] = []
  const encerradas: ImersaoParceiro[] = []
  for (const im of imersoes) {
    const futuras = im.turmas.filter((t) => turmaAberta(t, agora))
    if (futuras.length) atuais.push({ ...im, turmas: futuras })
    else encerradas.push(im)
  }
  return { atuais, encerradas }
}

/** FAQ de /imersoes/ — a mesma lista alimenta a página e o JSON-LD. */
export const faqsImersoes = [
  {
    q: 'Quem oferece as imersões?',
    a: 'A Cherry Top. Programa, inscrição, investimento, taxa de pré-inscrição, contrato e condições são definidos por ela. O ETT divulga as turmas, encaminha quem tem interesse e oferece as ferramentas e os encontros de conversação pra praticar antes e depois.',
  },
  {
    q: 'Qual o nível mínimo de inglês?',
    a: 'Depende da turma, e quem define é a Cherry Top. Como referência: no Brasil há turmas a partir do básico, organizadas por nível; na Flórida o mínimo é B1+, porque tudo acontece em inglês. Se quiser ter uma ideia do seu nível antes de conversar com eles, o diagnóstico do ETT Player ajuda.',
  },
  {
    q: 'Quanto custa?',
    a: 'O investimento é informado pela Cherry Top. Preencha o formulário: o ETT encaminha seu interesse e a Cherry Top entra em contato com a proposta e o que está incluído em cada turma.',
  },
  {
    q: 'O que está incluído?',
    a: 'Belo Horizonte: programa de 5 dias, hospedagem, refeições, material e certificado de 90 horas emitido pela Cherry Top. Business School (Curitiba, dez/2026): 10h de pré-imersão online (The Passport), 3 dias presenciais das 8h às 18h, 10h de estudo orientado, almoço nos dias presenciais e certificado de 50 horas; passagem, hospedagem e traslado ficam por conta do participante. Flórida: programa, hospedagem em resort, atividades culturais e mentor residente; passagem aérea e visto americano não estão inclusos. Os detalhes finais são confirmados pela Cherry Top.',
  },
  {
    q: 'Imersão na Flórida — preciso de visto?',
    a: 'Sim, visto americano B1/B2 válido. A Cherry Top orienta o processo, mas a obtenção é responsabilidade de cada participante.',
  },
  {
    q: 'Preciso usar o ETT pra fazer uma imersão?',
    a: 'Não. A imersão é da Cherry Top e não depende de nenhum plano do ETT. Os encontros de conversação são gratuitos e abertos, e as ferramentas podem ser testadas por 30 dias sem cartão, se você quiser praticar antes ou depois.',
  },
]
