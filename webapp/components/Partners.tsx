'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ExternalLink, Handshake, ArrowRight } from 'lucide-react'

type Partner = {
  id: string
  name: string
  logo: string | null
  role: string
  description: string
  color: 'neon-green' | 'tech-blue'
  url: string | null
}

const partners: Partner[] = [
  {
    id: 'beetools',
    name: 'BeeTools',
    logo: '/images/logobeetools.webp',
    role: 'Base Estruturada',
    description:
      'Escola de inglês do amanhã com IA (BRAIn), realidade virtual e gamificação. Parceira oficial do Governo Federal (#TôComProf) e certificada ETS®. Aprendizado rápido e divertido para profissionais tech.',
    color: 'neon-green',
    url: 'https://www.beetools.com.br/',
  },
  {
    id: 'aprendendoingles',
    name: 'Aprendendo Inglês',
    logo: '/images/aprendendoingles-logo.png',
    role: 'Conteúdo & Estudo',
    description:
      'Plataforma brasileira de conteúdo gratuito para aprender inglês — dicas práticas, vídeos, músicas, histórias e cursos estruturados. Material de apoio para a jornada do aluno ETT entre os encontros.',
    color: 'tech-blue',
    url: 'https://www.aprendendoingles.com.br/',
  },
  {
    id: 'cherrytop',
    name: 'Cherry Top',
    logo: '/images/logo-cherrytop.jpeg',
    role: 'Imersão Intensiva',
    description:
      'Mais de 30 anos de experiência em imersão. Cursos intensivos no Brasil e nos EUA (Flórida). Alunos saltam de nível inicial para intermediário e de intermediário para avançado em poucas semanas.',
    color: 'tech-blue',
    url: 'https://cherrytop.com.br',
  },
  {
    id: 'coders',
    name: 'Coders',
    logo: '/images/coders_logo.jpg',
    role: 'Carreira Internacional',
    description:
      'Mentoria completa de carreira internacional. Profissionais de tech conseguem vagas no exterior em 30–45 dias, com salários até 5x maiores. LinkedIn otimizado, entrevistas e suporte para relocação.',
    color: 'neon-green',
    url: 'https://www.coders.com.br/',
  },
  {
    id: 'iep',
    name: 'IEP',
    logo: '/images/logoiep.jpg',
    role: 'Apoio Institucional',
    description:
      'Instituto de Engenharia do Paraná — apoio institucional centenário. Local oficial dos encontros presenciais English Talk Time em Curitiba/PR.',
    color: 'tech-blue',
    url: 'https://iep.org.br/',
  },
  {
    id: 'utfpr',
    name: 'UTFPR',
    logo: '/images/utfpr-logo.svg',
    role: 'Apoio Acadêmico',
    description:
      'Universidade Tecnológica Federal do Paraná — referência nacional em formação tecnológica. Parceria acadêmica que conecta o ETT à comunidade universitária de tech, engenharia e dados.',
    color: 'tech-blue',
    url: 'https://www.utfpr.edu.br/',
  },
  {
    id: 'hardrock',
    name: 'Hard Rock Cafe',
    logo: '/images/hardrock-logo.jpg',
    role: 'Networking & Experiência',
    description:
      'Parceiro de experiências sociais e networking do ETT. Encontros temáticos em um ambiente icônico, conectando profissionais tech em momentos descontraídos para praticar inglês na vida real.',
    color: 'neon-green',
    url: 'https://cafe.hardrock.com/curitiba/',
  },
  {
    id: 'habitat-mobilidade',
    name: 'Habitat Mobilidade',
    logo: '/images/habitat-mobilidade-logo.png',
    role: 'Ecossistema de Inovação',
    description:
      'Habitat de Inovação do Sistema FIEP voltado à mobilidade, dentro do Parque Tecnológico. Conecta o ETT à comunidade de startups, indústria e profissionais de tecnologia do Paraná.',
    color: 'tech-blue',
    url: 'https://www.sistemafiep.org.br/parquetecnologico/mobilidade/',
  },
  {
    id: 'formula-fluente',
    name: 'Fórmula Fluente',
    logo: null,
    role: 'Base Pedagógica',
    description:
      'Metodologia criada por Frank Florida que já formou mais de 365 mil brasileiros. Base de todas as ferramentas inteligentes do ETT: estudo em pequenos blocos, vocabulário relevante, repetição orientada e imersão distribuída.',
    color: 'neon-green',
    url: '/ff/',
  },
]

const colorMap = {
  'neon-green': {
    border: 'border-neon-green/30',
    bg: 'bg-neon-green/5',
    badge: 'bg-neon-green/15 text-neon-green border-neon-green/25',
    glow: 'hover:shadow-neon-green',
    icon: 'text-neon-green',
    dot: 'bg-neon-green',
  },
  'tech-blue': {
    border: 'border-tech-blue/30',
    bg: 'bg-tech-blue/5',
    badge: 'bg-tech-blue/15 text-tech-blue border-tech-blue/25',
    glow: 'hover:shadow-neon-blue',
    icon: 'text-tech-blue',
    dot: 'bg-tech-blue',
  },
}

export default function Partners() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="parceiros" className="section-padding bg-dark relative overflow-hidden">
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
            Parceiros & Autoridade
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Um ecossistema completo
            <br />
            <span className="gradient-text">de especialistas ao seu lado</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            O ETT não funciona sozinho — ele concentra os melhores parceiros em cada etapa
            da jornada: base, prática, imersão e carreira internacional.
          </p>
        </motion.div>

        {/* Partners grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {partners.map((partner, i) => {
            const colors = colorMap[partner.color as keyof typeof colorMap]
            const isHovered = hovered === partner.id
            const isExternal = partner.url?.startsWith('http')
            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => setHovered(partner.id)}
                onMouseLeave={() => setHovered(null)}
                className={`relative bg-dark-card border rounded-2xl p-6 card-hover transition-all duration-300 ${
                  partner.url ? 'cursor-pointer' : 'cursor-default'
                } ${
                  isHovered ? `${colors.border} ${colors.bg} ${colors.glow}` : 'border-dark-border'
                }`}
              >
                {/* Stretched link — cobre o card inteiro quando há URL */}
                {partner.url && (
                  <a
                    href={partner.url}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    aria-label={`Visitar site ${partner.name}`}
                    className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green/60"
                  />
                )}

                {/* Role badge */}
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${colors.badge}`}>
                  <span className={`w-1.5 h-1.5 rounded-full mr-2 ${colors.dot}`} />
                  {partner.role}
                </span>

                {/* Logo or text */}
                <div className="flex items-center gap-4 mb-4">
                  {partner.logo ? (
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white/5 border border-dark-border flex-shrink-0">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        fill
                        className="object-contain p-1"
                        sizes="64px"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-neon-green/10 border border-neon-green/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-neon-green font-black text-xl">FF</span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-white text-xl">{partner.name}</h3>
                    <div className={`text-xs font-medium ${colors.icon} flex items-center gap-1`}>
                      <ExternalLink className="w-3 h-3" />
                      {partner.url ? 'Visitar site do parceiro' : 'Parceiro Oficial ETT'}
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </motion.div>
            )
          })}

          {/* CTA — Seja um parceiro */}
          <motion.a
            href="https://forms.gle/yEFHStoPkVCSLuba8"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: partners.length * 0.1 }}
            className="group relative bg-gradient-to-br from-neon-green/10 via-dark-card to-tech-blue/10 border-2 border-dashed border-neon-green/40 rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[260px] hover:border-neon-green hover:shadow-neon-green transition-all duration-300 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-neon-green/15 border border-neon-green/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Handshake className="w-8 h-8 text-neon-green" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Seja um parceiro do ETT
            </h3>
            <p className="text-gray-400 text-sm mb-5 max-w-xs">
              Marca, escola, instituição ou empresa de tech?
              Some forças com a gente.
            </p>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neon-green text-dark font-semibold text-sm shadow-neon-green group-hover:gap-3 transition-all">
              Quero ser parceiro
              <ArrowRight className="w-4 h-4" />
            </span>
          </motion.a>
        </div>

        {/* Credibility bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border border-dark-border bg-dark-card"
        >
          {[
            { n: '+365 mil', l: 'alunos na Fórmula Fluente' },
            { n: '30+ anos', l: 'de imersão Cherry Top' },
            { n: '30-45 dias', l: 'para vaga no exterior (Coders)' },
            { n: 'Centenário', l: 'apoio institucional do IEP' },
          ].map((item) => (
            <div key={item.n} className="text-center py-2">
              <div className="text-xl font-bold text-neon-green">{item.n}</div>
              <div className="text-xs text-gray-500 mt-1">{item.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
