import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PlanoDetalhe from '@/components/PlanoDetalhe'
import { detalhesPlanos } from '@/lib/planos'

const plano = detalhesPlanos.adesao

export const metadata: Metadata = {
  title: `${plano.nome} — ${plano.preco} | English Talk Time`,
  description: plano.intro,
  alternates: { canonical: '/planos/adesao/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: `${plano.nome} — ${plano.preco}`,
    description: plano.intro,
    url: `https://englishtalktime.com.br/planos/adesao/`,
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <PlanoDetalhe plano={plano} />
      <Footer />
    </main>
  )
}
