import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DesafioDetalhe from '@/components/desafio/DesafioDetalhe'

/* Desafio de 7 dias (desde 09/11/2026): isca gratuita com acompanhamento do
   Miguel no WhatsApp. Dados em lib/desafio.ts. */
export const metadata: Metadata = {
  title: 'Desafio de 7 dias — uma ferramenta de inglês por dia | English Talk Time',
  description:
    'Desafio gratuito: durante 7 dias, escolha uma ferramenta do ETT Player por dia, pratique uns 15 minutos e conte pro Miguel no WhatsApp. No fim, participe do encontro de conversação.',
  alternates: { canonical: '/desafio/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Desafio de 7 dias — uma ferramenta de inglês por dia',
    description:
      'Gratuito, com acompanhamento no WhatsApp. Termina no encontro de conversação do English Talk Time.',
    url: 'https://englishtalktime.com.br/desafio/',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <DesafioDetalhe />
      <Footer />
    </main>
  )
}
