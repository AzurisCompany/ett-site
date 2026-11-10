import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ProximosPresenciais from '@/components/ProximosPresenciais'
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Wifi,
  CheckCircle2,
  Users,
  GraduationCap,
  MessageCircle,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AvisoPausa from '@/components/encontros/AvisoPausa'
import { CONTATO_IEP_TALKS, IEP_ENDERECO, IEP_MAPA } from '@/lib/agenda-events'

const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`
/* O IEP Talks é entrada franca, sem cadastro: o CTA é a agenda, o mapa e o
   WhatsApp do Miguel. O formulário da home (RD Station) fica só como lembrete
   opcional das datas por e-mail. Ver AUDITORIA-CONTEUDO-2026-11-09.md (A7, B10). */
const FORM_URL = '/#inscricao'

export const metadata: Metadata = {
  title:
    'Praticar Inglês em Curitiba — Grupo de Conversação Semanal | English Talk Time',
  description:
    'Onde praticar inglês em Curitiba: o IEP Talks, grupo de conversação presencial todo sábado das 10h às 12h no Instituto de Engenharia do Paraná. Gratuito, aberto a qualquer pessoa e sem cadastro.',
  keywords: [
    'praticar inglês em Curitiba',
    'onde treinar inglês Curitiba',
    'grupo de conversação em inglês Curitiba',
    'conversação em inglês Curitiba',
    'encontro de inglês Curitiba',
    'meetup inglês Curitiba',
    'grupo de inglês Curitiba',
    'inglês Curitiba grátis',
    'conversation club Curitiba',
    'english conversation group Curitiba',
    'speaking practice Curitiba',
    'IEP Talks Curitiba inglês',
  ],
  alternates: { canonical: '/curitiba/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Praticar Inglês em Curitiba — Grupo de Conversação Semanal',
    description:
      'IEP Talks: encontro presencial de conversação em inglês todo sábado, 10h–12h, no IEP (Rua Emiliano Perneta, 174, Centro). Gratuito e sem cadastro.',
    url: `${SITE_URL}/curitiba/`,
    images: [
      {
        url: '/images/og-ett-2026.png',
        width: 1200,
        height: 630,
        alt: 'Praticar inglês em Curitiba — grupo de conversação ETT',
      },
    ],
  },
}

const venues = [
  {
    name: 'IEP — Instituto de Engenharia do Paraná',
    desc: 'Instituição centenária da engenharia paranaense e parceiro institucional do ETT. É lá que o IEP Talks acontece todo sábado.',
    logo: '/images/logoiep.jpg',
    href: 'https://iep.org.br/',
  },
]


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
          name: 'Praticar Inglês em Curitiba',
          item: `${SITE_URL}/curitiba/`,
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/curitiba/#local`,
      name: 'English Talk Time — Grupo de Conversação em Inglês em Curitiba',
      description:
        'Grupo de conversação em inglês em Curitiba: o IEP Talks acontece todo sábado, das 10h às 12h, no Instituto de Engenharia do Paraná. Gratuito, aberto a qualquer pessoa e sem cadastro.',
      url: `${SITE_URL}/curitiba/`,
      image: `${SITE_URL}/images/og-ett-2026.png`,
      parentOrganization: { '@id': ORG_ID },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Emiliano Perneta, 174',
        addressLocality: 'Curitiba',
        addressRegion: 'PR',
        addressCountry: 'BR',
      },
      areaServed: [
        { '@type': 'City', name: 'Curitiba' },
        { '@type': 'AdministrativeArea', name: 'Paraná' },
        { '@type': 'AdministrativeArea', name: 'Região Metropolitana de Curitiba' },
      ],
      priceRange: 'Free',
      knowsLanguage: ['en', 'pt-BR'],
    },
    {
      '@type': 'Service',
      serviceType: 'Grupo de Conversação em Inglês Presencial',
      name: 'Encontros presenciais de conversação em inglês em Curitiba',
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'City', name: 'Curitiba' },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/curitiba/`,
      },
    },
  ],
}

export default function CuritibaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="bg-surface min-h-screen pt-16">
        {/* HERO */}
        <section className="relative section-padding overflow-hidden hero-grid">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-red/8 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-6">
                Curitiba · PR
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink mb-6 leading-tight">
                Praticar Inglês em Curitiba —{' '}
                <span className="gradient-text">Grupo de Conversação Semanal</span>
              </h1>
              <p className="text-ink-soft text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
                O <strong className="text-ink">IEP Talks</strong> acontece{' '}
                <strong className="text-ink">todo sábado, das 10h às 12h</strong>, no Instituto
                de Engenharia do Paraná — o{' '}
                <strong className="text-ink">conversation club de Curitiba</strong> pra
                quem quer praticar a fala em inglês. Gratuito, aberto a qualquer pessoa e sem
                cadastro: é só chegar.
              </p>
              <p className="text-ink-muted text-base mb-6 inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-red shrink-0" />
                {IEP_ENDERECO}
              </p>
              <div>
                <AvisoPausa tipo="presencial" className="mb-6" />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Link
                  href="/agenda/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-red-deep text-white font-bold text-base hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red"
                >
                  Ver a agenda
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={IEP_MAPA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-surface-line text-ink font-semibold hover:border-brand-red/50 hover:bg-surface-card transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  Como chegar
                </a>
              </div>
              <p className="text-ink-subtle text-sm mt-4">
                <a
                  href={CONTATO_IEP_TALKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brand-red"
                >
                  Dúvidas? Fale com o {CONTATO_IEP_TALKS.nome}
                </a>
                {' · '}
                <a href={FORM_URL} className="underline hover:text-brand-red">
                  Receber lembrete das datas por e-mail
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* PROXIMOS PRESENCIAIS */}
        <section
          id="proximos"
          className="section-padding bg-surface-alt border-y border-surface-line"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-4">
                Próximos encontros presenciais
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight">
                Próximos sábados <span className="gradient-text">no IEP</span>
              </h2>
              <AvisoPausa tipo="presencial" />
            </div>

            <ProximosPresenciais quantidade={4} />

            <div className="text-center mt-8">
              <Link
                href="/agenda/"
                className="inline-flex items-center gap-2 text-ink-muted hover:text-brand-red text-sm transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Ver agenda completa
              </Link>
            </div>
          </div>
        </section>

        {/* VENUES */}
        <section className="section-padding bg-surface">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-silver/30 text-brand-silver bg-brand-silver/5 mb-4">
                Onde acontece · Curitiba
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight">
                O ponto de <span className="gradient-text">encontro</span>
              </h2>
              <p className="text-ink-muted text-lg">
                O IEP Talks acontece todo sábado, das 10h às 12h, no Instituto de Engenharia do
                Paraná. Entrada franca, sem cadastro.
              </p>
            </div>
            <div className="max-w-2xl mx-auto mb-5 bg-surface-card border border-brand-red/30 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-ink text-base leading-snug">{IEP_ENDERECO}</p>
                  <p className="text-ink-muted text-sm flex items-center gap-1.5 mt-1">
                    <Clock className="w-3.5 h-3.5" />
                    Sábados, das 10h às 12h
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={IEP_MAPA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-surface-line text-ink font-semibold text-sm hover:border-brand-red/50 transition-all"
                >
                  Ver no mapa
                </a>
                <a
                  href={CONTATO_IEP_TALKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-brand-red-deep text-white font-bold text-sm hover:bg-brand-red-deep/90 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Dúvidas? Fale com o {CONTATO_IEP_TALKS.nome}
                </a>
              </div>
            </div>
            <div className="grid gap-5 max-w-2xl mx-auto">
              {venues.map((v) => (
                <a
                  key={v.name}
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface-card border border-surface-line rounded-2xl p-5 card-hover flex gap-4 hover:border-brand-red/30 transition-all"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-ink/5 border border-surface-line flex-shrink-0">
                    <Image
                      src={v.logo}
                      alt={`Logo ${v.name}`}
                      fill
                      className="object-contain p-1.5"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-ink text-base mb-2 leading-snug">
                      {v.name}
                    </h3>
                    <p className="text-ink-muted text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* COMO É O ENCONTRO */}
        <section className="section-padding bg-surface-alt border-y border-surface-line">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight">
                  Como é o encontro <span className="gradient-text">presencial em Curitiba</span>
                </h2>
                <p className="text-ink-muted text-lg max-w-2xl mx-auto">
                  Chega e conversa — não é aula, e ninguém julga ninguém por sotaque. Qualquer
                  nível pode participar; rende mais a partir do A2.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  {
                    title: 'Chegada e warm-up',
                    body: 'Vale chegar uns minutos antes. Apresentação rápida em inglês (nome, o que faz, de onde é) — quebra-gelo descontraído pra todo mundo já entrar falando.',
                  },
                  {
                    title: 'Conversação guiada',
                    body: 'Um tema puxa a conversa (ex.: "talking about your job", "travel plans", "a job interview"). Roteiro flexível, foco em fala.',
                  },
                  {
                    title: 'Simulação em pares',
                    body: 'Conversas em duplas ou trios pra todo mundo ter tempo de falar. Quem tem mais prática ajuda quem está começando.',
                  },
                  {
                    title: 'Depois do encontro',
                    body: 'Costuma ter quem fique pra continuar a conversa. Dá pra conhecer gente de Curitiba que também quer praticar.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-surface-card border border-surface-line rounded-2xl p-5"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-ink text-base mb-2">
                          {item.title}
                        </h3>
                        <p className="text-ink-muted text-sm leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CROSS-LINK ONLINE */}
        <section className="section-padding bg-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-surface-card border border-brand-silver/30 rounded-3xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-silver/10 border border-brand-silver/30 flex items-center justify-center flex-shrink-0">
                  <Wifi className="w-6 h-6 text-brand-silver" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand-silver font-semibold mb-1">
                    Tem online também
                  </div>
                  <h3 className="font-bold text-ink text-xl md:text-2xl">
                    Não consegue ir presencial? Toda segunda online às 20h.
                  </h3>
                </div>
              </div>
              <p className="text-ink-muted leading-relaxed mb-5">
                Se a agenda dessa semana não bate, ou você mora fora de Curitiba, o encontro
                online é toda segunda às 20h–21h30, na sala do ETT Speak, direto no navegador —
                também gratuito e sem cadastro.
              </p>
              <Link
                href="/online/"
                className="inline-flex items-center gap-2 text-brand-silver font-semibold hover:text-brand-silver/80 transition-colors"
              >
                Ver detalhes do encontro online <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CROSS-LINK IMERSÃO CURITIBA */}
        <section className="section-padding bg-surface-alt border-y border-surface-line">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-surface-card border border-brand-red/30 rounded-3xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand-red font-semibold mb-1">
                    Imersões de parceiros
                  </div>
                  <h3 className="font-bold text-ink text-xl md:text-2xl leading-snug">
                    Quer ir além do encontro semanal? Conheça as imersões da Cherry Top
                  </h3>
                </div>
              </div>
              <p className="text-ink-muted leading-relaxed mb-5">
                Turmas no Brasil e nos Estados Unidos, oferecidas pela{' '}
                <strong className="text-ink">Cherry Top</strong>, com programa, preço e condições
                definidos por ela. O ETT divulga e complementa com ferramentas e encontros.
              </p>
              <Link
                href="/imersoes/"
                className="inline-flex items-center gap-2 text-brand-red font-semibold hover:text-brand-red/80 transition-colors"
              >
                Ver as imersões <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section-padding bg-surface-alt border-t border-surface-line">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-surface-card border border-brand-red/30 rounded-3xl p-10 md:p-14 shadow-brand-red relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/8 to-brand-silver/8 pointer-events-none" />
              <div className="relative">
                <Users className="w-10 h-10 text-brand-red mx-auto mb-5" />
                <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight">
                  Vem praticar inglês <span className="gradient-text">com a gente em Curitiba</span>
                </h2>
                <p className="text-ink-muted text-lg leading-relaxed mb-5 max-w-xl mx-auto">
                  Sábado, das 10h às 12h, no IEP ({IEP_ENDERECO}). Não precisa de inscrição: é só
                  chegar.
                </p>
                <AvisoPausa tipo="presencial" className="mb-6" />
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <Link
                    href="/agenda/"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-red-deep text-white font-bold text-base hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red-lg"
                  >
                    Ver a agenda
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href={CONTATO_IEP_TALKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-surface-line text-ink font-semibold hover:border-brand-red/50 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Dúvidas? Fale com o {CONTATO_IEP_TALKS.nome}
                  </a>
                </div>
                <p className="text-ink-subtle text-sm mt-5">
                  Prefere ser avisado?{' '}
                  <a href={FORM_URL} className="underline hover:text-brand-red">
                    Receber lembrete das datas por e-mail
                  </a>{' '}
                  (você recebe as datas dos encontros).
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
