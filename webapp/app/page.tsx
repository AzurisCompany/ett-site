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
import type { Metadata } from 'next'

/* Cartão de compartilhamento do lançamento (27/10/2026): quem cola o link da home no
   LinkedIn/WhatsApp vê a arte do evento. ⚠️ Metadata é estática (sai no build): depois
   do evento, apagar este bloco e fazer deploy pra voltar ao cartão padrão do layout. */
const OG_TITULO = 'Lançamento do English Talk Time — 27/10, IEP Curitiba, entrada gratuita'
const OG_DESCRICAO =
  'Uma tarde sobre destravar o inglês, dentro do Congresso DSSBR 2026: Rubens Queiroz, Cherry Top, José Motta Filho, IEP Talks e sorteio de prêmios. 60 lugares abertos ao público.'
const OG_IMAGEM = '/images/og-lancamento-dssbr-2026.png'

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://englishtalktime.com.br',
    siteName: 'English Talk Time – ETT',
    title: OG_TITULO,
    description: OG_DESCRICAO,
    images: [{ url: OG_IMAGEM, width: 1200, height: 630, alt: 'Lançamento do English Talk Time — terça, 27/10, 13h30, Auditório do IEP, Curitiba' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: OG_TITULO,
    description: OG_DESCRICAO,
    images: [OG_IMAGEM],
  },
}

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
