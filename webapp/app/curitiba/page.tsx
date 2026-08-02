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
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`
/* Captura oficial é o formulário do próprio site (RD Station), na home.
   Antes estas landings mandavam pra um Google Form externo — dois caminhos de
   captura, campos diferentes e tráfego saindo do site. Ver
   PLANO-REVISAO-MARKETING-2026-08-01.md. */
const FORM_URL = '/#inscricao'

export const metadata: Metadata = {
  title:
    'Praticar Inglês em Curitiba — Grupo de Conversação Semanal | English Talk Time',
  description:
    'Onde praticar inglês em Curitiba: o IEP Talks, grupo de conversação presencial todo sábado das 10h às 12h no Instituto de Engenharia do Paraná. Treino de fala guiado, gratuito e aberto a profissionais de tech.',
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
      'IEP Talks: encontro presencial de conversação todo sábado, 10h–12h, no IEP em Curitiba. Treino de fala em inglês gratuito.',
    url: `${SITE_URL}/curitiba/`,
    images: [
      {
        url: '/images/ETT-top01.webp',
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
        'Grupo de conversação em inglês em Curitiba: o IEP Talks acontece todo sábado, das 10h às 12h, no Instituto de Engenharia do Paraná. Gratuito, para profissionais e estudantes de tech.',
      url: `${SITE_URL}/curitiba/`,
      image: `${SITE_URL}/images/ETT-top01.webp`,
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
                O <strong className="text-white">IEP Talks</strong> acontece{' '}
                <strong className="text-white">todo sábado, das 10h às 12h</strong>, no Instituto
                de Engenharia do Paraná — o{' '}
                <strong className="text-white">conversation club de Curitiba</strong> pra
                profissionais de tech e estudantes que querem destravar a fala em inglês.
                Entrar não custa nada.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={FORM_URL}
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

            <ProximosPresenciais quantidade={4} />

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
                Casas parceiras · Curitiba
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Nossos pontos de <span className="gradient-text">encontro</span>
              </h2>
              <p className="text-gray-400 text-lg">
                O encontro semanal é no IEP. As outras casas recebem edições especiais — e
                cada uma coloca a conversa num contexto diferente: universitário, descontraído
                e corporativo.
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

        {/* CROSS-LINK IMERSÃO CURITIBA */}
        <section className="section-padding bg-dark-secondary border-y border-dark-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-dark-card border border-neon-green/30 rounded-3xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-neon-green font-semibold mb-1">
                    Imersão presencial em Curitiba
                  </div>
                  <h3 className="font-bold text-white text-xl md:text-2xl leading-snug">
                    Quer ir além do encontro semanal? Imersão Curitiba — 29/jul a 02/ago 2026
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-5">
                5 dias intensivos de treino de fala em inglês, em parceria com{' '}
                <strong className="text-white">Cherry Top</strong> e{' '}
                <strong className="text-white">IEP</strong>. Primeira edição local pra
                profissionais de tech — vagas extremamente limitadas.
              </p>
              <Link
                href="/imersoes/curitiba/"
                className="inline-flex items-center gap-2 text-neon-green font-semibold hover:text-neon-green/80 transition-colors"
              >
                Ver detalhes da imersão em Curitiba <ArrowRight className="w-4 h-4" />
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
