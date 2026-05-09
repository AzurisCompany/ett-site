'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Loader2, MapPin, Calendar, Users } from 'lucide-react'

// API legacy v1.3 da RD Station — endpoint público com CORS aberto.
// O token público da conta RD da GUBigData (mesmo da LP de origem
// https://eventos.gubigdata.com.br/tenhointeresseprogramaaceleracaoingles)
// fica exposto no client porque ele só identifica a conta, não autoriza
// leitura/escrita do CRM.
const RD_FORM_ACTION = 'https://www.rdstation.com.br/api/1.3/conversions'
const RD_TOKEN_PUBLIC = '91ad62b8804b60a50c32a768d4adb263'
const RD_CONVERSION_ID = 'tenhointeresseprogramaaceleracaoingles'

const levels = [
  { value: 'zero', label: 'Zero — nunca estudei inglês' },
  { value: 'basico', label: 'Básico — conheço algumas palavras' },
  { value: 'intermediario', label: 'Intermediário — entendo mas trava para falar' },
  { value: 'avancado', label: 'Avançado — quero polir e focar em carreira' },
]

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setSubmitting(true)

    const form = event.currentTarget
    const formData = new FormData(form)

    // Honeypot — se preenchido, finge sucesso e descarta.
    if ((formData.get('website') as string)?.length) {
      setSubmitted(true)
      setSubmitting(false)
      return
    }
    formData.delete('website')

    // Normaliza LinkedIn: aceita "linkedin.com/in/foo" e completa pra https://
    const linkedin = (formData.get('linkedin') as string)?.trim() ?? ''
    if (linkedin && !/^https?:\/\//i.test(linkedin)) {
      formData.set('linkedin', `https://${linkedin.replace(/^\/+/, '')}`)
    }

    try {
      const resp = await fetch(RD_FORM_ACTION, {
        method: 'POST',
        body: formData,
      })
      if (!resp.ok) {
        const text = await resp.text().catch(() => '')
        console.error('[LeadForm] RD respondeu', resp.status, text.slice(0, 300))
        throw new Error(`http_${resp.status}`)
      }
      setSubmitted(true)
    } catch (err) {
      console.error('[LeadForm] falha no submit', err)
      setError(
        'Não foi possível enviar agora. Tente de novo em instantes ou nos chame em contato@englishtalktime.com.br.',
      )
    } finally {
      setSubmitting(false)
    }
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
              Entrada gratuita. Sem compromisso.{' '}
              <strong className="text-gray-200">Online toda segunda</strong> ou{' '}
              <strong className="text-gray-200">presencial em Curitiba</strong> — escolha o formato que cabe na sua semana.
            </p>

            {/* Event info */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-neon-green" />
                Online toda segunda + presencial semanal
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neon-green" />
                Curitiba: IEP, UTFPR, Hard Rock, Habita
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-neon-green" />
                Sempre gratuito — vagas limitadas
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
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Hidden fields exigidos pela RD v1.3 */}
                  <input type="hidden" name="token_rdstation" value={RD_TOKEN_PUBLIC} />
                  <input type="hidden" name="identificador" value={RD_CONVERSION_ID} />

                  {/* Name */}
                  <div>
                    <label htmlFor="rd-name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome completo <span className="text-neon-green">*</span>
                    </label>
                    <input
                      id="rd-name"
                      name="nome"
                      type="text"
                      required
                      minLength={2}
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-600 focus:outline-none focus:border-neon-green/60 focus:ring-1 focus:ring-neon-green/30 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="rd-email" className="block text-sm font-medium text-gray-300 mb-2">
                      E-mail <span className="text-neon-green">*</span>
                    </label>
                    <input
                      id="rd-email"
                      name="email"
                      type="email"
                      required
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-600 focus:outline-none focus:border-neon-green/60 focus:ring-1 focus:ring-neon-green/30 transition-colors"
                    />
                  </div>

                  {/* Empresa */}
                  <div>
                    <label htmlFor="rd-empresa" className="block text-sm font-medium text-gray-300 mb-2">
                      Empresa <span className="text-neon-green">*</span>
                    </label>
                    <input
                      id="rd-empresa"
                      name="empresa"
                      type="text"
                      required
                      minLength={2}
                      placeholder="Onde você trabalha"
                      className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-600 focus:outline-none focus:border-neon-green/60 focus:ring-1 focus:ring-neon-green/30 transition-colors"
                    />
                  </div>

                  {/* Telefone */}
                  <div>
                    <label htmlFor="rd-telefone" className="block text-sm font-medium text-gray-300 mb-2">
                      Telefone <span className="text-neon-green">*</span>{' '}
                      <span className="text-gray-500 text-xs font-normal">(WhatsApp para confirmar)</span>
                    </label>
                    <input
                      id="rd-telefone"
                      name="telefone"
                      type="tel"
                      required
                      pattern="^[\d\s()+\-]{8,}$"
                      title="Digite um telefone válido com DDD (ex: 41 99999-9999)"
                      placeholder="(41) 99999-9999"
                      autoComplete="tel"
                      className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-600 focus:outline-none focus:border-neon-green/60 focus:ring-1 focus:ring-neon-green/30 transition-colors"
                    />
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label htmlFor="rd-linkedin" className="block text-sm font-medium text-gray-300 mb-2">
                      LinkedIn <span className="text-neon-green">*</span>{' '}
                      <span className="text-gray-500 text-xs font-normal">(usado para networking no encontro)</span>
                    </label>
                    <input
                      id="rd-linkedin"
                      name="linkedin"
                      type="text"
                      required
                      pattern="(https?:\/\/)?(www\.)?linkedin\.com\/(in|pub)\/[\w\-_%]+\/?.*"
                      title="Cole o link do seu perfil LinkedIn (ex: linkedin.com/in/seu-usuario)"
                      placeholder="linkedin.com/in/seu-perfil"
                      className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-600 focus:outline-none focus:border-tech-blue/60 focus:ring-1 focus:ring-tech-blue/30 transition-colors"
                    />
                  </div>

                  {/* Level */}
                  <div>
                    <label htmlFor="rd-level" className="block text-sm font-medium text-gray-300 mb-2">
                      Qual seu nível atual de inglês? <span className="text-neon-green">*</span>
                    </label>
                    <select
                      id="rd-level"
                      name="cf_nivel_ingles"
                      required
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
                  </div>

                  {error && (
                    <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-neon-green text-black font-bold text-base hover:bg-neon-green/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:shadow-neon-green-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      'Quero participar do próximo encontro gratuito'
                    )}
                  </button>

                  <p className="text-xs text-gray-600 text-center">
                    Seus dados são usados apenas para envio do link do evento e diagnóstico ETT.
                    Sem spam.
                  </p>

                  {/* Honeypot — campo escondido; humano nunca preenche */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
                  />
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
