import Link from 'next/link'
import { ArrowRight, Globe, MapPin, Video, HelpCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { IEP_ENDERECO, IEP_MAPA } from '@/lib/agenda-events'
import { PRECO_ADESAO } from '@/lib/planos'
import { ProximosOnlineIntl, VoltaIntl } from '@/components/intl/EncontrosIntl'

/**
 * Página curta por idioma (/en/ e /es/) — decisão do Alessandro, 09/11/2026.
 *
 * Substitui as 6 rotas antigas, que descreviam um curso, tinham depoimentos
 * fictícios e ferramentas que não existem. Regras: só o que é verificável — o
 * que é o ETT, o encontro online de segunda (aberto, gratuito, sem cadastro), o
 * IEP Talks, e um FAQ pra quem é de fora. Nada de depoimento, promessa de
 * resultado, lista de ferramentas, preço de trilha, formulário ou imersão.
 * Datas e fuso: calculados no navegador (EncontrosIntl).
 */

const SPEAK_URL = 'https://ett-speak.vercel.app/'

type IntlLocale = 'en' | 'es'

const COPY = {
  en: {
    eyebrow: 'English Talk Time · Brazil',
    title: 'A Brazilian platform to help you practice more English',
    lead:
      'ETT brings together digital practice tools (the ETT Player), free conversation meetings and partners. It is not a course: there are no classes or levels to pass — it is support for your own practice.',
    ctaRoom: 'Join the room',
    ctaHow: 'How the online meeting works',
    aboutTitle: 'What ETT is',
    about: [
      {
        t: 'Practice tools',
        d: 'The ETT Player gathers the digital tools we built for daily practice. Its interface is in Portuguese.',
      },
      {
        t: 'Conversation meetings',
        d: 'A free online meeting every Monday and an in-person one in Curitiba on Saturdays. Open to anyone.',
      },
      {
        t: 'Partners',
        d: 'Courses, immersions and mentoring are offered by partner companies, not by ETT. Their programs are in Portuguese.',
      },
    ],
    onlineTitle: 'The online meeting — every Monday',
    onlineTime: '8:00–9:30 PM Brasília time (BRT, GMT-3)',
    onlinePoints: [
      'Free and open to anyone, from any country and at any level.',
      'No sign-up: the room runs in your browser on ETT Speak and only asks for your name and e-mail at the door — no account needed.',
      'The conversation happens in English.',
    ],
    nextDates: 'Next meetings',
    inPersonTitle: 'In person — IEP Talks',
    inPersonTime: 'Saturdays, 10:00 AM–12:00 PM Brasília time (BRT)',
    inPersonPlace: 'IEP — Instituto de Engenharia do Paraná',
    country: 'Brazil',
    map: 'Directions',
    faqTitle: 'Questions from outside Brazil',
    faq: [
      {
        q: 'What language is the meeting in?',
        a: 'English. Most participants and the moderation team are Brazilian, so you will hear a range of accents and levels.',
      },
      {
        q: 'Do I need to speak Portuguese?',
        a: 'Not for the meeting. The tools (ETT Player) and the rest of the site are in Portuguese.',
      },
      {
        q: 'Can I pay from outside Brazil?',
        a: `The meetings are always free. The tools in the ETT Player are open to try. The guided activation (one-on-one guidance, a practice plan and personalized material) costs R$ ${PRECO_ADESAO}, charged in Brazilian reais through our Brazilian checkout — PIX or card, if your card accepts payments in BRL.`,
      },
      {
        q: 'Is the rest of the site in English?',
        a: 'No — this page is the only one in English. The full site is in Portuguese.',
      },
    ],
    fullSite: 'Go to the full site (in Portuguese)',
  },
  es: {
    eyebrow: 'English Talk Time · Brasil',
    title: 'Una plataforma brasileña para que practiques más inglés',
    lead:
      'ETT reúne herramientas digitales de práctica (el ETT Player), encuentros de conversación gratuitos y socios. No es un curso: no hay clases ni niveles que aprobar — es apoyo para tu propia práctica.',
    ctaRoom: 'Entrar a la sala',
    ctaHow: 'Cómo funciona el encuentro online',
    aboutTitle: 'Qué es ETT',
    about: [
      {
        t: 'Herramientas de práctica',
        d: 'El ETT Player reúne las herramientas digitales que creamos para la práctica diaria. Su interfaz está en portugués.',
      },
      {
        t: 'Encuentros de conversación',
        d: 'Un encuentro online gratuito todos los lunes y uno presencial en Curitiba los sábados. Abiertos a cualquier persona.',
      },
      {
        t: 'Socios',
        d: 'Cursos, inmersiones y mentorías los ofrecen empresas socias, no ETT. Sus programas están en portugués.',
      },
    ],
    onlineTitle: 'El encuentro online — todos los lunes',
    onlineTime: '20:00–21:30, horario de Brasilia (BRT, GMT-3)',
    onlinePoints: [
      'Gratuito y abierto a cualquier persona, de cualquier país y nivel.',
      'Sin registro: la sala funciona en el navegador, en ETT Speak, y solo pide tu nombre y correo al entrar — no hace falta crear una cuenta.',
      'La conversación es en inglés.',
    ],
    nextDates: 'Próximos encuentros',
    inPersonTitle: 'Presencial — IEP Talks',
    inPersonTime: 'Sábados, 10:00–12:00, horario de Brasilia (BRT)',
    inPersonPlace: 'IEP — Instituto de Engenharia do Paraná',
    country: 'Brasil',
    map: 'Cómo llegar',
    faqTitle: 'Preguntas de quien está fuera de Brasil',
    faq: [
      {
        q: '¿En qué idioma es el encuentro?',
        a: 'En inglés. La mayoría de los participantes y del equipo de moderación es brasileña, así que escucharás distintos acentos y niveles.',
      },
      {
        q: '¿Necesito hablar portugués?',
        a: 'Para el encuentro, no. Las herramientas (ETT Player) y el resto del sitio están en portugués.',
      },
      {
        q: '¿Puedo pagar desde fuera de Brasil?',
        a: `Los encuentros son siempre gratuitos. Las herramientas del ETT Player están abiertas para probar. La activación acompañada (orientación individual, plan de práctica y material personalizado) cuesta R$ ${PRECO_ADESAO}, cobrados en reales brasileños por nuestro checkout brasileño — PIX o tarjeta, si tu tarjeta acepta pagos en BRL.`,
      },
      {
        q: '¿El resto del sitio está en español?',
        a: 'No — esta es la única página en español. El sitio completo está en portugués.',
      },
    ],
    fullSite: 'Ir al sitio completo (en portugués)',
  },
} as const

export default function LandingIntl({ locale }: { locale: IntlLocale }) {
  const c = COPY[locale]
  const base = `/${locale}/`

  return (
    <>
      <Navbar />
      <main className="bg-surface text-ink">
        {/* Hero */}
        <section className="pt-28 pb-14 md:pt-36 md:pb-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-red mb-4">
              {c.eyebrow}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">{c.title}</h1>
            <p className="text-lg text-ink-soft leading-relaxed mb-8">{c.lead}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={SPEAK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-red-deep text-white font-bold hover:bg-brand-red-deep/90 transition-all"
              >
                {c.ctaRoom}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`${base}#online`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-surface-line text-ink font-semibold hover:border-brand-red/50 hover:bg-surface-card transition-all"
              >
                {c.ctaHow}
              </a>
            </div>
          </div>
        </section>

        {/* O que é */}
        <section id="about" className="py-14 bg-surface-alt border-y border-surface-line scroll-mt-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">{c.aboutTitle}</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {c.about.map((item, i) => (
                <div
                  key={item.t}
                  id={i === 2 ? 'partners' : undefined}
                  className="rounded-2xl border border-surface-line bg-surface-card p-6 scroll-mt-20"
                >
                  <h3 className="font-bold text-ink mb-2">{item.t}</h3>
                  <p className="text-ink-muted leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Encontro online */}
        <section id="online" className="py-14 md:py-20 scroll-mt-20">
          <div className="container mx-auto px-4 max-w-5xl grid gap-10 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-brand-red mb-3">
                <Video className="w-5 h-5" />
                <VoltaIntl locale={locale} tipo="online" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{c.onlineTitle}</h2>
              <p className="font-semibold text-ink-soft mb-5">{c.onlineTime}</p>
              <ul className="space-y-3 mb-8">
                {c.onlinePoints.map((p) => (
                  <li key={p} className="flex gap-3 text-ink-muted leading-relaxed">
                    <Globe className="w-5 h-5 shrink-0 text-brand-red mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                id="room"
                href={SPEAK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-red-deep text-white font-bold hover:bg-brand-red-deep/90 transition-all scroll-mt-24"
              >
                {c.ctaRoom}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div>
              <h3 className="font-bold text-ink mb-4">{c.nextDates}</h3>
              <ProximosOnlineIntl locale={locale} />
            </div>
          </div>
        </section>

        {/* Presencial */}
        <section id="in-person" className="py-14 bg-surface-alt border-y border-surface-line scroll-mt-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex items-center gap-2 text-brand-red mb-3">
              <MapPin className="w-5 h-5" />
              <VoltaIntl locale={locale} tipo="presencial" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{c.inPersonTitle}</h2>
            <p className="font-semibold text-ink-soft mb-2">{c.inPersonTime}</p>
            <p className="text-ink-muted">{c.inPersonPlace}</p>
            <p className="text-ink-muted mb-4">
              {IEP_ENDERECO} · {c.country}
            </p>
            <a
              href={IEP_MAPA}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-red font-semibold underline underline-offset-4"
            >
              {c.map}
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-14 md:py-20 scroll-mt-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-brand-red" />
              {c.faqTitle}
            </h2>
            <dl className="space-y-4">
              {c.faq.map((f) => (
                <div key={f.q} className="rounded-2xl border border-surface-line bg-surface-card p-6">
                  <dt className="font-bold text-ink mb-2">{f.q}</dt>
                  <dd className="text-ink-muted leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 text-brand-red font-semibold underline underline-offset-4"
            >
              {c.fullSite}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
