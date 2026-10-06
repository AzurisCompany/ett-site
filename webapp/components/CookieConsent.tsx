'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Cookie, X } from 'lucide-react'
import { getConsentStatus, setConsentStatus } from '@/components/Analytics'

export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (getConsentStatus() === null) setShow(true)
  }, [])

  const handleAccept = () => {
    setConsentStatus('accepted')
    setShow(false)
  }

  const handleReject = () => {
    setConsentStatus('rejected')
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed bottom-3 left-3 right-3 md:left-auto md:right-4 md:bottom-4 md:max-w-md z-[60] bg-dark-card border border-brand-red/30 rounded-2xl p-5 shadow-2xl backdrop-blur-md"
    >
      <button
        onClick={handleReject}
        aria-label="Fechar (rejeitar)"
        className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center flex-shrink-0">
          <Cookie className="w-5 h-5 text-brand-red" />
        </div>
        <div>
          <h3 className="font-bold text-white text-base leading-snug mb-1">
            Cookies &amp; Privacidade
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Usamos cookies de analytics (Google Analytics 4) pra entender de forma agregada
            como o site é usado e melhorar a experiência. Você pode aceitar ou recusar — o
            site funciona normalmente em qualquer caso.
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-500 mb-4 pl-13 sm:pl-0">
        Saiba mais na nossa{' '}
        <Link
          href="/politica-privacidade/"
          className="text-brand-red underline underline-offset-2 hover:text-brand-red/80"
        >
          Política de Privacidade
        </Link>
        .
      </p>

      <div className="flex flex-col-reverse sm:flex-row gap-2">
        <button
          onClick={handleReject}
          className="px-4 py-2 rounded-lg border border-dark-border text-gray-300 text-sm font-medium hover:border-brand-red/30 hover:bg-dark-secondary transition-colors"
        >
          Rejeitar
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-2 rounded-lg bg-brand-red-deep text-white text-sm font-bold hover:bg-brand-red-deep/90 transition-colors"
        >
          Aceitar cookies
        </button>
      </div>
    </div>
  )
}
