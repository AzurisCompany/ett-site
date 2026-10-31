'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Smartphone, MessagesSquare, Handshake } from 'lucide-react'

const pilares = [
  {
    icon: Smartphone,
    rotulo: 'Ferramentas de prática',
    titulo: 'Seu inglês em movimento, todos os dias.',
    texto:
      'Ferramentas digitais, inteligência artificial, leitura, áudio, vocabulário e atividades para ajudar você a manter contato frequente com o idioma.',
    cta: 'Explorar ferramentas',
    href: '#ferramentas',
  },
  {
    icon: MessagesSquare,
    rotulo: 'Conversação em comunidade',
    titulo: 'Mais oportunidades para colocar o inglês em prática.',
    texto:
      'Participe de encontros de conversação, compartilhe experiências e pratique comunicação real com outras pessoas.',
    cta: 'Conhecer os encontros',
    href: '#encontros',
  },
  {
    icon: Handshake,
    rotulo: 'Cursos e imersões de parceiros',
    titulo: 'Aprenda com parceiros. Pratique com o ETT.',
    texto:
      'Conheça cursos, experiências de imersão e iniciativas educacionais oferecidas por organizações parceiras.',
    cta: 'Conhecer os parceiros',
    href: '#parceiros',
  },
]

export default function TresPilares() {
  return (
    <section id="o-que-e" className="section-padding bg-surface-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/25 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4 leading-tight">
            O que você encontra no ETT
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed">
            Você aprende inglês por diferentes caminhos. O ETT ajuda você a praticar, organizar
            sua rotina e aproveitar melhor cada oportunidade de aprendizado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {pilares.map((p, i) => (
            <motion.div
              key={p.rotulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface-card border border-surface-line rounded-2xl p-7 flex flex-col"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mb-5">
                <p.icon className="w-5 h-5 text-brand-red" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red mb-2">
                {p.rotulo}
              </p>
              <h3 className="font-bold text-ink text-xl mb-3 leading-snug">{p.titulo}</h3>
              <p className="text-ink-muted text-sm leading-relaxed mb-6 flex-1">{p.texto}</p>
              <a
                href={p.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:gap-3 transition-all"
              >
                {p.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-ink-soft max-w-3xl mx-auto mt-10 leading-relaxed"
        >
          <strong className="text-ink">Os três se complementam, mas nenhum é obrigatório.</strong>{' '}
          Não são módulos de um curso nem etapas a cumprir em ordem: você usa as ferramentas, vem
          aos encontros e procura um parceiro quando fizer sentido pra você.
        </motion.p>
      </div>
    </section>
  )
}
