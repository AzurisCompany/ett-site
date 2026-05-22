import type { Metadata } from 'next'

const SITE_URL = 'https://englishtalktime.com.br'

export const metadata: Metadata = {
  title: 'La Fórmula Fluente — Método Científico de Fluidez en Inglés | ETT',
  description:
    'El método Fórmula Fluente: por qué algunos llegan a la fluidez en meses y otros pasan años trabados. Threshold + Inmersión = Fluidez. Adaptado de Frank Florida (13 idiomas, +365.000 estudiantes).',
  keywords: [
    'método fluidez inglés',
    'fórmula fluente',
    'cómo ser fluido en inglés',
    'threshold inglés',
    'vocabulario alta frecuencia inglés',
    'método frank florida',
    'fluidez inglés profesionales tech',
    'método científico aprender inglés',
  ],
  alternates: {
    canonical: `${SITE_URL}/es/metodo/`,
    languages: {
      'pt-BR': `${SITE_URL}/ff/`,
      en: `${SITE_URL}/en/method/`,
      es: `${SITE_URL}/es/metodo/`,
      'x-default': `${SITE_URL}/ff/`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_419',
    url: `${SITE_URL}/es/metodo/`,
    siteName: 'English Talk Time – ETT',
    title: 'La Fórmula Fluente — Threshold + Inmersión = Fluidez',
    description:
      'Método científico de fluidez en inglés adaptado de Frank Florida — 13 idiomas, +365.000 estudiantes formados.',
    images: [
      {
        url: '/images/ETT-top01.webp',
        width: 1200,
        height: 630,
        alt: 'La Fórmula Fluente — Método de fluidez en inglés',
      },
    ],
  },
}

export default function EsMetodoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
