'use client'

import { motion } from 'framer-motion'
import {
  BarChart3,
  Repeat2,
  Film,
  Headphones,
  Radio,
  BookOpen,
  Printer,
  Database,
  Bot,
  Trophy,
} from 'lucide-react'

const tools = [
  {
    id: 'fluente-level',
    icon: BarChart3,
    name: 'ETT FluenteLevel',
    tagline: 'Diagnóstico de Vocabulário',
    description:
      'Identifica o que você já sabe, o que ainda não sabe e o que precisa ser priorizado. Gera um plano de estudo personalizado com base em listas Longman, Oxford e palavras de alta frequência. Foca nos 20% que geram 80% dos resultados.',
    highlight: true,
    badge: 'Ferramenta #1',
  },
  {
    id: 'pontos',
    icon: Repeat2,
    name: 'Técnica dos Pontinhos',
    tagline: 'Revisão Inteligente',
    description:
      '10 palavras novas por dia + revisão seletiva das palavras difíceis do dia anterior. Alinhado ao Farol da Fluência: foco nas palavras relevantes com repetição que combina avanço e consolidação. 10 meses para fluência.',
    highlight: false,
    badge: null,
  },
  {
    id: 'subtitle-series',
    icon: Film,
    name: 'ETT SubtitleSeries',
    tagline: 'Séries, Legendas e SRT',
    description:
      'Estude com episódios selecionados por nível: marque palavras desconhecidas, repita frases e treine escuta e fala com apoio visual. 20–30 minutos de seriado por dia com vocabulário preparado antes do episódio.',
    highlight: true,
    badge: 'Destaque',
  },
  {
    id: 'audiobook',
    icon: BookOpen,
    name: 'ETT AudioBook',
    tagline: 'Leitura Guiada + Áudio',
    description:
      'Módulo de leitura com audiobooks do Lit2Go (Universidade da Flórida): biblioteca completa de clássicos com áudio profissional. O ETT indica o livro ideal para seu nível, com as palavras desconhecidas mapeadas previamente.',
    highlight: false,
    badge: null,
  },
  {
    id: 'audio-hub',
    icon: Radio,
    name: 'ETT AudioHub',
    tagline: 'Hub de Áudio Contínuo',
    description:
      'Rádios, notícias e talk shows em inglês para níveis intermediário e avançado. Exposição contínua durante o dia — trânsito, fila, academia. Treina entonação, contexto e compreensão sem necessidade de tradução.',
    highlight: false,
    badge: null,
  },
  {
    id: 'diario',
    icon: Headphones,
    name: 'Diário ETT',
    tagline: 'Diário Escrito, Falado e de Sentimentos',
    description:
      'Transforme vocabulário em expressão pessoal. Escreva ou grave o que fez ontem, o que vai fazer hoje, como está se sentindo — em inglês. Aproxima o idioma da sua identidade e gera retenção muito mais profunda.',
    highlight: false,
    badge: null,
  },
  {
    id: 'material-impresso',
    icon: Printer,
    name: 'Material Personalizado',
    tagline: 'Impresso + QR Code',
    description:
      'Cadernos, listas de palavras, apostilas de vocabulário, planos de estudo diários, etiquetas e atividades "Tell me about..." — conectados via QR Code para apoio nos encontros. O processo tátil de escrever reforça a memória.',
    highlight: false,
    badge: null,
  },
  {
    id: 'sistema-inteligente',
    icon: Database,
    name: 'Sistema de Recomendação',
    tagline: 'ClickHouse + IA',
    description:
      'Usa dados de uso, palavras clicadas, erros e contexto profissional para gerar flashcards, exercícios e prioridades personalizadas. Relatórios compartilháveis com professores e parceiros para coaching preciso.',
    highlight: true,
    badge: 'Destaque',
  },
  {
    id: 'ai-prompt',
    icon: Bot,
    name: 'ETT AI Prompt',
    tagline: 'Simulação com IA',
    description:
      'Gera prompts de engenharia profissional para que o ChatGPT simule situações reais: imigração, hotel, entrevista, reunião, restaurante, viagem. Personalizado às lacunas do aluno — treino adicional inteligente fora dos encontros.',
    highlight: true,
    badge: 'IA Generativa',
  },
  {
    id: 'gamificacao',
    icon: Trophy,
    name: 'ETT GameZone',
    tagline: 'Gamificação & Ranking',
    description:
      'Sistema de níveis (Novato → Intermediário → Avançado → Fluente → Global Pro), pontos, badges, leaderboard semanal e jackpot mensal. Constância ganha recompensas. Ranking por comunidade para motivação coletiva.',
    highlight: false,
    badge: 'Novo',
  },
]

export default function Tools() {
  return (
    <section id="ferramentas" className="section-padding bg-dark-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tech-blue/30 to-transparent" />

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle, #00FF9D 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-4">
            Ferramentas Inteligentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            10 ferramentas que transformam
            <br />
            <span className="gradient-text">estudo em resultado</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Cada ferramenta foi desenhada para resolver um problema específico no processo de aprendizado.
            Juntas, formam um sistema que torna o estudo preciso, relevante e motivador.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`relative bg-dark-card rounded-2xl p-5 card-hover flex flex-col ${
                tool.highlight
                  ? 'border border-neon-green/30 shadow-neon-green'
                  : 'border border-dark-border'
              }`}
            >
              {/* Badge */}
              {tool.badge && (
                <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-bold bg-neon-green/15 text-neon-green border border-neon-green/25">
                  {tool.badge}
                </span>
              )}

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                tool.highlight
                  ? 'bg-neon-green/15 border border-neon-green/30'
                  : 'bg-tech-blue/10 border border-tech-blue/20'
              }`}>
                <tool.icon className={`w-5 h-5 ${tool.highlight ? 'text-neon-green' : 'text-tech-blue'}`} />
              </div>

              <h3 className="font-bold text-white text-base mb-1">{tool.name}</h3>
              <p className={`text-xs font-semibold uppercase tracking-wide mb-3 ${
                tool.highlight ? 'text-neon-green' : 'text-tech-blue'
              }`}>
                {tool.tagline}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-5">
            Todas as ferramentas disponíveis para participantes do programa ETT.
          </p>
          <a
            href="#inscricao"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-neon-green text-black font-bold text-base hover:bg-neon-green/90 transition-all hover:shadow-neon-green-lg hover:-translate-y-0.5"
          >
            Quero acesso às ferramentas — inscreva-me no encontro gratuito
          </a>
        </motion.div>
      </div>
    </section>
  )
}
