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
]
