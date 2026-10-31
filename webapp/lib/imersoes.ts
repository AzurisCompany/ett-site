'use client'

import { useEffect, useState } from 'react'

/**
 * Imersões dos parceiros — fonte única de /imersoes/.
 *
 * Quem oferece é a Cherry Top: inscrição, taxa de pré-inscrição, preço,
 * contrato e condições são dela (confirmado pelo Alessandro em 31/10/2026).
 * O ETT divulga, encaminha o interesse e oferece ferramentas e encontros
 * pra praticar antes e depois.
 *
 * ⚠️ Datas em ISO. Atual × encerrada é calculado NO NAVEGADOR
 * (`useImersoesSeparadas`), igual à agenda: o build pode ficar semanas sem
 * rodar, e "próxima a acontecer" escrito à mão já ficou vencido uma vez
 * (Curitiba, jul/2026, ainda era "próxima" em outubro).
 */

export type Turma = { inicio: string; fim: string; rotulo: string }

export type ImersaoParceiro = {
  id: string
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

/** `null` até montar no navegador — renderizar skeleton nesse meio-tempo. */
export function useImersoesSeparadas(): ImersoesSeparadas | null {
  const [sep, setSep] = useState<ImersoesSeparadas | null>(null)
  useEffect(() => setSep(separarImersoes(new Date())), [])
  return sep
}

/** Uma imersão específica tem turma futura? (`null` até montar.) */
export function useImersaoAberta(id: string): boolean | null {
  const sep = useImersoesSeparadas()
  if (!sep) return null
  return sep.atuais.some((im) => im.id === id)
}
