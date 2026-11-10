import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DedicacaoDetalhe from '@/components/planos/DedicacaoDetalhe'
import { detalhesPlanos } from '@/lib/planos'

/* Layout próprio desde 09/11/2026 (components/planos/DedicacaoDetalhe.tsx), no modelo da ativação. */
const plano = detalhesPlanos.dedicacao

export const metadata: Metadata = {
  title: `${plano.nome} — ${plano.preco} | English Talk Time`,
  description: plano.intro,
  alternates: { canonical: '/planos/dedicacao/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: `${plano.nome} — ${plano.preco}`,
    description: plano.intro,
    url: `https://englishtalktime.com.br/planos/dedicacao/`,
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <DedicacaoDetalhe />
      <Footer />
    </main>
  )
}
