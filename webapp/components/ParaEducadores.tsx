'use client'

import { motion } from 'framer-motion'
import { School, Presentation, Users, Mail } from 'lucide-react'

/* Seção pedida no briefing de reposicionamento (§12). Não existe oferta B2B
   configurada: sem preço, sem pacote, sem promessa de funcionalidade — só o
   convite pra conversar. Contato por e-mail (decisão do Alessandro, 31/10). */
const CONTATO =
  'mailto:binhara@azuris.com.br?subject=' +
  encodeURIComponent('ETT para escolas, professores e grupos')

const perfis = [
  {
    icon: School,
    titulo: 'Escolas de idiomas',
    texto: 'Complementar a experiência de aprendizagem com recursos de prática fora da sala de aula.',
  },
  {
    icon: Presentation,
    titulo: 'Professores',
    texto:
      'Conhecer ferramentas que podem apoiar atividades, exercícios e a organização da prática individual.',
  },
  {
    icon: Users,
    titulo: 'Grupos de conversação',
    texto: 'Utilizar recursos para orientar encontros e estimular atividades entre as sessões.',
  },
]

export default function ParaEducadores() {
  return (
    <section id="educadores" className="section-padding bg-surface-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-silver/30 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4 leading-tight">
            O ETT também é para quem{' '}
            <span className="brand-red">promove o aprendizado de inglês</span>
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed">
            Escolas, professores, organizadores de grupos de conversação e instituições podem
            conhecer as ferramentas e as oportunidades de colaboração do English Talk Time para
            ampliar a prática de inglês entre seus participantes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10">
          {perfis.map((p, i) => (
            <motion.div
              key={p.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface-card border border-surface-line rounded-2xl p-6"
            >
              <p.icon className="w-6 h-6 text-brand-red mb-4" />
              <h3 className="font-bold text-ink text-lg mb-2">{p.titulo}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{p.texto}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={CONTATO}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-brand-red/40 text-brand-red font-bold text-sm hover:bg-brand-red/5 transition-all"
          >
            <Mail className="w-4 h-4" />
            Conversar sobre uma colaboração
          </a>
          <p className="text-xs text-ink-subtle mt-3">binhara@azuris.com.br</p>
        </div>
      </div>
    </section>
  )
}
