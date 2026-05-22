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
  { title: 'Writing', pct: 40, type: 'Active · Written', icon: PenLine, color: 'neon-green', note: 'The hardest — that\'s why it comes first. Who writes, reads.' },
  { title: 'Speaking', pct: 30, type: 'Active · Oral', icon: MessageSquare, color: 'neon-green', note: 'Pronunciation + speed. Who speaks, hears and understands.' },
  { title: 'Listening', pct: 20, type: 'Passive · Oral', icon: Headphones, color: 'tech-blue', note: 'Accents, slang, rhythm. The subconscious does the work.' },
  { title: 'Reading', pct: 10, type: 'Passive · Written', icon: BookOpen, color: 'tech-blue', note: 'The easiest — pure information, no pronunciation.' },
]

const stages = [
  { n: 1, label: 'Unconscious incompetence', sub: "Doesn't know what they don't know" },
  { n: 2, label: 'Conscious incompetence', sub: 'Discovered the size of the challenge' },
  { n: 3, label: 'Conscious competence', sub: 'Speaks thinking — the threshold', highlight: true },
  { n: 4, label: 'Unconscious competence', sub: 'Speaks without thinking — fluency', highlight: true },
]

const immersionLayers = [
  { icon: Plane, title: 'Abroad', color: 'neon-green', desc: 'When possible, seek contact with natives and avoid your countrymen until fluent. Each everyday word appears dozens of times per day.' },
  { icon: MapPin, title: 'In your country', color: 'tech-blue', desc: 'Language exchange, Meetup, hostels, Couchsurfing, online classes, practice community. In ETT, this is the heart of weekly meetings.' },
  { icon: Brain, title: 'In your head', color: 'neon-green', desc: 'Translating your inner dialogue in traffic, shower, queue. Highest leverage per minute invested — works anywhere.' },
]

const principles = [
  { icon: Repeat, title: 'Eat the elephant one spoon at a time', desc: 'Small chunks, every day. 10 words today > 200 words in one day.' },
  { icon: Zap, title: '70% on active skills', desc: 'Focus on writing and speaking. Passive comes for free along the way.' },
  { icon: Compass, title: 'Map before the territory', desc: 'See the full grammar picture before diving into each verb tense.' },
  { icon: AlertTriangle, title: 'Before threshold, avoid errors', desc: 'The brain records like a hard drive. Wrong habits are hard to erase.' },
  { icon: Sparkles, title: 'After threshold, ignore errors', desc: 'Let the tongue loose. Multiply immersion by 10x. Make mistakes while speaking, learn faster.' },
  { icon: Target, title: 'Start with the hardest', desc: '"Grit" principle. Master the hard part first, the rest comes easy.' },
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
      '@id': `${SITE_URL}/en/method/#webpage`,
      url: `${SITE_URL}/en/method/`,
      name: 'The Fluent Formula — Science-Based English Fluency Method',
      inLanguage: 'en',
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/en/` },
        { '@type': 'ListItem', position: 2, name: 'Method', item: `${SITE_URL}/en/method/` },
      ],
    },
  ],
}

export default function EnMethodPage() {
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
                Methodology
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                The <span className="gradient-text">Fluent Formula</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                The method that distills why some learners reach fluency in months while others stay
                stuck for years. Science-based, deliberate practice, threshold + immersion.
              </p>

              <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-5 p-6 sm:p-8 rounded-3xl border border-neon-green/30 bg-neon-green/5 shadow-neon-green">
                <span className="text-xl sm:text-3xl font-bold text-white">Threshold</span>
                <span className="text-xl sm:text-3xl font-bold text-tech-blue">+</span>
                <span className="text-xl sm:text-3xl font-bold text-white">Immersion</span>
                <span className="text-xl sm:text-3xl font-bold text-tech-blue">=</span>
                <span className="text-xl sm:text-3xl font-bold gradient-text">Fluency</span>
              </div>

              <p className="text-gray-500 text-sm mt-6 max-w-xl mx-auto">
                Adapted from the methodology of <strong className="text-gray-300">Frank Florida</strong> —
                polyglot with 13 languages and 365,000+ students trained.
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
                  The Premise
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                  Not talent.
                  <br />
                  <span className="gradient-text">Method.</span>
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Following the wrong method, you can study for 10 years and never speak. Following the
                  right path, you reach functional fluency in months — even from zero. The difference
                  is in <em className="text-white not-italic">what</em> you practice and <em className="text-white not-italic">in what order</em>.
                </p>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="w-6 h-6 text-neon-green" />
                  <h3 className="font-bold text-white text-lg">Language = Linguistic LEGO</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Every language reduces to two pieces:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-neon-green/5 border border-neon-green/20">
                    <div className="text-xs uppercase tracking-wider text-neon-green font-semibold mb-1">Words</div>
                    <div className="text-white font-bold mb-1">Vocabulary</div>
                    <div className="text-xs text-gray-500">Right brain · memorize</div>
                  </div>
                  <div className="p-4 rounded-xl bg-tech-blue/5 border border-tech-blue/20">
                    <div className="text-xs uppercase tracking-wider text-tech-blue font-semibold mb-1">Order</div>
                    <div className="text-white font-bold mb-1">Grammar</div>
                    <div className="text-xs text-gray-500">Left brain · understand rules</div>
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
                The 4 Pillars
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                70% of time on <span className="gradient-text">active skills</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                It's the silent inversion that separates who learns from who only studies. Most courses focus on what's easier — reading and listening — and that's why most people never speak.
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
                      <span className="text-xs text-gray-500 uppercase tracking-wider">of time</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.note}</p>
                  </div>
                )
              })}
            </div>

            <p className="mt-10 text-center text-gray-500 text-sm max-w-2xl mx-auto">
              <strong className="text-gray-300">Grit principle:</strong> attack the hardest first.
              Active skill contains the passive — who writes can read; who speaks understands. The reverse isn't true.
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
                  The Threshold
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  The point where <span className="gradient-text">learning becomes automatic</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  The minimum vocabulary and grammar level from which you can hold a simple conversation —
                  and from which the subconscious takes over the work.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-12">
                {[
                  { num: '250', label: 'words', desc: '~60% of any text', color: 'tech-blue' },
                  { num: '1,000', label: 'words', desc: 'hold a simple conversation', color: 'neon-green', highlight: true },
                  { num: '2,000', label: 'words', desc: 'functional fluency (90–95%)', color: 'neon-green' },
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
                    <h3 className="font-bold text-white">Before threshold</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm text-gray-400">
                    <li className="flex gap-2"><span className="text-tech-blue">→</span> Study carefully, slowly, on paper.</li>
                    <li className="flex gap-2"><span className="text-tech-blue">→</span> Avoid errors — brain records like a hard drive.</li>
                    <li className="flex gap-2"><span className="text-tech-blue">→</span> Use controlled translations and answer keys.</li>
                    <li className="flex gap-2"><span className="text-tech-blue">→</span> Build context — puzzle pieces.</li>
                  </ul>
                </div>
                <div className="bg-dark-card border border-neon-green/30 rounded-2xl p-6 shadow-neon-green">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-neon-green" />
                    <h3 className="font-bold text-white">After threshold</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm text-gray-300">
                    <li className="flex gap-2"><span className="text-neon-green">→</span> Let the tongue loose — speak, err, speak again.</li>
                    <li className="flex gap-2"><span className="text-neon-green">→</span> Multiply immersion by 10x.</li>
                    <li className="flex gap-2"><span className="text-neon-green">→</span> The subconscious classifies data on its own.</li>
                    <li className="flex gap-2"><span className="text-neon-green">→</span> The snowball starts rolling — almost automatic.</li>
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
                The 4 Stages
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                The <span className="gradient-text">competence ladder</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Most methods try to jump from stage 2 straight to 4 ("learn intuitively").
                Kids take 4 years with 24/7 immersion — you don't have that time. You need stage 3.
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
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-semibold">fluency</span>
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
                ETT Tool · Subtitles
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Hear the method from <span className="gradient-text">the one who created it</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                You can't fully grasp the Fluent Formula just by reading this summary.
                You need to <strong className="text-white">hear Frank Florida</strong> —
                the polyglot who has trained 365,000+ Brazilian students — explaining each principle himself.
              </p>
              <p className="text-gray-500 text-xs mt-3 italic">
                Note: original lectures are in Portuguese. The Subtitles tool gives you sync'd PT + EN subtitles to study along.
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
                      <div className="text-xs uppercase tracking-widest text-neon-green font-bold mb-2">Lesson 1 · Episode 1</div>
                      <div className="text-white font-bold text-lg leading-tight mb-1">Fluent Formula</div>
                      <div className="text-gray-400 text-sm">by <strong className="text-white">Frank Florida</strong></div>
                    </div>
                  </a>

                  <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <Subtitles className="w-5 h-5 text-tech-blue" />
                      <span className="text-tech-blue font-semibold text-sm">ETT Subtitles — video + interactive subtitles</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                      Start with lesson 1.
                      <br />
                      <span className="gradient-text">30 minutes that change your perspective.</span>
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      Frank explains why <em className="text-gray-200 not-italic">method</em> beats{' '}
                      <em className="text-gray-200 not-italic">talent</em>, what the 1,000-word threshold is,
                      and how to structure 30 minutes a day to go from "I know but I freeze" to fluent.
                      The tool lets you <strong className="text-white">pause, repeat and mark words</strong> as you watch.
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="flex flex-col items-start gap-1.5 p-3 rounded-xl bg-dark/60 border border-dark-border">
                        <MousePointerClick className="w-4 h-4 text-neon-green" />
                        <span className="text-xs text-gray-300 leading-tight">Click any word</span>
                      </div>
                      <div className="flex flex-col items-start gap-1.5 p-3 rounded-xl bg-dark/60 border border-dark-border">
                        <Pause className="w-4 h-4 text-neon-green" />
                        <span className="text-xs text-gray-300 leading-tight">Pause and repeat the phrase</span>
                      </div>
                      <div className="flex flex-col items-start gap-1.5 p-3 rounded-xl bg-dark/60 border border-dark-border">
                        <BookOpen className="w-4 h-4 text-neon-green" />
                        <span className="text-xs text-gray-300 leading-tight">Sync'd PT + EN subtitles</span>
                      </div>
                    </div>

                    <a
                      href={SUBTITLES_TOOL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neon-green text-black font-bold text-base hover:bg-neon-green/90 transition-all hover:shadow-neon-green-lg hover:-translate-y-0.5 self-start"
                    >
                      Watch lesson 1 now
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <p className="text-xs text-gray-500 mt-3">Free · opens in new tab · no signup required to start</p>
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
                Immersion
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Immersion isn't just <span className="gradient-text">traveling</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Three layers, three opportunities — and the most powerful one needs no passport.
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
                Practical Principles
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                6 mantras for your <span className="gradient-text">daily practice</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                How to structure a 1-hour daily routine to study English for real —
                without getting lost in apps, random series or classes that never unblock your speaking.
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
                  Start practicing
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                  Join the <span className="gradient-text">next free online meeting</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                  Every Monday at 8pm BRT (GMT-3) we host a structured English speaking session.
                  Method + community + practice. Sign up to get the Google Meet link.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a
                    href={LEAD_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-neon-green text-black font-bold text-sm hover:bg-neon-green/90 transition-all hover:shadow-neon-green-lg"
                  >
                    Sign me up
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link
                    href="/en/schedule/"
                    className="inline-flex items-center gap-2 text-tech-blue font-semibold hover:text-tech-blue/80 transition-colors text-sm"
                  >
                    See full schedule <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="en" />
    </>
  )
}
