import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import HeroSimples from '@/components/HeroSimples'
import AnuncioReinicio from '@/components/AnuncioReinicio'
import ProximosEncontros from '@/components/ProximosEncontros'
import CapturaRapida from '@/components/CapturaRapida'
import DesafioChamada from '@/components/desafio/DesafioChamada'
import ComoE from '@/components/ComoE'
import TresPilares from '@/components/TresPilares'
import VideoInstitucional from '@/components/VideoInstitucional'
import ComoFunciona from '@/components/ComoFunciona'
import ParaEducadores from '@/components/ParaEducadores'
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
      {/* Ordem = as 6 perguntas do visitante (PLANO-REPOSICIONAMENTO-PLATAFORMA-2026-10-31.md §4):
          o que é → o que encontro (ferramentas, encontros, parceiros) → como funciona →
          grátis × pago → para quem promove o inglês → como começo. */}
      {/* Faixa da volta dos encontros: some sozinha depois de ANUNCIO_REINICIO_ATE (lib/agenda-events.ts). */}
      <AnuncioReinicio />
      <HeroSimples />
      {/* Desafio de 7 dias: isca gratuita com o Miguel no WhatsApp (09/11/2026). */}
      <DesafioChamada />
      <VideoInstitucional />
      <TresPilares />
      <FerramentasResumo />
      <ProximosEncontros />
      <ComoE />
      <CapturaRapida />
      <ParceirosFaixa />
      <ComoFunciona />
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
      <ParaEducadores />
      <LeadForm />

      {/* Ponte para a versão longa do programa */}
      <section className="bg-surface-alt border-t border-surface-line py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-3">
            Quer ver tudo com calma?
          </h2>
          <p className="text-ink-muted max-w-2xl mx-auto mb-7 leading-relaxed">
            A página de detalhes explica como o ETT ajuda você a organizar a prática: o método
            por trás das ferramentas, a rotina sugerida e os parceiros. Mas você não precisa ler
            nada disso pra aparecer no encontro de segunda.
          </p>
          <Link
            href="/detalhes/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-surface-line text-ink-soft font-semibold text-sm hover:border-brand-red/40 hover:text-ink transition-all"
          >
            Ver os detalhes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
