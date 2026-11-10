import Image from 'next/image'
import Link from 'next/link'
import { footer as footerMessages, type Locale } from '@/lib/i18n/messages'
import { parceiros } from '@/lib/parceiros'

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
        // A seção "Sobre" saiu da home em 26/07 e vive em /detalhes/.
        { label: m.program.about, href: '/detalhes/#sobre' },
        { label: 'Ferramentas', href: '/ferramentas/' },
        { label: m.program.methodology, href: '/ff/' },
        { label: m.program.immersions, href: '/imersoes/' },
        { label: m.program.blog, href: '/blog/' },
      ],
    },
    {
      title: m.partners.title,
      // Lista completa de lib/parceiros.ts (antes eram só 4, todos pro mesmo /#parceiros).
      items: parceiros.map((p) => ({ label: p.nome, href: p.url ?? '/#parceiros' })),
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
    <footer className="tema-escuro bg-surface-alt border-t border-surface-line pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top row */}
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-5">
              <Image
                src="/images/ett-logo-institucional-negativa.svg"
                alt="English Talk Time — plataforma de apoio à prática do inglês"
                width={160}
                height={84}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-ink-subtle text-sm leading-relaxed mb-5">
              {m.tagline}
            </p>
            {/* Ícones de redes removidos em 09/11/2026: não há perfis do ETT ainda. */}
          </div>

          {/* Link columns */}
          {links.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-ink text-sm mb-4 uppercase tracking-wide">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-ink-subtle text-sm hover:text-brand-red transition-colors"
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
        <div className="border-t border-surface-line pt-10 mb-8">
          <p className="text-xs text-ink-faint text-center uppercase tracking-widest mb-6">
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
        <div className="border-t border-surface-line pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-faint">
          <span>
            © {new Date().getFullYear()} English Talk Time (ETT) — DSSBR & GUBigData IA. {m.rights}
          </span>
          <div className="flex gap-4">
            <Link href={privacyHref} className="hover:text-ink-muted transition-colors">
              {m.privacy}
            </Link>
            <Link href={termsHref} className="hover:text-ink-muted transition-colors">
              {m.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
