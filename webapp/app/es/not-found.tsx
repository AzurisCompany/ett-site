import Link from 'next/link'
import { ArrowRight, Wrench } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function EsNotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen pt-24 flex items-center">
        <div className="container mx-auto px-4 max-w-2xl text-center py-16">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center mb-6">
            <Wrench className="w-8 h-8 text-neon-green" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Esta página llega <span className="gradient-text">próximamente en español</span>
          </h1>
          <p className="text-gray-400 leading-relaxed mb-8">
            Estamos traduciendo el resto del sitio al español. Por ahora, solo la portada en
            español está lista. La versión en portugués de este contenido está completamente
            publicada — la mayoría del vocabulario técnico y nombres de marca son los mismos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/es/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neon-green text-dark font-bold text-base hover:bg-neon-green/90 transition-all"
            >
              Volver a la portada en español
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-dark-border text-white font-semibold hover:border-neon-green/50 hover:bg-dark-card transition-all"
            >
              Ver el sitio completo (en portugués)
            </Link>
          </div>
        </div>
      </main>
      <Footer locale="es" />
    </>
  )
}
