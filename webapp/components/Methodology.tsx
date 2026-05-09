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
    title: 'Comprometimento, Constância e Comunidade',
    description:
      'Sem rotina, o inglês vira intenção. Com rotina, vira competência. A comunidade de prática do ETT reduz o isolamento, gera pertencimento e transforma o estudo em prática social — com desafios, rankings, badges e evolução coletiva.',
    color: 'neon-green',
    partner: 'Ecossistema DSSBR & GUBigData',
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Base Estruturada de Aprendizagem',
    description:
      'Nem todo aluno começa pela conversação. O ETT oferece nivelamento, trilha personalizada e integração com parceiros pedagógicos para os níveis A0 a B1, garantindo que ninguém fique sem saber o próximo passo.',
    color: 'tech-blue',
    partner: 'BeeTools (IA, RV, gamificação)',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Prática Real e Conversação Guiada',
    description:
      'O idioma só se torna utilizável quando você fala, escuta, responde e se corrige. Board games, storytelling, role-play, simulações e noites temáticas criam o espaço seguro para o conhecimento sair do campo passivo para o ativo.',
    color: 'neon-green',
    partner: 'English Talk Time (sessões online + presenciais)',
  },
  {
    number: '04',
    icon: Plane,
    title: 'Imersão Intensiva e Contínua',
    description:
      'Há um tipo de crescimento que só acontece quando o aluno usa o inglês de forma mais contínua e intensa. Programas de imersão no Brasil e nos EUA criam o salto de nível que o estudo regular não consegue sozinho.',
    color: 'tech-blue',
    partner: 'Cherry Top (30+ anos de imersão)',
  },
  {
    number: '05',
    icon: Briefcase,
    title: 'Empregabilidade Internacional',
    description:
      'O ETT não quer apenas melhorar o inglês — quer ajudar o participante a transformar isso em movimento de carreira. Currículo, LinkedIn, entrevistas, estratégia de posicionamento e aspectos contratuais para o mercado global.',
    color: 'neon-green',
    partner: 'Coders (vagas no exterior em 30-45 dias)',
  },
  {
    number: '06',
    icon: BrainCircuit,
    title: 'Inteligência, Dados e Personalização',
    description:
      'Cada clique, erro, palavra desconhecida e legenda marcada alimenta um sistema inteligente que identifica lacunas reais e sugere prioridades sob medida. O estudo passa a ser mais preciso, não apenas mais intenso.',
    color: 'tech-blue',
    partner: 'Sistema ETT + ClickHouse + IA',
  },
]

const colorMap = {
  'neon-green': {
    bg: 'bg-neon-green/10',
    border: 'border-neon-green/20',
    icon: 'text-neon-green',
    number: 'text-neon-green/30',
    badge: 'bg-neon-green/10 text-neon-green border-neon-green/20',
  },
  'tech-blue': {
    bg: 'bg-tech-blue/10',
    border: 'border-tech-blue/20',
    icon: 'text-tech-blue',
    number: 'text-tech-blue/30',
    badge: 'bg-tech-blue/10 text-tech-blue border-tech-blue/20',
  },
}

export default function Methodology() {
  return (
    <section id="metodologia" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/20 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-4">
            Metodologia & Pilares
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            6 pilares para ir do travado
            <br />
            <span className="gradient-text">ao fluente e empregável</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Baseado na{' '}
            <strong className="text-white">Fórmula Fluente de Frank Florida</strong> (+365 mil alunos):
            estudo em pequenos blocos, vocabulário relevante, habilidades ativas e imersão distribuída.
          </p>
        </motion.div>

        {/* Formula Fluente callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 p-5 rounded-2xl border border-neon-green/20 bg-neon-green/5 flex flex-col sm:flex-row items-center gap-4 max-w-3xl mx-auto"
        >
          <div className="w-12 h-12 rounded-xl bg-neon-green/15 border border-neon-green/30 flex items-center justify-center shrink-0">
            <BrainCircuit className="w-6 h-6 text-neon-green" />
          </div>
          <p className="text-gray-300 text-sm leading-relaxed text-center sm:text-left">
            <strong className="text-neon-green">Base científica — Fórmula Fluente:</strong>{' '}
            250 palavras mais comuns cobrem ~60% de qualquer texto. Com 1.000 palavras + cognatos,
            você compreende 90–95% de uma conversa. Aprender 10 palavras/dia = fluência em 10 meses.{' '}
            <strong className="text-white">Você não precisa estudar tudo — precisa estudar o que gera mais retorno.</strong>
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
                className="relative bg-dark-card border border-dark-border rounded-2xl p-6 card-hover overflow-hidden group"
              >
                {/* Background number */}
                <span className={`absolute top-4 right-5 text-7xl font-black ${colors.number} pointer-events-none select-none leading-none`}>
                  {pillar.number}
                </span>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-4`}>
                  <pillar.icon className={`w-6 h-6 ${colors.icon}`} />
                </div>

                <h3 className="font-bold text-white text-lg mb-3 leading-snug pr-12">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
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
