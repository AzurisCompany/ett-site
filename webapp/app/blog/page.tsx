import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { blogPosts } from '@/lib/blog-posts'

const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`

export const metadata: Metadata = {
  title: 'Blog ETT — Como Praticar Inglês, Conversação e Treino de Fala',
  description:
    'Artigos sobre como destravar a conversação em inglês, praticar a fala, escolher entre grupo e aula particular, e onde treinar em Curitiba e online. Conteúdo do English Talk Time.',
  keywords: [
    'blog inglês',
    'como praticar inglês',
    'destravar conversação em inglês',
    'praticar inglês Curitiba',
    'conversation club blog',
    'inglês para tech',
  ],
  alternates: { canonical: '/blog/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Blog ETT — Conversação, Treino de Fala e Inglês para Tech',
    description:
      'Artigos práticos sobre como destravar a conversação em inglês, escolher o método certo e onde treinar a fala.',
    url: `${SITE_URL}/blog/`,
    images: [
      {
        url: '/images/ETT-top01.png',
        width: 1200,
        height: 630,
        alt: 'Blog ETT — artigos sobre praticar inglês',
      },
    ],
  },
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-')
  const meses = [
    'jan',
    'fev',
    'mar',
    'abr',
    'mai',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez',
  ]
  return `${parseInt(d, 10)} ${meses[parseInt(m, 10) - 1]} ${y}`
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: `${SITE_URL}/blog/`,
        },
      ],
    },
    {
      '@type': 'Blog',
      '@id': `${SITE_URL}/blog/#blog`,
      name: 'Blog English Talk Time',
      description:
        'Artigos sobre praticar inglês, conversação, treino de fala e inglês para profissionais de tech.',
      url: `${SITE_URL}/blog/`,
      publisher: { '@id': ORG_ID },
      inLanguage: 'pt-BR',
      blogPost: blogPosts.map((p) => ({
        '@type': 'BlogPosting',
        headline: p.title,
        description: p.description,
        datePublished: p.date,
        url: `${SITE_URL}/blog/${p.slug}/`,
        author: { '@id': ORG_ID },
        publisher: { '@id': ORG_ID },
        inLanguage: 'pt-BR',
      })),
    },
  ],
}

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="bg-dark min-h-screen pt-16">
        {/* HERO */}
        <section className="relative section-padding overflow-hidden hero-grid">
          <div className="absolute inset-0 bg-gradient-to-b from-tech-blue/5 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-6">
                Blog ETT
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
                Como praticar, treinar e <span className="gradient-text">destravar</span> o seu
                inglês
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                Artigos práticos sobre conversação em inglês, treino de fala, onde praticar em
                Curitiba e online, e como escolher entre grupo de conversação, aula particular
                ou app.
              </p>
            </div>
          </div>
        </section>

        {/* POSTS LIST */}
        <section className="section-padding bg-dark-secondary border-y border-dark-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-5">
              {blogPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}/`}
                  className="block bg-dark-card border border-dark-border rounded-2xl p-6 md:p-8 card-hover hover:border-neon-green/30 transition-all group"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-gray-400">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-neon-green/30 text-neon-green bg-neon-green/5 font-semibold uppercase tracking-wider">
                      <Tag className="w-3 h-3" />
                      {p.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(p.date)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {p.readMinutes} min
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-neon-green transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-4">{p.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-neon-green text-sm font-semibold">
                    Ler artigo <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
