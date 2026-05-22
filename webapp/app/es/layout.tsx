import type { Metadata } from 'next'

const SITE_URL = 'https://englishtalktime.com.br'

export const metadata: Metadata = {
  title: 'ETT — Grupo de Conversación en Inglés para Profesionales Tech | Online y Curitiba',
  description:
    'Grupo de conversación en inglés con práctica de habla guiada y herramientas de aprendizaje con IA. Encuentros online semanales (todos los lunes) y presenciales en Curitiba, Brasil. Para profesionales de Tecnología, Datos, IA y BI de toda LATAM.',
  keywords: [
    'grupo de conversación en inglés',
    'club de conversación en inglés',
    'práctica de speaking en inglés',
    'inglés para profesionales tech',
    'inglés para data engineer',
    'inglés para desarrolladores',
    'inglés para AI engineer',
    'grupo de inglés online LATAM',
    'practicar inglés online gratis',
    'herramientas IA aprender inglés',
    'destrabar inglés hablado',
    'programa fluidez en inglés',
    'inglés mercado laboral internacional',
    'Fórmula Fluente',
    'English Talk Time',
    'ETT',
  ],
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
    locale: 'es_419',
    url: `${SITE_URL}/es/`,
    siteName: 'English Talk Time – ETT',
    title: 'ETT — Grupo de Conversación en Inglés para Profesionales Tech',
    description:
      'Encuentros semanales online + herramientas de aprendizaje con IA. Diseñado para profesionales de Tecnología, Datos, IA y BI de LATAM que apuntan al mercado internacional.',
    images: [
      {
        url: '/images/ETT-top01.png',
        width: 1200,
        height: 630,
        alt: 'English Talk Time — Grupo de conversación en inglés para profesionales tech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ETT — Grupo de Conversación en Inglés para Profesionales Tech',
    description:
      'Práctica de speaking online todos los lunes + herramientas de IA. Para tech, datos, IA y BI.',
    images: ['/images/ETT-top01.png'],
  },
}

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
