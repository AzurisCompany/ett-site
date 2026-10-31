'use client'

import { motion } from 'framer-motion'
import {
  Users,
  BookOpen,
  MessageSquare,
  Plane,
  Briefcase,
  BrainCircuit,
} from 'lucide-react'

const pillars = [
  {
    number: '01',
    icon: Users,
    title: 'Constância e comunidade',
    description:
      'Sem rotina, o inglês vira intenção. A comunidade de prática do ETT reduz o isolamento e transforma o estudo em prática social: encontros toda semana e gente praticando junto.',
    color: 'brand-red',
    partner: 'Ecossistema DSSBR & GUBigData',
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Base estruturada, com parceiros',
    description:
      'Nem todo mundo começa pela conversação. Quem precisa de base pode fazer um curso com um parceiro de ensino; o ETT indica o caminho e oferece as ferramentas e os encontros pra praticar junto.',
    color: 'brand-silver',
    partner: 'Curso oferecido pela BeeTools',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Prática real e conversação guiada',
    description:
      'O idioma só se torna utilizável quando você fala, escuta e responde. Os encontros têm tema, perguntas e rodadas pra todo mundo falar, e o Speak permite ensaiar conversas guiadas entre um encontro e outro.',
    color: 'brand-red',
    partner: 'Encontros do ETT (online e IEP Talks) + Speak',
  },
  {
    number: '04',
    icon: Plane,
    title: 'Imersão, com parceiros',
    description:
      'Há quem queira um período de contato intenso com o idioma. As imersões no Brasil e nos EUA são oferecidas pela Cherry Top, com condições próprias; o ETT divulga e complementa com prática antes e depois.',
    color: 'brand-silver',
    partner: 'Imersões oferecidas pela Cherry Top',
  },
  {
    number: '05',
    icon: Briefcase,
    title: 'Inglês para a carreira, com parceiros',
    description:
      'Pra quem quer usar o inglês no trabalho ou trabalhar fora: os encontros servem pra treinar entrevista e conversa profissional, e a mentoria de carreira (currículo, LinkedIn, entrevistas) é oferecida pela Coders.',
    color: 'brand-red',
    partner: 'Mentoria oferecida pela Coders',
  },
  {
    number: '06',
    icon: BrainCircuit,
    title: 'Diagnóstico e personalização',
    description:
      'O diagnóstico de nível e de vocabulário e o perfil de aprendizagem ajudam a escolher o que praticar primeiro. Um sistema de recomendação mais completo está em construção.',
    color: 'brand-silver',
    partner: 'Level Check + Learning DNA (ETT Player)',
  },
]

const colorMap = {
  'brand-red': {
    bg: 'bg-brand-red/10',
    border: 'border-brand-red/20',
    icon: 'text-brand-red',
    number: 'text-brand-red/30',
    badge: 'bg-brand-red/10 text-brand-red border-brand-red/20',
  },
  'brand-silver': {
    bg: 'bg-brand-silver/10',
    border: 'border-brand-silver/20',
    icon: 'text-brand-silver',
    number: 'text-brand-silver/30',
    badge: 'bg-brand-silver/10 text-brand-silver border-brand-silver/20',
  },
}

export default function Methodology() {
  return (
    <section id="metodologia" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-silver/30 text-brand-silver bg-brand-silver/5 mb-4">
            Método
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-6">
            Seis frentes de prática,
            <br />
            <span className="gradient-text">combinadas do seu jeito</span>
          </h2>
          <p className="text-ink-muted max-w-2xl mx-auto text-lg">
            Nenhuma é obrigatória e não há ordem fixa. As ferramentas seguem a{' '}
            <strong className="text-ink">Fórmula Fluente</strong>, de Frank Florida: estudo em
            pequenos blocos, vocabulário relevante e repetição orientada.
          </p>
        </motion.div>

        {/* Formula Fluente callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 p-5 rounded-2xl border border-brand-red/20 bg-brand-red/5 flex flex-col sm:flex-row items-center gap-4 max-w-3xl mx-auto"
        >
          <div className="w-12 h-12 rounded-xl bg-brand-red/15 border border-brand-red/30 flex items-center justify-center shrink-0">
            <BrainCircuit className="w-6 h-6 text-brand-red" />
          </div>
          <p className="text-ink-soft text-sm leading-relaxed text-center sm:text-left">
            <strong className="text-brand-red">A ideia da Fórmula Fluente:</strong>{' '}
            segundo o método, um grupo pequeno de palavras muito frequentes cobre boa parte do que
            se lê e se ouve no dia a dia. Por isso as ferramentas priorizam vocabulário de alta
            frequência — e uma meta comum é algo como 10 palavras novas por dia, como organização
            da rotina, não como prazo garantido.{' '}
            <strong className="text-ink">Você não precisa estudar tudo — precisa estudar o que gera mais retorno.</strong>
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const colors = colorMap[pillar.color as keyof typeof colorMap]
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-surface-card border border-surface-line rounded-2xl p-6 card-hover overflow-hidden group"
              >
                {/* Background number */}
                <span className={`absolute top-4 right-5 text-7xl font-black ${colors.number} pointer-events-none select-none leading-none`}>
                  {pillar.number}
                </span>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-4`}>
                  <pillar.icon className={`w-6 h-6 ${colors.icon}`} />
                </div>

                <h3 className="font-bold text-ink text-lg mb-3 leading-snug pr-12">
                  {pillar.title}
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed mb-4">
                  {pillar.description}
                </p>

                {/* Partner badge */}
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs border font-medium ${colors.badge}`}>
                  {pillar.partner}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
