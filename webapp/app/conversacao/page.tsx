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
  ArrowUpRight,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AvisoPausa from '@/components/encontros/AvisoPausa'
import { SPEAK_URL } from '@/components/encontros/speak'
import { ferramentasDisponiveis } from '@/lib/ferramentas'

const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`
/* O encontro é aberto e sem cadastro: CTA primário = sala (ETT Speak) e agenda.
   O formulário da home (RD Station) é só lembrete opcional das datas por e-mail.
   Ver AUDITORIA-CONTEUDO-2026-11-09.md (A6–A8, M9, M10). */
const FORM_URL = '/#inscricao'

export const metadata: Metadata = {
  title:
    'Grupo de Conversação em Inglês — Treino de Fala com Ferramentas de Apoio | ETT',
  description:
    'Encontros de conversação em inglês gratuitos e abertos a qualquer pessoa: online toda segunda às 20h, na sala do ETT Speak, e presencial aos sábados em Curitiba (IEP Talks). Sem cadastro.',
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
    'conversação em inglês grátis',
  ],
  alternates: { canonical: '/conversacao/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Grupo de Conversação em Inglês — Treino de Fala ETT',
    description:
      'Encontros semanais pra você falar, não só ouvir. Online toda segunda, na sala do ETT Speak, e presencial em Curitiba. Gratuitos e sem cadastro.',
    url: `${SITE_URL}/conversacao/`,
    images: [
      {
        url: '/images/og-ett-2026.png',
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
        'Encontros semanais e gratuitos de conversação em inglês, abertos a qualquer pessoa e sem cadastro. Online toda segunda, na sala do ETT Speak, e presencial aos sábados em Curitiba (IEP Talks).',
      provider: { '@id': ORG_ID },
      areaServed: [
        { '@type': 'City', name: 'Curitiba' },
        { '@type': 'Country', name: 'Brasil' },
      ],
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/conversacao/`,
      },
      url: `${SITE_URL}/conversacao/`,
    },
  ],
}

/* Etapas do encontro de 1h30, sem minutagem (decisão do Alessandro, 09/11/2026). */
const formato = [
  {
    n: '1',
    title: 'Warm-up',
    desc: 'Apresentações rápidas, quebra-gelo e algumas palavras-chave do tema. Todo mundo já entra falando.',
  },
  {
    n: '2',
    title: 'Tema do dia',
    desc: 'Conversa sobre um tema ou situação do dia a dia e do trabalho: apresentar-se, viagem, reunião, entrevista, opinião sobre um assunto.',
  },
  {
    n: '3',
    title: 'Pares',
    desc: 'Conversas em duplas ou trios pra todo mundo ter tempo de falar — não é palco com plateia.',
  },
  {
    n: '4',
    title: 'Fechamento',
    desc: 'Volta pro grupo: o que funcionou, palavras e expressões que apareceram e o tema da próxima semana.',
  },
]

/* Vem de lib/ferramentas.ts (espelho do ETT Player). Até 31/10/2026 esta lista
   era escrita à mão e anunciava Diário Falado e Simulação com IA, que não existem. */
const ferramentas = ferramentasDisponiveis
  .filter((f) => f.grupo !== 'comunidade')
  .map((f) => ({ title: f.nome, desc: f.oQueFaz }))

const paraQuem = [
  'Qualquer pessoa que queira praticar inglês falando com outras pessoas',
  'Quem entende inglês razoavelmente bem mas trava na hora de falar',
  'Quem estuda sozinho ou faz curso e quer um lugar pra usar o que aprendeu',
  'Qualquer nível pode participar; rende mais a partir do A2 (básico-intermediário)',
  'Quem precisa de inglês no trabalho, nos estudos ou em viagens',
  'Quem quer complementar aulas particulares ou apps com conversa em grupo',
]

export default function ConversacaoPage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-6">
                Grupo de Conversação · Como Funciona
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink mb-6 leading-tight">
                Grupo de Conversação em Inglês —{' '}
                <span className="gradient-text">com Treino de Fala</span> e Ferramentas de Apoio
              </h1>
              <p className="text-ink-soft text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
                Encontros pra você <strong className="text-ink">falar</strong>, não só ouvir.
                Online toda segunda, na sala do ETT Speak, e presencial em Curitiba.
                <strong className="text-ink"> Gratuitos, abertos a qualquer pessoa e sem cadastro.</strong>{' '}
                Entre um encontro e outro, as ferramentas do ETT Player ajudam a praticar.
              </p>
              <AvisoPausa tipo="ambos" className="mb-6" />
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={SPEAK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-red-deep text-white font-bold text-base hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red"
                >
                  Entrar na sala <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link
                  href="/agenda/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-surface-line text-ink font-semibold hover:border-brand-red/50 hover:bg-surface-card transition-all"
                >
                  Ver a agenda
                </Link>
              </div>
              <p className="text-ink-subtle text-sm mt-4">
                A sala pede nome e e-mail na entrada, sem criar conta.{' '}
                <a href={FORM_URL} className="underline hover:text-brand-red">
                  Receber lembrete das datas por e-mail
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* DIFERENCIAL */}
        <section className="section-padding bg-surface-alt border-y border-surface-line">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight">
                Não é aula. <span className="gradient-text">É prática de fala.</span>
              </h2>
              <p className="text-ink-muted text-lg">
                Cada formato tem seu lugar. O encontro do ETT é feito pra uma coisa: dar tempo de
                fala, com estrutura, a quem quer praticar.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                {
                  icon: MessageSquare,
                  title: 'Conversation club tradicional',
                  body: 'Bate-papo livre, sem tema nem roteiro. É leve, mas a conversa tende a ficar nos mesmos assuntos e com as mesmas pessoas falando.',
                  tone: 'gray',
                },
                {
                  icon: Users,
                  title: 'Aula particular',
                  body: 'Boa pra correção e atenção individual, mas a conversa é sempre com uma pessoa só, e o ritmo é ditado pela aula.',
                  tone: 'gray',
                },
                {
                  icon: Cpu,
                  title: 'Encontro do ETT',
                  body: 'Tem tema e blocos (warm-up, conversa, pares, fechamento) e é gratuito. Entre um encontro e outro, as ferramentas do ETT Player ajudam a praticar.',
                  tone: 'green',
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className={`bg-surface-card border rounded-2xl p-6 ${
                    c.tone === 'green'
                      ? 'border-brand-red/30 shadow-brand-red'
                      : 'border-surface-line'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                      c.tone === 'green'
                        ? 'bg-brand-red/10 border border-brand-red/30'
                        : 'bg-surface-alt border border-surface-line'
                    }`}
                  >
                    <c.icon
                      className={`w-5 h-5 ${
                        c.tone === 'green' ? 'text-brand-red' : 'text-ink-subtle'
                      }`}
                    />
                  </div>
                  <h3
                    className={`font-bold text-base mb-2 ${
                      c.tone === 'green' ? 'text-ink' : 'text-ink-muted'
                    }`}
                  >
                    {c.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      c.tone === 'green' ? 'text-ink-soft' : 'text-ink-subtle'
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
        <section className="section-padding bg-surface">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-silver/30 text-brand-silver bg-brand-silver/5 mb-4">
                Cada encontro
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight">
                O que acontece em <span className="gradient-text">1h30 de encontro</span>
              </h2>
              <p className="text-ink-muted text-lg">
                Tempo dedicado pra você falar, não só ouvir.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {formato.map((f) => (
                <div
                  key={f.title}
                  className="bg-surface-card border border-surface-line rounded-2xl p-5 card-hover relative overflow-hidden"
                >
                  <span className="absolute top-3 right-4 text-5xl font-black text-brand-red/15 leading-none select-none">
                    {f.n}
                  </span>
                  <h3 className="font-bold text-ink text-base mb-2 pr-8 relative">
                    {f.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed relative">
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
          className="section-padding bg-surface-alt border-y border-surface-line"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-4">
                Ferramentas de apoio
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight">
                O encontro é metade do trabalho.{' '}
                <span className="gradient-text">A outra metade é a sua rotina.</span>
              </h2>
              <p className="text-ink-muted text-lg">
                As ferramentas do ETT Player ajudam a praticar entre um encontro e outro e estão
                abertas pra experimentar. Quem quiser orientação, um plano e material pode fazer a{' '}
                <Link href="/planos/adesao/" className="text-brand-red underline">
                  ativação acompanhada
                </Link>
                . O encontro continua gratuito de qualquer jeito.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {ferramentas.map((t) => (
                <div
                  key={t.title}
                  className="bg-surface-card border border-surface-line rounded-2xl p-5 card-hover"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-silver/10 border border-brand-silver/30 flex items-center justify-center mb-3">
                    <Cpu className="w-5 h-5 text-brand-silver" />
                  </div>
                  <h3 className="font-bold text-ink text-base mb-2">{t.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ONDE E QUANDO */}
        <section className="section-padding bg-surface">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight">
                Onde e <span className="gradient-text">quando</span>
              </h2>
              <p className="text-ink-muted text-lg">
                Dois canais — você escolhe (ou faz os dois).
              </p>
              <AvisoPausa tipo="ambos" className="mt-5" />
            </div>
            <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              <Link
                href="/online/"
                className="bg-surface-card border border-brand-silver/30 rounded-2xl p-6 card-hover block hover:border-brand-silver/60"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-silver/10 border border-brand-silver/30 flex items-center justify-center">
                    <Wifi className="w-6 h-6 text-brand-silver" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-brand-silver font-semibold">
                      Online
                    </div>
                    <h3 className="font-bold text-ink text-lg">Toda segunda · 20h–21h30</h3>
                  </div>
                </div>
                <p className="text-ink-muted text-sm leading-relaxed mb-3">
                  Encontro semanal na sala do ETT Speak, direto no navegador, de qualquer lugar.
                  1h30 de conversa, com pares pra todo mundo ter tempo de falar.
                </p>
                <span className="inline-flex items-center gap-1.5 text-brand-silver text-sm font-medium">
                  Ver detalhes do online <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <Link
                href="/curitiba/"
                className="bg-surface-card border border-brand-red/30 rounded-2xl p-6 card-hover block hover:border-brand-red/60"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-brand-red font-semibold">
                      Presencial
                    </div>
                    <h3 className="font-bold text-ink text-lg">Curitiba · semanal</h3>
                  </div>
                </div>
                <p className="text-ink-muted text-sm leading-relaxed mb-3">
                  O IEP Talks, todo sábado das 10h às 12h no IEP (Rua Emiliano Perneta, 174, Centro).
                  Conversação ao vivo com quem está em Curitiba. Entrada franca.
                </p>
                <span className="inline-flex items-center gap-1.5 text-brand-red text-sm font-medium">
                  Ver detalhes em Curitiba <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/agenda/"
                className="inline-flex items-center gap-2 text-ink-muted hover:text-brand-red text-sm transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Ver agenda completa dos próximos encontros
              </Link>
            </div>
          </div>
        </section>

        {/* PRA QUEM É */}
        <section className="section-padding bg-surface-alt border-y border-surface-line">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                  Pra quem <span className="gradient-text">é o ETT</span>
                </h2>
              </div>
              <ul className="space-y-3">
                {paraQuem.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 bg-surface-card border border-surface-line rounded-xl p-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                    <span className="text-ink-soft text-base leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-surface-card border border-brand-red/30 rounded-3xl p-10 md:p-14 shadow-brand-red relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/8 to-brand-silver/8 pointer-events-none" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight">
                  É só aparecer: <span className="gradient-text">segunda, 20h</span>
                </h2>
                <p className="text-ink-muted text-lg leading-relaxed mb-5 max-w-xl mx-auto">
                  Não precisa de inscrição. No horário, abra a sala do ETT Speak — ou, em Curitiba,
                  vá ao IEP Talks no sábado.
                </p>
                <AvisoPausa tipo="ambos" className="mb-6" />
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a
                    href={SPEAK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-red-deep text-white font-bold text-base hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red-lg"
                  >
                    Entrar na sala
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <Link
                    href="/agenda/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-surface-line text-ink font-semibold hover:border-brand-red/50 transition-all"
                  >
                    Ver a agenda
                  </Link>
                </div>
                <p className="text-ink-subtle text-sm mt-5">
                  Prefere ser avisado?{' '}
                  <a href={FORM_URL} className="underline hover:text-brand-red">
                    Receber lembrete das datas por e-mail
                  </a>{' '}
                  (você recebe o link da sala e as datas dos encontros).
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
