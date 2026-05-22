import Link from 'next/link'
import {
  PenLine,
  MessageSquare,
  Headphones,
  BookOpen,
  Brain,
  Layers,
  Target,
  Compass,
  Sparkles,
  Repeat,
  Plane,
  MapPin,
  Lightbulb,
  AlertTriangle,
  Zap,
  BookMarked,
  ExternalLink,
  PlayCircle,
  Subtitles,
  MousePointerClick,
  Pause,
  ArrowRight,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const SITE_URL = 'https://englishtalktime.com.br'
const SUBTITLES_TOOL_URL =
  'https://ett-subtitles.vercel.app/study?series=formulafluente&season=1&episode=1'
const LEAD_FORM_URL = 'https://forms.gle/jpK8bR4houvAXTwm9'

const pillars = [
  { title: 'Escribir', pct: 40, type: 'Activa · Escrita', icon: PenLine, color: 'neon-green', note: 'La más difícil — por eso va primero. Quien escribe, lee.' },
  { title: 'Hablar', pct: 30, type: 'Activa · Oral', icon: MessageSquare, color: 'neon-green', note: 'Pronunciación + velocidad. Quien habla, escucha y entiende.' },
  { title: 'Escuchar', pct: 20, type: 'Pasiva · Oral', icon: Headphones, color: 'tech-blue', note: 'Acentos, modismos, ritmo. El subconsciente hace el trabajo.' },
  { title: 'Leer', pct: 10, type: 'Pasiva · Escrita', icon: BookOpen, color: 'tech-blue', note: 'La más fácil — información pura, sin pronunciación.' },
]

const stages = [
  { n: 1, label: 'Incompetencia inconsciente', sub: 'No sabe lo que no sabe' },
  { n: 2, label: 'Incompetencia consciente', sub: 'Descubrió el tamaño del desafío' },
  { n: 3, label: 'Competencia consciente', sub: 'Habla pensando — el threshold', highlight: true },
  { n: 4, label: 'Competencia inconsciente', sub: 'Habla sin pensar — fluidez', highlight: true },
]

const immersionLayers = [
  { icon: Plane, title: 'En el exterior', color: 'neon-green', desc: 'Cuando es viable, busca contacto con nativos y evita compatriotas hasta tener fluidez. Cada palabra cotidiana aparece decenas de veces por día.' },
  { icon: MapPin, title: 'En tu país', color: 'tech-blue', desc: 'Intercambio de idiomas, Meetup, hostels, Couchsurfing, clases online, comunidad de práctica. En ETT, es el corazón de los encuentros semanales.' },
  { icon: Brain, title: 'En tu cabeza', color: 'neon-green', desc: 'Traducir el diálogo interno en el tránsito, la ducha, la fila. La técnica de mayor apalancamiento por minuto — funciona en cualquier lugar.' },
]

const principles = [
  { icon: Repeat, title: 'Come el elefante una cucharada por vez', desc: 'Trozos pequeños, todos los días. 10 palabras hoy > 200 en un solo día.' },
  { icon: Zap, title: '70% en habilidades activas', desc: 'Enfócate en escribir y hablar. Lo pasivo viene gratis en el camino.' },
  { icon: Compass, title: 'Mapa antes del territorio', desc: 'Ve el cuadro completo de la gramática antes de meterte en cada tiempo verbal.' },
  { icon: AlertTriangle, title: 'Antes del threshold, evita errores', desc: 'El cerebro graba como un HD. Hábito errado es difícil de borrar.' },
  { icon: Sparkles, title: 'Después del threshold, olvida el error', desc: 'Suelta la lengua. Multiplica la inmersión por 10. Equivócate hablando, aprende más rápido.' },
  { icon: Target, title: 'Empieza por lo más difícil', desc: 'Principio del "grit". Dominado lo difícil, el resto viene fácil.' },
]

const colorMap = {
  'neon-green': { bg: 'bg-neon-green/10', border: 'border-neon-green/20', icon: 'text-neon-green', text: 'text-neon-green', bar: 'bg-neon-green' },
  'tech-blue': { bg: 'bg-tech-blue/10', border: 'border-tech-blue/20', icon: 'text-tech-blue', text: 'text-tech-blue', bar: 'bg-tech-blue' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/es/metodo/#webpage`,
      url: `${SITE_URL}/es/metodo/`,
      name: 'La Fórmula Fluente — Método Científico de Fluidez en Inglés',
      inLanguage: 'es',
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/es/` },
        { '@type': 'ListItem', position: 2, name: 'Método', item: `${SITE_URL}/es/metodo/` },
      ],
    },
  ],
}

export default function EsMetodoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <main className="bg-dark min-h-screen pt-16">
        {/* HERO */}
        <section className="section-padding relative overflow-hidden hero-grid">
          <div className="absolute inset-0 bg-gradient-to-b from-neon-green/5 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-6">
                Metodología
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                La <span className="gradient-text">Fórmula Fluente</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                El método que destila por qué algunas personas llegan a la fluidez en meses y otras
                pasan años trabadas. Base científica, práctica deliberada, threshold + inmersión.
              </p>

              <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-5 p-6 sm:p-8 rounded-3xl border border-neon-green/30 bg-neon-green/5 shadow-neon-green">
                <span className="text-xl sm:text-3xl font-bold text-white">Threshold</span>
                <span className="text-xl sm:text-3xl font-bold text-tech-blue">+</span>
                <span className="text-xl sm:text-3xl font-bold text-white">Inmersión</span>
                <span className="text-xl sm:text-3xl font-bold text-tech-blue">=</span>
                <span className="text-xl sm:text-3xl font-bold gradient-text">Fluidez</span>
              </div>

              <p className="text-gray-500 text-sm mt-6 max-w-xl mx-auto">
                Adaptado de la metodología de <strong className="text-gray-300">Frank Florida</strong> —
                políglota con 13 idiomas y +365.000 estudiantes formados.
              </p>
            </div>
          </div>
        </section>

        {/* PREMISE */}
        <section className="section-padding bg-dark-secondary border-t border-dark-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-4">
                  La Premisa
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                  No es talento.
                  <br />
                  <span className="gradient-text">Es método.</span>
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Con el método errado puedes estudiar 10 años y nunca hablar. Con el camino correcto
                  llegas a la fluidez funcional en pocos meses, incluso desde cero. La diferencia está
                  en <em className="text-white not-italic">qué</em> practicas y <em className="text-white not-italic">en qué orden</em>.
                </p>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="w-6 h-6 text-neon-green" />
                  <h3 className="font-bold text-white text-lg">Idioma = LEGO Lingüístico</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Toda lengua se reduce a dos piezas:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-neon-green/5 border border-neon-green/20">
                    <div className="text-xs uppercase tracking-wider text-neon-green font-semibold mb-1">Palabras</div>
                    <div className="text-white font-bold mb-1">Vocabulario</div>
                    <div className="text-xs text-gray-500">Hemisferio derecho · memorizar</div>
                  </div>
                  <div className="p-4 rounded-xl bg-tech-blue/5 border border-tech-blue/20">
                    <div className="text-xs uppercase tracking-wider text-tech-blue font-semibold mb-1">Orden</div>
                    <div className="text-white font-bold mb-1">Gramática</div>
                    <div className="text-xs text-gray-500">Hemisferio izquierdo · entender reglas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 PILLARS */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
                Los 4 Pilares
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                70% del tiempo en <span className="gradient-text">habilidades activas</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Es la inversión silenciosa que separa a quien aprende de quien solo estudia. La mayoría
                de los cursos enfoca en lo más fácil — leer y escuchar — y por eso la mayoría nunca habla.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {pillars.map((p) => {
                const c = colorMap[p.color as keyof typeof colorMap]
                return (
                  <div key={p.title} className="bg-dark-card border border-dark-border rounded-2xl p-6 card-hover">
                    <div className={`w-11 h-11 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
                      <p.icon className={`w-5 h-5 ${c.icon}`} />
                    </div>
                    <div className={`text-xs uppercase tracking-wider ${c.text} font-semibold mb-1`}>{p.type}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
                    <div className="h-2 rounded-full bg-dark-border overflow-hidden mb-2">
                      <div className={`h-full ${c.bar}`} style={{ width: `${p.pct}%` }} />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className={`text-3xl font-black ${c.text}`}>{p.pct}%</span>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">del tiempo</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.note}</p>
                  </div>
                )
              })}
            </div>

            <p className="mt-10 text-center text-gray-500 text-sm max-w-2xl mx-auto">
              <strong className="text-gray-300">Principio del grit:</strong> ataca lo más difícil primero.
              La habilidad activa contiene la pasiva — quien escribe sabe leer; quien habla entiende. Lo inverso no es cierto.
            </p>
          </div>
        </section>

        {/* THRESHOLD */}
        <section className="section-padding bg-dark-secondary border-y border-dark-border relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-green/5 blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
                  El Threshold
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  El punto donde el <span className="gradient-text">aprendizaje se vuelve automático</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  El nivel mínimo de vocabulario y gramática a partir del cual puedes sostener una conversación simple —
                  y a partir del cual el subconsciente toma el trabajo.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-12">
                {[
                  { num: '250', label: 'palabras', desc: '~60% de cualquier texto', color: 'tech-blue' },
                  { num: '1.000', label: 'palabras', desc: 'sostener conversación simple', color: 'neon-green', highlight: true },
                  { num: '2.000', label: 'palabras', desc: 'fluidez funcional (90–95%)', color: 'neon-green' },
                ].map((b, i) => {
                  const c = colorMap[b.color as keyof typeof colorMap]
                  return (
                    <div key={i} className={`bg-dark-card border ${b.highlight ? 'border-neon-green/40 shadow-neon-green' : 'border-dark-border'} rounded-2xl p-6 text-center`}>
                      <div className={`text-5xl font-black ${c.text} mb-1`}>{b.num}</div>
                      <div className="text-xs uppercase tracking-wider text-gray-500 mb-3">{b.label}</div>
                      <div className="text-gray-300 text-sm">{b.desc}</div>
                      {b.highlight && (
                        <div className="mt-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-semibold">
                          <Target className="w-3 h-3" /> threshold
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-dark-card border border-dark-border rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-tech-blue" />
                    <h3 className="font-bold text-white">Antes del threshold</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm text-gray-400">
                    <li className="flex gap-2"><span className="text-tech-blue">→</span> Estudia con cuidado, despacio, en papel.</li>
                    <li className="flex gap-2"><span className="text-tech-blue">→</span> Evita errores — el cerebro graba como un HD.</li>
                    <li className="flex gap-2"><span className="text-tech-blue">→</span> Usa traducciones controladas y respuestas modelo.</li>
                    <li className="flex gap-2"><span className="text-tech-blue">→</span> Construye contexto — piezas del rompecabezas.</li>
                  </ul>
                </div>
                <div className="bg-dark-card border border-neon-green/30 rounded-2xl p-6 shadow-neon-green">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-neon-green" />
                    <h3 className="font-bold text-white">Después del threshold</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm text-gray-300">
                    <li className="flex gap-2"><span className="text-neon-green">→</span> Suelta la lengua — habla, equivócate, habla otra vez.</li>
                    <li className="flex gap-2"><span className="text-neon-green">→</span> Multiplica la inmersión por 10x.</li>
                    <li className="flex gap-2"><span className="text-neon-green">→</span> El subconsciente clasifica los datos solo.</li>
                    <li className="flex gap-2"><span className="text-neon-green">→</span> La bola de nieve empieza a rodar — casi automático.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 STAGES */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-4">
                Las 4 Etapas
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                La escalera de la <span className="gradient-text">competencia</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                La mayoría de los métodos intenta saltar de la etapa 2 directo a la 4 ("aprender intuitivamente").
                Los niños tardan 4 años con inmersión 24/7 — tú no tienes ese tiempo. Necesitas la etapa 3.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {stages.map((s) => (
                <div key={s.n} className={`relative bg-dark-card border rounded-2xl p-6 ${s.highlight ? 'border-neon-green/40' : 'border-dark-border'}`}>
                  <div className={`text-6xl font-black mb-3 ${s.highlight ? 'text-neon-green' : 'text-gray-700'}`}>{s.n}</div>
                  <h3 className="font-bold text-white text-base mb-2 leading-tight">{s.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.sub}</p>
                  {s.n === 3 && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-semibold">threshold</span>
                  )}
                  {s.n === 4 && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-semibold">fluidez</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUBTITLES TOOL */}
        <section className="section-padding bg-dark-secondary border-y border-dark-border relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-neon-green/8 blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
                Herramienta ETT · Subtitles
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Escucha el método de <span className="gradient-text">quien lo creó</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                No se puede entender la Fórmula Fluente solo leyendo este resumen.
                Necesitas <strong className="text-white">escuchar a Frank Florida</strong> —
                el políglota que ya formó +365.000 brasileños — explicando cada principio.
              </p>
              <p className="text-gray-500 text-xs mt-3 italic">
                Nota: las clases originales son en portugués. La herramienta Subtitles te da subtítulos sincronizados PT + EN para estudiar junto.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-dark-card border border-neon-green/30 rounded-3xl overflow-hidden shadow-neon-green">
                <div className="grid md:grid-cols-5 gap-0">
                  <a
                    href={SUBTITLES_TOOL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:col-span-2 relative aspect-video md:aspect-auto bg-gradient-to-br from-dark via-dark-secondary to-neon-green/10 flex items-center justify-center group cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-dark-border"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,255,157,0.15),transparent_60%)]" />
                    <div className="relative flex flex-col items-center text-center px-6">
                      <div className="w-20 h-20 rounded-full bg-neon-green/20 border-2 border-neon-green/60 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-neon-green/30 transition-all">
                        <PlayCircle className="w-12 h-12 text-neon-green" />
                      </div>
                      <div className="text-xs uppercase tracking-widest text-neon-green font-bold mb-2">Clase 1 · Episodio 1</div>
                      <div className="text-white font-bold text-lg leading-tight mb-1">Fórmula Fluente</div>
                      <div className="text-gray-400 text-sm">por <strong className="text-white">Frank Florida</strong></div>
                    </div>
                  </a>

                  <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <Subtitles className="w-5 h-5 text-tech-blue" />
                      <span className="text-tech-blue font-semibold text-sm">ETT Subtitles — video + subtítulos interactivos</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                      Empieza por la clase 1.
                      <br />
                      <span className="gradient-text">30 minutos que cambian tu perspectiva.</span>
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      Frank explica por qué <em className="text-gray-200 not-italic">método</em> le gana al{' '}
                      <em className="text-gray-200 not-italic">talento</em>, cuál es el threshold de
                      1.000 palabras, y cómo organizar 30 minutos por día para salir del "sé pero me trabo".
                      La herramienta te deja <strong className="text-white">pausar, repetir y marcar palabras</strong> mientras escuchas.
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="flex flex-col items-start gap-1.5 p-3 rounded-xl bg-dark/60 border border-dark-border">
                        <MousePointerClick className="w-4 h-4 text-neon-green" />
                        <span className="text-xs text-gray-300 leading-tight">Click en cualquier palabra</span>
                      </div>
                      <div className="flex flex-col items-start gap-1.5 p-3 rounded-xl bg-dark/60 border border-dark-border">
                        <Pause className="w-4 h-4 text-neon-green" />
                        <span className="text-xs text-gray-300 leading-tight">Pausa y repite la frase</span>
                      </div>
                      <div className="flex flex-col items-start gap-1.5 p-3 rounded-xl bg-dark/60 border border-dark-border">
                        <BookOpen className="w-4 h-4 text-neon-green" />
                        <span className="text-xs text-gray-300 leading-tight">Subtítulos PT + EN sincronizados</span>
                      </div>
                    </div>

                    <a
                      href={SUBTITLES_TOOL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neon-green text-black font-bold text-base hover:bg-neon-green/90 transition-all hover:shadow-neon-green-lg hover:-translate-y-0.5 self-start"
                    >
                      Ver la clase 1 ahora
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <p className="text-xs text-gray-500 mt-3">Gratis · abre en pestaña nueva · sin registro para empezar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMMERSION LAYERS */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-4">
                Inmersión
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Inmersión no es solo <span className="gradient-text">viajar</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Tres capas, tres oportunidades — y la más poderosa no exige pasaporte.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {immersionLayers.map((layer) => {
                const c = colorMap[layer.color as keyof typeof colorMap]
                return (
                  <div key={layer.title} className="bg-dark-card border border-dark-border rounded-2xl p-6 card-hover">
                    <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
                      <layer.icon className={`w-6 h-6 ${c.icon}`} />
                    </div>
                    <h3 className="font-bold text-white text-xl mb-3">{layer.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{layer.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="section-padding bg-dark-secondary border-y border-dark-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
                Principios Prácticos
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                6 mantras para tu <span className="gradient-text">práctica diaria</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Cómo organizar una rutina diaria de 1 hora para estudiar inglés de verdad —
                sin enredarte en apps, series aleatorias o clases que no destraban el habla.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {principles.map((p) => (
                <div key={p.title} className="bg-dark-card border border-dark-border rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center mb-4">
                    <p.icon className="w-5 h-5 text-neon-green" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2 leading-snug">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-dark-card border border-neon-green/30 rounded-3xl p-10 md:p-14 shadow-neon-green relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/8 to-tech-blue/8 pointer-events-none" />
              <div className="relative">
                <div className="inline-flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-neon-green" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-tech-blue/10 border border-tech-blue/30 flex items-center justify-center">
                    <BookMarked className="w-6 h-6 text-tech-blue" />
                  </div>
                </div>

                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-5">
                  Empieza a practicar
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                  Participa del <span className="gradient-text">próximo encuentro online gratis</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                  Todos los lunes a las 20h BRT (GMT-3) hacemos una sesión estructurada de speaking en inglés.
                  Método + comunidad + práctica. Regístrate y recibe el link de Google Meet.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a
                    href={LEAD_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-neon-green text-black font-bold text-sm hover:bg-neon-green/90 transition-all hover:shadow-neon-green-lg"
                  >
                    Regístrame
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link
                    href="/es/agenda/"
                    className="inline-flex items-center gap-2 text-tech-blue font-semibold hover:text-tech-blue/80 transition-colors text-sm"
                  >
                    Ver agenda completa <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="es" />
    </>
  )
}
