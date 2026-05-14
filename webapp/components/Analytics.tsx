'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

const GA_MEASUREMENT_ID = 'G-4Q2GYMRY7F'

const CONSENT_STORAGE_KEY = 'ett-cookie-consent'
const CONSENT_EVENT = 'ett-consent-changed'

export type ConsentStatus = 'accepted' | 'rejected' | null

export function getConsentStatus(): ConsentStatus {
  if (typeof window === 'undefined') return null
  const v = window.localStorage.getItem(CONSENT_STORAGE_KEY)
  if (v === 'accepted' || v === 'rejected') return v
  return null
}

export function setConsentStatus(status: 'accepted' | 'rejected') {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(CONSENT_STORAGE_KEY, status)
  window.dispatchEvent(new Event(CONSENT_EVENT))
}

export { CONSENT_EVENT }

export default function Analytics() {
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    setAccepted(getConsentStatus() === 'accepted')
    const handler = () => setAccepted(getConsentStatus() === 'accepted')
    window.addEventListener(CONSENT_EVENT, handler)
    return () => window.removeEventListener(CONSENT_EVENT, handler)
  }, [])

  if (!accepted) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  )
}
