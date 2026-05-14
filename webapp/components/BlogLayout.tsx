import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { type BlogPostMeta, getRelatedPosts } from '@/lib/blog-posts'

const SITE_URL = 'https://englishtalktime.com.br'
const FORM_URL = 'https://forms.gle/jpK8bR4houvAXTwm9'

interface BlogLayoutProps {
  post: BlogPostMeta
  children: React.ReactNode
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

export default function BlogLayout({ post, children }: BlogLayoutProps) {
  const related = getRelatedPosts(post.slug, 2)

  return (
    <>
      <Navbar />

      <main className="bg-dark min-h-screen pt-16">
        {/* HERO */}
        <header className="relative section-padding overflow-hidden hero-grid">
          <div className="absolute inset-0 bg-gradient-to-b from-tech-blue/5 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/blog/"
                className="inline-flex items-center gap-1.5 text-gray-400 hover:text-neon-green text-sm transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" /> Blog ETT
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-5 text-xs text-gray-400">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-neon-green/30 text-neon-green bg-neon-green/5 font-semibold uppercase tracking-wider">
                  <Tag className="w-3 h-3" />
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readMinutes} min de leitura
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                {post.title}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">{post.description}</p>
            </div>
          </div>
        </header>

        {/* ARTICLE BODY */}
        <article className="bg-dark-secondary border-y border-dark-border">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-3xl mx-auto prose-blog">{children}</div>
          </div>
        </article>

        {/* CTA */}
        <section className="section-padding bg-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-dark-card border border-neon-green/30 rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/8 to-tech-blue/8 pointer-events-none" />
              <div className="relative">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
                  Próximo passo
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  Entre no grupo de conversação ETT
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Online toda segunda às 20h ou presencial em Curitiba (IEP, UTFPR, Hard Rock,
                  Habitat). Treino de fala em inglês com ferramentas de apoio com IA. Gratuito.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neon-green text-dark font-bold text-sm hover:bg-neon-green/90 transition-all"
                  >
                    Quero participar <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/conversacao/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-dark-border text-white font-semibold text-sm hover:border-neon-green/40 hover:bg-dark-card transition-all"
                  >
                    Saber como funciona
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED */}
        {related.length > 0 && (
          <section className="section-padding bg-dark-secondary border-t border-dark-border">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Continue lendo
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}/`}
                      className="bg-dark-card border border-dark-border rounded-2xl p-5 card-hover hover:border-neon-green/30 transition-all block group"
                    >
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border border-neon-green/30 text-neon-green bg-neon-green/5 mb-3">
                        {r.category}
                      </span>
                      <h3 className="font-bold text-white text-lg mb-2 leading-snug group-hover:text-neon-green transition-colors">
                        {r.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {r.excerpt}
                      </p>
                      <div className="mt-3 text-xs text-gray-500 flex items-center gap-2">
                        <Clock className="w-3 h-3" /> {r.readMinutes} min
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}

export { SITE_URL }
