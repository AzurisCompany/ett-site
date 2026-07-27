'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const logos = [
  { src: '/images/logoiep.jpg', alt: 'IEP — Instituto de Engenharia do Paraná', w: 70 },
  { src: '/images/utfpr-logo.svg', alt: 'UTFPR', w: 80 },
  { src: '/images/hardrock-logo.jpg', alt: 'Hard Rock Cafe', w: 70 },
  { src: '/images/habitat-mobilidade-logo.png', alt: 'Habitat — Sistema FIEP', w: 95 },
  { src: '/images/logobeetools.webp', alt: 'BeeTools', w: 95 },
  { src: '/images/coders_logo.jpg', alt: 'Coders', w: 90 },
  { src: '/images/logo-cherrytop.jpeg', alt: 'Cherry Top', w: 80 },
  { src: '/images/aprendendoingles-logo.png', alt: 'Aprendendo Inglês', w: 95 },
]

export default function ParceirosFaixa() {
  return (
    <section className="bg-dark border-y border-dark-border py-12">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-widest text-gray-600 mb-8">
          Casas que recebem os encontros e parceiros do programa
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-x-10 gap-y-7"
        >
          {logos.map((l) => (
            <div
              key={l.alt}
              className="relative h-9 opacity-45 hover:opacity-90 grayscale hover:grayscale-0 transition-all"
              style={{ width: l.w }}
            >
              <Image
                src={l.src}
                alt={l.alt}
                fill
                className="object-contain"
                sizes={`${l.w}px`}
              />
            </div>
          ))}
        </motion.div>

        <p className="text-center text-sm text-gray-600 mt-8">
          <Link href="/detalhes/#parceiros" className="hover:text-neon-green transition-colors">
            Conhecer cada parceiro →
          </Link>
        </p>
      </div>
    </section>
  )
}
