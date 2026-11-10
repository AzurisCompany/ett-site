'use client'

import { useEffect, useState } from 'react'
import { Wifi, Clock } from 'lucide-react'
import { encontrosOnlineRecorrentes, type AgendaEvent } from '@/lib/agenda-events'

/**
 * Próximas segundas online, calculadas NO NAVEGADOR a partir do gerador de
 * lib/agenda-events.ts (que já respeita REINICIO). Até 09/11/2026 a /online/
 * filtrava `agendaEvents` no build e mostrava "Sem datas online confirmadas"
 * embaixo de "Toda segunda às 20h". Mesmo padrão do ProximosEncontros da home.
 */
export default function ProximosOnline({ quantidade = 4 }: { quantidade?: number }) {
  const [eventos, setEventos] = useState<AgendaEvent[] | null>(null)

  useEffect(() => {
    setEventos(encontrosOnlineRecorrentes(quantidade))
  }, [quantidade])

  if (eventos === null) {
    return (
      <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-3">
        {Array.from({ length: quantidade }).map((_, i) => (
          <div
            key={i}
            className="h-[84px] rounded-xl bg-surface-card border border-surface-line animate-pulse"
          />
        ))}
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-3">
      {eventos.map((ev, i) => {
        const dayNum = ev.dateLabel.split(' ')[0]
        const monthAbbr = ev.dateLabel.split(' de ')[1]?.slice(0, 3) ?? ''
        return (
          <div
            key={ev.date}
            className={`relative bg-surface-card border rounded-xl p-3.5 card-hover ${
              i === 0 ? 'border-brand-red/30' : 'border-brand-silver/20'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-14 rounded-lg border border-brand-silver/30 bg-brand-silver/5 text-center py-1.5">
                <div className="text-[10px] uppercase tracking-wider font-bold text-brand-silver">
                  {ev.weekday.slice(0, 3).toLowerCase()}
                </div>
                <div className="text-ink font-black text-xl leading-none my-0.5">{dayNum}</div>
                <div className="text-ink-subtle text-[10px] uppercase tracking-wider">
                  {monthAbbr}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-brand-silver/10 text-brand-silver border border-brand-silver/30">
                    <Wifi className="w-2.5 h-2.5" />
                    online
                  </span>
                  {i === 0 && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red">
                      Próximo
                    </span>
                  )}
                  <span className="ml-auto inline-flex items-center gap-1 text-xs text-ink-muted">
                    <Clock className="w-3 h-3" />
                    {ev.time}
                  </span>
                </div>
                <h3 className="font-bold text-ink text-sm leading-snug mb-1 truncate">
                  {ev.title}
                </h3>
                <p className="text-xs text-ink-subtle leading-snug truncate">{ev.location}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
