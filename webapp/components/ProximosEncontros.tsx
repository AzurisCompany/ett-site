'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Video, MapPin, ArrowUpRight, CalendarDays } from 'lucide-react'

const SPEAK_URL = 'https://ett-speak.vercel.app/'

const locais = [
  'IEP — Instituto de Engenharia do Paraná',
  'UTFPR',
  'Hard Rock Cafe',
  'Habitat (Sistema FIEP)',
]

/**
 * Próximas segundas-feiras, calculadas no navegador.
 * Feito no cliente de propósito: o site é export estático e o build pode ser
 * antigo — datas calculadas no build apareceriam vencidas para o visitante.
 */
function proximasSegundas(quantidade: number): Date[] {
  const agora = new Date()
  const dia = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate())

  // Se hoje é segunda e o encontro ainda não terminou (21h30), hoje conta.
  const hojeEhSegundaEAindaVale = agora.getDay() === 1 && agora.getHours() < 22
  if (!hojeEhSegundaEAindaVale) {
    do {
      dia.setDate(dia.getDate() + 1)
    } while (dia.getDay() !== 1)
  }

  const datas: Date[] = []
  for (let i = 0; i < quantidade; i++) {
    datas.push(new Date(dia))
    dia.setDate(dia.getDate() + 7)
  }
  return datas
}

function formatar(data: Date): string {
  return data.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
  })
}

export default function ProximosEncontros() {
  const [datas, setDatas] = useState<Date[] | null>(null)

  useEffect(() => {
    setDatas(proximasSegundas(3))
  }, [])

  return (
    <section id="encontros" className="section-padding bg-dark-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Os próximos encontros
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Acontecem toda semana, sempre. Escolha o formato que cabe na sua rotina.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Online */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="bg-dark-card border border-neon-green/25 rounded-2xl p-7 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-neon-green/10 border border-neon-green/20 flex items-center justify-center">
                <Video className="w-5 h-5 text-neon-green" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg leading-tight">Online</h3>
                <p className="text-sm text-neon-green">Toda segunda, 20h às 21h30</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              De qualquer lugar do Brasil, direto no navegador. Sem instalar nada.
            </p>

            {/* Próximas datas */}
            <div className="space-y-2 mb-6">
              {datas
                ? datas.map((d, i) => (
                    <div
                      key={d.toISOString()}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 border ${
                        i === 0
                          ? 'bg-neon-green/5 border-neon-green/30'
                          : 'bg-dark/50 border-dark-border'
                      }`}
                    >
                      <span className="flex items-center gap-2 text-sm text-gray-300">
                        <CalendarDays
                          className={`w-4 h-4 ${i === 0 ? 'text-neon-green' : 'text-gray-600'}`}
                        />
                        Segunda, {formatar(d)}
                      </span>
                      {i === 0 && (
                        <span className="text-xs font-bold text-neon-green uppercase tracking-wide">
                          Próximo
                        </span>
                      )}
                    </div>
                  ))
                : // placeholder até o cálculo no cliente
                  Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-[46px] rounded-xl bg-dark/50 border border-dark-border animate-pulse"
                    />
                  ))}
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-3">
              <a
                href={SPEAK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-neon-green text-black font-bold text-sm hover:bg-neon-green/90 transition-all"
              >
                Entrar na sala
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="#inscricao"
                className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-lg border border-dark-border text-gray-300 font-semibold text-sm hover:border-neon-green/40 hover:text-white transition-all"
              >
                Receber o lembrete
              </Link>
            </div>
          </motion.div>

          {/* Presencial */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-dark-card border border-tech-blue/25 rounded-2xl p-7 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-tech-blue/10 border border-tech-blue/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-tech-blue" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg leading-tight">Presencial</h3>
                <p className="text-sm text-tech-blue">Curitiba, toda semana</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Os encontros presenciais rodam entre quatro casas parceiras da cidade:
            </p>

            <ul className="space-y-2 mb-6">
              {locais.map((l) => (
                <li
                  key={l}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 bg-dark/50 border border-dark-border text-sm text-gray-300"
                >
                  <MapPin className="w-4 h-4 text-gray-600 shrink-0" />
                  {l}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Link
                href="/agenda/"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-tech-blue/50 text-tech-blue font-bold text-sm hover:bg-tech-blue/10 hover:border-tech-blue transition-all"
              >
                Ver datas e locais na agenda
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
