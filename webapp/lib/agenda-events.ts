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
}

export const agendaEvents: AgendaEvent[] = [
  {
    date: '2026-05-11',
    startTime: '20:00',
    endTime: '21:30',
    weekday: 'Segunda',
    dateLabel: '11 de maio',
    type: 'online',
    title: 'Encontro Online ETT',
    location: 'Online · Google Meet',
    time: '20h às 21h30',
  },
  {
    date: '2026-05-14',
    startTime: '19:00',
    endTime: '21:30',
    weekday: 'Quinta',
    dateLabel: '14 de maio',
    type: 'presencial',
    title: 'English Talk Time · IEP',
    location: 'IEP — Instituto de Engenharia do Paraná',
    city: 'Curitiba/PR',
    venueAddress: 'Instituto de Engenharia do Paraná, Curitiba, PR, Brasil',
    time: '19h às 21h30',
    timeNote: 'horário a confirmar',
    venueIcon: 'iep',
  },
  {
    date: '2026-05-18',
    startTime: '20:00',
    endTime: '21:30',
    weekday: 'Segunda',
    dateLabel: '18 de maio',
    type: 'online',
    title: 'Encontro Online ETT',
    location: 'Online · Google Meet',
    time: '20h às 21h30',
  },
  {
    date: '2026-05-21',
    startTime: '19:00',
    endTime: '21:30',
    weekday: 'Quinta',
    dateLabel: '21 de maio',
    type: 'presencial',
    title: 'English Talk Time · UTFPR',
    location: 'UTFPR — Universidade Tecnológica Federal do Paraná',
    city: 'Curitiba/PR',
    venueAddress: 'Curitiba, PR, Brasil',
    time: '19h às 21h30',
    timeNote: 'horário a confirmar',
    venueIcon: 'utfpr',
  },
  {
    date: '2026-05-25',
    startTime: '20:00',
    endTime: '21:30',
    weekday: 'Segunda',
    dateLabel: '25 de maio',
    type: 'online',
    title: 'Encontro Online ETT',
    location: 'Online · Google Meet',
    time: '20h às 21h30',
  },
  {
    date: '2026-05-27',
    startTime: '19:00',
    endTime: '21:30',
    weekday: 'Quarta',
    dateLabel: '27 de maio',
    type: 'presencial',
    title: 'English Talk Time · Hard Rock',
    location: 'Hard Rock Cafe',
    city: 'Curitiba/PR',
    venueAddress: 'Hard Rock Cafe Curitiba, Curitiba, PR, Brasil',
    time: '19h às 21h30',
    timeNote: 'quarta excepcional — quinta 28 indisponível',
    venueIcon: 'hardrock',
    highlight: true,
  },
  {
    date: '2026-06-01',
    startTime: '20:00',
    endTime: '21:30',
    weekday: 'Segunda',
    dateLabel: '1 de junho',
    type: 'online',
    title: 'Encontro Online ETT',
    location: 'Online · Google Meet',
    time: '20h às 21h30',
  },
  {
    date: '2026-06-04',
    startTime: '19:00',
    endTime: '21:30',
    weekday: 'Quinta',
    dateLabel: '4 de junho',
    type: 'presencial',
    title: 'English Talk Time · Habitat',
    location: 'Habitat — Sistema FIEP / Parque Tecnológico',
    city: 'Curitiba/PR',
    venueAddress: 'Habitat, Sistema FIEP, Curitiba, PR, Brasil',
    time: '19h às 21h30',
    timeNote: 'horário a confirmar',
    venueIcon: 'habitat',
  },
  {
    date: '2026-08-01',
    startTime: '12:00',
    endTime: '13:00',
    weekday: 'Sábado',
    dateLabel: '1 de agosto',
    type: 'online',
    title: 'CherryTop Business Meal',
    location: 'Online · realização Cherry Top',
    time: '12h às 13h',
    timeNote: 'Negotiation, networking e team building · one-to-one à tarde pra quem está no grupo',
    highlight: true,
    partner: 'Cherry Top',
    links: [
      { url: 'https://ett-speak.vercel.app/r/cherrytop', label: 'Abrir a sala' },
      { url: 'https://chat.whatsapp.com/LEpi3Cm9cWv20kBHg5xjdb', label: 'Grupo de WhatsApp' },
    ],
  },
]

const DIA_MS = 24 * 60 * 60 * 1000

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
  return proximosDiasDaSemana(1, quantidade, hoje, 22).map((dia) => ({
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
  return proximosDiasDaSemana(6, quantidade, hoje, 12).map((dia) => ({
    date: iso(dia),
    startTime: '10:00',
    endTime: '12:00',
    weekday: 'Sábado',
    dateLabel: labelData(dia),
    type: 'presencial',
    title: 'IEP Talks',
    location: 'IEP — Instituto de Engenharia do Paraná',
    city: 'Curitiba/PR',
    venueAddress: 'Instituto de Engenharia do Paraná, Curitiba, PR, Brasil',
    time: '10h às 12h',
    venueIcon: 'iep',
  }))
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
  const limite = new Date(hoje.getTime() + semanas * 7 * DIA_MS)
  const hojeIso = iso(hoje)
  const limiteIso = iso(limite)

  const datados = agendaEvents.filter((e) => e.date >= hojeIso && e.date <= limiteIso)
  const recorrentes = [
    ...encontrosOnlineRecorrentes(semanas, hoje),
    ...encontrosPresenciaisRecorrentes(semanas, hoje),
  ].filter(
    (e) => e.date <= limiteIso && !datados.some((d) => d.date === e.date && d.type === e.type),
  )

  return [...datados, ...recorrentes].sort((a, b) =>
    a.date === b.date ? a.startTime.localeCompare(b.startTime) : a.date.localeCompare(b.date),
  )
}
