'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HelpCircle } from 'lucide-react'
import { homeFaqs } from '@/lib/home-faqs'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/20 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Perguntas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Tudo o que você precisa saber pra{' '}
            <span className="gradient-text">praticar inglês com a gente</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Grupo de conversação em inglês, treino de fala com ferramentas,
            online toda segunda e presencial em Curitiba — sem letra miúda.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {homeFaqs.map((faq, i) => {
            const open = openIdx === i
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.3, delay: (i % 6) * 0.04 }}
                className="bg-dark-card border border-dark-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-dark-secondary transition-colors"
                  aria-expanded={open}
                >
                  <span className="font-semibold text-white text-base leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`text-neon-green text-2xl leading-none transition-transform shrink-0 ${
                      open ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                {open && (
                  <div className="px-5 pb-5 text-gray-400 leading-relaxed text-sm border-t border-dark-border pt-4">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
