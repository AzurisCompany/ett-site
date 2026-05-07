'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, Loader2, MapPin, Calendar, Users } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Nome precisa ter ao menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  linkedin: z.string().optional(),
  level: z.enum(['zero', 'basico', 'intermediario', 'avancado'], {
    required_error: 'Selecione seu nível atual',
  }),
})

type FormData = z.infer<typeof schema>

const levels = [
  { value: 'zero', label: 'Zero — nunca estudei inglês' },
  { value: 'basico', label: 'Básico — conheço algumas palavras' },
  { value: 'intermediario', label: 'Intermediário — entendo mas trava para falar' },
  { value: 'avancado', label: 'Avançado — quero polir e focar em carreira' },
]

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200))
    console.log('Lead:', data)
    setSubmitted(true)
  }

  return (
    <section id="inscricao" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #00FF9D 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
              Próximo Encontro
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Dê o primeiro passo hoje
            </h2>
            <p className="text-gray-400 text-lg">
              Entrada gratuita. Sem compromisso. O próximo encontro acontece no IEP — Curitiba/PR.
            </p>

            {/* Event info */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neon-green" />
                IEP – Instituto de Engenharia do Paraná, Curitiba
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-neon-green" />
                Vagas limitadas — até 100 participantes
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-neon-green" />
                Mensal — gratuito
              </div>
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-dark-card border border-neon-green/20 rounded-2xl p-8 shadow-neon-green"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-neon-green/15 border border-neon-green/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-neon-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Inscrição confirmada!</h3>
                  <p className="text-gray-300 leading-relaxed max-w-sm mx-auto">
                    Obrigado! Em breve você receberá o{' '}
                    <strong className="text-neon-green">link do próximo encontro</strong> e acesso ao{' '}
                    <strong className="text-tech-blue">diagnóstico inicial ETT FluenteLevel</strong>.
                    Verifique seu e-mail.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  noValidate
                >
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome completo <span className="text-neon-green">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Seu nome"
                      {...register('name')}
                      className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-600 focus:outline-none focus:border-neon-green/60 focus:ring-1 focus:ring-neon-green/30 transition-colors"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      E-mail <span className="text-neon-green">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      {...register('email')}
                      className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-600 focus:outline-none focus:border-neon-green/60 focus:ring-1 focus:ring-neon-green/30 transition-colors"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
                    )}
                  </div>

                  {/* LinkedIn (optional) */}
                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-300 mb-2">
                      LinkedIn{' '}
                      <span className="text-gray-500 text-xs font-normal">(opcional — para networking)</span>
                    </label>
                    <input
                      id="linkedin"
                      type="url"
                      placeholder="https://linkedin.com/in/seu-perfil"
                      {...register('linkedin')}
                      className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-600 focus:outline-none focus:border-tech-blue/60 focus:ring-1 focus:ring-tech-blue/30 transition-colors"
                    />
                  </div>

                  {/* Level */}
                  <div>
                    <label htmlFor="level" className="block text-sm font-medium text-gray-300 mb-2">
                      Qual seu nível atual de inglês? <span className="text-neon-green">*</span>
                    </label>
                    <select
                      id="level"
                      {...register('level')}
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white focus:outline-none focus:border-neon-green/60 focus:ring-1 focus:ring-neon-green/30 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-gray-600">
                        Selecione seu nível...
                      </option>
                      {levels.map((l) => (
                        <option key={l.value} value={l.value} className="bg-dark-secondary">
                          {l.label}
                        </option>
                      ))}
                    </select>
                    {errors.level && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.level.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-neon-green text-black font-bold text-base hover:bg-neon-green/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:shadow-neon-green-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      'Quero participar do próximo encontro gratuito no IEP'
                    )}
                  </button>

                  <p className="text-xs text-gray-600 text-center">
                    Seus dados são usados apenas para envio do link do evento e diagnóstico ETT.
                    Sem spam.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
