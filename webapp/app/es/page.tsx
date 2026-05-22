import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  ArrowRight,
  Zap,
  Cpu,
  Globe,
  Clock,
  TrendingUp,
  Users,
  Brain,
  Headphones,
  Film,
  Bot,
  Trophy,
  CheckCircle2,
  MessageSquare,
  Wifi,
  Plane,
  Repeat2,
  Radio,
  PenLine,
  Printer,
  Database,
  BookOpen,
  Quote,
  Star,
  Target,
  BarChart3,
} from 'lucide-react'

const SITE_URL = 'https://englishtalktime.com.br'
const LEAD_FORM_URL = 'https://forms.gle/jpK8bR4houvAXTwm9'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/es/#webpage`,
      url: `${SITE_URL}/es/`,
      name: 'ETT — Grupo de Conversación en Inglés para Profesionales Tech',
      inLanguage: 'es',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Español', item: `${SITE_URL}/es/` },
      ],
    },
    {
      '@type': 'Service',
      serviceType: 'Grupo de Conversación en Inglés',
      name: 'English Talk Time — Práctica de speaking en inglés para profesionales tech',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: [
        { '@type': 'Country', name: 'América Latina' },
        { '@type': 'VirtualLocation', name: 'Online' },
      ],
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: LEAD_FORM_URL,
      },
    },
  ],
}

const stats = [
  { value: '300h', label: 'práctica estructurada', icon: Clock },
  { value: '3.000', label: 'palabras hasta fluidez', icon: TrendingUp },
  { value: '1h/día', label: 'inmersión diaria', icon: Cpu },
  { value: '5+', label: 'socios especializados', icon: Globe },
]

const valueProps = [
  {
    icon: MessageSquare,
    title: 'Práctica de habla guiada',
    desc: 'Encuentros semanales con simulaciones, role-play, storytelling y escenarios reales. No es small talk al azar — cada sesión tiene un plan para que realmente hables.',
  },
  {
    icon: Brain,
    title: 'Herramientas con IA',
    desc: 'Diagnóstico de vocabulario, revisión inteligente, estudio con series y subtítulos, biblioteca de audiolibros, simulador de prompts con ChatGPT, diario. Un sistema completo.',
  },
  {
    icon: Users,
    title: 'Comunidad enfocada en tech',
    desc: 'Diseñado para Data Engineers, BI Analysts, DevOps, AI Engineers y profesionales Cloud. Vocabulario, role-plays y conversaciones coinciden con tu contexto laboral real.',
  },
  {
    icon: Trophy,
    title: 'Método Fórmula Fluente',
    desc: 'Adaptado del método de Frank Florida — 13 idiomas, +365.000 estudiantes brasileños formados. Base científica: vocabulario de alta frecuencia + threshold + inmersión distribuida.',
  },
]

const tools = [
  { icon: BarChart3, name: 'Diagnóstico de Vocabulario', desc: 'Identifica tus brechas y arma un plan personalizado de 3.000 palabras. Se enfoca en el 20% que genera el 80% de los resultados.', highlight: true },
  { icon: Repeat2, name: 'Revisión Inteligente', desc: '10 palabras nuevas/día + revisión selectiva de las difíciles del día anterior. Combina avance y consolidación en una rutina diaria.' },
  { icon: Film, name: 'Series con Subtítulos', desc: 'Estudia con episodios de TV ajustados a tu nivel. Marca palabras desconocidas, repite frases, entrena escucha y habla con apoyo visual.', highlight: true },
  { icon: BookOpen, name: 'AudioLibro', desc: 'Lectura guiada con audiolibros de Lit2Go (Universidad de Florida) — clásicos con audio profesional, vocabulario mapeado para tu nivel.' },
  { icon: Radio, name: 'AudioHub', desc: 'Radios, noticias y talk shows en inglés para nivel intermedio y avanzado. Exposición continua durante el día — viaje, gimnasio, fila.' },
  { icon: PenLine, name: 'Diario ETT', desc: 'Diario escrito, hablado y de sentimientos. Convierte vocabulario en expresión personal — qué hiciste, qué harás, cómo te sientes — en inglés.' },
  { icon: Printer, name: 'Material Impreso', desc: 'Cuadernos, listas de palabras, planes de estudio y actividades "Tell me about..." — conectados vía QR Code. La escritura táctil refuerza la memoria.' },
  { icon: Database, name: 'Sistema de Recomendación', desc: 'ClickHouse + IA. Usa datos de uso, palabras clicadas, errores y contexto profesional para generar flashcards y prioridades personalizadas.', highlight: true },
  { icon: Bot, name: 'Simulador con IA', desc: 'Genera prompts de ChatGPT para simular escenarios reales: entrevistas, dailys, system design, negociación salarial.', highlight: true },
  { icon: Trophy, name: 'ETT GameZone', desc: 'Niveles (Principiante → Intermedio → Avanzado → Fluido → Global Pro), puntos, badges, leaderboard semanal y jackpot mensual.' },
]

const testimonials = [
  {
    name: 'Rodrigo M.',
    role: 'Data Engineer — remoto para empresa holandesa',
    text: 'Estudié inglés durante 5 años y me trababa en la primera reunión. Con ETT y los encuentros del English Talk Time, empecé a hablar de verdad en 3 meses. La herramienta de vocabulario me mostró exactamente qué palabras técnicas necesitaba — dejé de perder tiempo estudiando lo que ya sabía.',
    tag: 'Carrera internacional',
  },
  {
    name: 'Fernanda S.',
    role: 'Analista de BI — São Paulo, Brasil',
    text: 'Lo que me trababa no era gramática, era el miedo. El ambiente de ETT es completamente seguro para equivocarse. Los role-plays de entrevista me prepararon tanto que cuando hice la entrevista real para una consultora americana, me sentí en casa. Conseguí el puesto a los 45 días de empezar el programa.',
    tag: 'Primera entrevista en inglés',
  },
  {
    name: 'Carlos A.',
    role: 'DevOps Engineer — Comunidad DSSBR',
    text: 'El sistema de diagnóstico de ETT fue un choque de realidad en el buen sentido. Pensaba que sabía bastante inglés, pero FluenteLevel me mostró las brechas exactas en el vocabulario técnico que necesitaba. En 2 meses mi LinkedIn en inglés ya atraía reclutadores del exterior.',
    tag: 'Diagnóstico + LinkedIn',
  },
  {
    name: 'Priya T.',
    role: 'ML Engineer — GUBigData IA',
    text: 'La metodología de estudiar en bloques pequeños lo cambió todo para mí. 1 hora por día dividida en vocabulario, serie con subtítulos y diario hablado — parece poco pero los resultados llegan rápido. En 4 meses pasé de "entiendo pero no hablo" a participar activamente en reuniones internacionales.',
    tag: 'Rutina de 1h/día',
  },
]

const metrics = [
  { icon: Clock, value: '300h', label: 'Trayectoria estructurada completa', desc: 'Del inglés trabado al funcional con método y constancia.', color: 'green' as const },
  { icon: BookOpen, value: '3.000', label: 'Palabras-meta de vocabulario', desc: 'Las 3.000 palabras más relevantes para tu carrera tech.', color: 'blue' as const },
  { icon: Target, value: '60%', label: 'de cualquier texto cubierto', desc: 'Con apenas las 250 palabras más comunes del inglés.', color: 'green' as const },
  { icon: Zap, value: '95%', label: 'de comprensión de conversaciones', desc: 'Con 1.000 palabras + cognados en contexto real.', color: 'blue' as const },
  { icon: TrendingUp, value: '10x', label: 'palabras por día = fluidez', desc: '10 meses con 10 palabras/día. 5 meses con 20 palabras/día.', color: 'green' as const },
  { icon: Trophy, value: '5x', label: 'aumento salarial potencial', desc: 'Salarios hasta 5x mayores en puestos internacionales (datos Coders).', color: 'blue' as const },
]

const howItWorks = [
  { n: '01', title: 'Regístrate', desc: 'Registro gratuito. Recibes el link del próximo encuentro y el material de bienvenida.' },
  { n: '02', title: 'Participa', desc: 'Online todos los lunes a las 20h BRT (GMT-3). Conversación estructurada, no chat al azar.' },
  { n: '03', title: 'Practica diariamente', desc: 'Usa las herramientas con IA 1h/día entre los encuentros para consolidar vocabulario y pronunciación.' },
  { n: '04', title: 'Avanza de nivel', desc: 'Pasa de "trabado" al inglés funcional para el mercado internacional en meses, no años.' },
]

const faqs = [
  {
    q: '¿Cómo funciona el grupo de conversación online?',
    a: 'Todos los lunes de 20h a 21h30 BRT (GMT-3, hora de Brasilia) hacemos una sesión de conversación en inglés estructurada vía Google Meet. Los temas se anuncian con anticipación (ej.: "interview self-pitch", "explicar un bug a un senior dev", "presentar un dashboard"). Sub-sesiones en parejas y luego debrief grupal. Nada de small talk al azar.',
  },
  {
    q: '¿Tengo que pagar para participar?',
    a: 'Los encuentros semanales son gratuitos. ETT tiene capas pagas opcionales: inmersiones intensivas (Curitiba/Brasil y Florida/EE.UU.), mentoría de carrera vía Coders, y acceso premium a las herramientas con IA.',
  },
  {
    q: '¿Qué nivel de inglés necesito?',
    a: 'A2 (básico-intermedio) o más alto funciona bien. Aunque te sientas completamente trabado, puedes participar — las sesiones están diseñadas para que hables, no para ser evaluado. A los principiantes los dirigimos primero a la base estructurada de BeeTools.',
  },
  {
    q: 'Entiendo inglés pero no puedo hablar — ¿esto me ayuda?',
    a: 'Ese es exactamente el público objetivo. El bloqueo es miedo y falta de práctica, no de conocimiento. La combinación de comunidad segura (sin juicio), simulaciones realistas (entrevista, daily, demo, networking) y herramientas de IA destraba sistemáticamente el habla.',
  },
  {
    q: '¿Preparan entrevistas técnicas en inglés?',
    a: 'Sí. La preparación de entrevistas es un escenario recurrente: entrevista técnica, self-pitch, system design en inglés, negociación salarial. La herramienta AI Prompt también genera prompts de ChatGPT para practicar entre encuentros. Para mentoría más profunda, nuestro socio Coders ofrece mentoría 1:1 de carrera internacional.',
  },
]

export default function EsHome() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="bg-dark min-h-screen">
        {/* HERO */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0">
            <Image
              src="/images/ETT-top01.webp"
              alt="English Talk Time — Grupo de conversación en inglés para profesionales tech"
              fill
              className="object-cover"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark/85 via-dark/75 to-dark" />
            <div className="absolute inset-0 hero-grid opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/60" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/10 text-neon-green text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              <span>+365.000 estudiantes ya acelerados con la Fórmula Fluente</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
              Del <span className="neon-green">inglés trabado</span>{' '}
              al <span className="neon-blue">inglés funcional</span>{' '}
              <br className="hidden md:block" />
              para el mercado internacional tech
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              <span className="text-white font-semibold">Grupo de conversación en inglés</span> para
              profesionales tech que quieren <span className="text-neon-green font-medium">destrabar el habla</span> y{' '}
              <span className="text-tech-blue font-medium">llegar a la fluidez</span>.
              Práctica guiada + herramientas con IA, en una rutina diaria estructurada.
              Encuentros <span className="text-white">online (todos los lunes)</span> y{' '}
              <span className="text-white">presenciales en Curitiba, Brasil</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="#signup"
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-neon-green text-black font-bold text-base sm:text-lg hover:bg-neon-green/90 transition-all hover:shadow-neon-green-lg"
              >
                Participar del próximo encuentro gratis
              </Link>
              <Link
                href="#tools"
                className="w-full sm:w-auto px-8 py-4 rounded-lg border border-tech-blue/50 text-tech-blue font-bold text-base sm:text-lg hover:bg-tech-blue/10 hover:border-tech-blue transition-all"
              >
                Ver las herramientas con IA
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1 px-4 py-3 rounded-xl bg-dark-card/80 border border-dark-border backdrop-blur-sm"
                >
                  <stat.icon className="w-4 h-4 text-neon-green mb-1" />
                  <span className="text-xl font-bold text-neon-green">{stat.value}</span>
                  <span className="text-xs text-gray-400 text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT / VALUE PROPS */}
        <section id="about" className="section-padding bg-dark-secondary border-y border-dark-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
                Por qué ETT
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                No es otro curso de inglés. <span className="gradient-text">Es un ecosistema de práctica.</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Estudiaste inglés por años. Lo entiendes. Pero cuando es hora de hablar en una reunión
                o entrevista, te trabas. ETT está diseñado específicamente para ese bloqueo.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {valueProps.map((vp, i) => (
                <div key={i} className="bg-dark-card border border-dark-border rounded-2xl p-6 card-hover">
                  <div className="w-11 h-11 rounded-xl bg-neon-green/10 border border-neon-green/20 flex items-center justify-center mb-4">
                    <vp.icon className="w-5 h-5 text-neon-green" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2 leading-snug">{vp.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{vp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METHOD */}
        <section id="method" className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-4">
                El Método
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                <span className="gradient-text">Threshold + Inmersión = Fluidez</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                El método Fórmula Fluente (adaptado de Frank Florida — 13 idiomas, +365.000 estudiantes)
                dice que la fluidez no es talento. Es alcanzar el <strong className="text-white">threshold de vocabulario (~1.000 palabras)</strong>
                {' '}donde el subconsciente toma el control, y luego maximizar la exposición. ETT estructura las dos mitades.
              </p>
              <Link
                href="/ff/"
                className="inline-flex items-center gap-2 text-neon-green font-semibold hover:text-neon-green/80 transition-colors"
              >
                Leer el método completo (en portugués) <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section id="tools" className="section-padding bg-dark-secondary border-y border-dark-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
                Herramientas con IA
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                10 herramientas con IA para <span className="gradient-text">destrabar el inglés hablado</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Diagnóstico de vocabulario, series con subtítulos, audiolibros, simulador con ChatGPT,
                flashcards inteligentes y más — una rutina diaria de práctica precisa y relevante.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 max-w-7xl mx-auto">
              {tools.map((tool, i) => (
                <div
                  key={i}
                  className={`bg-dark-card rounded-2xl p-5 card-hover flex flex-col ${
                    tool.highlight
                      ? 'border border-neon-green/30 shadow-neon-green'
                      : 'border border-dark-border'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                    tool.highlight
                      ? 'bg-neon-green/15 border border-neon-green/30'
                      : 'bg-tech-blue/10 border border-tech-blue/20'
                  }`}>
                    <tool.icon className={`w-5 h-5 ${tool.highlight ? 'text-neon-green' : 'text-tech-blue'}`} />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">{tool.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section id="results" className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
                Resultados y Datos
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Números que muestran <span className="gradient-text">por qué el método funciona</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Metas claras, progreso medible. ETT no vende promesa vaga — entrega un sistema con hitos pedagógicos comprobados.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {metrics.map((m, i) => (
                <div key={i} className="bg-dark-card border border-dark-border rounded-2xl p-6 card-hover">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                    m.color === 'green' ? 'bg-neon-green/10' : 'bg-tech-blue/10'
                  }`}>
                    <m.icon className={`w-5 h-5 ${m.color === 'green' ? 'text-neon-green' : 'text-tech-blue'}`} />
                  </div>
                  <div className={`text-4xl font-black mb-1 ${m.color === 'green' ? 'text-neon-green' : 'text-tech-blue'}`}>
                    {m.value}
                  </div>
                  <div className="font-bold text-white text-sm mb-2">{m.label}</div>
                  <p className="text-gray-500 text-sm">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section-padding bg-dark-secondary border-y border-dark-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-4">
                Testimonios
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Profesionales tech que <span className="gradient-text">dejaron de trabarse</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-dark-card border border-dark-border rounded-2xl p-6 card-hover relative">
                  <Quote className="absolute top-5 right-5 w-8 h-8 text-neon-green/10" />
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div>
                      <div className="font-bold text-white text-sm">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-neon-green/10 text-neon-green border border-neon-green/20 font-medium whitespace-nowrap">
                      {t.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-600 mt-8 italic max-w-2xl mx-auto">
              Testimonios ilustrativos basados en patrones reales de la comunidad.
            </p>
          </div>
        </section>

        {/* PARTNERS */}
        <section id="partners" className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-4">
                Socios
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Construido con <span className="gradient-text">socios especializados</span>
              </h2>
              <p className="text-gray-400">
                BeeTools (base estructurada), Cherry Top (inmersiones), Coders (mentoría de carrera internacional),
                IEP (sede presencial Curitiba).
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10 max-w-4xl mx-auto opacity-70">
              {[
                { src: '/images/logobeetools.webp', alt: 'BeeTools', w: 120 },
                { src: '/images/logo-cherrytop.jpeg', alt: 'Cherry Top', w: 110 },
                { src: '/images/coders_logo.jpg', alt: 'Coders', w: 120 },
                { src: '/images/logoiep.jpg', alt: 'IEP', w: 90 },
              ].map((p) => (
                <div key={p.alt} className="relative h-14" style={{ width: p.w }}>
                  <Image src={p.src} alt={p.alt} fill className="object-contain" sizes={`${p.w}px`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="section-padding bg-dark-secondary border-y border-dark-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
                Cómo funciona
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Del registro a las <span className="gradient-text">primeras palabras habladas</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {howItWorks.map((s) => (
                <div key={s.n} className="bg-dark-card border border-dark-border rounded-2xl p-6 card-hover">
                  <div className="text-5xl font-black gradient-text mb-3">{s.n}</div>
                  <h3 className="font-bold text-white text-base mb-2 leading-tight">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ONLINE TEASER */}
        <section id="online" className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-dark-card border border-tech-blue/30 rounded-3xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-tech-blue/10 border border-tech-blue/30 flex items-center justify-center flex-shrink-0">
                  <Wifi className="w-6 h-6 text-tech-blue" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-tech-blue font-semibold mb-1">
                    Online — todos los lunes
                  </div>
                  <h3 className="font-bold text-white text-xl md:text-2xl leading-snug">
                    Práctica de speaking desde cualquier lugar — 20h BRT (GMT-3)
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-5">
                Si estás en Buenos Aires, Ciudad de México, Bogotá, Lima, Santiago o Montevideo — no importa.
                El encuentro online de los lunes está abierto a quien tenga internet y audífonos.
                90 minutos de práctica de habla estructurada vía Google Meet.
              </p>
              <Link
                href="#signup"
                className="inline-flex items-center gap-2 text-tech-blue font-semibold hover:text-tech-blue/80 transition-colors"
              >
                Participar del próximo encuentro online <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FLORIDA IMMERSION */}
        <section className="section-padding bg-dark-secondary border-y border-dark-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-dark-card border border-neon-green/30 rounded-3xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center flex-shrink-0">
                  <Plane className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-neon-green font-semibold mb-1">
                    Inmersión EE.UU. — Florida
                  </div>
                  <h3 className="font-bold text-white text-xl md:text-2xl leading-snug">
                    ¿Quieres inmersión total en inglés? Florida 2027 — 2 cohortes
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-5">
                Inmersión intensiva en inglés en Florida, EE.UU. — en alianza con Cherry Top.
                Para profesionales tech que apuntan a reubicación internacional o trabajo remoto con clientes en EE.UU.
              </p>
              <Link
                href="/imersoes/florida/"
                className="inline-flex items-center gap-2 text-neon-green font-semibold hover:text-neon-green/80 transition-colors"
              >
                Ver detalles de la inmersión Florida (en portugués) <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Preguntas <span className="gradient-text">frecuentes</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="bg-dark-card border border-dark-border rounded-2xl p-5 group">
                  <summary className="cursor-pointer font-semibold text-white text-base flex items-start gap-3 list-none">
                    <CheckCircle2 className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                    <span className="flex-1">{f.q}</span>
                  </summary>
                  <p className="text-gray-400 text-sm leading-relaxed mt-3 ml-8">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / SIGNUP */}
        <section id="signup" className="section-padding bg-dark-secondary border-t border-dark-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-dark-card border border-neon-green/30 rounded-3xl p-10 md:p-14 shadow-neon-green relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/8 to-tech-blue/8 pointer-events-none" />
              <div className="relative">
                <Users className="w-10 h-10 text-neon-green mx-auto mb-5" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Participa del <span className="gradient-text">próximo encuentro gratis</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-7 max-w-xl mx-auto">
                  Registro rápido. Recibes el link del próximo encuentro, el material de bienvenida y
                  acceso a la comunidad.
                </p>
                <a
                  href={LEAD_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-neon-green text-dark font-bold text-base hover:bg-neon-green/90 transition-all hover:shadow-neon-green-lg"
                >
                  Regístrame
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-gray-500 text-xs mt-4 italic">
                  Gratis. Sin compromiso. Sin spam.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="es" />
    </>
  )
}
