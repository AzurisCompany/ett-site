import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navbar from '@/components/Navbar'
import HeroDetalhes from '@/components/detalhes/HeroDetalhes'
import About from '@/components/About'
import Methodology from '@/components/Methodology'
import Tools from '@/components/Tools'
import PlayerShowcase from '@/components/PlayerShowcase'
import Partners from '@/components/Partners'
import ImersoesTeaser from '@/components/ImersoesTeaser'
import HowItWorks from '@/components/HowItWorks'
import Results from '@/components/Results'
import FAQ from '@/components/FAQ'
import LeadForm from '@/components/LeadForm'
import Footer from '@/components/Footer'

const SITE_URL = 'https://englishtalktime.com.br'

export const metadata: Metadata = {
  title: 'O programa ETT em detalhes — metodologia, ferramentas e jornada completa',
  description:
    'A descrição completa do English Talk Time: os 6 pilares da metodologia, as ferramentas de apoio com IA, a jornada em 7 passos, os parceiros e as camadas opcionais de imersão e carreira internacional.',
  alternates: { canonical: '/detalhes/' },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    title: 'O programa ETT em detalhes',
    description:
      'Metodologia, ferramentas de apoio com IA, jornada completa e parceiros do English Talk Time.',
    url: `${SITE_URL}/detalhes/`,
    images: [
      {
        url: '/images/ETT-top01.webp',
        width: 1200,
        height: 630,
        alt: 'English Talk Time — o programa em detalhes',
      },
    ],
  },
}

export default function DetalhesPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Navbar />
      <HeroDetalhes />

      {/* Contexto: esta é a versão longa; a home é a versão curta */}
      <section className="bg-dark-secondary border-y border-dark-border">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-sm text-gray-400">
            Esta é a <strong className="text-gray-200">descrição completa do programa</strong> —
            metodologia, ferramentas, jornada e parceiros. Se você só quer participar do próximo
            encontro, o caminho curto está na home.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neon-green hover:text-neon-green/80 transition-colors shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a home
          </Link>
        </div>
      </section>

      <About />
      <Methodology />
      <Tools />
      <PlayerShowcase />
      <Partners />
      <ImersoesTeaser />
      <HowItWorks />
      <Results />
      <FAQ />
      <LeadForm />
      <Footer />
    </main>
  )
}
