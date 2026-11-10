import Link from 'next/link'
import { ArrowRight, Compass } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

/* 404 em pt-BR (antes era a página padrão do Next, em inglês e sem menu). */
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-surface min-h-screen pt-24 flex items-center">
        <div className="container mx-auto px-4 max-w-2xl text-center py-16">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center mb-6">
            <Compass className="w-8 h-8 text-brand-red" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Página <span className="gradient-text">não encontrada</span>
          </h1>
          <p className="text-ink-muted leading-relaxed mb-8">
            O endereço pode ter mudado ou não existir mais. Daqui você volta pro começo ou vê quando
            são os próximos encontros de conversação.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-red-deep text-white font-bold text-base hover:bg-brand-red-deep/90 transition-all"
            >
              Voltar pra home
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/agenda/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-surface-line text-ink font-semibold hover:border-brand-red/50 hover:bg-surface-card transition-all"
            >
              Ver a agenda
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
