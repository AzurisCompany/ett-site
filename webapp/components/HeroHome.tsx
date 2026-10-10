'use client'

import HeroSimples from '@/components/HeroSimples'
import HeroLancamento from '@/components/HeroLancamento'
import { useLancamentoAtivo } from '@/lib/lancamento'

/* Até o fim do lançamento (27/10/2026) a home abre com o evento; depois volta
   ao hero de sempre sozinha. Quando o evento passar, dá pra apagar
   HeroLancamento e trocar este componente por HeroSimples em app/page.tsx. */
export default function HeroHome() {
  return useLancamentoAtivo() ? <HeroLancamento /> : <HeroSimples />
}
