'use client'

import { motion } from 'framer-motion'
import {
  DoorOpen,
  ScanLine,
  Clock,
  MessageSquare,
  Cpu,
  Plane,
  Briefcase,
} from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: DoorOpen,
    title: 'Um encontro, de graça',
    description:
      'Venha a um encontro — online toda segunda ou o IEP Talks presencial aos sábados, em Curitiba. Não precisa de cadastro nem de plano. É o jeito mais simples de conhecer o ETT.',
    tag: 'Online ou presencial',
    color: 'brand-red',
  },
  {
    number: 2,
    icon: ScanLine,
    title: 'Diagnóstico pra começar',
    description:
      'O Level Check estima seu nível e seu vocabulário e sugere por onde começar. É apoio à personalização, não certificação de proficiência. Quem precisa de base pode começar por um curso de parceiro (BeeTools).',
    tag: 'Ponto de partida',
    color: 'brand-silver',
  },
  {
    number: 3,
    icon: Clock,
    title: 'Uma rotina que caiba no dia',
    description:
      'A sugestão é cerca de 1 hora por dia em blocos curtos: flashcards, um episódio com legenda, um capítulo de audiolivro, alguns minutos falando no Daily. A meta é sua.',
    tag: 'Sugestão: 1h/dia',
    color: 'brand-red',
  },
  {
    number: 4,
    icon: MessageSquare,
    title: 'Encontros de conversação',
    description:
      'Conversa com tema, perguntas e rodadas, em grupos pequenos. É onde o que você praticou sozinho vira conversa de verdade — e continua gratuito.',
    tag: 'Prática real',
    color: 'brand-silver',
  },
  {
    number: 5,
    icon: Cpu,
    title: 'Ferramentas entre os encontros',
    description:
      'O ETT Player reúne diagnóstico de vocabulário, planner de fala, flashcards, vídeos com legenda, audiolivros e rádio. Abertas pra experimentar; a ativação acompanhada traz orientação pra usar com um plano.',
    tag: 'ETT Player',
    color: 'brand-red',
  },
  {
    number: 6,
    icon: Plane,
    title: 'Imersão, se quiser',
    description:
      'Pra quem quer um período de contato intenso com o idioma: imersões no Brasil e nos EUA oferecidas pela Cherry Top, com programa, preço e condições dela.',
    tag: 'Opcional · parceiro',
    color: 'brand-silver',
  },
  {
    number: 7,
    icon: Briefcase,
    title: 'Carreira, se for o seu objetivo',
    description:
      'Pra quem quer trabalhar em inglês ou fora do país: a mentoria de carreira (currículo, LinkedIn, entrevistas) é oferecida pela Coders, com condições próprias.',
    tag: 'Opcional · parceiro',
    color: 'brand-red',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding bg-surface-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-silver/30 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-4">
            Jornada de prática
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-6">
            Uma jornada de prática
            <br />
            <span className="gradient-text">montada por você</span>
          </h2>
          <p className="text-ink-muted max-w-2xl mx-auto text-lg">
            Não é uma grade de curso. São recursos que você combina conforme seus objetivos — e
            pode parar, voltar ou pular qualquer um deles.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-red/40 via-brand-silver/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0
              const isGreen = step.color === 'brand-red'
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex flex-col sm:flex-row gap-6 items-start ${
                    isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Step number — center dot */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-4 z-10">
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-black text-sm ${
                      isGreen
                        ? 'border-brand-red bg-surface text-brand-red'
                        : 'border-brand-silver bg-surface text-brand-silver'
                    }`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Card — takes half width on desktop */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] ${isEven ? 'sm:pr-6' : 'sm:pl-6'}`}>
                    <div className={`bg-surface-card border rounded-2xl p-5 card-hover ${
                      isGreen ? 'border-brand-red/15' : 'border-brand-silver/15'
                    }`}>
                      {/* Mobile step number */}
                      <div className="sm:hidden flex items-center gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-black text-xs ${
                          isGreen
                            ? 'border-brand-red text-brand-red'
                            : 'border-brand-silver text-brand-silver'
                        }`}>
                          {step.number}
                        </div>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          isGreen ? 'bg-brand-red/10 text-brand-red' : 'bg-brand-silver/10 text-brand-silver'
                        }`}>
                          {step.tag}
                        </span>
                      </div>

                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          isGreen ? 'bg-brand-red/10' : 'bg-brand-silver/10'
                        }`}>
                          <step.icon className={`w-5 h-5 ${isGreen ? 'text-brand-red' : 'text-brand-silver'}`} />
                        </div>
                        <div>
                          <h3 className="font-bold text-ink text-base">{step.title}</h3>
                          <span className={`hidden sm:inline-flex text-xs font-medium px-2 py-0.5 rounded-full ${
                            isGreen ? 'bg-brand-red/10 text-brand-red' : 'bg-brand-silver/10 text-brand-silver'
                          }`}>
                            {step.tag}
                          </span>
                        </div>
                      </div>
                      <p className="text-ink-muted text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden sm:block w-[calc(50%-2.5rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
