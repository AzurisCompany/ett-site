'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { TrendingUp, Clock, BookOpen, Target, Zap, Trophy } from 'lucide-react'

function CountUp({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = end / (duration * 60)
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [inView, end, duration])

  return <span ref={ref}>{count.toLocaleString('pt-BR')}{suffix}</span>
}

const metrics = [
  {
    icon: Clock,
    value: 300,
    suffix: 'h',
    label: 'Jornada estruturada completa',
    description: 'De inglês travado a funcional com método e constância',
    color: 'neon-green',
  },
  {
    icon: BookOpen,
    value: 3000,
    suffix: '',
    label: 'Palavras-meta de vocabulário',
    description: 'As 3.000 palavras mais relevantes para a sua carreira',
    color: 'tech-blue',
  },
  {
    icon: Target,
    value: 60,
    suffix: '%',
    label: 'de qualquer texto coberto',
    description: 'Com apenas as 250 palavras mais comuns do inglês',
    color: 'neon-green',
  },
  {
    icon: Zap,
    value: 95,
    suffix: '%',
    label: 'de compreensão de conversas',
    description: 'Com 1.000 palavras + cognatos em contexto real',
    color: 'tech-blue',
  },
  {
    icon: TrendingUp,
    value: 10,
    suffix: 'x',
    label: 'Palavras por dia = fluência',
    description: '10 meses com 10 palavras/dia. 5 meses com 20 palavras/dia',
    color: 'neon-green',
  },
  {
    icon: Trophy,
    value: 5,
    suffix: 'x',
    label: 'Potencial de aumento salarial',
    description: 'Salários até 5x maiores em vagas internacionais (dados Coders)',
    color: 'tech-blue',
  },
]

const gamificationLevels = [
  { level: 'Novato', range: '0–500 pts', color: 'text-gray-400', bg: 'bg-gray-800' },
  { level: 'Intermediário', range: '501–1.500 pts', color: 'text-yellow-400', bg: 'bg-yellow-900/20' },
  { level: 'Avançado', range: '1.501–3.000 pts', color: 'text-orange-400', bg: 'bg-orange-900/20' },
  { level: 'Fluente', range: '3.001–6.000 pts', color: 'text-tech-blue', bg: 'bg-tech-blue/10' },
  { level: 'Global Pro', range: '6.001+ pts', color: 'text-neon-green', bg: 'bg-neon-green/10' },
]

export default function Results() {
  return (
    <section id="resultados" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/20 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
            Resultados & Dados
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Números que mostram
            <br />
            <span className="gradient-text">por que o método funciona</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Metas claras, progresso mensurável. O ETT não vende promessa vaga —
            entrega um sistema com marcos pedagógicos comprovados.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 card-hover"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                m.color === 'neon-green' ? 'bg-neon-green/10' : 'bg-tech-blue/10'
              }`}>
                <m.icon className={`w-5 h-5 ${m.color === 'neon-green' ? 'text-neon-green' : 'text-tech-blue'}`} />
              </div>
              <div className={`text-4xl font-black mb-1 ${m.color === 'neon-green' ? 'text-neon-green' : 'text-tech-blue'}`}>
                <CountUp end={m.value} suffix={m.suffix} />
              </div>
              <div className="font-bold text-white text-sm mb-2">{m.label}</div>
              <p className="text-gray-500 text-sm">{m.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Gamification section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="bg-dark-card border border-dark-border rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
              <Trophy className="w-6 h-6 text-neon-green" />
              Sistema de Gamificação ETT
            </h3>
            <p className="text-gray-400">
              Pontos, badges e ranking — porque constância precisa de motivação.
              Jackpot mensal para os mais consistentes.
            </p>
          </div>

          {/* Level progression */}
          <div className="flex flex-col sm:flex-row items-stretch gap-2 mb-6">
            {gamificationLevels.map((lvl, i) => (
              <div
                key={lvl.level}
                className={`flex-1 ${lvl.bg} border border-dark-border rounded-xl p-4 text-center relative`}
              >
                {i < gamificationLevels.length - 1 && (
                  <div className="hidden sm:block absolute -right-1 top-1/2 -translate-y-1/2 z-10 text-gray-600">
                    →
                  </div>
                )}
                <div className={`font-bold text-sm ${lvl.color}`}>{lvl.level}</div>
                <div className="text-xs text-gray-500 mt-1">{lvl.range}</div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-center text-sm text-gray-400">
            <div className="bg-dark/50 rounded-xl p-4 border border-dark-border">
              <div className="text-neon-green font-bold text-base mb-1">Pontos diários</div>
              Estudo, check-in, palavras revisadas e encontros = pontos acumulados
            </div>
            <div className="bg-dark/50 rounded-xl p-4 border border-dark-border">
              <div className="text-tech-blue font-bold text-base mb-1">Badges & conquistas</div>
              Primeiro episódio, semana perfeita, nível desbloqueado — cada marco é reconhecido
            </div>
            <div className="bg-dark/50 rounded-xl p-4 border border-dark-border">
              <div className="text-neon-green font-bold text-base mb-1">Jackpot mensal</div>
              Os participantes mais constantes do mês concorrem a prêmios e benefícios exclusivos
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
