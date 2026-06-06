import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  ExternalLink,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { partnerPosts, getPartnerPost } from '@/lib/partner-posts'

const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`
const FORM_URL = 'https://forms.gle/jpK8bR4houvAXTwm9'

export function generateStaticParams() {
  return partnerPosts.map((p) => ({ slug: p.slug }))
}

const MESES = [
  'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
  'jul', 'ago', 'set', 'out', 'nov', 'dez',
]

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-')
  return `${parseInt(d, 10)} ${MESES[parseInt(m, 10) - 1]} ${y}`
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const post = getPartnerPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Blog ETT`,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/indicacoes/${post.slug}/` },
    openGraph: {
      type: 'article',
      locale: 'pt_BR',
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/indicacoes/${post.slug}/`,
      publishedTime: `${post.date}T09:00:00-03:00`,
      authors: ['DSSBR & GUBigData IA'],
      images: [
        {
          url: '/images/ETT-top01.webp',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default function PartnerPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPartnerPost(params.slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `${SITE_URL}/blog/indicacoes/${post.slug}/`,
          },
        ],
      },
      {
        '@type': 'BlogPosting',
        '@id': `${SITE_URL}/blog/indicacoes/${post.slug}/#post`,
        headline: post.title,
        description: post.description,
        datePublished: `${post.date}T09:00:00-03:00`,
        dateModified: `${post.date}T09:00:00-03:00`,
        author: { '@id': ORG_ID },
        publisher: { '@id': ORG_ID },
        mainEntityOfPage: `${SITE_URL}/blog/indicacoes/${post.slug}/`,
        url: `${SITE_URL}/blog/indicacoes/${post.slug}/`,
        inLanguage: 'pt-BR',
        articleSection: post.category,
        // sinaliza ao Google que é uma resenha baseada num conteúdo de terceiro
        isBasedOn: post.partnerUrl,
        citation: {
          '@type': 'CreativeWork',
          name: post.partnerTitle,
          url: post.partnerUrl,
          ...(post.partnerAuthor
            ? { author: { '@type': 'Person', name: post.partnerAuthor } }
            : {}),
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="bg-dark min-h-screen pt-16">
        {/* HERO */}
        <header className="relative pt-10 pb-12 md:pt-14 md:pb-16 overflow-hidden hero-grid">
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
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-tech-blue/40 text-tech-blue bg-tech-blue/5 font-semibold uppercase tracking-wider">
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

              {/* Atribuição ao parceiro — card editorial com a logo (vai pro artigo) */}
              <a
                href={post.partnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/partner flex items-center gap-4 mt-7 p-3 pr-5 rounded-2xl bg-dark-card border border-dark-border hover:border-tech-blue/40 transition-colors w-fit max-w-full"
              >
                <span className="shrink-0 inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 shadow-md">
                  <Image
                    src={post.partnerLogo}
                    alt={post.partnerName}
                    width={180}
                    height={95}
                    className="h-10 w-auto"
                  />
                </span>
                <span className="flex flex-col leading-snug min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-tech-blue">
                    Indicação de parceiro
                  </span>
                  <span className="text-sm font-semibold text-white truncate">
                    {post.partnerName}
                    {post.partnerAuthor ? ` · ${post.partnerAuthor}` : ''}
                  </span>
                  <span className="text-xs text-gray-500">
                    Curadoria ETT · artigo publicado em {formatDate(post.partnerDate)}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </header>

        {/* ARTICLE BODY */}
        <article className="bg-dark-secondary border-y border-dark-border">
          <div className="container mx-auto px-4 py-10 md:py-14">
            <div className="max-w-3xl mx-auto prose-blog">
              <h2>O que o artigo diz</h2>
              {post.summary.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              <h2>Por que indicamos</h2>
              <p>{post.whyRead}</p>

              {/* CTA pro artigo original do parceiro */}
              <div className="not-prose my-8 bg-dark-card border border-tech-blue/30 rounded-2xl p-6 md:p-7">
                <div className="flex items-start gap-4 mb-4">
                  <a
                    href={post.partnerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center rounded-xl bg-white px-2.5 py-2 shadow-md hover:shadow-tech-blue/30 transition-shadow"
                  >
                    <Image
                      src={post.partnerLogo}
                      alt={post.partnerName}
                      width={180}
                      height={95}
                      className="h-8 w-auto"
                    />
                  </a>
                  <div>
                    <p className="text-white font-semibold leading-snug">
                      Leia o artigo completo no {post.partnerName}
                    </p>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                      “{post.partnerTitle}”
                      {post.partnerAuthor ? ` — ${post.partnerAuthor}` : ''}
                    </p>
                  </div>
                </div>
                <a
                  href={post.partnerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-tech-blue text-dark font-bold text-sm hover:bg-tech-blue/90 transition-all"
                >
                  Ler no site do parceiro <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* CTA ETT */}
        <section className="section-padding bg-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-dark-card border border-neon-green/30 rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/8 to-tech-blue/8 pointer-events-none" />
              <div className="relative">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
                  Próximo passo
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  Da teoria pra prática: venha falar inglês
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
      </main>

      <Footer />
    </>
  )
}
