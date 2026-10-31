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
  title: 'Como o ETT ajuda você a acelerar sua prática de inglês',
  description:
    'O English Talk Time em detalhes: as ferramentas de prática do ETT Player, os encontros de conversação, a rotina sugerida, as metas de referência e os parceiros de ensino, imersão, conteúdo e carreira.',
  alternates: { canonical: '/detalhes/' },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    title: 'Como o ETT ajuda você a acelerar sua prática de inglês',
    description:
      'Ferramentas, conversação, rotina e parceiros — o English Talk Time em detalhes.',
    url: `${SITE_URL}/detalhes/`,
    images: [
      {
        url: '/images/og-ett-2026.png',
        width: 1200,
        height: 630,
        alt: 'English Talk Time em detalhes',
      },
    ],
  },
}

export default function DetalhesPage() {
  return (
    <main className="bg-surface min-h-screen">
      <Navbar />
      <HeroDetalhes />

      {/* Contexto: esta é a versão longa; a home é a versão curta */}
      <section className="bg-surface-alt border-y border-surface-line">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-sm text-ink-muted">
            Esta é a <strong className="text-ink">versão completa</strong> — método,
            ferramentas, rotina e parceiros. Se você só quer participar do próximo encontro, o
            caminho curto está na home.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:text-brand-red/80 transition-colors shrink-0"
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
      <FAQ
        title={
          <>
            Perguntas sobre <span className="gradient-text">o ETT</span>
          </>
        }
        subtitle="Plataforma, encontros, ferramentas e parceiros — sem letra miúda."
      />
      <LeadForm />
      <Footer />
    </main>
  )
}
