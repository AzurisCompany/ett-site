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
      '@id': `${SITE_URL}/en/#webpage`,
      url: `${SITE_URL}/en/`,
      name: 'ETT — English Conversation Group for Tech Professionals',
      inLanguage: 'en',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'English', item: `${SITE_URL}/en/` },
      ],
    },
    {
      '@type': 'Service',
      serviceType: 'English Conversation Group',
      name: 'English Talk Time — English speaking practice for tech professionals',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: [
        { '@type': 'Country', name: 'Worldwide' },
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
  { value: '300h', label: 'structured practice', icon: Clock },
  { value: '3,000', label: 'words to fluency', icon: TrendingUp },
  { value: '1h/day', label: 'daily immersion', icon: Cpu },
  { value: '5+', label: 'specialized partners', icon: Globe },
]

const valueProps = [
  {
    icon: MessageSquare,
    title: 'Guided speaking practice',
    desc: "Weekly meetings with simulations, role-play, storytelling and real-world scenarios. Not random small talk — every session has a plan to make you actually speak.",
  },
  {
    icon: Brain,
    title: 'AI-powered learning tools',
    desc: 'Vocabulary diagnosis, smart revision, subtitle-based series study, audiobook library, ChatGPT prompt simulator for interviews, daily journal. A complete study system.',
  },
  {
    icon: Users,
    title: 'Tech-focused community',
    desc: 'Built for Data Engineers, BI Analysts, DevOps, AI Engineers and Cloud professionals. Vocabulary, role-plays and conversations match your actual work context.',
  },
  {
    icon: Trophy,
    title: 'Fluent Formula method',
    desc: "Adapted from Frank Florida's method — 13 languages, 365,000+ Brazilian students trained. Science-based: high-frequency vocabulary + threshold + distributed immersion.",
  },
]

const tools = [
  { icon: BarChart3, name: 'Vocabulary Diagnosis', desc: 'Identifies your gaps and builds a personalized 3,000-word study plan. Focuses on the 20% that drives 80% of results.', highlight: true },
  { icon: Repeat2, name: 'Smart Revision', desc: "10 new words/day + selective revision of yesterday's hardest ones. Combines progress and consolidation in one daily routine." },
  { icon: Film, name: 'Subtitle Series', desc: 'Study with TV episodes matched to your level. Mark unknown words, repeat phrases, train listening and speaking with visual support.', highlight: true },
  { icon: BookOpen, name: 'AudioBook', desc: 'Guided reading with audiobooks from Lit2Go (University of Florida) — classics with pro audio, vocabulary pre-mapped for your level.' },
  { icon: Radio, name: 'AudioHub', desc: 'Radio, news and talk shows in English for intermediate and advanced. Continuous exposure during your day — commute, gym, queue.' },
  { icon: PenLine, name: 'ETT Journal', desc: 'Written, spoken and feeling journal. Turn vocabulary into personal expression — what you did, what you will do, how you feel — in English.' },
  { icon: Printer, name: 'Printed Materials', desc: 'Notebooks, word lists, study plans and "Tell me about..." activities — connected via QR Code for session support. Tactile writing reinforces memory.' },
  { icon: Database, name: 'Recommendation System', desc: 'ClickHouse + AI. Uses usage data, clicked words, errors and professional context to generate personalized flashcards and priorities.', highlight: true },
  { icon: Bot, name: 'AI Prompt Simulator', desc: 'Generates ChatGPT prompts to simulate real scenarios: interviews, daily standups, system design discussions, salary negotiations.', highlight: true },
  { icon: Trophy, name: 'ETT GameZone', desc: 'Levels (Beginner → Intermediate → Advanced → Fluent → Global Pro), points, badges, weekly leaderboard and monthly jackpot.' },
]

const testimonials = [
  {
    name: 'Rodrigo M.',
    role: 'Data Engineer — remote for a Dutch company',
    text: "I studied English for 5 years and froze in every first meeting. With ETT and the weekly conversation sessions, I started speaking for real in 3 months. The vocabulary tool showed me exactly which technical words I needed — no more wasted time studying what I already knew.",
    tag: 'International career',
  },
  {
    name: 'Fernanda S.',
    role: 'BI Analyst — São Paulo, Brazil',
    text: "What blocked me wasn't grammar, it was fear. The ETT environment is completely safe to make mistakes. The interview role-plays prepared me so well that when I had the real interview for a US consultancy, I felt at home. Got the job 45 days into the program.",
    tag: 'First interview in English',
  },
  {
    name: 'Carlos A.',
    role: 'DevOps Engineer — DSSBR Community',
    text: 'The ETT diagnostic system was a wake-up call in the best way. I thought I knew a lot of English, but FluenteLevel showed me the exact gaps in the technical vocabulary I needed. In 2 months my LinkedIn in English was attracting recruiters from abroad.',
    tag: 'Diagnosis + LinkedIn',
  },
  {
    name: 'Priya T.',
    role: 'ML Engineer — GUBigData IA',
    text: 'The "small daily blocks" methodology changed everything for me. 1 hour a day split between vocabulary, subtitled series and spoken journal — sounds little but results come fast. In 4 months I went from "I understand but can\'t speak" to actively participating in international meetings.',
    tag: '1h/day routine',
  },
]

const metrics = [
  { icon: Clock, value: '300h', label: 'Complete structured journey', desc: 'From stuck English to functional fluency with method and consistency.', color: 'green' as const },
  { icon: BookOpen, value: '3,000', label: 'Target vocabulary words', desc: 'The 3,000 most relevant words for your tech career.', color: 'blue' as const },
  { icon: Target, value: '60%', label: 'of any text covered', desc: 'With just the 250 most common English words.', color: 'green' as const },
  { icon: Zap, value: '95%', label: 'of conversation comprehension', desc: 'With 1,000 words + cognates in real-world context.', color: 'blue' as const },
  { icon: TrendingUp, value: '10x', label: 'words per day = fluency', desc: '10 months at 10 words/day. 5 months at 20 words/day.', color: 'green' as const },
  { icon: Trophy, value: '5x', label: 'salary increase potential', desc: 'Salaries up to 5x higher in international roles (source: Coders).', color: 'blue' as const },
]

const howItWorks = [
  { n: '01', title: 'Sign up', desc: 'Free signup. You receive the next meeting link and welcome material.' },
  { n: '02', title: 'Join a session', desc: 'Online every Monday at 8pm BRT (GMT-3). Structured speaking — not random chat.' },
  { n: '03', title: 'Practice daily', desc: 'Use the AI tools 1h/day between sessions to consolidate vocabulary and pronunciation.' },
  { n: '04', title: 'Level up', desc: 'Move from "stuck" to functional English for the international market in months, not years.' },
]

const faqs = [
  {
    q: 'How does the online conversation group work?',
    a: 'Every Monday from 8pm to 9:30pm BRT (GMT-3, Brasília time), we host a structured English conversation session via Google Meet. Topics are announced in advance (e.g., "interview self-pitch", "explaining a bug to a senior dev", "presenting a dashboard"). Sub-sessions in pairs, then group debrief. Not random small talk.',
  },
  {
    q: 'Do I need to pay to join?',
    a: 'The weekly meetings are free. ETT has optional paid layers: intensive immersions (Curitiba/Brazil and Florida/USA), career mentorship via Coders partner, and premium access to the AI tools.',
  },
  {
    q: 'What level of English do I need?',
    a: 'A2 (basic-intermediate) or higher works well. Even if you feel completely stuck, you can attend — sessions are designed for you to speak, not to be evaluated. Beginners are routed to the BeeTools structured base first.',
  },
  {
    q: "I understand English but I can't speak — does this help?",
    a: "This is exactly the target audience. The blocker is fear and lack of practice, not knowledge. The combination of safe community (no judgment), realistic simulations (interview, daily standup, demo, networking), and AI tools systematically unlocks speaking.",
  },
  {
    q: 'Do you cover technical interview prep in English?',
    a: "Yes. Interview prep is a recurring scenario: technical interview, self-pitch, system design discussion in English, salary negotiation. The AI Prompt tool also generates ChatGPT prompts to practice between sessions. For deeper coaching, our partner Coders offers 1:1 international career mentorship.",
  },
]

export default function EnHome() {
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
              alt="English Talk Time — English conversation group for tech professionals"
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
              <span>+365,000 students already accelerated with the Fluent Formula</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
              From <span className="neon-green">stuck English</span> to{' '}
              <span className="neon-blue">functional fluency</span>{' '}
              <br className="hidden md:block" />
              for the international tech market
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              <span className="text-white font-semibold">English conversation group</span> for
              tech professionals who want to <span className="text-neon-green font-medium">unblock speaking</span> and{' '}
              <span className="text-tech-blue font-medium">become fluent</span>.
              Guided speaking practice + AI-powered learning tools, in a structured daily routine.
              Weekly <span className="text-white">online meetings (every Monday)</span> and{' '}
              <span className="text-white">in-person sessions in Curitiba, Brazil</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="#signup"
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-neon-green text-black font-bold text-base sm:text-lg hover:bg-neon-green/90 transition-all hover:shadow-neon-green-lg"
              >
                Join the next free meeting
              </Link>
              <Link
                href="#tools"
                className="w-full sm:w-auto px-8 py-4 rounded-lg border border-tech-blue/50 text-tech-blue font-bold text-base sm:text-lg hover:bg-tech-blue/10 hover:border-tech-blue transition-all"
              >
                See the AI tools
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
                Why ETT
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Not another language course. <span className="gradient-text">A practice ecosystem.</span>
              </h2>
              <p className="text-gray-400 text-lg">
                You've studied English for years. You understand it. But when it's time to speak in a
                meeting or interview, you freeze. ETT is built specifically for that block.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {valueProps.map((vp, i) => (
                <div
                  key={i}
                  className="bg-dark-card border border-dark-border rounded-2xl p-6 card-hover"
                >
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
                The Method
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                <span className="gradient-text">Threshold + Immersion = Fluency</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                The Fluent Formula method (adapted from Frank Florida — 13 languages spoken, 365,000+ students)
                says fluency isn't about talent. It's about reaching the <strong className="text-white">vocabulary threshold (~1,000 words)</strong>
                {' '}where the subconscious takes over, then maximizing exposure. ETT structures both halves.
              </p>
              <Link
                href="/ff/"
                className="inline-flex items-center gap-2 text-neon-green font-semibold hover:text-neon-green/80 transition-colors"
              >
                Read the full method (in Portuguese) <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section id="tools" className="section-padding bg-dark-secondary border-y border-dark-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
                AI-Powered Tools
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                10 AI tools to <span className="gradient-text">unblock English speaking</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Vocabulary diagnosis, subtitled series, audiobooks, ChatGPT prompt simulator, smart flashcards
                and more — a daily routine of precise, relevant practice.
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
                Results & Data
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Numbers that show <span className="gradient-text">why the method works</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Clear goals, measurable progress. ETT doesn't sell vague promises — it delivers a system with proven pedagogical milestones.
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
                Testimonials
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Tech professionals who <span className="gradient-text">stopped freezing</span>
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
              Illustrative testimonials based on real patterns from the community.
            </p>
          </div>
        </section>

        {/* PARTNERS */}
        <section id="partners" className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-4">
                Partners
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Built with <span className="gradient-text">specialized partners</span>
              </h2>
              <p className="text-gray-400">
                BeeTools (structured base), Cherry Top (immersions), Coders (international career mentorship),
                IEP (in-person Curitiba host).
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
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                From signup to <span className="gradient-text">first words spoken</span>
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

        {/* ONLINE MEETING TEASER */}
        <section id="online" className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-dark-card border border-tech-blue/30 rounded-3xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-tech-blue/10 border border-tech-blue/30 flex items-center justify-center flex-shrink-0">
                  <Wifi className="w-6 h-6 text-tech-blue" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-tech-blue font-semibold mb-1">
                    Online — every Monday
                  </div>
                  <h3 className="font-bold text-white text-xl md:text-2xl leading-snug">
                    Speaking practice from anywhere in the world — 8pm BRT (GMT-3)
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-5">
                If you're in São Paulo, Mexico City, Lisbon, Berlin, or Buenos Aires — doesn't matter.
                The online meeting on Mondays is open to anyone with internet and headphones.
                90 minutes of structured speaking practice via Google Meet.
              </p>
              <Link
                href="#signup"
                className="inline-flex items-center gap-2 text-tech-blue font-semibold hover:text-tech-blue/80 transition-colors"
              >
                Join the next online meeting <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FLORIDA IMMERSION TEASER */}
        <section className="section-padding bg-dark-secondary border-y border-dark-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-dark-card border border-neon-green/30 rounded-3xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center flex-shrink-0">
                  <Plane className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-neon-green font-semibold mb-1">
                    USA Immersion — Florida
                  </div>
                  <h3 className="font-bold text-white text-xl md:text-2xl leading-snug">
                    Want full English immersion? Florida 2027 — 2 cohorts
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-5">
                Intensive English immersion in Florida, USA — partnership with Cherry Top.
                For tech professionals targeting international relocation or remote work with US clients.
              </p>
              <Link
                href="/imersoes/florida/"
                className="inline-flex items-center gap-2 text-neon-green font-semibold hover:text-neon-green/80 transition-colors"
              >
                See Florida immersion details (in Portuguese) <ArrowRight className="w-4 h-4" />
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
                Common <span className="gradient-text">questions</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((f, i) => (
                <details
                  key={i}
                  className="bg-dark-card border border-dark-border rounded-2xl p-5 group"
                >
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
                  Join the <span className="gradient-text">next free meeting</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-7 max-w-xl mx-auto">
                  Quick signup. You'll receive the next meeting link, the welcome material and
                  access to the community.
                </p>
                <a
                  href={LEAD_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-neon-green text-dark font-bold text-base hover:bg-neon-green/90 transition-all hover:shadow-neon-green-lg"
                >
                  Sign me up
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-gray-500 text-xs mt-4 italic">
                  Free. No commitment. No spam.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="en" />
    </>
  )
}
