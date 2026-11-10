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
  /** Usados só no menu pt-BR da home simplificada. */
  pricing: string
  program: string
  conversation: string
  /** Âncoras da página curta EN/ES (/en/, /es/) — 09/11/2026. */
  online: string
  inPerson: string
  faq: string
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
    pricing: 'Preços',
    program: 'Sobre o ETT',
    conversation: 'Conversação',
    online: 'Encontro online',
    inPerson: 'Presencial',
    faq: 'Perguntas',
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
    cta: 'Join the room',
    language: 'Language',
    pricing: 'Pricing',
    program: 'The program',
    conversation: 'Conversation',
    online: 'Online meeting',
    inPerson: 'In person',
    faq: 'FAQ',
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
    cta: 'Entrar a la sala',
    language: 'Idioma',
    pricing: 'Precios',
    program: 'El programa',
    conversation: 'Conversación',
    online: 'Encuentro online',
    inPerson: 'Presencial',
    faq: 'Preguntas',
  },
}

export const footer: Record<Locale, FooterMessages> = {
  'pt-BR': {
    tagline:
      'Plataforma de apoio à prática do inglês: ferramentas, encontros de conversação e parceiros. Mantida pela comunidade DSSBR & GUBigData IA.',
    whereToPractice: {
      title: 'Onde Praticar',
      conversation: 'Grupo de Conversação',
      curitiba: 'Praticar Inglês em Curitiba',
      online: 'Conversação Online (segundas)',
      agendaFull: 'Agenda completa',
    },
    program: {
      title: 'O ETT',
      about: 'Sobre o ETT',
      methodology: 'Metodologia · Fórmula Fluente',
      immersions: 'Imersões de parceiros',
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
      'A Brazilian platform that supports English practice: tools, conversation meetings and partners. Run by the DSSBR & GUBigData IA community.',
    whereToPractice: {
      title: 'Where to practice',
      conversation: 'What ETT is',
      curitiba: 'In person in Curitiba (PT)',
      online: 'Online meeting (Mondays)',
      agendaFull: 'Full schedule (PT)',
    },
    program: {
      title: 'ETT',
      about: 'About ETT',
      methodology: 'Fórmula Fluente (PT)',
      immersions: 'Partner immersions (PT)',
      blog: 'ETT Blog (PT)',
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
      'Plataforma brasileña de apoyo a la práctica del inglés: herramientas, encuentros de conversación y socios. Mantenida por la comunidad DSSBR & GUBigData IA.',
    whereToPractice: {
      title: 'Dónde practicar',
      conversation: 'Qué es ETT',
      curitiba: 'Presencial en Curitiba (PT)',
      online: 'Encuentro online (lunes)',
      agendaFull: 'Agenda completa (PT)',
    },
    program: {
      title: 'ETT',
      about: 'Sobre ETT',
      methodology: 'Fórmula Fluente (PT)',
      immersions: 'Inmersiones de socios (PT)',
      blog: 'Blog ETT (PT)',
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
