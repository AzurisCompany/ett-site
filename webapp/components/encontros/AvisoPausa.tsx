'use client'

import { useEffect, useState } from 'react'
import { CalendarClock } from 'lucide-react'
import { REINICIO } from '@/lib/agenda-events'

type Tipo = 'online' | 'presencial' | 'ambos'

const curta = (iso: string) => `${iso.slice(8, 10)}/${iso.slice(5, 7)}`

function antesDe(iso: string, hoje: Date): boolean {
  const [a, m, d] = iso.split('-').map(Number)
  return hoje < new Date(a, m - 1, d)
}

/**
 * Aviso de pausa dos encontros. Calculado NO NAVEGADOR (o site é export estático
 * e o build pode ser antigo): nasce escondido e só aparece enquanto hoje < REINICIO.
 * Depois da volta some sozinho — pra uma pausa futura, é só mudar REINICIO.
 */
export default function AvisoPausa({ tipo, className = '' }: { tipo: Tipo; className?: string }) {
  const [texto, setTexto] = useState<string | null>(null)

  useEffect(() => {
    const hoje = new Date()
    const online = antesDe(REINICIO.online, hoje)
    const presencial = antesDe(REINICIO.presencial, hoje)

    if (tipo === 'online' && online) {
      setTexto(`Os encontros online estão em pausa e voltam na segunda, ${curta(REINICIO.online)}.`)
    } else if (tipo === 'presencial' && presencial) {
      setTexto(`O IEP Talks está em pausa e volta no sábado, ${curta(REINICIO.presencial)}.`)
    } else if (tipo === 'ambos' && (online || presencial)) {
      const partes = [
        online ? `online a partir de ${curta(REINICIO.online)}` : null,
        presencial ? `IEP Talks a partir de ${curta(REINICIO.presencial)}` : null,
      ].filter(Boolean)
      setTexto(`Os encontros estão em pausa e voltam: ${partes.join(' · ')}.`)
    }
  }, [tipo])

  if (!texto) return null

  return (
    <div
      role="status"
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-brand-red/30 bg-brand-red/5 text-sm font-semibold text-brand-red ${className}`}
    >
      <CalendarClock className="w-4 h-4 shrink-0" />
      {texto}
    </div>
  )
}
