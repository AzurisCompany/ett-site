export type Locale = 'pt-BR' | 'en' | 'es'

export const LOCALES: Locale[] = ['pt-BR', 'en', 'es']

export const LOCALE_LABELS: Record<Locale, string> = {
  'pt-BR': 'PT',
  en: 'EN',
  es: 'ES',
}

export const LOCALE_FLAGS: Record<Locale, string> = {
  'pt-BR': '🇧🇷',
  en: '🇺🇸',
  es: '🌎',
}

export const LOCALE_HOMES: Record<Locale, string> = {
  'pt-BR': '/',
  en: '/en/',
  es: '/es/',
}

export function localeFromPath(pathname: string): Locale {
  if (pathname.startsWith('/en/') || pathname === '/en') return 'en'
  if (pathname.startsWith('/es/') || pathname === '/es') return 'es'
  return 'pt-BR'
}

export interface NavMessages {
  about: string
  methodology: string
  formulafluente: string
  immersions: string
  agenda: string
  tools: string
  partners: string
  howItWorks: string
  blog: string
  cta: string
  language: string
}

export interface FooterMessages {
  tagline: string
  whereToPractice: { title: string; conversation: string; curitiba: string; online: string; agendaFull: string }
  program: { title: string; about: string; methodology: string; immersions: string; blog: string }
  partners: { title: string; beetools: string; cherrytop: string; coders: string; iep: string }
  partnersOfficial: string
  rights: string
  privacy: string
  terms: string
}

export const nav: Record<Locale, NavMessages> = {
  'pt-BR': {
    about: 'Sobre',
    methodology: 'Metodologia',
    formulafluente: 'Fórmula Fluente',
    immersions: 'Imersões',
    agenda: 'Agenda',
    tools: 'Ferramentas',
    partners: 'Parceiros',
    howItWorks: 'Como Funciona',
    blog: 'Blog',
    cta: 'Tenho Interesse',
    language: 'Idioma',
  },
  en: {
    about: 'About',
    methodology: 'Method',
    formulafluente: 'Fluent Formula',
    immersions: 'Immersions',
    agenda: 'Schedule',
    tools: 'Tools',
    partners: 'Partners',
    howItWorks: 'How It Works',
    blog: 'Blog',
    cta: 'I want in',
    language: 'Language',
  },
  es: {
    about: 'Sobre',
    methodology: 'Metodología',
    formulafluente: 'Fórmula Fluente',
    immersions: 'Inmersiones',
    agenda: 'Agenda',
    tools: 'Herramientas',
    partners: 'Socios',
    howItWorks: 'Cómo funciona',
    blog: 'Blog',
    cta: 'Quiero participar',
    language: 'Idioma',
  },
}

export const footer: Record<Locale, FooterMessages> = {
  'pt-BR': {
    tagline:
      'Programa de aceleração de inglês para profissionais de Tecnologia, Dados, IA e BI. Ecossistema DSSBR & GUBigData IA.',
    whereToPractice: {
      title: 'Onde Praticar',
      conversation: 'Grupo de Conversação',
      curitiba: 'Praticar Inglês em Curitiba',
      online: 'Conversação Online (segundas)',
      agendaFull: 'Agenda completa',
    },
    program: {
      title: 'Programa',
      about: 'Sobre o ETT',
      methodology: 'Metodologia · Fórmula Fluente',
      immersions: 'Imersões com Cherry Top',
      blog: 'Blog ETT',
    },
    partners: {
      title: 'Parceiros',
      beetools: 'BeeTools',
      cherrytop: 'Cherry Top',
      coders: 'Coders',
      iep: 'IEP — Curitiba',
    },
    partnersOfficial: 'Parceiros Oficiais',
    rights: 'Todos os direitos reservados.',
    privacy: 'Política de Privacidade',
    terms: 'Termos de Uso',
  },
  en: {
    tagline:
      'English acceleration program for Tech, Data, AI and BI professionals. Part of the DSSBR & GUBigData IA ecosystem.',
    whereToPractice: {
      title: 'Where to practice',
      conversation: 'Conversation Group',
      curitiba: 'In-person in Curitiba (BR)',
      online: 'Online conversation (Mondays)',
      agendaFull: 'Full schedule',
    },
    program: {
      title: 'Program',
      about: 'About ETT',
      methodology: 'Method · Fluent Formula',
      immersions: 'Immersions with Cherry Top',
      blog: 'ETT Blog',
    },
    partners: {
      title: 'Partners',
      beetools: 'BeeTools',
      cherrytop: 'Cherry Top',
      coders: 'Coders',
      iep: 'IEP — Curitiba',
    },
    partnersOfficial: 'Official Partners',
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
  },
  es: {
    tagline:
      'Programa de aceleración de inglés para profesionales de Tecnología, Datos, IA y BI. Ecosistema DSSBR & GUBigData IA.',
    whereToPractice: {
      title: 'Dónde practicar',
      conversation: 'Grupo de Conversación',
      curitiba: 'Presencial en Curitiba (BR)',
      online: 'Conversación online (lunes)',
      agendaFull: 'Agenda completa',
    },
    program: {
      title: 'Programa',
      about: 'Sobre ETT',
      methodology: 'Metodología · Fórmula Fluente',
      immersions: 'Inmersiones con Cherry Top',
      blog: 'Blog ETT',
    },
    partners: {
      title: 'Socios',
      beetools: 'BeeTools',
      cherrytop: 'Cherry Top',
      coders: 'Coders',
      iep: 'IEP — Curitiba',
    },
    partnersOfficial: 'Socios Oficiales',
    rights: 'Todos los derechos reservados.',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Uso',
  },
}
