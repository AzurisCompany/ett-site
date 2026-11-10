import type { Metadata } from 'next'

const SITE_URL = 'https://englishtalktime.com.br'

const TITLE = 'English Talk Time (ETT) — encuentros de conversación en inglés gratuitos desde Brasil'
const DESCRIPTION =
  'Plataforma brasileña de apoyo a la práctica del inglés: herramientas digitales, encuentros de conversación gratuitos y socios. Encuentro online todos los lunes, 20:00–21:30 hora de Brasilia — gratuito, abierto a todos, sin registro.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Substitui as keywords pt-BR herdadas do layout raiz.
  keywords: ['encuentro de conversación en inglés', 'practicar inglés online', 'grupo de conversación en inglés gratis', 'English Talk Time'],
  // hreflang só entre as três páginas equivalentes: /, /en/ e /es/.
  alternates: {
    canonical: `${SITE_URL}/es/`,
    languages: {
      'pt-BR': `${SITE_URL}/`,
      en: `${SITE_URL}/en/`,
      es: `${SITE_URL}/es/`,
      'x-default': `${SITE_URL}/`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: `${SITE_URL}/es/`,
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
const SET_LANG = "document.documentElement.lang='es'"

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: SET_LANG }} />
      {children}
    </>
  )
}
