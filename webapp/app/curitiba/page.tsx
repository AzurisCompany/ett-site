import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Wifi,
  CheckCircle2,
  Users,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { agendaEvents } from '@/lib/agenda-events'

const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`
const FORM_URL = 'https://forms.gle/jpK8bR4houvAXTwm9'

export const metadata: Metadata = {
  title:
    'Praticar Inglês em Curitiba — Grupo de Conversação Semanal | English Talk Time',
  description:
    'Onde praticar inglês em Curitiba: grupo de conversação presencial em rotação semanal por IEP, UTFPR, Hard Rock Cafe e Habitat. Treino de fala em inglês com ferramentas de apoio. Grátis, aberto a profissionais de tech.',
  keywords: [
    'praticar inglês em Curitiba',
    'onde treinar inglês Curitiba',
    'grupo de conversação em inglês Curitiba',
    'conversação em inglês Curitiba',
    'encontro de inglês Curitiba',
    'meetup inglês Curitiba',
    'aulas de conversação Curitiba',
    'inglês Curitiba grátis',
    'inglês para tech Curitiba',
    'IEP UTFPR Hard Rock Habitat inglês',
  ],
  alternates: { canonical: '/curitiba/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Praticar Inglês em Curitiba — Grupo de Conversação Semanal',
    description:
      'Encontros presenciais em rotação por 4 locais de Curitiba: IEP, UTFPR, Hard Rock e Habitat. Treino de fala em inglês gratuito.',
    url: `${SITE_URL}/curitiba/`,
    images: [
      {
        url: '/images/ETT-top01.png',
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
    desc: 'Instituição centenária da engenharia paranaense. Parceiro institucional do ETT. Espaço acadêmico, ideal pra conversação técnica com profissionais de tech.',
    logo: '/images/logoiep.jpg',
    href: 'https://iep.org.br/',
  },
  {
    name: 'UTFPR — Universidade Tecnológica Federal do Paraná',
    desc: 'Universidade pública federal com foco em tecnologia. Alcance ao público universitário de TI e engenharia — comunidade jovem, mente aberta, foco internacional.',
    logo: '/images/utfpr-logo.svg',
    href: 'https://www.utfpr.edu.br/',
  },
  {
    name: 'Hard Rock Cafe Curitiba',
    desc: 'Encontro descontraído fora do ambiente acadêmico. Networking informal, conversação em ambiente real (música ao vivo, bar) — ótimo pra praticar small talk e socialização.',
    logo: '/images/hardrock-logo.jpg',
    href: 'https://www.hardrockcafe.com/location/curitiba/',
  },
  {
    name: 'Habitat — Sistema FIEP / Parque Tecnológico',
    desc: 'Espaço de inovação e mobilidade ligado ao Sistema FIEP. Ambiente corporativo de inovação tech — conversação em contexto de negócios e startups.',
    logo: '/images/habitat-mobilidade-logo.png',
    href: 'https://www.sistemafiep.org.br/',
  },
]

const today = new Date().toISOString().slice(0, 10)
const proximosPresenciais = agendaEvents
  .filter((e) => e.type === 'presencial' && e.date >= today)
  .slice(0, 6)

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
        'Grupo de conversação em inglês em Curitiba com encontros presenciais semanais em rotação por IEP, UTFPR, Hard Rock Cafe e Habitat. Gratuito, para profissionais e estudantes de tech.',
      url: `${SITE_URL}/curitiba/`,
      image: `${SITE_URL}/images/ETT-top01.png`,
      parentOrganization: { '@id': ORG_ID },
      address: {
        '@type': 'PostalAddress',
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
        url: FORM_URL,
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

      <main className="bg-dark min-h-screen pt-16">
        {/* HERO */}
        <section className="relative section-padding overflow-hidden hero-grid">
          <div className="absolute inset-0 bg-gradient-to-b from-neon-green/8 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-6">
                Curitiba · PR
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Praticar Inglês em Curitiba —{' '}
                <span className="gradient-text">Grupo de Conversação Semanal</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
                Encontros presenciais <strong className="text-white">grátis</strong>, em rotação
                por 4 locais da cidade. Treino de fala em inglês com ferramentas de apoio com IA,
                pra profissionais de tech e estudantes que querem destravar a conversação.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neon-green text-dark font-bold text-base hover:bg-neon-green/90 transition-all hover:shadow-neon-green"
                >
                  Garantir lugar no próximo encontro
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="#proximos"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-dark-border text-white font-semibold hover:border-neon-green/50 hover:bg-dark-card transition-all"
                >
                  Ver próximas datas
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PROXIMOS PRESENCIAIS */}
        <section
          id="proximos"
          className="section-padding bg-dark-secondary border-y border-dark-border"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
                Próximos encontros presenciais
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Veja onde é o próximo <span className="gradient-text">e marque na agenda</span>
              </h2>
            </div>

            {proximosPresenciais.length === 0 ? (
              <p className="text-center text-gray-400 max-w-md mx-auto">
                Sem encontros presenciais confirmados nos próximos dias.
                <br />
                <Link href="/agenda/" className="text-neon-green underline mt-2 inline-block">
                  Ver agenda completa
                </Link>
              </p>
            ) : (
              <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-3">
                {proximosPresenciais.map((ev) => {
                  const dayNum = ev.dateLabel.split(' ')[0]
                  const monthAbbr = ev.dateLabel.split(' de ')[1].slice(0, 3)
                  return (
                    <div
                      key={ev.date}
                      className="relative bg-dark-card border border-neon-green/20 rounded-xl p-3.5 card-hover"
                    >
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 w-14 rounded-lg border border-neon-green/30 bg-neon-green/5 text-center py-1.5">
                          <div className="text-[10px] uppercase tracking-wider font-bold text-neon-green">
                            {ev.weekday.slice(0, 3).toLowerCase()}
                          </div>
                          <div className="text-white font-black text-xl leading-none my-0.5">
                            {dayNum}
                          </div>
                          <div className="text-gray-500 text-[10px] uppercase tracking-wider">
                            {monthAbbr}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-neon-green/10 text-neon-green border border-neon-green/30">
                              <MapPin className="w-2.5 h-2.5" />
                              presencial
                            </span>
                            <span className="ml-auto inline-flex items-center gap-1 text-xs text-gray-400">
                              <Clock className="w-3 h-3" />
                              {ev.time}
                            </span>
                          </div>
                          <h3 className="font-bold text-white text-sm leading-snug mb-1 truncate">
                            {ev.title}
                          </h3>
                          <p className="text-xs text-gray-500 leading-snug truncate">
                            {ev.location}
                            {ev.city && (
                              <span className="text-gray-600"> · {ev.city}</span>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            <div className="text-center mt-8">
              <Link
                href="/agenda/"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-green text-sm transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Ver agenda completa
              </Link>
            </div>
          </div>
        </section>

        {/* VENUES */}
        <section className="section-padding bg-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-4">
                4 Locais · Curitiba
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Nossos pontos de <span className="gradient-text">encontro</span>
              </h2>
              <p className="text-gray-400 text-lg">
                A rotação semanal expõe a comunidade a contextos diferentes — acadêmico,
                universitário, descontraído e corporativo.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
              {venues.map((v) => (
                <a
                  key={v.name}
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-card border border-dark-border rounded-2xl p-5 card-hover flex gap-4 hover:border-neon-green/30 transition-all"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white/5 border border-dark-border flex-shrink-0">
                    <Image
                      src={v.logo}
                      alt={`Logo ${v.name}`}
                      fill
                      className="object-contain p-1.5"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white text-base mb-2 leading-snug">
                      {v.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* COMO É O ENCONTRO */}
        <section className="section-padding bg-dark-secondary border-y border-dark-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Como é o encontro <span className="gradient-text">presencial em Curitiba</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Chega, conversa, sai falando inglês — sem aula chata, sem ninguém te
                  julgando por sotaque.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  {
                    title: 'Chegada e warm-up',
                    body: 'Você chega 10 minutos antes. Apresentação rápida em inglês (nome, área, cidade) — quebra-gelo descontraído pra todo mundo já entrar falando.',
                  },
                  {
                    title: 'Conversação guiada',
                    body: 'Tópico do dia anunciado antes (ex.: "interview self-pitch", "explaining a bug to a senior dev", "negotiating a salary offer"). Roteiro flexível, foco em fala.',
                  },
                  {
                    title: 'Simulação em pares',
                    body: 'Sub-sessões em duplas com cenários específicos. Quem é mais avançado ajuda quem está começando. Ninguém fica calado.',
                  },
                  {
                    title: 'Networking pós-encontro',
                    body: 'Sempre tem alguém que fica pra continuar a conversa — networking presencial real com a comunidade ETT local de devs e profissionais de dados.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-dark-card border border-dark-border rounded-2xl p-5"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-white text-base mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
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
        <section className="section-padding bg-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-dark-card border border-tech-blue/30 rounded-3xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-tech-blue/10 border border-tech-blue/30 flex items-center justify-center flex-shrink-0">
                  <Wifi className="w-6 h-6 text-tech-blue" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-tech-blue font-semibold mb-1">
                    Tem online também
                  </div>
                  <h3 className="font-bold text-white text-xl md:text-2xl">
                    Não consegue ir presencial? Toda segunda online às 20h.
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-5">
                Se a agenda dessa semana não bate, ou você mora fora de Curitiba, o encontro
                online é toda segunda às 20h–21h30 via Google Meet — mesma estrutura, mesma
                comunidade.
              </p>
              <Link
                href="/online/"
                className="inline-flex items-center gap-2 text-tech-blue font-semibold hover:text-tech-blue/80 transition-colors"
              >
                Ver detalhes do encontro online <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section-padding bg-dark-secondary border-t border-dark-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-dark-card border border-neon-green/30 rounded-3xl p-10 md:p-14 shadow-neon-green relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/8 to-tech-blue/8 pointer-events-none" />
              <div className="relative">
                <Users className="w-10 h-10 text-neon-green mx-auto mb-5" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Vem praticar inglês <span className="gradient-text">com a gente em Curitiba</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-7 max-w-xl mx-auto">
                  Inscrição rápida. Você recebe a agenda do mês, o endereço do próximo
                  encontro e o link da comunidade.
                </p>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-neon-green text-dark font-bold text-base hover:bg-neon-green/90 transition-all hover:shadow-neon-green-lg"
                >
                  Quero participar em Curitiba
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-gray-500 text-xs mt-4 italic">
                  Gratuito. Sem compromisso. Sem spam.
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
