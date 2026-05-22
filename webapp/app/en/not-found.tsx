import Link from 'next/link'
import { ArrowRight, Wrench } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function EnNotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen pt-24 flex items-center">
        <div className="container mx-auto px-4 max-w-2xl text-center py-16">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center mb-6">
            <Wrench className="w-8 h-8 text-neon-green" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            This page is <span className="gradient-text">coming soon in English</span>
          </h1>
          <p className="text-gray-400 leading-relaxed mb-8">
            We are translating the rest of the site into English. For now, only the homepage in
            English is ready. The Portuguese version of this content is fully published — most of
            the tech vocabulary and brand names are the same.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/en/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neon-green text-dark font-bold text-base hover:bg-neon-green/90 transition-all"
            >
              Back to English home
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-dark-border text-white font-semibold hover:border-neon-green/50 hover:bg-dark-card transition-all"
            >
              See the full site (in Portuguese)
            </Link>
          </div>
        </div>
      </main>
      <Footer locale="en" />
    </>
  )
}
