import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Instagram } from 'lucide-react'
import { footer as footerMessages, type Locale } from '@/lib/i18n/messages'

const partnerLogos = [
  { src: '/images/logobeetools.webp', alt: 'BeeTools', width: 100 },
  { src: '/images/logo-cherrytop.jpeg', alt: 'Cherry Top', width: 90 },
  { src: '/images/coders_logo.jpg', alt: 'Coders', width: 100 },
  { src: '/images/logoiep.jpg', alt: 'IEP', width: 80 },
]

function buildLinks(locale: Locale) {
  const m = footerMessages[locale]
  if (locale === 'en' || locale === 'es') {
    const prefix = locale === 'en' ? '/en' : '/es'
    return [
      {
        title: m.whereToPractice.title,
        items: [
          { label: m.whereToPractice.conversation, href: `${prefix}/#about` },
          { label: m.whereToPractice.online, href: `${prefix}/#online` },
          { label: m.whereToPractice.curitiba, href: '/curitiba/' },
          { label: m.whereToPractice.agendaFull, href: '/agenda/' },
        ],
      },
      {
        title: m.program.title,
        items: [
          { label: m.program.about, href: `${prefix}/#about` },
          { label: m.program.methodology, href: '/ff/' },
          { label: m.program.immersions, href: '/imersoes/' },
          { label: m.program.blog, href: '/blog/' },
        ],
      },
      {
        title: m.partners.title,
        items: [
          { label: m.partners.beetools, href: `${prefix}/#partners` },
          { label: m.partners.cherrytop, href: `${prefix}/#partners` },
          { label: m.partners.coders, href: `${prefix}/#partners` },
          { label: m.partners.iep, href: `${prefix}/#partners` },
        ],
      },
    ]
  }
  return [
    {
      title: m.whereToPractice.title,
      items: [
        { label: m.whereToPractice.conversation, href: '/conversacao/' },
        { label: m.whereToPractice.curitiba, href: '/curitiba/' },
        { label: m.whereToPractice.online, href: '/online/' },
        { label: m.whereToPractice.agendaFull, href: '/agenda/' },
      ],
    },
    {
      title: m.program.title,
      items: [
        { label: m.program.about, href: '/#sobre' },
        { label: m.program.methodology, href: '/ff/' },
        { label: m.program.immersions, href: '/imersoes/' },
        { label: m.program.blog, href: '/blog/' },
      ],
    },
    {
      title: m.partners.title,
      items: [
        { label: m.partners.beetools, href: '/#parceiros' },
        { label: m.partners.cherrytop, href: '/#parceiros' },
        { label: m.partners.coders, href: '/#parceiros' },
        { label: m.partners.iep, href: '/#parceiros' },
      ],
    },
  ]
}

interface FooterProps {
  locale?: Locale
}

export default function Footer({ locale = 'pt-BR' }: FooterProps) {
  const m = footerMessages[locale]
  const links = buildLinks(locale)
  const privacyHref = '/politica-privacidade/'
  const termsHref = '/termos-uso/'
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
              {m.tagline}
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
            {m.partnersOfficial}
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
            © {new Date().getFullYear()} English Talk Time (ETT) — DSSBR & GUBigData IA. {m.rights}
          </span>
          <div className="flex gap-4">
            <Link href={privacyHref} className="hover:text-gray-400 transition-colors">
              {m.privacy}
            </Link>
            <Link href={termsHref} className="hover:text-gray-400 transition-colors">
              {m.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
