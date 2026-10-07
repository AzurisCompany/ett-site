'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { eventosFuturos, type AgendaEvent } from '@/lib/agenda-events'

/**
 * Próximos encontros presenciais, calculados NO NAVEGADOR.
 *
 * ⚠️ Antes, `/curitiba/` filtrava `agendaEvents` no build. Como o IEP Talks é
 * gerado por regra (não é evento datado à mão) e o array só tem datas passadas,
 * a página mostrava "Sem encontros presenciais confirmados" enquanto o resto do
 * site dizia "todo sábado". Mesmo motivo de `ProximosEncontros` e `Agenda`: o
 * site é export estático e o build pode ficar semanas sem rodar.
 */
export default function ProximosPresenciais({ quantidade = 4 }: { quantidade?: number }) {
  const [eventos, setEventos] = useState<AgendaEvent[] | null>(null)

  useEffect(() => {
    setEventos(eventosFuturos(8).filter((e) => e.type === 'presencial').slice(0, quantidade))
  }, [quantidade])

  if (eventos === null) {
    return (
      <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-3">
        {Array.from({ length: quantidade }).map((_, i) => (
          <div
            key={i}
            className="h-[92px] rounded-xl bg-surface-card border border-surface-line animate-pulse"
          />
        ))}
      </div>
    )
  }

  if (eventos.length === 0) {
    return (
      <p className="text-center text-ink-muted max-w-md mx-auto">
        Sem encontros presenciais confirmados nos próximos dias.
        <br />
        <Link href="/agenda/" className="text-brand-red underline mt-2 inline-block">
          Ver agenda completa
        </Link>
      </p>
    )
  }

  return (
    <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-3">
      {eventos.map((ev) => {
        const dayNum = ev.dateLabel.split(' ')[0]
        const monthAbbr = ev.dateLabel.split(' de ')[1]?.slice(0, 3) ?? ''
        return (
          <div
            key={`${ev.date}-${ev.title}`}
            className="relative bg-surface-card border border-brand-red/20 rounded-xl p-3.5 card-hover"
          >
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-14 rounded-lg border border-brand-red/30 bg-brand-red/5 text-center py-1.5">
                <div className="text-[10px] uppercase tracking-wider font-bold text-brand-red">
                  {ev.weekday.slice(0, 3).toLowerCase()}
                </div>
                <div className="text-ink font-black text-xl leading-none my-0.5">{dayNum}</div>
                <div className="text-[10px] uppercase tracking-wider text-ink-subtle">
                  {monthAbbr}
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-ink text-sm leading-snug mb-1">{ev.title}</h3>
                <p className="text-xs text-ink-muted flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-brand-red shrink-0" />
                  {ev.location}
                </p>
                <p className="text-xs text-ink-subtle mt-1">{ev.time}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
