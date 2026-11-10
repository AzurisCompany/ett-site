import type { Metadata } from 'next'

const SITE_URL = 'https://englishtalktime.com.br'

const TITLE = 'English Talk Time (ETT) — free English conversation meetings from Brazil'
const DESCRIPTION =
  'A Brazilian platform that supports English practice: digital tools, free conversation meetings and partners. Online meeting every Monday, 8–9:30 PM Brasília time — free, open to anyone, no sign-up.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Substitui as keywords pt-BR herdadas do layout raiz.
  keywords: ['English conversation meeting', 'practice English online', 'free English conversation group', 'English speaking practice Brazil', 'English Talk Time'],
  // hreflang só entre as três páginas equivalentes: /, /en/ e /es/.
  alternates: {
    canonical: `${SITE_URL}/en/`,
    languages: {
      'pt-BR': `${SITE_URL}/`,
      en: `${SITE_URL}/en/`,
      es: `${SITE_URL}/es/`,
      'x-default': `${SITE_URL}/`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${SITE_URL}/en/`,
    siteName: 'English Talk Time – ETT',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/images/og-ett-2026.png', width: 1200, height: 630, alt: 'English Talk Time' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/images/og-ett-2026.png'],
  },
}

/**
 * <html lang>: o layout raiz (app/layout.tsx) fixa lang="pt-BR" pra todo o
 * site, e separar os idiomas em root layouts próprios exigiria reestruturar o
 * app inteiro (route groups) — risco alto pra 2 páginas. Contorno: este script
 * inline troca o atributo assim que o HTML é lido.
 * LIMITAÇÃO: o HTML estático servido ainda diz lang="pt-BR"; leitores de tela e
 * navegadores pegam o valor corrigido (o script roda antes da pintura), mas
 * robôs que não executam JS veem pt-BR — o hreflang e o og:locale compensam.
 */
const SET_LANG = "document.documentElement.lang='en'"

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: SET_LANG }} />
      {children}
    </>
  )
}
