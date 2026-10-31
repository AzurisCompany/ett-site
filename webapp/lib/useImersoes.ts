'use client'

import { useEffect, useState } from 'react'
import { separarImersoes, type ImersoesSeparadas } from '@/lib/imersoes'

/* Hooks separados de lib/imersoes.ts pra que páginas de servidor possam
   importar os dados (FAQ, JSON-LD) sem puxar React do cliente. */

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
