'use client'

import { useEffect, useState } from 'react'
import {
  REINICIO,
  encontrosOnlineRecorrentes,
  encontrosPresenciaisRecorrentes,
} from '@/lib/agenda-events'

/**
 * Próximas datas dos encontros, calculadas NO NAVEGADOR (o build pode ficar
 * semanas sem rodar). Antes do cálculo mostra só o texto sem data, que nunca
 * vence. Se ainda estamos antes do reinício (REINICIO), avisa que é a volta.
 */
export default function ProximasDatas({ className = 'text-ink-soft text-sm leading-relaxed mb-6' }: { className?: string }) {
  const [texto, setTexto] = useState<string | null>(null)

  useEffect(() => {
    const hoje = new Date()
    const [online] = encontrosOnlineRecorrentes(1, hoje)
    const [iep] = encontrosPresenciaisRecorrentes(1, hoje)
    const hojeIso = `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, '0')}-${String(
      hoje.getDate(),
    ).padStart(2, '0')}`
    const antesDaVolta = hojeIso < REINICIO.online || hojeIso < REINICIO.presencial
    const prefixo = antesDaVolta ? 'Os encontros voltam depois da pausa: ' : 'Próximas datas: '
    setTexto(
      `${prefixo}online na segunda, ${online.dateLabel}, às 20h, e IEP Talks no sábado, ${iep.dateLabel}, às 10h.`,
    )
  }, [])

  return (
    <p className={className}>{texto ?? 'Confira as próximas datas na agenda.'}</p>
  )
}
