import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  MessageSquare,
  Cpu,
  Users,
  CheckCircle2,
  Wifi,
  MapPin,
  Calendar,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`
const FORM_URL = 'https://forms.gle/jpK8bR4houvAXTwm9'

export const metadata: Metadata = {
  title:
    'Grupo de Conversação em Inglês — Treino de Fala com Ferramentas de Apoio | ETT',
  description:
    'Grupo de conversação em inglês com treino de fala estruturado e ferramentas de apoio com IA. Encontros semanais online (toda segunda) e presenciais em Curitiba. Não é bate-papo — é prática real de fala em inglês com método.',
  keywords: [
    'grupo de conversação em inglês',
    'conversação em inglês',
    'praticar inglês',
    'treino de fala em inglês',
    'conversation club português',
    'speaking practice',
    'encontros para falar inglês',
    'destravar inglês',
    'praticar inglês com IA',
    'inglês para tech',
  ],
  alternates: { canonical: '/conversacao/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Grupo de Conversação em Inglês — Treino de Fala ETT',
    description:
      'Encontros semanais estruturados pra você falar, não pra você ouvir. Online toda segunda + presencial em Curitiba. Comunidade tech.',
    url: `${SITE_URL}/conversacao/`,
    images: [
      {
        url: '/images/ETT-top01.png',
        width: 1200,
        height: 630,
        alt: 'Grupo de Conversação em Inglês ETT — Treino de Fala com Ferramentas',
      },
    ],
  },
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
          name: 'Conversação',
          item: `${SITE_URL}/conversacao/`,
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/conversacao/#service`,
      serviceType: 'Grupo de Conversação em Inglês',
      name: 'Grupo de Conversação em Inglês ETT',
      description:
        'Treino de fala em inglês em encontros semanais estruturados, com ferramentas de apoio com IA. Online toda segunda e presencial em Curitiba.',
      provider: { '@id': ORG_ID },
      areaServed: [
        { '@type': 'City', name: 'Curitiba' },
        { '@type': 'Country', name: 'Brasil' },
      ],
      audience: {
        '@type': 'Audience',
        audienceType:
          'Profissionais e estudantes de Tecnologia, Dados, IA, BI e Cloud',
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
        url: FORM_URL,
      },
      url: `${SITE_URL}/conversacao/`,
    },
  ],
}

const formato = [
  {
    n: '1',
    title: 'Warm-up · 10 min',
    desc: 'Vocabulário do dia, pronúncia das palavras-chave e quebra-gelo. Todo mundo já entra falando.',
  },
  {
    n: '2',
    title: 'Tópico principal · 60 min',
    desc: 'Simulação de situação real: reunião, demo técnica, entrevista internacional, daily, demo de produto, negociação salarial. Com roteiro e feedback.',
  },
  {
    n: '3',
    title: 'Pares · 15 min',
    desc: 'Sub-sessões em duplas/trios pra ninguém ficar calado. Todo participante fala — não é palco com platéia.',
  },
  {
    n: '4',
    title: 'Wrap-up · 10 min',
    desc: 'Feedback rápido, palavras novas anotadas no sistema, próximo passo individual sugerido.',
  },
]

const ferramentas = [
  {
    title: 'Diagnóstico de Vocabulário',
    desc: 'Mapeia o que você sabe e o que falta. Plano personalizado pra fechar gaps nas 3.000 palavras-meta.',
  },
  {
    title: 'Pontinhos · Revisão Inteligente',
    desc: '10–20 palavras/dia com repetição espaçada. Novas + revisão das fracas. 5 minutos/dia, sem culpa.',
  },
  {
    title: 'Séries com Legenda',
    desc: 'Estudo de séries via SRT, marcação de palavras desconhecidas, audio loop nos trechos difíceis.',
  },
  {
    title: 'Simulação com IA',
    desc: 'Prompts prontos pra simular entrevistas, reuniões, dailies e demos com ChatGPT ou similar.',
  },
  {
    title: 'Audiobook + Reading',
    desc: 'Leitura guiada com áudio de fontes em domínio público — listening prático em contexto.',
  },
  {
    title: 'Diário Falado',
    desc: 'Você grava 1 minuto/dia falando sobre qualquer coisa. Ativa vocabulário passivo, mata o medo.',
  },
]

const paraQuem = [
  'Profissionais de Tech (Data, AI, BI, Cloud, Dev) que precisam usar inglês no trabalho',
  'Estudantes universitários de TI que querem se preparar pra mercado global',
  'Quem entende inglês razoavelmente bem mas trava na hora de falar',
  'Nível A2+ (básico-intermediário) já dá pra entrar e aproveitar',
  'Quem quer fazer parte da comunidade DSSBR & GUBigData IA',
  'Quem busca uma alternativa ao Cambly / Tandem / aulas 1-on-1',
]

export default function ConversacaoPage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-neon-green/5 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-6">
                Grupo de Conversação · Como Funciona
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Grupo de Conversação em Inglês —{' '}
                <span className="gradient-text">com Treino de Fala</span> e Ferramentas de Apoio
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
                Encontros estruturados pra você <strong className="text-white">falar</strong>,
                não pra você ouvir. Online toda segunda, presencial em Curitiba, e
                ferramentas com IA que preparam e consolidam entre os encontros.
                Não é mais um conversation club genérico.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Link
                  href="/agenda/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neon-green text-dark font-bold text-base hover:bg-neon-green/90 transition-all hover:shadow-neon-green"
                >
                  Ver próxima data <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-dark-border text-white font-semibold hover:border-neon-green/50 hover:bg-dark-card transition-all"
                >
                  Quero participar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAL */}
        <section className="section-padding bg-dark-secondary border-y border-dark-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Não é bate-papo. <span className="gradient-text">É treino de fala.</span>
              </h2>
              <p className="text-gray-400 text-lg">
                A diferença entre um conversation club genérico e o ETT está em três coisas:
                método, comunidade e ferramentas de apoio.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                {
                  icon: MessageSquare,
                  title: 'Conversation club tradicional',
                  body: 'Bate-papo livre sobre o tempo, sem feedback, sem método, todo mundo fala dos mesmos assuntos. Você sai do encontro como entrou.',
                  tone: 'gray',
                },
                {
                  icon: Users,
                  title: 'Aula 1-on-1 (Cambly et al.)',
                  body: 'Você ouve mais que fala. O professor corrige cada palavra. Caro, isolado, sem comunidade pra praticar entre as sessões.',
                  tone: 'gray',
                },
                {
                  icon: Cpu,
                  title: 'ETT — treino estruturado + IA',
                  body: 'Cada encontro tem estrutura (simulação, role-play, situação real). Ferramentas de IA preparam você antes e consolidam depois. Comunidade tech ativa.',
                  tone: 'green',
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className={`bg-dark-card border rounded-2xl p-6 ${
                    c.tone === 'green'
                      ? 'border-neon-green/30 shadow-neon-green'
                      : 'border-dark-border'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                      c.tone === 'green'
                        ? 'bg-neon-green/10 border border-neon-green/30'
                        : 'bg-dark-secondary border border-dark-border'
                    }`}
                  >
                    <c.icon
                      className={`w-5 h-5 ${
                        c.tone === 'green' ? 'text-neon-green' : 'text-gray-500'
                      }`}
                    />
                  </div>
                  <h3
                    className={`font-bold text-base mb-2 ${
                      c.tone === 'green' ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {c.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      c.tone === 'green' ? 'text-gray-300' : 'text-gray-500'
                    }`}
                  >
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMATO */}
        <section className="section-padding bg-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-4">
                Cada encontro
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                O que acontece em <span className="gradient-text">1h30 de encontro</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Tempo dedicado pra você falar — não pra ficar escutando o professor.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {formato.map((f) => (
                <div
                  key={f.title}
                  className="bg-dark-card border border-dark-border rounded-2xl p-5 card-hover relative overflow-hidden"
                >
                  <span className="absolute top-3 right-4 text-5xl font-black text-neon-green/15 leading-none select-none">
                    {f.n}
                  </span>
                  <h3 className="font-bold text-white text-base mb-2 pr-8 relative">
                    {f.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed relative">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FERRAMENTAS */}
        <section
          id="ferramentas"
          className="section-padding bg-dark-secondary border-y border-dark-border"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
                Ferramentas de apoio
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                O encontro é metade do trabalho.{' '}
                <span className="gradient-text">A outra metade é a sua rotina.</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Ferramentas com IA que preparam você antes e consolidam o aprendizado depois
                — pra você chegar no próximo encontro com mais vocabulário e mais confiança.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {ferramentas.map((t) => (
                <div
                  key={t.title}
                  className="bg-dark-card border border-dark-border rounded-2xl p-5 card-hover"
                >
                  <div className="w-10 h-10 rounded-xl bg-tech-blue/10 border border-tech-blue/30 flex items-center justify-center mb-3">
                    <Cpu className="w-5 h-5 text-tech-blue" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">{t.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ONDE E QUANDO */}
        <section className="section-padding bg-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Onde e <span className="gradient-text">quando</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Dois canais — você escolhe (ou faz os dois).
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              <Link
                href="/online/"
                className="bg-dark-card border border-tech-blue/30 rounded-2xl p-6 card-hover block hover:border-tech-blue/60"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-tech-blue/10 border border-tech-blue/30 flex items-center justify-center">
                    <Wifi className="w-6 h-6 text-tech-blue" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-tech-blue font-semibold">
                      Online
                    </div>
                    <h3 className="font-bold text-white text-lg">Toda segunda · 20h–21h30</h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Encontro semanal via Google Meet, aberto pra todo o Brasil. Treino de fala
                  estruturado em 1h30 — comunidade pequena o suficiente pra todo mundo falar.
                </p>
                <span className="inline-flex items-center gap-1.5 text-tech-blue text-sm font-medium">
                  Ver detalhes do online <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <Link
                href="/curitiba/"
                className="bg-dark-card border border-neon-green/30 rounded-2xl p-6 card-hover block hover:border-neon-green/60"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-neon-green font-semibold">
                      Presencial
                    </div>
                    <h3 className="font-bold text-white text-lg">Curitiba · semanal</h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Em rotação por 4 venues: IEP, UTFPR, Hard Rock Cafe e Habitat. Networking
                  presencial com a comunidade ETT local, prática real e conversação ao vivo.
                </p>
                <span className="inline-flex items-center gap-1.5 text-neon-green text-sm font-medium">
                  Ver detalhes em Curitiba <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/agenda/"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-green text-sm transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Ver agenda completa dos próximos encontros
              </Link>
            </div>
          </div>
        </section>

        {/* PRA QUEM É */}
        <section className="section-padding bg-dark-secondary border-y border-dark-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Pra quem <span className="gradient-text">é o ETT</span>
                </h2>
              </div>
              <ul className="space-y-3">
                {paraQuem.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 bg-dark-card border border-dark-border rounded-xl p-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-base leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-dark-card border border-neon-green/30 rounded-3xl p-10 md:p-14 shadow-neon-green relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/8 to-tech-blue/8 pointer-events-none" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Próximo encontro <span className="gradient-text">é segunda</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-7 max-w-xl mx-auto">
                  Inscrição em 2 minutos. Você recebe o link do Google Meet, a agenda do mês
                  e os primeiros materiais das ferramentas de apoio.
                </p>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-neon-green text-dark font-bold text-base hover:bg-neon-green/90 transition-all hover:shadow-neon-green-lg"
                >
                  Quero participar do grupo de conversação
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
