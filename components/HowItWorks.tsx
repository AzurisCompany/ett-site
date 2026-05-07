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
    title: 'Entrada Gratuita',
    description:
      'Participe de um encontro gratuito mensal com até 100 pessoas. Conheça a metodologia, experimente o ambiente e comece a construir vínculo com a comunidade DSSBR & GUBigData.',
    tag: 'Sem compromisso',
    color: 'neon-green',
  },
  {
    number: 2,
    icon: ScanLine,
    title: 'Nivelamento ETT FluenteLevel',
    description:
      'Diagnóstico de vocabulário para entender exatamente onde você está, o que precisa reforçar e quais recursos fazem mais sentido. Para alguns começa pela base (BeeTools), para outros direto à prática.',
    tag: 'Personalizado',
    color: 'tech-blue',
  },
  {
    number: 3,
    icon: Clock,
    title: 'Rotina Diária de 1 Hora',
    description:
      'Divisão clara: vocabulário (pontinhos), série/legenda, audiobook e diário. 1 hora por dia dividida em pequenos blocos — sem precisar de grandes janelas de tempo.',
    tag: '1h/dia',
    color: 'neon-green',
  },
  {
    number: 4,
    icon: MessageSquare,
    title: 'Encontros English Talk Time',
    description:
      'Conversas guiadas, simulações, storytelling, role-play e noites temáticas. Ambiente seguro para tirar o conhecimento do campo passivo e colocá-lo em uso real.',
    tag: 'Prática real',
    color: 'tech-blue',
  },
  {
    number: 5,
    icon: Cpu,
    title: 'Ferramentas com IA',
    description:
      'O sistema inteligente do ETT mapeia suas lacunas, gera flashcards personalizados, cria prompts para simulação com IA e mantém seu progresso visível e motivador.',
    tag: 'IA + dados',
    color: 'neon-green',
  },
  {
    number: 6,
    icon: Plane,
    title: 'Imersão Cherry Top',
    description:
      'Para quem quer o salto de nível mais rápido: programas intensivos no Brasil e nos EUA. Sair de iniciante para intermediário — ou de intermediário para avançado — em poucas semanas.',
    tag: 'Opcional / aceleração',
    color: 'tech-blue',
  },
  {
    number: 7,
    icon: Briefcase,
    title: 'Carreira Internacional com Coders',
    description:
      'Currículo, LinkedIn, entrevistas em inglês, estratégia de posicionamento e suporte para relocação. Transforme seu inglês em mobilidade profissional concreta e salários até 5x maiores.',
    tag: 'Objetivo final',
    color: 'neon-green',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding bg-dark-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tech-blue/30 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
            Jornada do Aluno
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Como funciona na prática:
            <br />
            <span className="gradient-text">7 passos do iniciante ao global</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A jornada não é linear para todos, mas estruturada o suficiente para que ninguém
            fique sem saber qual é o próximo passo.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-green/40 via-tech-blue/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0
              const isGreen = step.color === 'neon-green'
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
                        ? 'border-neon-green bg-dark text-neon-green'
                        : 'border-tech-blue bg-dark text-tech-blue'
                    }`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Card — takes half width on desktop */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] ${isEven ? 'sm:pr-6' : 'sm:pl-6'}`}>
                    <div className={`bg-dark-card border rounded-2xl p-5 card-hover ${
                      isGreen ? 'border-neon-green/15' : 'border-tech-blue/15'
                    }`}>
                      {/* Mobile step number */}
                      <div className="sm:hidden flex items-center gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-black text-xs ${
                          isGreen
                            ? 'border-neon-green text-neon-green'
                            : 'border-tech-blue text-tech-blue'
                        }`}>
                          {step.number}
                        </div>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          isGreen ? 'bg-neon-green/10 text-neon-green' : 'bg-tech-blue/10 text-tech-blue'
                        }`}>
                          {step.tag}
                        </span>
                      </div>

                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          isGreen ? 'bg-neon-green/10' : 'bg-tech-blue/10'
                        }`}>
                          <step.icon className={`w-5 h-5 ${isGreen ? 'text-neon-green' : 'text-tech-blue'}`} />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-base">{step.title}</h3>
                          <span className={`hidden sm:inline-flex text-xs font-medium px-2 py-0.5 rounded-full ${
                            isGreen ? 'bg-neon-green/10 text-neon-green' : 'bg-tech-blue/10 text-tech-blue'
                          }`}>
                            {step.tag}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
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
