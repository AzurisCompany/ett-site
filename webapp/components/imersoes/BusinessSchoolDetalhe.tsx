'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Handshake,
  Languages,
  MapPin,
  MessagesSquare,
  Presentation,
  X,
} from 'lucide-react'
import VideoSorteado, { type VideoVertical } from '@/components/VideoSorteado'

/**
 * Layout próprio da Cherry Top Business School (Curitiba, dez/2026).
 * Conteúdo: reels da Cherry Top + mensagens do Prof. Leo (31/10/2026).
 * Preço NÃO aparece (decisão do Alessandro, 09/11). Local: IEP (confirmado em 09/11).
 */

const FORM_URL = 'https://forms.gle/E4dV7dhEwASzVE4m6'
const FIM = '2026-12-06'

const videos: VideoVertical[] = [
  { src: '/videos/cherrytop-bs-reel1-v1.mp4', capa: '/videos/cherrytop-bs-reel1-v1-capa.jpg', titulo: 'Quem apresentou foi outro' },
  { src: '/videos/cherrytop-bs-reel2-v1.mp4', capa: '/videos/cherrytop-bs-reel2-v1-capa.jpg', titulo: 'A cabeça trava' },
  { src: '/videos/cherrytop-bs-reel3-v1.mp4', capa: '/videos/cherrytop-bs-reel3-v1-capa.jpg', titulo: 'Decorar o manual' },
]

const fatos = [
  { icon: Calendar, titulo: '04 a 06 de dezembro', sub: 'sexta a domingo, 2026' },
  { icon: MapPin, titulo: 'IEP · Curitiba/PR', sub: 'Rua Emiliano Perneta, 174 · Centro' },
  { icon: Clock, titulo: '50 horas', sub: '3 dias presenciais, 8h às 18h' },
  { icon: Award, titulo: 'Certificado de 50h', sub: 'emitido pela Cherry Top' },
]

const situacoes = [
  {
    icon: MessagesSquare,
    titulo: 'Reuniões',
    texto: 'Participar, dar a sua opinião e responder quando alguém pergunta “So, what do you think?”.',
  },
  {
    icon: Handshake,
    titulo: 'Negociação',
    texto: 'Defender um business plan e argumentar em inglês, resolvendo cases em equipe.',
  },
  {
    icon: Presentation,
    titulo: 'Apresentação',
    texto: 'Apresentar o seu projeto no último dia e receber feedback ali mesmo.',
  },
]

const atividades = ['Business plan', 'Case studies', 'Design thinking', 'Reports', 'Team building', 'Networking']

const programacao = [
  { quando: 'Antes', titulo: 'The Passport', horas: '10h online', texto: 'Pré-imersão para chegar com o inglês mais afiado.' },
  { quando: 'Day 1', titulo: 'Sexta, 04/12', horas: '10h presenciais', texto: 'Das 8h às 18h, com almoço.' },
  { quando: 'Day 2', titulo: 'Sábado, 05/12', horas: '10h presenciais', texto: 'Das 8h às 18h, com almoço.' },
  { quando: 'Day 3', titulo: 'Domingo, 06/12', horas: '10h presenciais', texto: 'Apresentação final do projeto, com feedback.' },
  { quando: 'Depois', titulo: 'Estudo orientado', horas: '10h guiadas', texto: 'Para fixar o que foi treinado.' },
]

const inclusos = [
  'The Passport: 10h de pré-imersão online',
  '3 dias presenciais, das 8h às 18h',
  '10h de estudo orientado',
  'Almoço nos dias presenciais',
  'Certificado de 50 horas',
]
const naoInclusos = ['Deslocamento e hospedagem, se vier de fora']

const cherryTop = [
  { rotulo: 'Nosso negócio', texto: 'Business Communication.' },
  { rotulo: 'Missão', texto: 'Acelerar o crescimento e a expansão de grandes negócios internacionais.' },
  { rotulo: 'Visão', texto: 'Ser o Global Business Hub mais eficiente e top of mind.' },
  { rotulo: 'Estratégia', texto: 'Strategic Business Communication e conexão de marcas líderes globalmente.' },
]

export default function BusinessSchoolDetalhe() {
  // Data só no navegador (o build pode ficar semanas sem rodar).
  const [encerrada, setEncerrada] = useState(false)
  useEffect(() => setEncerrada(new Date(`${FIM}T23:59:59-03:00`) < new Date()), [])

  const cta = encerrada
    ? { href: '/imersoes/#proximas', label: 'Ver as próximas imersões', externo: false }
    : { href: FORM_URL, label: 'Quero participar', externo: true }
  const ctaProps = cta.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <main className="bg-surface min-h-screen">
      {/* HERO: texto + fatos + CTA | reel sorteado */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 via-surface to-surface" />
        <div className="absolute top-24 right-0 w-[28rem] h-[28rem] bg-brand-red/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative max-w-6xl">
          <Link
            href="/imersoes/"
            className="inline-flex items-center gap-1.5 text-ink-muted hover:text-brand-red text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para imersões
          </Link>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-10 lg:gap-14 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-5">
                Cherry Top Business School
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-ink mb-5 leading-[1.1]">
                Três dias treinando o inglês das{' '}
                <span className="gradient-text">reuniões, negociações e apresentações.</span>
              </h1>
              <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                Gramática você tem. O que falta é treinar o inglês dos negócios: aqui você erra entre
                colegas, num ambiente de treino, para chegar mais preparado às reuniões de verdade.
              </p>

              {encerrada && (
                <div className="mb-6 p-4 rounded-xl bg-brand-silver/10 border border-brand-silver/30 text-sm text-ink-soft">
                  <strong className="text-ink">Esta turma já aconteceu.</strong> Veja as turmas abertas na
                  página de imersões.
                </div>
              )}

              <dl className="grid grid-cols-2 gap-3 mb-8 max-w-2xl">
                {fatos.map((f) => (
                  <div key={f.titulo} className="flex items-start gap-3 p-4 rounded-xl bg-surface-card border border-surface-line">
                    <f.icon className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                    <div>
                      <dt className="font-semibold text-ink leading-tight">{f.titulo}</dt>
                      <dd className="text-ink-muted text-sm mt-0.5">{f.sub}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={cta.href}
                  {...ctaProps}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-red-deep text-white font-bold hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red"
                >
                  {cta.label}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#programacao"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-surface-line text-ink-soft font-semibold hover:border-brand-red/40 transition-all"
                >
                  Ver a programação
                </a>
              </div>
              <p className="text-ink-subtle text-sm mt-4">
                Oferecido pela <strong className="text-ink-soft">Cherry Top</strong>, que cuida de valores e
                inscrição. Você deixa seu contato aqui e nós repassamos para ela.
              </p>
            </div>

            <VideoSorteado videos={videos} className="w-full max-w-[300px] mx-auto" />
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ VAI TREINAR */}
      <section className="py-16 md:py-20 bg-surface-alt border-y border-surface-line">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">Situações reais de negócio</h2>
            <p className="text-ink-muted text-lg">
              O treino acontece em cima do que trava na hora: reunião, negociação e apresentação.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {situacoes.map((s) => (
              <div key={s.titulo} className="bg-surface-card border border-surface-line rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">{s.titulo}</h3>
                <p className="text-ink-muted">{s.texto}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-8">
            {atividades.map((a) => (
              <span key={a} className="px-3 py-1.5 rounded-full text-sm bg-surface-card border border-surface-line text-ink-soft">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* NÍVEIS */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-center">
            <div>
              <Languages className="w-8 h-8 text-brand-red mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">Não precisa ser fluente</h2>
              <p className="text-ink-muted text-lg">As turmas são separadas por nível.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="rounded-2xl p-6 border border-surface-line bg-surface-card">
                <div className="text-xs font-semibold uppercase tracking-widest text-brand-silver mb-2">Básico</div>
                <h3 className="text-2xl font-bold text-ink mb-2">Turma bilíngue</h3>
                <p className="text-ink-muted">Conteúdo em português e inglês, para quem está começando.</p>
              </div>
              <div className="rounded-2xl p-6 border border-brand-red/30 bg-brand-red/5">
                <div className="text-xs font-semibold uppercase tracking-widest text-brand-red mb-2">
                  Intermediário ao avançado
                </div>
                <h3 className="text-2xl font-bold text-ink mb-2">Imersão total</h3>
                <p className="text-ink-muted">Tudo em inglês, do começo ao fim.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMAÇÃO — linha do tempo */}
      <section id="programacao" className="py-16 md:py-20 bg-surface-alt border-y border-surface-line scroll-mt-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">Programação</h2>
              <p className="text-ink-muted text-lg">Antes, durante e depois dos três dias presenciais.</p>
            </div>
            <div className="px-4 py-2 rounded-full bg-brand-navy text-white font-bold">50 horas no total</div>
          </div>

          <ol className="grid gap-4 lg:grid-cols-5 relative">
            <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-brand-red/20" aria-hidden />
            {programacao.map((p, i) => {
              const presencial = i >= 1 && i <= 3
              return (
                <li key={p.quando} className="relative flex lg:flex-col gap-4 lg:gap-0 lg:text-center">
                  <div
                    className={`relative z-10 shrink-0 w-12 h-12 lg:mx-auto lg:mb-4 rounded-full flex items-center justify-center text-sm font-bold ${
                      presencial ? 'bg-brand-red-deep text-white' : 'bg-surface-card border-2 border-brand-red/40 text-brand-red'
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1 bg-surface-card border border-surface-line rounded-2xl p-5">
                    <div className="text-xs font-semibold uppercase tracking-widest text-brand-red mb-1">{p.quando}</div>
                    <div className="font-bold text-ink">{p.titulo}</div>
                    <div className="text-sm font-medium text-ink-soft mt-1">{p.horas}</div>
                    <p className="text-sm text-ink-muted mt-2">{p.texto}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* INCLUSO + INVESTIMENTO */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="bg-surface-card border border-surface-line rounded-2xl p-6">
              <h3 className="font-bold text-ink text-lg mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-red" />
                Incluso
              </h3>
              <ul className="space-y-2.5 text-ink-soft">
                {inclusos.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-red/70 shrink-0 mt-1" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-card border border-surface-line rounded-2xl p-6">
              <h3 className="font-bold text-ink text-lg mb-4 flex items-center gap-2">
                <X className="w-5 h-5 text-ink-muted" />
                Por conta do participante
              </h3>
              <ul className="space-y-2.5 text-ink-soft">
                {naoInclusos.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <X className="w-4 h-4 text-ink-subtle shrink-0 mt-1" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-6 bg-gradient-to-br from-brand-red/10 via-surface-card to-brand-silver/10 border border-brand-red/30 flex flex-col">
              <div className="text-xs text-ink-muted uppercase tracking-wider mb-1">Investimento do curso</div>
              <div className="text-2xl font-bold text-ink mb-2">Sob consulta</div>
              <p className="text-ink-muted text-sm mb-6">
                Valores, formas de pagamento e inscrição são definidos pela Cherry Top. Não tem
                relação com os planos do ETT.
              </p>
              <a
                href={cta.href}
                {...ctaProps}
                className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-red-deep text-white font-bold hover:bg-brand-red-deep/90 transition-all"
              >
                {cta.label}
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-ink-subtle text-xs text-center mt-3">Você deixa seu contato e a Cherry Top fala com você.</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM OFERECE */}
      <section className="py-16 md:py-20 bg-surface-alt border-y border-surface-line">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white border border-surface-line shrink-0">
                  <Image src="/images/logo-cherrytop.jpeg" alt="Logo da Cherry Top" fill className="object-contain p-1" sizes="64px" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-brand-red font-semibold">Oferecido por</div>
                  <div className="text-xl font-bold text-ink">Cherry Top</div>
                </div>
              </div>
              <p className="text-ink-soft text-lg mb-4">
                Comunicação empresarial em inglês desde <strong className="text-ink">1985</strong>. Fundada por{' '}
                <strong className="text-ink">Leonarda Flyhigher</strong>, Business Strategist.
              </p>
              <blockquote className="border-l-4 border-brand-red pl-4 italic text-ink-soft mb-6">
                “Empowering Fluent 007 Elite Speakers for Proficient Business Communication.”
              </blockquote>
              <a
                href="https://cherrytop.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-brand-red transition-colors"
              >
                cherrytop.com.br <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {cherryTop.map((c) => (
                <div key={c.rotulo} className="bg-surface-card border border-surface-line rounded-2xl p-5">
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-red mb-2">{c.rotulo}</div>
                  <p className="text-ink-soft">{c.texto}</p>
                </div>
              ))}
              <p className="sm:col-span-2 text-ink-subtle text-xs">Textos da própria Cherry Top.</p>
            </div>
          </div>

          <div className="mt-10 p-5 rounded-2xl bg-surface-card border border-surface-line text-ink-soft">
            <strong className="text-brand-red">Apoio do ETT:</strong> divulgação, encaminhamento do seu interesse e,
            se quiser praticar antes e depois, as{' '}
            <Link href="/ferramentas/" className="text-brand-red underline underline-offset-2">ferramentas do ETT Player</Link> (abertas
            pra experimentar) e os{' '}
            <Link href="/agenda/" className="text-brand-red underline underline-offset-2">encontros de conversação</Link>{' '}
            (abertos e gratuitos).
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-ink mb-4">
            {encerrada ? (
              <>Quer participar <span className="gradient-text">da próxima?</span></>
            ) : (
              <>Quer participar <span className="gradient-text">em dezembro?</span></>
            )}
          </h2>
          <p className="text-ink-muted text-lg mb-8">
            {encerrada
              ? 'Veja as turmas abertas da Cherry Top na página de imersões.'
              : 'Preencha o formulário. Nós repassamos seu contato para a Cherry Top, que fala com você sobre detalhes, valores e condições de inscrição.'}
          </p>
          <a
            href={cta.href}
            {...ctaProps}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-red-deep text-white font-bold text-lg hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red"
          >
            {cta.label}
            <ArrowRight className="w-5 h-5" />
          </a>
          <div className="mt-8">
            <Link href="/imersoes/" className="text-ink-muted hover:text-brand-red text-sm transition-colors inline-flex items-center gap-1.5">
              <ArrowLeft className="w-3.5 h-3.5" />
              Ver todas as imersões
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
