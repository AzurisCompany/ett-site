'use client'

import { motion } from 'framer-motion'
import { Target, Users, Lightbulb, Globe2 } from 'lucide-react'

const highlights = [
  {
    icon: Target,
    title: 'Objetivo claro',
    text: 'Inglês funcional para o mercado internacional — não perfeição, mas capacidade real de comunicar, entrevistar e colaborar.',
  },
  {
    icon: Users,
    title: 'Comunidade de prática',
    text: 'Nascido no ecossistema DSSBR & GUBigData IA, com comunidade ativa de profissionais de tech para prática real.',
  },
  {
    icon: Lightbulb,
    title: 'Metodologia com ciência',
    text: 'Base na Fórmula Fluente (Frank Florida, +365 mil alunos): pequenos blocos, vocabulário relevante, repetição inteligente.',
  },
  {
    icon: Globe2,
    title: 'Foco em carreira',
    text: 'O inglês como instrumento concreto de mobilidade profissional — entrevistas, reuniões, networking e relocação internacional.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
}

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-dark-secondary relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
            Sobre o ETT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Não é mais um curso de inglês.
            <br />
            <span className="gradient-text">É um ecossistema de aceleração.</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            O <strong className="text-white">English Talk Time (ETT)</strong> é um programa de aceleração
            criado para encurtar a distância entre duas realidades muito comuns: o profissional que
            estuda há anos, entende razoavelmente, mas <strong className="text-neon-green">trava para falar</strong>;
            e o profissional que precisa usar inglês de forma funcional para{' '}
            <strong className="text-tech-blue">entrevistas, reuniões, networking e trabalho remoto</strong>.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={1}
            className="space-y-5 text-gray-300 leading-relaxed text-base"
          >
            <p>
              O projeto nasce com foco especial em profissionais e estudantes de{' '}
              <span className="text-tech-blue font-medium">Negócios, Tecnologia, Dados, IA, BI, Cloud e áreas correlatas</span>,
              porque esse público já sente de forma muito concreta a pressão de atuar em contextos
              globais — e ao mesmo tempo costuma ter dificuldade de transformar estudo solto em
              comunicação real.
            </p>
            <p>
              A proposta central do ETT é simples, mas poderosa:{' '}
              <strong className="text-white">não oferecer mais um curso de inglês</strong>, e sim
              uma metodologia aplicada onde se aprende a <em>aprender</em>, seguindo o ditado:{' '}
              <em className="text-neon-green">"Dê um peixe a um homem e você o alimentará por um dia; ensine-o a pescar e você o alimentará por toda a vida."</em>
            </p>
            <p>
              O ETT articula curadoria, rotina, prática guiada, imersão, ferramentas inteligentes
              de acompanhamento e conexão com objetivos de carreira — tudo em um único ecossistema
              estruturado para gerar{' '}
              <strong className="text-white">constância, exposição diária ao idioma e uso em situações reais</strong>.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={2}
            className="space-y-5 text-gray-300 leading-relaxed text-base"
          >
            <p>
              O objetivo principal é levar o participante do zero (ou do nível travado) até um{' '}
              <strong className="text-neon-green">inglês funcional para o mercado internacional</strong>,
              com atenção especial às necessidades de profissionais de tecnologia e dados.
            </p>
            <p>
              "Inglês funcional" aqui não significa perfeição gramatical nem fala nativa. Significa
              que a pessoa consegue{' '}
              <strong className="text-white">sustentar uma conversa, participar de uma entrevista, explicar um projeto, circular em networking internacional</strong>{' '}
              e continuar evoluindo com autonomia.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { n: '~300h', l: 'de jornada estruturada' },
                { n: '3.000', l: 'palavras-meta' },
                { n: '1h/dia', l: 'de rotina diária' },
              ].map((s) => (
                <div
                  key={s.n}
                  className="bg-dark-card border border-dark-border rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-neon-green">{s.n}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i + 3}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 card-hover"
            >
              <div className="w-11 h-11 rounded-xl bg-neon-green/10 border border-neon-green/20 flex items-center justify-center mb-4">
                <h.icon className="w-5 h-5 text-neon-green" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">{h.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />
    </section>
  )
}
