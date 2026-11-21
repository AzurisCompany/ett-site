import { professores } from '@/lib/professores'

export type AgendaEventType = 'online' | 'presencial'

export interface AgendaEvent {
  date: string // YYYY-MM-DD
  startTime: string // HH:mm
  endTime: string // HH:mm
  weekday: string
  dateLabel: string // "11 de maio"
  type: AgendaEventType
  title: string
  location: string
  city?: string
  venueAddress?: string
  time: string // display string
  timeNote?: string
  venueIcon?: 'iep' | 'utfpr' | 'hardrock' | 'habitat'
  highlight?: boolean
  /** Links de entrada do evento (sala, grupo de inscrição...). */
  links?: { url: string; label: string }[]
  /** Quem realiza, quando não for o próprio ETT. */
  partner?: string
  /** Encontro de professor parceiro (só pra Participantes Habilitados, não é o aberto de segunda). */
  restrito?: boolean
}

/**
 * Eventos datados, escritos à mão (edições especiais, cancelamentos, parceiros).
 * Um evento datado tem precedência sobre o recorrente do mesmo dia e tipo.
 * Os de mai–ago/2026 (UTFPR, Hard Rock, Habitat, CherryTop Business Meal) já
 * passaram e foram retirados em 09/11/2026.
 */
export const agendaEvents: AgendaEvent[] = []

/**
 * Volta dos encontros depois da pausa (decisão do Alessandro, 09/11/2026):
 * nenhuma data recorrente aparece antes disso. Pra uma pausa futura, é só
 * mudar estas datas.
 */
export const REINICIO = { online: '2026-11-16', presencial: '2026-11-21' }

/** Até quando a home anuncia o reinício (faixa no topo + selo "Voltamos"). */
export const ANUNCIO_REINICIO_ATE = '2026-11-30'

/** Contato do IEP Talks: WhatsApp do Miguel Donizete (IEP · UTFPR). */
export const CONTATO_IEP_TALKS = {
  nome: 'Miguel',
  whatsapp:
    'https://wa.me/5513991511656?text=' +
    encodeURIComponent('Olá, Miguel! Vi o IEP Talks no site do English Talk Time e tenho uma dúvida.'),
}

export const IEP_ENDERECO = 'Rua Emiliano Perneta, 174 · Centro · Curitiba/PR'
export const IEP_MAPA =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Instituto de Engenharia do Paraná, Rua Emiliano Perneta 174, Curitiba')

/** O anúncio do reinício ainda vale hoje? (calcular no navegador) */
export function anuncioReinicioAtivo(hoje = new Date()): boolean {
  return new Date(`${ANUNCIO_REINICIO_ATE}T23:59:59-03:00`) >= hoje
}

const DIA_MS = 24 * 60 * 60 * 1000

/** Se o encontro ainda não recomeçou, as datas contam a partir do dia da volta. */
function aPartirDe(hoje: Date, inicioIso: string): Date {
  const [a, m, d] = inicioIso.split('-').map(Number)
  const inicio = new Date(a, m - 1, d)
  return hoje < inicio ? inicio : hoje
}

function labelData(d: Date): string {
  return d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })
}

function iso(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate(),
  ).padStart(2, '0')}`
}

/**
 * Próximas ocorrências de um dia da semana, a partir de "hoje".
 *
 * `horaLimite` é a hora até a qual o evento de hoje ainda conta (se hoje já é
 * o dia da semana certo e ainda não passou dela, hoje entra na lista).
 */
function proximosDiasDaSemana(
  diaSemana: number,
  quantidade: number,
  hoje: Date,
  horaLimite: number,
): Date[] {
  const dia = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate())
  const hojeAindaVale = hoje.getDay() === diaSemana && hoje.getHours() < horaLimite
  if (!hojeAindaVale) {
    do {
      dia.setDate(dia.getDate() + 1)
    } while (dia.getDay() !== diaSemana)
  }

  const dias: Date[] = []
  for (let i = 0; i < quantidade; i++) {
    dias.push(new Date(dia))
    dia.setDate(dia.getDate() + 7)
  }
  return dias
}

/**
 * Encontros online de segunda, gerados a partir de "hoje".
 *
 * Gerado em vez de listado de propósito: o site é export estático e o build
 * pode ficar semanas sem rodar — data escrita à mão vira data vencida na tela.
 * Mesma regra do `ProximosEncontros` da home (se hoje é segunda e ainda não
 * passou das 22h, hoje conta).
 */
export function encontrosOnlineRecorrentes(quantidade: number, hoje = new Date()): AgendaEvent[] {
  return proximosDiasDaSemana(1, quantidade, aPartirDe(hoje, REINICIO.online), 22).map((dia) => ({
    date: iso(dia),
    startTime: '20:00',
    endTime: '21:30',
    weekday: 'Segunda',
    dateLabel: labelData(dia),
    type: 'online',
    title: 'Encontro Online ETT',
    location: 'Online · sala do ETT Speak',
    time: '20h às 21h30',
    links: [{ url: 'https://ett-speak.vercel.app/', label: 'Abrir a sala' }],
  }))
}

/**
 * IEP Talks — encontro presencial de sábado, no IEP, em Curitiba.
 *
 * Recorrente, então é gerado pela mesma regra das segundas: escrever as datas à
 * mão faria a agenda congelar de novo (foi o bug de 27/07).
 */
export function encontrosPresenciaisRecorrentes(
  quantidade: number,
  hoje = new Date(),
): AgendaEvent[] {
  return proximosDiasDaSemana(6, quantidade, aPartirDe(hoje, REINICIO.presencial), 12).map((dia) => ({
    date: iso(dia),
    startTime: '10:00',
    endTime: '12:00',
    weekday: 'Sábado',
    dateLabel: labelData(dia),
    type: 'presencial',
    title: 'IEP Talks',
    location: 'IEP — Instituto de Engenharia do Paraná',
    city: 'Curitiba/PR',
    venueAddress: IEP_ENDERECO,
    time: '10h às 12h',
    venueIcon: 'iep',
    links: [
      { url: CONTATO_IEP_TALKS.whatsapp, label: `Dúvidas? Fale com o ${CONTATO_IEP_TALKS.nome}` },
      { url: IEP_MAPA, label: 'Como chegar' },
    ],
  }))
}

function horaDe(hhmm: string): number {
  return Number(hhmm.split(':')[0]) + 1
}

/**
 * Encontros ETT dos professores parceiros (lib/professores.ts), desde 04/12/2026.
 * Cada horário semanal vira uma série gerada, a partir de `encontro.inicio`.
 * Gratuitos, mas só pra quem está no Desafio de 7 dias ou no programa — por
 * isso `restrito` e o link de inscrição no WhatsApp do Miguel.
 */
export function encontrosProfessoresRecorrentes(semanas: number, hoje = new Date()): AgendaEvent[] {
  return professores.flatMap((p) => {
    const enc = p.encontro
    if (!enc) return []
    return enc.horarios.flatMap((h) =>
      proximosDiasDaSemana(h.diaSemana, semanas, aPartirDe(hoje, enc.inicio), horaDe(h.fim)).map(
        (dia): AgendaEvent => ({
          date: iso(dia),
          startTime: h.inicio,
          endTime: h.fim,
          weekday: h.dia,
          dateLabel: labelData(dia),
          type: 'online',
          title: `Encontro ETT com ${p.nome}`,
          location: `Online · ${enc.limite.toLowerCase()}`,
          time: h.rotulo,
          timeNote: 'Para quem está no Desafio de 7 dias ou no programa ETT. Inscrição pelo WhatsApp.',
          partner: 'Professor parceiro',
          restrito: true,
          links: [
            { url: enc.inscricaoUrl, label: 'Quero participar' },
            { url: `/parceiros/${p.slug}/`, label: `Sobre ${p.nome}` },
          ],
        }),
      ),
    )
  })
}

/**
 * O que a /agenda/ mostra: os encontros recorrentes gerados (segunda online e
 * sábado presencial) + os eventos datados que ainda não passaram, em ordem.
 * Chamar no cliente (useEffect), nunca no build — ver comentário acima.
 *
 * Um evento datado tem precedência sobre o recorrente do mesmo dia e tipo: é
 * assim que se cancela ou se substitui uma ocorrência específica.
 */
export function eventosFuturos(semanas = 4, hoje = new Date()): AgendaEvent[] {
  // A janela começa no reinício, se ele ainda não chegou (senão a agenda mostraria menos semanas).
  const base = aPartirDe(hoje, [REINICIO.online, REINICIO.presencial].sort()[0])
  const limite = new Date(base.getTime() + semanas * 7 * DIA_MS)
  const hojeIso = iso(hoje)
  const limiteIso = iso(limite)

  const datados = agendaEvents.filter((e) => e.date >= hojeIso && e.date <= limiteIso)
  const recorrentes = [
    ...encontrosOnlineRecorrentes(semanas, hoje),
    ...encontrosPresenciaisRecorrentes(semanas, hoje),
    ...encontrosProfessoresRecorrentes(semanas, hoje),
  ].filter(
    (e) =>
      e.date <= limiteIso &&
      !datados.some((d) => d.date === e.date && d.type === e.type && !!d.restrito === !!e.restrito),
  )

  return [...datados, ...recorrentes].sort((a, b) =>
    a.date === b.date ? a.startTime.localeCompare(b.startTime) : a.date.localeCompare(b.date),
  )
}
