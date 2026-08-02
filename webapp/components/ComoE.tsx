'use client'

import { motion } from 'framer-motion'
import { DoorOpen, MessagesSquare, Mic, X } from 'lucide-react'

const passos = [
  {
    icon: DoorOpen,
    titulo: 'Você entra',
    texto:
      'No online, é um clique no link — no navegador, sem instalar nada. No presencial, é chegar. Não precisa avisar antes nem preparar nada.',
  },
  {
    icon: MessagesSquare,
    titulo: 'A conversa tem roteiro',
    texto:
      'Cada encontro tem tema, perguntas e rodadas. Ninguém fica encarando o silêncio sem saber o que dizer — que é onde a maioria dos grupos de conversação morre.',
  },
  {
    icon: Mic,
    titulo: 'Todo mundo fala',
    texto:
      'Grupos pequenos e rodízio. Você não assiste ao encontro, você fala nele. E ninguém é corrigido em público.',
  },
]

/* ⚠️ Estas frases já foram falsas uma vez. Quando os planos foram publicados
   em 31/07, esta lista ainda dizia "não tem mensalidade" — e o site passou a se
   contradizer. O que é gratuito é o ENCONTRO; o programa é pago. Ver
   PLANO-REVISAO-MARKETING-2026-08-01.md antes de mexer. */
const naoE = [
  'Não é aula: não tem professor na frente explicando gramática',
  'Não é curso: não tem matrícula, turma fechada nem fidelidade',
  'Não tem venda no encontro: ninguém vai te oferecer nada lá dentro',
  'Não tem prova: ninguém mede seu nível na porta',
]

export default function ComoE() {
  return (
    <section id="como-e" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tech-blue/25 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Como é um encontro
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Uma hora e meia no online, duas no presencial — e sempre as mesmas três coisas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
          {passos.map((p, i) => (
            <motion.div
              key={p.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-neon-green/10 border border-neon-green/20 flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-neon-green" />
                </div>
                <span className="text-2xl font-black text-dark-border">{i + 1}</span>
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{p.titulo}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.texto}</p>
            </motion.div>
          ))}
        </div>

        {/* O que o ETT não é — responde direto à confusão mais comum */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-dark-card border border-dark-border rounded-2xl p-7"
        >
          <h3 className="font-bold text-white text-lg mb-5">
            Pra deixar claro o que o ETT <em className="text-neon-green not-italic">não</em> é
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {naoE.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-gray-400">
                <X className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 mt-5 pt-5 border-t border-dark-border leading-relaxed">
            O ETT é mantido pela comunidade{' '}
            <strong className="text-gray-300">DSSBR &amp; GUBigData IA</strong> junto com casas e
            escolas parceiras. <strong className="text-gray-300">Aparecer num encontro é grátis e
            continua sendo.</strong> Quem quer as ferramentas, o material didático e a mentoria
            individual entre um encontro e outro entra no programa, que é pago — e as imersões e a
            mentoria de carreira são de parceiros. Nada disso é condição pra sentar na roda.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
