'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Volume2, VolumeX } from 'lucide-react'

/* Posicionamento desde 31/10/2026: o ETT é uma PLATAFORMA de prática
   (ferramentas + conversação + parceiros), não um curso. Ver
   PLANO-REPOSICIONAMENTO-PLATAFORMA-2026-10-31.md antes de mexer na copy.
   Os três fatos de preço continuam juntos: encontro grátis, ferramentas
   abertas pra experimentar (orientação paga na ativação, desde 09/11/2026),
   parceiros com condições próprias. */
const reassurances = [
  'Encontros de conversação gratuitos, sem cadastro',
  'Ferramentas do ETT Player abertas pra experimentar',
  'Cursos e imersões oferecidos por parceiros',
]

/* Vídeo institucional no lugar da tela do Player (10/11/2026; antes era a
   seção VideoInstitucional abaixo do hero). Corte de 92 s, sem o trecho do
   DSSBR — ver a nota de origem em git log de components/VideoInstitucional.tsx.
   Navegador só permite autoplay MUDO: abre tocando sem som e o botão
   "Ativar som" volta pro começo com áudio. Quem pede menos movimento
   (prefers-reduced-motion) recebe o vídeo parado na capa.
   Vídeo novo = nome de arquivo novo (o hosting faz cache de 7 dias). */
const VIDEO = '/videos/ett-institucional-v05-site.mp4'
const CAPA = '/videos/ett-institucional-v05-capa.jpg'

function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null)
  const [mudo, setMudo] = useState(true)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduzir) {
      v.pause()
      return
    }
    // React não garante a propriedade `muted` na hidratação; sem ela o play() é recusado.
    v.muted = true
    v.play().catch(() => {})
    const sync = () => setMudo(v.muted)
    v.addEventListener('volumechange', sync)
    return () => v.removeEventListener('volumechange', sync)
  }, [])

  const alternarSom = () => {
    const v = ref.current
    if (!v) return
    if (v.muted) {
      v.muted = false
      v.currentTime = 0
      v.play().catch(() => {})
    } else {
      v.muted = true
    }
  }

  return (
    <div className="relative">
      <video
        ref={ref}
        autoPlay
        muted
        playsInline
        controls
        preload="metadata"
        poster={CAPA}
        className="w-full h-auto aspect-video block bg-brand-navy"
        aria-label="Vídeo institucional do English Talk Time"
      >
        <source src={VIDEO} type="video/mp4" />
        Seu navegador não reproduz vídeo.{' '}
        <a href={VIDEO} className="underline">
          Baixe o vídeo
        </a>
        .
      </video>
      <button
        type="button"
        onClick={alternarSom}
        className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/65 text-white text-xs font-semibold backdrop-blur hover:bg-black/80 transition-colors"
        aria-label={mudo ? 'Ativar o som do vídeo' : 'Tirar o som do vídeo'}
      >
        {mudo ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        {mudo ? 'Ativar som' : 'Sem som'}
      </button>
    </div>
  )
}

export default function HeroSimples() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Fundo — só textura: desfocado e quase todo coberto. */}
      <div className="absolute inset-0">
        <Image
          src="/images/ETT-top01.webp"
          alt=""
          aria-hidden
          fill
          className="object-cover blur-lg scale-110 opacity-40"
          priority
          quality={70}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/92 via-surface/88 to-surface" />
        <div className="absolute inset-0 hero-grid opacity-60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16">
        {/* No celular (1 coluna) a ordem é: selo + título → vídeo → resto do texto.
            A coluna de texto vira `contents` abaixo de lg pra que os 2 blocos dela
            entrem no grid e o vídeo (order-2) fique entre eles. No lg é coluna normal. */}
        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-8 lg:gap-10 items-center max-w-7xl mx-auto">
          {/* Texto */}
          <div className="contents lg:block text-center lg:text-left">
            <div className="order-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-red/30 bg-brand-red/10 text-brand-red text-sm font-medium mb-7"
            >
              Tecnologia, conversação e parceiros
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[2.6rem] xl:text-[3rem] font-bold text-ink mb-0 lg:mb-6 leading-tight"
            >
              Pratique mais inglês.{' '}
              <span className="brand-red">
                Com ferramentas, conversação e oportunidades reais.
              </span>
            </motion.h1>
            </div>

            <div className="order-3 text-center lg:text-left">

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-base xl:text-lg text-ink-soft max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              O <strong className="text-ink">English Talk Time</strong> reúne ferramentas
              digitais e inteligência artificial para apoiar sua prática diária, encontros de
              conversação para desenvolver sua comunicação e parceiros que oferecem cursos e
              experiências de imersão.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center lg:justify-start mb-5"
            >
              <a
                href="#ferramentas"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 lg:px-5 xl:px-6 py-3.5 rounded-lg bg-brand-red-deep text-white font-bold text-base hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red-lg hover:-translate-y-0.5"
              >
                Conhecer as ferramentas
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#encontros"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 lg:px-5 xl:px-6 py-3.5 rounded-lg border border-surface-line bg-surface-card text-ink font-semibold text-base hover:border-brand-red/40 transition-all"
              >
                Participar da conversação
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="mb-9"
            >
              <Link
                href="#como-funciona"
                className="text-sm text-ink-muted underline underline-offset-4 hover:text-brand-red transition-colors"
              >
                Como funciona o ETT
              </Link>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col gap-2 text-sm text-ink-muted items-center lg:items-start"
            >
              {reassurances.map((r) => (
                <li key={r} className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-red shrink-0" />
                  {r}
                </li>
              ))}
            </motion.ul>
            </div>
          </div>

          {/* Visual — vídeo institucional (tocando mudo ao abrir) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative order-2 lg:order-none mb-4 lg:mb-0"
          >
            <div className="rounded-2xl border border-surface-line bg-surface-card overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-surface-alt border-b border-surface-line">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 flex-1 truncate text-xs text-ink-subtle font-mono">
                  Conheça o ETT em um minuto e meio
                </span>
              </div>
              <HeroVideo />
            </div>
            <div className="absolute -bottom-5 left-4 sm:left-6 right-4 sm:right-auto flex flex-wrap gap-2">
              {['Ferramentas', 'Conversação', 'Parceiros'].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-surface-card border border-surface-line text-ink-soft shadow-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
