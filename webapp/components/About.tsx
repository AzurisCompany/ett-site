'use client'

import { motion } from 'framer-motion'
import { Target, Users, Lightbulb, Compass } from 'lucide-react'

/* "Sobre" de /detalhes/. O nome histórico "Programa de Aceleração de Inglês"
   continua (está na logo e nos e-mails antigos), mas contextualizado: acelerar
   é praticar com mais frequência e organização, não um atalho prometido. */
const highlights = [
  {
    icon: Target,
    title: 'Objetivo claro',
    text: 'Inglês funcional: conseguir conversar, explicar um projeto e participar de uma entrevista — não perfeição gramatical.',
  },
  {
    icon: Users,
    title: 'Comunidade de prática',
    text: 'Nasceu na comunidade DSSBR & GUBigData IA, com encontros semanais abertos a qualquer pessoa.',
  },
  {
    icon: Lightbulb,
    title: 'Método de organização',
    text: 'As ferramentas seguem a Fórmula Fluente: blocos curtos, vocabulário relevante e repetição orientada.',
  },
  {
    icon: Compass,
    title: 'Você escolhe o caminho',
    text: 'Ferramentas, encontros e parceiros se combinam conforme o seu objetivo e o seu tempo — sem grade obrigatória.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-surface-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-4">
            Sobre o ETT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-6 leading-tight">
            Uma plataforma de apoio à prática do inglês
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed">
            O <strong className="text-ink">English Talk Time</strong> reúne ferramentas digitais,
            encontros de conversação e uma rede de parceiros educacionais. Ele não substitui um
            curso nem um professor: ajuda você a praticar entre uma aula e outra, a organizar a
            rotina e a aproveitar melhor cada oportunidade de usar o idioma.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start mb-14 max-w-5xl mx-auto text-ink-soft leading-relaxed">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="font-bold text-ink text-lg">Por que &quot;aceleração&quot;</h3>
            <p>
              O projeto nasceu com o nome de <strong className="text-ink">Programa de Aceleração
              de Inglês</strong>, e o nome continua na nossa assinatura. Acelerar, aqui, quer
              dizer praticar com mais frequência e mais organização — não um atalho com prazo
              garantido.
            </p>
            <p>
              O público de origem são profissionais e estudantes de tecnologia, dados, IA e
              negócios que estudaram inglês, entendem razoavelmente e travam na hora de falar.
              Mas os encontros e as ferramentas servem a qualquer pessoa que queira praticar mais.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-bold text-ink text-lg">O que é &quot;inglês funcional&quot;</h3>
            <p>
              Não é perfeição gramatical nem sotaque nativo. É conseguir{' '}
              <strong className="text-ink">sustentar uma conversa, explicar um projeto,
              participar de uma entrevista e circular em networking</strong> — e continuar
              evoluindo com autonomia.
            </p>
            <p>
              Cada pessoa define a própria meta de prática e acompanha a evolução ao longo do
              tempo. O ETT ajuda a organizar e a manter a constância; o ritmo de aprendizado é de
              cada um.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-surface-card border border-surface-line rounded-2xl p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mb-4">
                <h.icon className="w-5 h-5 text-brand-red" />
              </div>
              <h3 className="font-bold text-ink text-base mb-2">{h.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
