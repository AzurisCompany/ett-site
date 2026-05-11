'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  MapPin,
  Calendar,
  Users,
  Plane,
  Building2,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  X,
} from 'lucide-react'

const FORM_URL = 'https://forms.gle/E4dV7dhEwASzVE4m6'

type Imersao = {
  id: string
  city: string
  uf: string
  tag: string
  tagColor: 'green' | 'blue' | 'purple'
  when: string
  whenDetail: string
  format: string
  bullets: string[]
  highlight: string
  ctaLabel: string
  thumbs: string[]
  cover: string
  badge?: string
  detalheUrl?: string
}

const imersoes: Imersao[] = [
  {
    id: 'curitiba-2026',
    city: 'Curitiba',
    uf: 'PR',
    tag: 'Próxima a acontecer',
    tagColor: 'green',
    when: 'Junho 2026',
    whenDetail: 'Datas exatas a confirmar',
    format: '5 dias — imersão presencial',
    bullets: [
      'Primeira edição ETT em Curitiba',
      'Em parceria com IEP — apoio institucional',
      'Foco em profissionais de tech do PR',
      'Vagas extremamente limitadas',
    ],
    highlight: 'Primeira edição local',
    ctaLabel: 'Garantir minha vaga em Curitiba',
    thumbs: [],
    cover: '/images/ETT-top01.png',
    badge: '1ª EDIÇÃO',
    detalheUrl: '/imersoes/curitiba',
  },
  {
    id: 'belo-horizonte-2026',
    city: 'Belo Horizonte',
    uf: 'MG',
    tag: 'Múltiplas turmas • 5 dias • 8 vagas',
    tagColor: 'blue',
    when: 'Q3/Q4 2026',
    whenDetail: '3 turmas previstas (Ago / Set–Out / Nov) — datas a confirmar',
    format: '5 dias com hospedagem e refeições inclusas',
    bullets: [
      'Immersion Village Brazil — sede oficial Cherry Top',
      'Certificado de 90 horas',
      'Apenas 8 vagas por turma',
      '20 km do aeroporto de Confins/BH',
    ],
    highlight: 'Sede oficial Cherry Top',
    ctaLabel: 'Quero participar da imersão em BH',
    thumbs: [
      '/imersoes/bh-2026/01.jpeg',
      '/imersoes/bh-2026/05.jpeg',
      '/imersoes/bh-2026/10.jpeg',
    ],
    cover: '/imersoes/bh-2026/01.jpeg',
    detalheUrl: '/imersoes/belo-horizonte',
  },
  {
    id: 'florida-2027',
    city: 'Flórida',
    uf: 'EUA',
    tag: '2 turmas em 2027 • Hospedagem em resort • Vagas limitadas',
    tagColor: 'purple',
    when: 'Janeiro / Fevereiro 2027',
    whenDetail: 'Turma 1: 10–27 jan (18 dias)  ·  Turma 2: 29/jan–01/mar (30+ dias)',
    format: 'Imersão internacional — 100% em inglês 24h por dia',
    bullets: [
      'Windsor Cay Resort — Flórida, EUA',
      'Liderada por Leonarda Flyhigher (Cherry Top)',
      'Metodologia Bonding + Native-like',
      'Passagem aérea e visto americano não inclusos',
    ],
    highlight: 'A experiência mais transformadora',
    ctaLabel: 'Entrar na lista de interesse — Flórida 2027',
    thumbs: [
      '/imersoes/florida-2027/cover.jpeg',
      '/imersoes/florida-2027/03.jpeg',
      '/imersoes/florida-2027/07.jpeg',
    ],
    cover: '/imersoes/florida-2027/cover.jpeg',
    detalheUrl: '/imersoes/florida',
  },
]

const tagColorMap = {
  green: 'bg-neon-green/15 text-neon-green border-neon-green/30',
  blue: 'bg-tech-blue/15 text-tech-blue border-tech-blue/30',
  purple: 'bg-purple-500/15 text-purple-300 border-purple-400/30',
}

const galeriaEua: string[] = [
  // 01-13, 15, 16 — .jpg
  ...Array.from({ length: 16 }, (_, i) => i + 1)
    .filter((n) => n !== 14)
    .map((n) => `/imersoes/galeria-eua/${String(n).padStart(2, '0')}.jpg`),
  // 20, 21 — .jpeg
  '/imersoes/galeria-eua/20.jpeg',
  '/imersoes/galeria-eua/21.jpeg',
  // 22-31 — .jpg
  ...Array.from({ length: 10 }, (_, i) => i + 22).map(
    (n) => `/imersoes/galeria-eua/${n}.jpg`
  ),
]

const faqs = [
  {
    q: 'Qual o nível mínimo de inglês pra participar?',
    a: 'Depende da imersão. Curitiba e Belo Horizonte aceitam a partir de A2 (básico-intermediário) — fazemos nivelamento antes. A Flórida exige B1+ porque é 100% em inglês 24h. Não sabe seu nível? A gente faz o teste antes da inscrição.',
  },
  {
    q: 'Quanto custa?',
    a: 'Valores sob consulta. Preenche o formulário e o time do ETT te manda a proposta completa com tudo o que está incluído. Cada imersão tem condição específica — a gente alinha por conversa.',
  },
  {
    q: 'Como eu garanto minha vaga?',
    a: 'Vagas são confirmadas com uma taxa de pré-inscrição, que sinaliza seu compromisso real e segura sua posição na turma. Sem pré-inscrição, a vaga fica aberta — e elas costumam esgotar rápido. O valor da pré-inscrição é informado quando o time entra em contato.',
  },
  {
    q: 'O que está incluído em cada imersão?',
    a: 'Curitiba (Jun/26): programa + materiais + coffee breaks + certificado. BH (Q3/Q4 2026): programa de 5 dias + materiais + hospedagem + refeições + certificado de 90h. Flórida (Jan–Mar/27): programa + hospedagem em resort + atividades culturais + certificado. Passagem aérea e visto americano não estão inclusos na Flórida.',
  },
  {
    q: 'Imersão internacional — preciso de visto?',
    a: 'Sim, precisa de visto americano B1/B2 válido. A Cherry Top orienta o processo, mas a obtenção é responsabilidade do aluno. Quem já tem visto B1/B2 está liberado direto.',
  },
  {
    q: 'Funciona pra quem nunca fez imersão antes?',
    a: 'Sim — e geralmente é exatamente quem mais ganha. Imersão é projetada pra gente que tá travada. O ambiente faz o trabalho de tirar você da zona de conforto sem te jogar no fundo do poço. Suporte 100% do tempo.',
  },
]

export default function Imersoes() {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className="bg-dark min-h-screen">
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-green/5 via-dark to-dark" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl" />
        <div className="absolute top-40 left-0 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-6">
              Imersão • em parceria com Cherry Top
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Você sabe inglês.
              <br />
              <span className="gradient-text">Falta só destravar.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              Em <strong className="text-white">5 dias no Brasil ou até 30+ dias na Flórida</strong>,
              a gente arranca seu inglês do papel e coloca na sua boca — em reuniões,
              demos, entrevistas e no networking internacional. ETT +{' '}
              <strong className="text-white">Cherry Top</strong>,{' '}
              <em className="text-neon-green not-italic">40+ anos</em> formando
              profissionais fluentes pela metodologia{' '}
              <strong className="text-white">Bonding + Native-like</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neon-green text-dark font-bold text-base hover:bg-neon-green/90 transition-all hover:shadow-neon-green"
              >
                Quero participar de uma imersão
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#galeria-eua"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-dark-border text-white font-semibold hover:border-neon-green/50 hover:bg-dark-card transition-all"
              >
                Ver fotos das imersões
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PARCERIA CHERRY TOP — banner de autoridade */}
      <section className="bg-dark-secondary border-y border-dark-border">
        <div className="container mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-5 md:gap-8 bg-dark-card border border-neon-green/20 rounded-2xl p-5 md:p-6"
          >
            <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white/5 border border-dark-border flex-shrink-0">
              <Image
                src="/images/logo-cherrytop.jpeg"
                alt="Cherry Top — parceira oficial ETT"
                fill
                className="object-contain p-1"
                sizes="80px"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="text-xs uppercase tracking-widest text-neon-green font-semibold mb-1">
                Imersões em parceria com
              </div>
              <div className="text-xl font-bold text-white mb-1">
                Cherry Top Business Communication
              </div>
              <p className="text-gray-400 text-sm">
                <strong className="text-white">40+ anos</strong> formando profissionais fluentes ·
                metodologia <strong className="text-white">Bonding + Native-like</strong> ·
                fluência até <strong className="text-neon-green">10× mais rápido</strong>
              </p>
            </div>
            <a
              href="https://cherrytop.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-neon-green inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              cherrytop.com.br <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* POR QUE IMERSÃO */}
      <section className="section-padding bg-dark-secondary border-y border-dark-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Por que imersão funciona — quando aula online não destrava
            </h2>
            <p className="text-gray-400 text-lg">
              Aula tradicional ensina inglês. Imersão te obriga a{' '}
              <em className="text-white not-italic">usar</em>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: GraduationCap,
                title: 'Você não traduz mais, você usa',
                desc: 'Imersão obriga seu cérebro a sair do modo "como se diz X em inglês?" e entrar no modo "X." É o salto que separa quem sabe inglês de quem fala inglês.',
              },
              {
                icon: Building2,
                title: 'Vocabulário tech, situação real',
                desc: 'Você não vai falar sobre o tempo — você vai apresentar uma arquitetura, revisar um PR em inglês, conduzir uma daily, negociar uma oferta. Tudo simulado, com feedback.',
              },
              {
                icon: Plane,
                title: 'Até 10× mais rápido',
                desc: 'Metodologia Bonding + Native-like da Cherry Top, validada em 40+ anos. Alunos saltam de nível em dias de imersão total — não em meses de aula tradicional.',
              },
            ].map((pilar, i) => (
              <motion.div
                key={pilar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-dark-card border border-dark-border rounded-2xl p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-neon-green/15 border border-neon-green/30 flex items-center justify-center mb-4">
                  <pilar.icon className="w-6 h-6 text-neon-green" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{pilar.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{pilar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRÓXIMAS IMERSÕES */}
      <section id="proximas" className="section-padding bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-4">
              Próximas imersões
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Escolha sua <span className="gradient-text">próxima virada</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Três formatos, três cidades, uma metodologia.
              Comece pelo Brasil, termine nos Estados Unidos.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {imersoes.map((im, i) => (
              <motion.div
                key={im.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-dark-card border border-dark-border rounded-2xl overflow-hidden flex flex-col hover:border-neon-green/30 transition-all"
              >
                {/* Cover (clicável quando tem página de detalhe) */}
                {im.detalheUrl ? (
                  <Link href={im.detalheUrl} className="relative aspect-[16/10] bg-dark-secondary overflow-hidden block">
                    <Image
                      src={im.cover}
                      alt={`Imersão ${im.city}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                    {im.badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-neon-green text-dark">
                        {im.badge}
                      </span>
                    )}
                    <div className="absolute bottom-3 left-3 right-3">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold border ${tagColorMap[im.tagColor]}`}
                      >
                        {im.tag}
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div className="relative aspect-[16/10] bg-dark-secondary overflow-hidden">
                    <Image
                      src={im.cover}
                      alt={`Imersão ${im.city}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                    {im.badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-neon-green text-dark">
                        {im.badge}
                      </span>
                    )}
                    <div className="absolute bottom-3 left-3 right-3">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold border ${tagColorMap[im.tagColor]}`}
                      >
                        {im.tag}
                      </span>
                    </div>
                  </div>
                )}

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    {im.city}, {im.uf}
                  </div>
                  {im.detalheUrl ? (
                    <Link href={im.detalheUrl} className="hover:text-neon-green transition-colors">
                      <h3 className="text-2xl font-bold text-white mb-3 hover:text-neon-green transition-colors">
                        {im.city}
                      </h3>
                    </Link>
                  ) : (
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {im.city}
                    </h3>
                  )}

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-start gap-2 text-gray-300">
                      <Calendar className="w-4 h-4 text-neon-green shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">{im.when}</div>
                        <div className="text-gray-500 text-xs">{im.whenDetail}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-gray-300">
                      <Users className="w-4 h-4 text-tech-blue shrink-0 mt-0.5" />
                      <div>{im.format}</div>
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-5 text-sm text-gray-400">
                    {im.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-neon-green/70 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-xs text-gray-500 mb-5 pb-5 border-b border-dark-border">
                    <strong className="text-gray-300">Investimento:</strong>{' '}
                    sob consulta · vaga garantida com taxa de pré-inscrição
                  </div>

                  {im.detalheUrl && (
                    <Link
                      href={im.detalheUrl}
                      className="mt-auto w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neon-green text-dark font-semibold text-sm hover:bg-neon-green/90 transition-all hover:shadow-neon-green text-center"
                    >
                      Ver detalhes do evento
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA EUA — PROVA SOCIAL */}
      <section id="galeria-eua" className="section-padding bg-dark-secondary border-y border-dark-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
              Prova social
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Já fizemos história nos Estados Unidos
            </h2>
            <p className="text-gray-400 text-lg">
              {galeriaEua.length} fotos. Uma conclusão: <strong className="text-white">imersão funciona.</strong>
              <br />
              Profissionais brasileiros que viveram a imersão Cherry Top nos EUA —
              a mesma operação que vai receber a turma ETT em 2027.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galeriaEua.map((src, i) => (
              <motion.button
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
                onClick={() => setLightbox(src)}
                className="relative aspect-square rounded-xl overflow-hidden bg-dark-card border border-dark-border hover:border-neon-green/40 transition-all group cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Imersão Cherry Top EUA — foto ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE CHERRY TOP */}
      <section className="section-padding bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-dark-card via-dark-card to-dark-secondary border border-dark-border rounded-3xl p-8 md:p-12"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-4">
              Parceria estratégica
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Por que <span className="gradient-text">ETT + Cherry Top</span> é a combinação certa
            </h2>
            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                A <strong className="text-white">Cherry Top Business Communication</strong> tem{' '}
                <strong className="text-neon-green">40+ anos</strong> de know-how e um método validado:{' '}
                <strong className="text-white">Bonding + Native-like</strong>. Não é curso de gramática
                — é imersão vivencial que acelera a fluência em até{' '}
                <strong className="text-neon-green">10× mais rápido</strong>, com foco em executivos,
                C-Levels e profissionais que precisam falar inglês no mercado global. Sede oficial no
                Brasil: <strong className="text-white">Immersion Village Brazil</strong> (Lagoa Santa/MG).
              </p>
              <p>
                O <strong className="text-white">ETT</strong> organiza o ecossistema: comunidade tech,
                ferramentas inteligentes, mentoria de carreira internacional via Coders e diagnóstico
                personalizado. A imersão Cherry Top é o{' '}
                <strong className="text-white">acelerador</strong> da trilha ETT — onde você sai do
                modo &quot;estudo&quot; pro modo &quot;uso real&quot;.
              </p>
              <p className="text-white font-semibold text-xl pt-2">
                Você não escolhe entre o ETT e a Cherry Top.{' '}
                <span className="gradient-text">Você ganha os dois.</span>
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-dark-border">
              <a
                href="https://cherrytop.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-green text-sm transition-colors inline-flex items-center gap-1.5"
              >
                Conhecer cherrytop.com.br <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-b from-dark via-dark-secondary to-dark border-t border-dark-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Vagas são limitadas.
              <br />
              <span className="gradient-text">Imersões esgotam.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Preenche o formulário em 2 minutos. A gente te liga (ou WhatsApp, você escolhe)
              e te ajuda a entender qual imersão faz mais sentido pra você.
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-neon-green text-dark font-bold text-lg hover:bg-neon-green/90 transition-all hover:shadow-neon-green"
            >
              Quero falar com o time ETT
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-gray-500 text-xs mt-4 italic">
              Sem compromisso. Sem pressão. Sem spam.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Perguntas <span className="gradient-text">frequentes</span>
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={faq.q}
                  className="bg-dark-card border border-dark-border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-dark-secondary transition-colors"
                  >
                    <span className="font-semibold text-white text-base">{faq.q}</span>
                    <span
                      className={`text-neon-green text-2xl leading-none transition-transform ${
                        openFaq === i ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-400 leading-relaxed text-sm border-t border-dark-border pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark-card border border-dark-border text-white hover:bg-dark hover:border-neon-green/40 transition-all flex items-center justify-center"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative w-full max-w-5xl aspect-[4/3]">
            <Image
              src={lightbox}
              alt="Foto imersão"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </main>
  )
}
