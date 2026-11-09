'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, PartyPopper } from 'lucide-react'
import { REINICIO, anuncioReinicioAtivo } from '@/lib/agenda-events'

const curta = (iso: string) => `${iso.slice(8, 10)}/${iso.slice(5, 7)}`

/**
 * Faixa no topo da home anunciando a volta dos encontros (09/11/2026).
 *
 * Começa ESCONDIDA e só aparece no navegador, se ainda estiver no prazo
 * (ANUNCIO_REINICIO_ATE): estado que "some sozinho" mas nasce visível fica
 * gravado no HTML estático (lição do modo lançamento, 31/10). Depois do prazo
 * ela não aparece mais, mesmo sem deploy, mas convém apagar o componente.
 */
export default function AnuncioReinicio() {
  const [ativo, setAtivo] = useState(false)
  const [voltou, setVoltou] = useState(false)
  useEffect(() => {
    const hoje = new Date()
    setAtivo(anuncioReinicioAtivo(hoje))
    setVoltou(hoje >= new Date(`${REINICIO.online}T00:00:00-03:00`))
  }, [])

  if (!ativo) return null

  return (
    <div className="pt-16">
      <Link
        href="/agenda/"
        className="block bg-brand-red-deep text-white hover:bg-brand-red-deep/95 transition-colors"
      >
        <div className="container mx-auto px-4 py-2.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-sm text-center">
          <PartyPopper className="w-4 h-4 shrink-0" />
          <strong>{voltou ? 'Os encontros voltaram!' : 'Os encontros estão voltando!'}</strong>
          <span>
            Online toda segunda, 20h, a partir de {curta(REINICIO.online)} · IEP Talks aos sábados, 10h, a partir
            de {curta(REINICIO.presencial)}
          </span>
          <span className="inline-flex items-center gap-1 font-semibold underline underline-offset-2">
            Ver a agenda <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>
    </div>
  )
}
