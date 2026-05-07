'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#metodologia', label: 'Metodologia' },
  { href: '/ff', label: 'Fórmula Fluente' },
  { href: '/#ferramentas', label: 'Ferramentas' },
  { href: '/#parceiros', label: 'Parceiros' },
  { href: '/#como-funciona', label: 'Como Funciona' },
  { href: '/#resultados', label: 'Resultados' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="relative w-10 h-10">
            <Image
              src="/images/Logo-ETT.png"
              alt="ETT Logo"
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
              className="text-gray-300 hover:text-neon-green transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/#inscricao"
            className="px-4 py-2 rounded-lg bg-neon-green text-black font-bold text-sm hover:bg-neon-green/90 transition-all hover:shadow-neon-green whitespace-nowrap"
          >
            Inscreva-se no próximo encontro gratuito
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-secondary border-t border-dark-border px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-gray-300 hover:text-neon-green transition-colors text-base font-medium py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#inscricao"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-4 py-3 rounded-lg bg-neon-green text-black font-bold text-sm text-center hover:bg-neon-green/90 transition-all"
          >
            Inscreva-se no próximo encontro gratuito
          </Link>
        </div>
      )}
    </nav>
  )
}
