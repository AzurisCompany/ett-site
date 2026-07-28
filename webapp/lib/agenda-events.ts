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
    location: 'IEP — Instituto de Ensino e Pesquisa',
    city: 'Curitiba/PR',
    venueAddress: 'Curitiba, PR, Brasil',
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
 * Encontros online de segunda, gerados a partir de "hoje".
 *
 * Gerado em vez de listado de propósito: o site é export estático e o build
 * pode ficar semanas sem rodar — data escrita à mão vira data vencida na tela.
 * Mesma regra do `ProximosEncontros` da home (se hoje é segunda e ainda não
 * passou das 22h, hoje conta).
 */
export function encontrosOnlineRecorrentes(quantidade: number, hoje = new Date()): AgendaEvent[] {
  const dia = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate())
  const hojeAindaVale = hoje.getDay() === 1 && hoje.getHours() < 22
  if (!hojeAindaVale) {
    do {
      dia.setDate(dia.getDate() + 1)
    } while (dia.getDay() !== 1)
  }

  const eventos: AgendaEvent[] = []
  for (let i = 0; i < quantidade; i++) {
    eventos.push({
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
    })
    dia.setDate(dia.getDate() + 7)
  }
  return eventos
}

/**
 * O que a /agenda/ mostra: os encontros de segunda gerados + os eventos
 * datados que ainda não passaram, em ordem. Chamar no cliente (useEffect),
 * nunca no build — ver comentário acima.
 */
export function eventosFuturos(semanas = 4, hoje = new Date()): AgendaEvent[] {
  const limite = new Date(hoje.getTime() + semanas * 7 * DIA_MS)
  const hojeIso = iso(hoje)
  const limiteIso = iso(limite)

  const datados = agendaEvents.filter((e) => e.date >= hojeIso && e.date <= limiteIso)
  const recorrentes = encontrosOnlineRecorrentes(semanas, hoje).filter(
    (e) => !datados.some((d) => d.date === e.date && d.type === 'online'),
  )

  return [...datados, ...recorrentes].sort((a, b) =>
    a.date === b.date ? a.startTime.localeCompare(b.startTime) : a.date.localeCompare(b.date),
  )
}
