import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Instagram } from 'lucide-react'

const partnerLogos = [
  { src: '/images/logobeetools.webp', alt: 'BeeTools', width: 100 },
  { src: '/images/logo-cherrytop.jpeg', alt: 'Cherry Top', width: 90 },
  { src: '/images/coders_logo.jpg', alt: 'Coders', width: 100 },
  { src: '/images/logoiep.jpg', alt: 'IEP', width: 80 },
]

const links = [
  {
    title: 'Onde Praticar',
    items: [
      { label: 'Grupo de Conversação', href: '/conversacao/' },
      { label: 'Praticar Inglês em Curitiba', href: '/curitiba/' },
      { label: 'Conversação Online (segundas)', href: '/online/' },
      { label: 'Agenda completa', href: '/agenda/' },
    ],
  },
  {
    title: 'Programa',
    items: [
      { label: 'Sobre o ETT', href: '/#sobre' },
      { label: 'Metodologia · Fórmula Fluente', href: '/ff/' },
      { label: 'Imersões com Cherry Top', href: '/imersoes/' },
      { label: 'Blog ETT', href: '/blog/' },
    ],
  },
  {
    title: 'Parceiros',
    items: [
      { label: 'BeeTools', href: '/#parceiros' },
      { label: 'Cherry Top', href: '/#parceiros' },
      { label: 'Coders', href: '/#parceiros' },
      { label: 'IEP — Curitiba', href: '/#parceiros' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-dark-secondary border-t border-dark-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top row */}
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/Logo-ETT.png"
                  alt="Logo English Talk Time"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div>
                <div className="font-bold text-white leading-tight">English Talk Time</div>
                <div className="text-xs text-neon-green font-medium">ETT</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Programa de aceleração de inglês para profissionais de Tecnologia, Dados, IA e BI.
              Ecossistema DSSBR & GUBigData IA.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Github, label: 'GitHub' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-dark-border flex items-center justify-center text-gray-500 hover:text-neon-green hover:border-neon-green/30 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {links.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wide">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-gray-500 text-sm hover:text-neon-green transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Partner logos row */}
        <div className="border-t border-dark-border pt-10 mb-8">
          <p className="text-xs text-gray-600 text-center uppercase tracking-widest mb-6">
            Parceiros Oficiais
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partnerLogos.map((logo) => (
              <div
                key={logo.alt}
                className="relative h-10 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                style={{ width: logo.width }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes={`${logo.width}px`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>
            © {new Date().getFullYear()} English Talk Time (ETT) — DSSBR & GUBigData IA. Todos os direitos reservados.
          </span>
          <div className="flex gap-4">
            <Link href="/politica-privacidade/" className="hover:text-gray-400 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos-uso/" className="hover:text-gray-400 transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
