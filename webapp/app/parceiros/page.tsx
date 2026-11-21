import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { professores } from '@/lib/professores'
import { categorias, parceiros } from '@/lib/parceiros'

/* Área de parceiros (desde 21/11/2026): professores parceiros (lib/professores.ts)
   + escolas e instituições (lib/parceiros.ts). Nada escrito à mão aqui. */

export const metadata: Metadata = {
  title: 'Parceiros — professores e escolas | English Talk Time',
  description:
    'Professores, escolas e instituições que fazem parte do English Talk Time: quem conduz os encontros de conversação e quem oferece cursos, imersões e conteúdo.',
  alternates: { canonical: '/parceiros/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Parceiros do English Talk Time',
    description: 'Professores, escolas e instituições que fazem parte do ETT.',
    url: 'https://englishtalktime.com.br/parceiros/',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      <section className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 via-surface to-surface" />
        <div className="container mx-auto px-4 relative max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-ink mb-5 leading-tight">
            Parceiros do <span className="gradient-text">ETT</span>
          </h1>
          <p className="text-ink-soft text-lg leading-relaxed max-w-2xl mx-auto">
            Professores que conduzem encontros de conversação com a gente e escolas e instituições que
            oferecem cursos, imersões e conteúdo. Cada parceiro oferece os próprios serviços, nas
            condições dele; o ETT divulga e faz a ponte.
          </p>
        </div>
      </section>

      {/* PROFESSORES */}
      <section className="py-14 md:py-16 bg-surface-alt border-y border-surface-line">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-2">Professores parceiros</h2>
          <p className="text-ink-muted mb-8 max-w-2xl">
            Conduzem Encontros ETT de conversação e dão aulas particulares, combinadas direto com eles.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {professores.map((p) => (
              <Link
                key={p.slug}
                href={`/parceiros/${p.slug}/`}
                className="group rounded-2xl border border-surface-line bg-surface-card overflow-hidden hover:border-brand-red/40 transition-all"
              >
                <div className="relative aspect-square">
                  <Image src={p.foto} alt={`Foto de ${p.nome}`} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">
                    Professor · {p.cidade}
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2">{p.nome}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed mb-4">{p.chamada}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
                    Ver perfil <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ESCOLAS E INSTITUIÇÕES */}
      <section className="py-14 md:py-16 bg-surface">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-8">Escolas e instituições</h2>
          <div className="space-y-10">
            {categorias.map((c) => {
              const lista = parceiros.filter((p) => p.categoria === c.id)
              if (lista.length === 0) return null
              return (
                <div key={c.id}>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">{c.titulo}</h3>
                  <p className="text-sm text-ink-muted mb-4">{c.descricao}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {lista.map((p) => (
                      <div key={p.id} className="rounded-2xl border border-surface-line bg-surface-card p-5 flex gap-4">
                        {p.logo && (
                          <div className="relative w-14 h-14 shrink-0 rounded-xl overflow-hidden border border-surface-line bg-surface">
                            <Image src={p.logo} alt={`Logo ${p.nome}`} fill sizes="56px" className="object-contain p-1" />
                          </div>
                        )}
                        <div className="min-w-0">
                          <h4 className="font-bold text-ink mb-1">{p.nome}</h4>
                          <p className="text-sm text-ink-soft leading-relaxed mb-2">
                            <span className="font-semibold text-ink">Oferecido por {p.nome}:</span> {p.oferece}
                          </p>
                          <p className="text-sm text-ink-muted leading-relaxed mb-2">
                            <span className="font-semibold text-ink-soft">Apoio do ETT:</span> {p.apoioEtt}
                          </p>
                          {p.url && (
                            <a
                              href={p.url}
                              target={p.url.startsWith('http') ? '_blank' : undefined}
                              rel={p.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-red hover:underline"
                            >
                              Visitar <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
