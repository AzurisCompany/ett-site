'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rodrigo M.',
    role: 'Data Engineer — remoto para empresa holandesa',
    text: 'Eu estudava inglês há 5 anos e travava na primeira reunião. Com o ETT e os encontros do English Talk Time, comecei a falar de verdade em 3 meses. A ferramenta de vocabulário me mostrou exatamente quais palavras técnicas eu precisava — não perdi mais tempo estudando o que já sabia.',
    stars: 5,
    tag: 'Carreira Internacional',
  },
  {
    name: 'Fernanda S.',
    role: 'Analista de BI — São Paulo',
    text: 'O que me travava não era gramática, era o medo. O ambiente do ETT é completamente seguro para errar. Os role-plays de entrevista me prepararam tanto que quando fiz a entrevista real para uma consultoria americana, me senti em casa. Consegui o cargo em 45 dias após começar o programa.',
    stars: 5,
    tag: 'Primeira entrevista em inglês',
  },
  {
    name: 'Carlos A.',
    role: 'DevOps Engineer — DSSBR Community',
    text: 'O sistema de diagnóstico do ETT foi um choque de realidade no bom sentido. Eu achava que sabia bastante inglês, mas o FluenteLevel mostrou as lacunas exatas no vocabulário técnico que eu precisava. Em 2 meses, meu LinkedIn em inglês estava atraindo recrutadores de fora.',
    stars: 5,
    tag: 'Diagnóstico + LinkedIn',
  },
  {
    name: 'Priya T.',
    role: 'ML Engineer — GUBigData IA',
    text: 'A metodologia de estudar em pequenos blocos mudou tudo pra mim. 1 hora por dia dividida em vocabulário, série com legenda e diário falado — parece pouco mas os resultados aparecem rápido. Em 4 meses fui de "entendo mas não falo" para participar ativamente de reuniões internacionais.',
    stars: 5,
    tag: 'Rotina de 1h/dia',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-dark-secondary relative overflow-hidden">
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
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Profissionais de tech que
            <br />
            <span className="gradient-text">pararam de travar</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 card-hover relative"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-neon-green/10" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-neon-green/10 text-neon-green border border-neon-green/20 font-medium">
                  {t.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
