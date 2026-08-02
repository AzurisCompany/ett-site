import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import HeroSimples from '@/components/HeroSimples'
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
    <main className="bg-dark min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <HeroSimples />
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
      <LeadForm />

      {/* Ponte para a versão longa do programa */}
      <section className="bg-dark-secondary border-t border-dark-border py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Quer entender o programa inteiro?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-7 leading-relaxed">
            A metodologia completa, as ferramentas uma a uma, a jornada de estudo e os parceiros
            estão na página de detalhes. Mas você não precisa ler nada disso pra aparecer no
            encontro de segunda.
          </p>
          <Link
            href="/detalhes/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-dark-border text-gray-300 font-semibold text-sm hover:border-neon-green/40 hover:text-white transition-all"
          >
            Ver o programa em detalhes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
