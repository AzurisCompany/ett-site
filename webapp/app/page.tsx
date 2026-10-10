import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import HeroHome from '@/components/HeroHome'
import LancamentoDSSBR from '@/components/LancamentoDSSBR'
import { LancamentoChamadaFinal, LancamentoBarraCelular } from '@/components/LancamentoChamadas'
import ProximosEncontros from '@/components/ProximosEncontros'
import CapturaRapida from '@/components/CapturaRapida'
import ComoE from '@/components/ComoE'
import FerramentasResumo from '@/components/FerramentasResumo'
import ParceirosFaixa from '@/components/ParceirosFaixa'
import Precos from '@/components/Precos'
import FAQ from '@/components/FAQ'
import LeadForm from '@/components/LeadForm'
import Footer from '@/components/Footer'
import { homeFaqsCurtas } from '@/lib/home-faqs'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqsCurtas.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function Home() {
  return (
    <main className="bg-surface min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      {/* Até 27/10/2026 a home é a página do lançamento (lib/lancamento.ts); depois volta sozinha. */}
      <HeroHome />
      <LancamentoDSSBR />
      <ProximosEncontros />
      <CapturaRapida />
      <ComoE />
      <FerramentasResumo />
      <ParceirosFaixa />
      <Precos />
      <FAQ
        faqs={homeFaqsCurtas}
        title={
          <>
            As perguntas que <span className="gradient-text">todo mundo faz</span>
          </>
        }
        subtitle="Sem letra miúda. Se ficar faltando alguma, é só perguntar no encontro."
      />
      <LancamentoChamadaFinal />
      <LeadForm />

      {/* Ponte para a versão longa do programa */}
      <section className="bg-surface-alt border-t border-surface-line py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-3">
            Quer entender o programa inteiro?
          </h2>
          <p className="text-ink-muted max-w-2xl mx-auto mb-7 leading-relaxed">
            A metodologia completa, as ferramentas uma a uma, a jornada de estudo e os parceiros
            estão na página de detalhes. Mas você não precisa ler nada disso pra aparecer no
            encontro de segunda.
          </p>
          <Link
            href="/detalhes/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-surface-line text-ink-soft font-semibold text-sm hover:border-brand-red/40 hover:text-ink transition-all"
          >
            Ver o programa em detalhes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <LancamentoBarraCelular />
    </main>
  )
}
