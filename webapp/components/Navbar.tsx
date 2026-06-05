'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  nav,
  localeFromPath,
  LOCALES,
  LOCALE_LABELS,
  LOCALE_FLAGS,
  LOCALE_HOMES,
  type Locale,
} from '@/lib/i18n/messages'

interface NavLink {
  href: string
  label: string
  langTag?: 'PT'
}

function buildLinks(locale: Locale): NavLink[] {
  const m = nav[locale]
  if (locale === 'en') {
    return [
      { href: '/en/#about', label: m.about },
      { href: '/en/#method', label: m.methodology },
      { href: '/en/method/', label: m.formulafluente },
      { href: '/imersoes', label: m.immersions, langTag: 'PT' },
      { href: '/en/schedule/', label: m.agenda },
      { href: '/en/#tools', label: m.tools },
      { href: '/en/#partners', label: m.partners },
      { href: '/en/#how', label: m.howItWorks },
      { href: '/blog', label: m.blog, langTag: 'PT' },
    ]
  }
  if (locale === 'es') {
    return [
      { href: '/es/#about', label: m.about },
      { href: '/es/#method', label: m.methodology },
      { href: '/es/metodo/', label: m.formulafluente },
      { href: '/imersoes', label: m.immersions, langTag: 'PT' },
      { href: '/es/agenda/', label: m.agenda },
      { href: '/es/#tools', label: m.tools },
      { href: '/es/#partners', label: m.partners },
      { href: '/es/#how', label: m.howItWorks },
      { href: '/blog', label: m.blog, langTag: 'PT' },
    ]
  }
  return [
    { href: '/#sobre', label: m.about },
    { href: '/#metodologia', label: m.methodology },
    { href: '/ff', label: m.formulafluente },
    { href: '/imersoes', label: m.immersions },
    { href: '/agenda', label: m.agenda },
    { href: '/#ferramentas', label: m.tools },
    { href: '/#parceiros', label: m.partners },
    { href: '/#como-funciona', label: m.howItWorks },
    { href: '/blog', label: m.blog },
  ]
}

function ctaHref(locale: Locale): string {
  if (locale === 'en') return '/en/#signup'
  if (locale === 'es') return '/es/#signup'
  return '/#inscricao'
}

export default function Navbar() {
  const pathname = usePathname() ?? '/'
  const locale = localeFromPath(pathname)
  const m = nav[locale]
  const navLinks = buildLinks(locale)
  const homeHref = LOCALE_HOMES[locale]

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-dark/95 backdrop-blur-md border-b border-dark-border shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={homeHref} className="flex items-center gap-2 shrink-0">
          <div className="relative w-10 h-10">
            <Image
              src="/images/Logo-ETT.png"
              alt="Logo English Talk Time"
              fill
              className="object-contain"
              sizes="40px"
            />
          </div>
          <span className="font-bold text-white text-lg hidden sm:block">
            English <span className="text-neon-green">Talk</span> Time
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-neon-green transition-colors text-sm font-medium inline-flex items-baseline gap-0.5"
            >
              {link.label}
              {link.langTag && (
                <sup
                  className="text-[9px] font-bold tracking-wider text-gray-500 ml-0.5"
                  title="Page only available in Portuguese"
                  aria-label="Portuguese"
                >
                  {link.langTag}
                </sup>
              )}
            </Link>
          ))}
        </div>

        {/* Right side: language switcher + CTA */}
        <div className="flex items-center gap-3">
          {/* Language switcher (desktop) */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setLangOpen(!langOpen)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-dark-border text-gray-300 hover:text-neon-green hover:border-neon-green/30 transition-colors text-sm"
              aria-label={m.language}
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{LOCALE_FLAGS[locale]} {LOCALE_LABELS[locale]}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-32 bg-dark-card border border-dark-border rounded-lg shadow-xl overflow-hidden">
                {LOCALES.map((loc) => (
                  <Link
                    key={loc}
                    href={LOCALE_HOMES[loc]}
                    onClick={() => setLangOpen(false)}
                    className={cn(
                      'block px-3 py-2 text-sm transition-colors',
                      loc === locale
                        ? 'bg-neon-green/10 text-neon-green'
                        : 'text-gray-300 hover:bg-dark-border hover:text-white'
                    )}
                  >
                    {LOCALE_FLAGS[loc]} {LOCALE_LABELS[loc]}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href={ctaHref(locale)}
              className="px-4 py-2 rounded-lg bg-neon-green text-black font-bold text-sm hover:bg-neon-green/90 transition-all hover:shadow-neon-green whitespace-nowrap"
            >
              {m.cta}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-gray-300 hover:text-white transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-secondary border-t border-dark-border px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-gray-300 hover:text-neon-green transition-colors text-base font-medium py-1 inline-flex items-baseline gap-1"
            >
              {link.label}
              {link.langTag && (
                <sup
                  className="text-[10px] font-bold tracking-wider text-gray-500"
                  aria-label="Portuguese"
                >
                  {link.langTag}
                </sup>
              )}
            </Link>
          ))}

          {/* Language switcher (mobile) */}
          <div className="flex gap-2 pt-2 border-t border-dark-border">
            {LOCALES.map((loc) => (
              <Link
                key={loc}
                href={LOCALE_HOMES[loc]}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'flex-1 text-center px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  loc === locale
                    ? 'bg-neon-green/10 text-neon-green border border-neon-green/30'
                    : 'bg-dark-card text-gray-400 border border-dark-border'
                )}
              >
                {LOCALE_FLAGS[loc]} {LOCALE_LABELS[loc]}
              </Link>
            ))}
          </div>

          <Link
            href={ctaHref(locale)}
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-4 py-3 rounded-lg bg-neon-green text-black font-bold text-sm text-center hover:bg-neon-green/90 transition-all"
          >
            {m.cta}
          </Link>
        </div>
      )}
    </nav>
  )
}
