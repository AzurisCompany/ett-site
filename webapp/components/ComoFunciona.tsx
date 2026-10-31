'use client'

import { motion } from 'framer-motion'
import { Compass, Gauge, ListChecks, Handshake } from 'lucide-react'

/* "Como funciona" sem currículo: são escolhas, não etapas obrigatórias.
   Só cita o que existe (Level Check, Daily, encontros, parceiros). */
const passos = [
  {
    icon: Compass,
    titulo: 'Conheça a plataforma',
    texto:
      'Venha a um encontro de conversação, que é aberto, ou abra as ferramentas por 30 dias sem cartão.',
  },
  {
    icon: Gauge,
    titulo: 'Entenda o que você precisa',
    texto:
      'O diagnóstico de nível e de vocabulário e o seu perfil de aprendizagem mostram por onde começar. É um ponto de partida, não uma certificação.',
  },
  {
    icon: ListChecks,
    titulo: 'Escolha recursos e atividades',
    texto:
      'Monte sua rotina com as ferramentas que combinam com você e venha aos encontros quando puder. Você define a meta de prática e acompanha sua evolução ao longo do tempo.',
  },
  {
    icon: Handshake,
    titulo: 'Explore os parceiros, se quiser',
    texto:
      'Curso, imersão ou mentoria de carreira são oferecidos pelos parceiros, com condições próprias. O ETT complementa com prática antes, durante e depois.',
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/25 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4">
            Como funciona o ETT
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed">
            Não tem grade nem turma. Você combina os recursos conforme seus objetivos e o seu
            tempo.
          </p>
        </motion.div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {passos.map((p, i) => (
            <motion.li
              key={p.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface-card border border-surface-line rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-brand-red" />
                </div>
                <span className="text-2xl font-black text-surface-line" aria-hidden>
                  {i + 1}
                </span>
              </div>
              <h3 className="font-bold text-ink text-lg mb-2">{p.titulo}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{p.texto}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
