import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import FormulaFluente from '@/components/FormulaFluente'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Fórmula Fluente — Metodologia | ETT English Talk Time',
  description:
    'A metodologia que sustenta o ETT: Threshold + Imersão = Fluência. Os 4 pilares (escrever, falar, ouvir, ler), os 4 estágios da competência, plano de estudos em 10 passos e as 3 camadas de imersão. Adaptado de Frank Florida.',
  openGraph: {
    title: 'Fórmula Fluente — Metodologia do ETT',
    description:
      'Threshold + Imersão = Fluência. O método que destila por que algumas pessoas chegam à fluência em meses e outras passam anos travadas.',
    url: 'https://ett.dssbr.com.br/ff',
    images: [{ url: '/images/ETT-top01.png', width: 1200, height: 630 }],
  },
}

export default function FormulaFluentePage() {
  return (
    <>
      <Navbar />
      <FormulaFluente />
      <Footer />
    </>
  )
}
