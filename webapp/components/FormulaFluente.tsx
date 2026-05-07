'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
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
  CheckCircle2,
  AlertTriangle,
  Zap,
  BookMarked,
  ExternalLink,
} from 'lucide-react'

const ETT_PROGRAM_URL =
  'https://gubigdata.com.br/programa-de-aceleracao-do-ingles-para-mercado-internacional/'

const pillars = [
  {
    title: 'Escrever',
    pct: 40,
    type: 'Ativa · Escrita',
    icon: PenLine,
    color: 'neon-green',
    note: 'A mais difícil — e por isso a primeira. Quem escreve, lê.',
  },
  {
    title: 'Falar',
    pct: 30,
    type: 'Ativa · Oral',
    icon: MessageSquare,
    color: 'neon-green',
    note: 'Pronúncia + velocidade. Quem fala, ouve e entende.',
  },
  {
    title: 'Ouvir',
    pct: 20,
    type: 'Passiva · Oral',
    icon: Headphones,
    color: 'tech-blue',
    note: 'Sotaques, gírias, ritmo. O subconsciente faz o trabalho.',
  },
  {
    title: 'Ler',
    pct: 10,
    type: 'Passiva · Escrita',
    icon: BookOpen,
    color: 'tech-blue',
    note: 'A mais fácil — informação pura, sem pronúncia.',
  },
]

const stages = [
  { n: 1, label: 'Incompetência inconsciente', sub: 'Não sabe o que não sabe' },
  { n: 2, label: 'Incompetência consciente', sub: 'Descobriu o tamanho do desafio' },
  { n: 3, label: 'Competência consciente', sub: 'Fala pensando — o threshold', highlight: true },
  { n: 4, label: 'Competência inconsciente', sub: 'Fala sem pensar — fluência', highlight: true },
]

const studyPlan = [
  { n: '01', title: 'Visão geral', desc: 'Folheie a lição. Não estude ainda — apenas obtenha o contexto.' },
  { n: '02', title: 'Ler explicações', desc: 'Gramática nova e vocabulário novo. Compreensão inicial.' },
  { n: '03', title: 'Ouvir o áudio', desc: 'Sem ler o texto. Acostume os ouvidos ao som puro.' },
  { n: '04', title: 'Ouvir + ler', desc: 'Áudio e transcrição juntos. Fixe a ortografia ao som.' },
  { n: '05', title: 'Estudar vocabulário', desc: 'Palavra a palavra, com pronúncia. 10–30 por dia.' },
  { n: '06', title: 'Traduzir', desc: 'Para o português. Dias depois, traduza de volta — habilidade ativa.' },
  { n: '07', title: 'Praticar pronúncia', desc: 'Imite entonação e melodia. "Xerox" do som.' },
  { n: '08', title: 'Conversar com o áudio', desc: 'Assuma um dos papéis. Pause, responda, compare.' },
  { n: '09', title: 'Ditado', desc: 'Escreva o que ouve, sem olhar. Marque erros com ponto vermelho.' },
  { n: '10', title: 'Exercícios', desc: 'Faça todos. Compare com gabarito. Repita os errados até zerar.' },
]

const immersionLayers = [
  {
    icon: Plane,
    title: 'No exterior',
    color: 'neon-green',
    desc: 'Quando viável, busque contato com nativos e fuja dos compatriotas até estar fluente. Cada palavra cotidiana aparece dezenas de vezes por dia.',
  },
  {
    icon: MapPin,
    title: 'No Brasil',
    color: 'tech-blue',
    desc: 'Intercâmbio de idiomas, Meetup, hostels, Couchsurfing, aulas online, comunidade de prática. No ETT, é o coração dos encontros mensais.',
  },
  {
    icon: Brain,
    title: 'Na sua cabeça',
    color: 'neon-green',
    desc: 'Traduzir o diálogo interno no trânsito, no banho, na fila. A técnica de maior alavancagem por minuto investido — funciona em qualquer lugar.',
  },
]

const principles = [
  { icon: Repeat, title: 'Coma o elefante uma colher por vez', desc: 'Pequenos pedaços, todos os dias. 10 palavras hoje > 200 num único dia.' },
  { icon: Zap, title: '70% nas habilidades ativas', desc: 'Foque em escrever e falar. O passivo vem de graça junto.' },
  { icon: Compass, title: 'Mapa antes do território', desc: 'Veja o quadro inteiro da gramática antes de entrar em cada tempo verbal.' },
  { icon: AlertTriangle, title: 'Antes do threshold, evite erros', desc: 'O cérebro grava como um HD. Hábito errado é difícil de apagar.' },
  { icon: Sparkles, title: 'Depois do threshold, esqueça o erro', desc: 'Solte a língua. Multiplique a imersão por 10. Erre falando, aprenda mais rápido.' },
  { icon: Target, title: 'Comece pelo mais difícil', desc: 'Princípio do "grit". Dominado o difícil, o resto vem fácil.' },
]

const colorMap = {
  'neon-green': {
    bg: 'bg-neon-green/10',
    border: 'border-neon-green/20',
    icon: 'text-neon-green',
    text: 'text-neon-green',
    bar: 'bg-neon-green',
  },
  'tech-blue': {
    bg: 'bg-tech-blue/10',
    border: 'border-tech-blue/20',
    icon: 'text-tech-blue',
    text: 'text-tech-blue',
    bar: 'bg-tech-blue',
  },
}

export default function FormulaFluente() {
  return (
    <main className="bg-dark min-h-screen pt-16">
      {/* HERO */}
      <section className="section-padding relative overflow-hidden hero-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-green/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-6">
              Metodologia
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              A <span className="gradient-text">Fórmula Fluente</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              O método que destila por que algumas pessoas chegam à fluência em meses e outras
              passam anos travadas. Base científica, prática deliberada, threshold + imersão.
            </p>

            {/* Equation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-5 p-6 sm:p-8 rounded-3xl border border-neon-green/30 bg-neon-green/5 shadow-neon-green"
            >
              <span className="text-xl sm:text-3xl font-bold text-white">Threshold</span>
              <span className="text-xl sm:text-3xl font-bold text-tech-blue">+</span>
              <span className="text-xl sm:text-3xl font-bold text-white">Imersão</span>
              <span className="text-xl sm:text-3xl font-bold text-tech-blue">=</span>
              <span className="text-xl sm:text-3xl font-bold gradient-text">Fluência</span>
            </motion.div>

            <p className="text-gray-500 text-sm mt-6 max-w-xl mx-auto">
              Adaptado da metodologia de <strong className="text-gray-300">Frank Florida</strong> —
              poliglota com 13 idiomas e mais de 365 mil alunos formados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PREMISSA */}
      <section className="section-padding bg-dark-secondary border-t border-dark-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-4">
                A Premissa
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Não é talento.
                <br />
                <span className="gradient-text">É método.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Quem segue um método errado pode estudar 10 anos e nunca falar. Quem segue
                o caminho certo chega à fluência funcional em poucos meses, mesmo do zero.
                A diferença está em <em className="text-white not-italic">o que</em> você
                pratica e <em className="text-white not-italic">na ordem</em> em que pratica.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="bg-dark-card border border-dark-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-6 h-6 text-neon-green" />
                <h3 className="font-bold text-white text-lg">Idioma = LEGO Linguístico</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Toda língua se reduz a duas peças:
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-neon-green/5 border border-neon-green/20">
                  <div className="text-xs uppercase tracking-wider text-neon-green font-semibold mb-1">Palavras</div>
                  <div className="text-white font-bold mb-1">Vocabulário</div>
                  <div className="text-xs text-gray-500">Lado direito do cérebro · memorizar</div>
                </div>
                <div className="p-4 rounded-xl bg-tech-blue/5 border border-tech-blue/20">
                  <div className="text-xs uppercase tracking-wider text-tech-blue font-semibold mb-1">Ordem</div>
                  <div className="text-white font-bold mb-1">Gramática</div>
                  <div className="text-xs text-gray-500">Lado esquerdo · entender regras</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OS 4 PILARES */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
              Os 4 Pilares
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              70% do tempo nas <span className="gradient-text">habilidades ativas</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              É a inversão silenciosa que separa quem aprende de quem só estuda. A maioria dos
              cursos foca no que é mais fácil — ler e ouvir — e por isso a maioria das pessoas
              nunca fala.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {pillars.map((p, i) => {
              const c = colorMap[p.color as keyof typeof colorMap]
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-dark-card border border-dark-border rounded-2xl p-6 card-hover relative"
                >
                  <div className={`w-11 h-11 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
                    <p.icon className={`w-5 h-5 ${c.icon}`} />
                  </div>
                  <div className={`text-xs uppercase tracking-wider ${c.text} font-semibold mb-1`}>{p.type}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>

                  {/* progress bar */}
                  <div className="h-2 rounded-full bg-dark-border overflow-hidden mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
                      className={`h-full ${c.bar}`}
                    />
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-3xl font-black ${c.text}`}>{p.pct}%</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">do tempo</span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">{p.note}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 text-center text-gray-500 text-sm max-w-2xl mx-auto"
          >
            <strong className="text-gray-300">Princípio do grit:</strong> ataque o mais difícil
            primeiro. Habilidade ativa contém a passiva — quem escreve sabe ler; quem fala entende.
            O contrário não é verdade.
          </motion.div>
        </div>
      </section>

      {/* THRESHOLD */}
      <section className="section-padding bg-dark-secondary border-y border-dark-border relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-green/5 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
                O Threshold
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                O ponto em que o <span className="gradient-text">aprendizado vira automático</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                O nível mínimo de vocabulário e gramática a partir do qual você consegue
                manter uma conversa simples — e a partir do qual o subconsciente assume o trabalho.
              </p>
            </motion.div>

            {/* Word benchmarks */}
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              {[
                { num: '250', label: 'palavras', desc: '~60% de qualquer texto', color: 'tech-blue' },
                { num: '1.000', label: 'palavras', desc: 'manter conversa simples', color: 'neon-green', highlight: true },
                { num: '2.000', label: 'palavras', desc: 'fluência funcional (90–95%)', color: 'neon-green' },
              ].map((b, i) => {
                const c = colorMap[b.color as keyof typeof colorMap]
                return (
                  <motion.div
                    key={b.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`bg-dark-card border ${b.highlight ? 'border-neon-green/40 shadow-neon-green' : 'border-dark-border'} rounded-2xl p-6 text-center`}
                  >
                    <div className={`text-5xl font-black ${c.text} mb-1`}>{b.num}</div>
                    <div className="text-xs uppercase tracking-wider text-gray-500 mb-3">{b.label}</div>
                    <div className="text-gray-300 text-sm">{b.desc}</div>
                    {b.highlight && (
                      <div className="mt-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-semibold">
                        <Target className="w-3 h-3" /> threshold
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Before/After threshold */}
            <div className="grid md:grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="bg-dark-card border border-dark-border rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-tech-blue" />
                  <h3 className="font-bold text-white">Antes do threshold</h3>
                </div>
                <ul className="space-y-2.5 text-sm text-gray-400">
                  <li className="flex gap-2"><span className="text-tech-blue">→</span> Estude com cuidado, devagar, no papel.</li>
                  <li className="flex gap-2"><span className="text-tech-blue">→</span> Evite erros — o cérebro grava como um HD.</li>
                  <li className="flex gap-2"><span className="text-tech-blue">→</span> Use traduções controladas e gabaritos.</li>
                  <li className="flex gap-2"><span className="text-tech-blue">→</span> Construa o contexto — peças do quebra-cabeça.</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="bg-dark-card border border-neon-green/30 rounded-2xl p-6 shadow-neon-green"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-neon-green" />
                  <h3 className="font-bold text-white">Depois do threshold</h3>
                </div>
                <ul className="space-y-2.5 text-sm text-gray-300">
                  <li className="flex gap-2"><span className="text-neon-green">→</span> Solte a língua — fale, erre, fale de novo.</li>
                  <li className="flex gap-2"><span className="text-neon-green">→</span> Multiplique a imersão por 10x.</li>
                  <li className="flex gap-2"><span className="text-neon-green">→</span> O subconsciente classifica os dados sozinho.</li>
                  <li className="flex gap-2"><span className="text-neon-green">→</span> A bola de neve passa a rolar — quase automático.</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* OS 4 ESTÁGIOS */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-4">
              Os 4 Estágios
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              A escada da <span className="gradient-text">competência</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A maioria dos métodos tenta pular do estágio 2 direto pro 4 ("aprender intuitivamente").
              Crianças levam 4 anos com imersão 24/7 — você não tem esse tempo. Você precisa do estágio 3.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {stages.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative bg-dark-card border rounded-2xl p-6 ${s.highlight ? 'border-neon-green/40' : 'border-dark-border'}`}
              >
                <div className={`text-6xl font-black mb-3 ${s.highlight ? 'text-neon-green' : 'text-gray-700'}`}>
                  {s.n}
                </div>
                <h3 className="font-bold text-white text-base mb-2 leading-tight">{s.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.sub}</p>
                {s.n === 3 && (
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-semibold">
                    threshold
                  </span>
                )}
                {s.n === 4 && (
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-semibold">
                    fluência
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANO DE ESTUDOS - 10 PASSOS */}
      <section className="section-padding bg-dark-secondary border-y border-dark-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
              Plano de Estudos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              10 passos por <span className="gradient-text">lição</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Roteiro repetível, aplicável a qualquer aula ou material. Não é o mais rápido —
              é o que de fato leva à fluência.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {studyPlan.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.06 }}
                className="bg-dark-card border border-dark-border rounded-xl p-5 card-hover"
              >
                <div className="text-2xl font-black gradient-text mb-2">{step.n}</div>
                <h3 className="font-bold text-white text-sm mb-2 leading-tight">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 max-w-2xl mx-auto p-5 rounded-xl border border-tech-blue/20 bg-tech-blue/5 flex items-start gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-tech-blue shrink-0 mt-0.5" />
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-tech-blue">Regra do ponto vermelho:</strong> marque
              cada erro. Repita só os errados, no dia seguinte, e nos dias seguintes —
              até o ponto vermelho virar zero.
            </p>
          </motion.div>
        </div>
      </section>

      {/* IMERSÃO - 3 CAMADAS */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-4">
              Imersão
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Imersão não é só <span className="gradient-text">viajar</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Três camadas, três oportunidades — e a mais poderosa não exige passaporte.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {immersionLayers.map((layer, i) => {
              const c = colorMap[layer.color as keyof typeof colorMap]
              return (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-dark-card border border-dark-border rounded-2xl p-6 card-hover"
                >
                  <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
                    <layer.icon className={`w-6 h-6 ${c.icon}`} />
                  </div>
                  <h3 className="font-bold text-white text-xl mb-3">{layer.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{layer.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PRINCÍPIOS */}
      <section className="section-padding bg-dark-secondary border-y border-dark-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
              Princípios Práticos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Os 6 mantras da <span className="gradient-text">prática diária</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-dark-card border border-dark-border rounded-2xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-neon-green" />
                </div>
                <h3 className="font-bold text-white text-base mb-2 leading-snug">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="inscricao" className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center bg-dark-card border border-neon-green/30 rounded-3xl p-10 md:p-14 shadow-neon-green relative overflow-hidden"
          >
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
                Inscrição + Ebook gratuito
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Inscreva-se no <span className="gradient-text">ETT</span> e receba o ebook
                quando lançarmos
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                Garanta sua vaga no programa de aceleração de inglês e receba primeiro
                o ebook da Fórmula Fluente — método completo, threshold, 4 pilares e os 10 passos
                por lição.
              </p>

              <a
                href={ETT_PROGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-neon-green text-black font-bold text-sm hover:bg-neon-green/90 transition-all hover:shadow-neon-green-lg"
              >
                Inscreva-se no ETT e receba o ebook
                <ExternalLink className="w-4 h-4" />
              </a>

              <p className="text-xs text-gray-500 mt-4">
                Lançamento do ebook em breve — quem se inscrever no ETT recebe primeiro.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
