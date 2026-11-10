import Link from 'next/link'
import {
  ArrowRight,
  CalendarCheck,
  ChevronDown,
  ClipboardList,
  Clock,
  MessageCircle,
  MessagesSquare,
  MousePointerClick,
  Sparkles,
} from 'lucide-react'
import { DESAFIO_WHATSAPP, ferramentasDesafio } from '@/lib/desafio'
import AvisoPausa from '@/components/encontros/AvisoPausa'

/**
 * Página do Desafio de 7 dias (/desafio/), desde 09/11/2026. Gratuito, sem
 * cadastro além da conversa no WhatsApp com o Miguel. Cada dia a pessoa escolhe
 * uma ferramenta do ETT Player; o desafio termina no encontro de conversação.
 * Sem promessa de resultado (regra do site).
 */

const passos = [
  {
    icon: MessageCircle,
    titulo: 'Chame o Miguel no WhatsApp',
    texto: 'Clique em "Quero participar". A mensagem já vai pronta. O Miguel responde e o seu dia 1 começa.',
  },
  {
    icon: MousePointerClick,
    titulo: 'Uma ferramenta por dia, à sua escolha',
    texto:
      'Durante 7 dias, escolha uma ferramenta do ETT Player, pratique uns 15 minutos e conte pro Miguel o que fez: um print, um áudio ou duas linhas.',
  },
  {
    icon: MessagesSquare,
    titulo: 'Participe do encontro de conversação',
    texto:
      'Depois dos 7 dias, participe do encontro online de segunda, 20h, ou do IEP Talks de sábado, 10h, em Curitiba. Gratuito e aberto a qualquer nível.',
  },
  {
    icon: ClipboardList,
    titulo: 'Responda o feedback',
    texto:
      'Depois do encontro, o Miguel te manda algumas perguntas rápidas sobre o desafio e a conversa. É assim que você conclui o desafio, e é com isso que a gente melhora.',
  },
]

const perguntas = [
  {
    pergunta: 'É gratuito mesmo?',
    resposta:
      'Sim. O desafio, as ferramentas do ETT Player e o encontro de conversação são gratuitos. Não pedimos cartão.',
  },
  {
    pergunta: 'Preciso me cadastrar?',
    resposta:
      'Não. É só chamar o Miguel no WhatsApp. Algumas ferramentas pedem o seu e-mail na entrada do Player.',
  },
  {
    pergunta: 'Qual nível de inglês preciso ter?',
    resposta:
      'Qualquer nível. Quem está começando escolhe ferramentas mais leves, como Flashcards e Rádio; quem já entende bem pode ir pra Legendas e Daily.',
  },
  {
    pergunta: 'E se eu perder um dia?',
    resposta:
      'Sem problema: você continua de onde parou. O que importa é completar os 7 dias de prática, não fazer em 7 dias seguidos.',
  },
  {
    pergunta: 'Posso repetir a mesma ferramenta?',
    resposta:
      'Pode. A ideia é experimentar, mas se uma ferramenta funcionou pra você, use de novo e conte pro Miguel por quê.',
  },
  {
    pergunta: 'O que acontece depois dos 7 dias?',
    resposta:
      'Você participa do encontro de conversação, responde o feedback pro Miguel e pode continuar indo, de graça, toda semana. Se quiser montar um plano de prática com orientação individual, existe a ativação acompanhada — mas é opcional.',
  },
]

function BotaoParticipar({ className = '' }: { className?: string }) {
  return (
    <a
      href={DESAFIO_WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-red-deep text-white font-bold hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red-lg ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      Quero participar do desafio
    </a>
  )
}

export default function DesafioDetalhe() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 via-surface to-surface" />
        <div className="absolute top-24 right-0 w-[28rem] h-[28rem] bg-brand-red/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative max-w-4xl text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-5">
            Gratuito · com acompanhamento no WhatsApp
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink mb-5 leading-[1.1]">
            Desafio de 7 dias:{' '}
            <span className="gradient-text">uma ferramenta por dia.</span>
          </h1>
          <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            Durante uma semana, você escolhe uma ferramenta do ETT Player por dia, pratica uns 15
            minutos e conta pro Miguel como foi. No fim, participa do encontro de conversação e
            responde um feedback rápido.
          </p>
          <BotaoParticipar />
          <div className="grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto mt-10">
            {[
              { icon: CalendarCheck, t: '7 dias', s: 'uma ferramenta por dia' },
              { icon: Clock, t: '~15 minutos', s: 'por dia' },
              { icon: Sparkles, t: 'Gratuito', s: 'sem cartão, sem cadastro' },
            ].map((f) => (
              <div key={f.t} className="flex items-center gap-3 rounded-xl border border-surface-line bg-surface-card px-4 py-3 text-left">
                <f.icon className="w-5 h-5 text-brand-red shrink-0" />
                <div>
                  <div className="text-ink font-bold text-sm leading-tight">{f.t}</div>
                  <div className="text-ink-muted text-xs">{f.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-16 md:py-20 bg-surface-alt border-y border-surface-line">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-10 text-center">Como funciona</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {passos.map((p, i) => (
              <div key={p.titulo} className="rounded-2xl border border-surface-line bg-surface-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-brand-red-deep text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p.icon className="w-5 h-5 text-brand-red" />
                </div>
                <h3 className="font-bold text-ink mb-2">{p.titulo}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARDÁPIO DE FERRAMENTAS */}
      <section id="ferramentas" className="py-16 md:py-20 bg-surface scroll-mt-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">Escolha a ferramenta do dia</h2>
          <p className="text-ink-muted text-lg mb-10 max-w-2xl">
            Todas abertas no ETT Player. Não precisa seguir ordem: escolha pela vontade do dia.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ferramentasDesafio.map((f) => (
              <Link
                key={f.id}
                href={`/ferramentas/${f.id}/`}
                className="group rounded-2xl border border-surface-line bg-surface-card p-5 hover:border-brand-red/40 transition-all"
              >
                <h3 className="font-bold text-ink mb-1">{f.nome}</h3>
                <p className="text-sm text-ink-muted leading-relaxed mb-3">{f.finalidade}</p>
                <p className="text-xs text-ink-subtle leading-relaxed mb-3">
                  <strong className="text-ink-soft">Ideia pro dia:</strong> {f.exemplo}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-red">
                  Ver a ferramenta <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FECHAMENTO NO ENCONTRO */}
      <section className="py-16 md:py-20 bg-surface-alt border-y border-surface-line">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <MessagesSquare className="w-10 h-10 text-brand-red mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">O fechamento: o grupo de conversação</h2>
          <p className="text-ink-muted text-lg leading-relaxed mb-6">
            Depois de 7 dias praticando sozinho, você usa o que treinou conversando com outras pessoas.
            O Miguel te avisa do próximo encontro e, depois dele, te manda o feedback que conclui o
            desafio.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left mb-6">
            <div className="rounded-2xl border border-surface-line bg-surface-card p-5">
              <div className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">Online</div>
              <p className="text-ink font-semibold">Segundas, 20h às 21h30</p>
              <p className="text-sm text-ink-muted">Na sala do ETT Speak, direto no navegador.</p>
            </div>
            <div className="rounded-2xl border border-surface-line bg-surface-card p-5">
              <div className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">Presencial · Curitiba</div>
              <p className="text-ink font-semibold">IEP Talks, sábados, 10h às 12h</p>
              <p className="text-sm text-ink-muted">No IEP, Rua Emiliano Perneta, 174.</p>
            </div>
          </div>
          <AvisoPausa tipo="ambos" className="mb-6" />
          <Link href="/agenda/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:underline">
            Ver as próximas datas na agenda <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* PERGUNTAS */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-8">Perguntas</h2>
          <div className="space-y-3">
            {perguntas.map((f) => (
              <details
                key={f.pergunta}
                className="group rounded-xl border border-surface-line bg-surface-card px-5 py-4 open:border-brand-red/30"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-ink">
                  {f.pergunta}
                  <ChevronDown className="w-5 h-5 text-ink-muted shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="text-ink-muted leading-relaxed mt-3">{f.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-surface-alt border-t border-surface-line">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Bora começar?</h2>
          <p className="text-ink-muted text-lg leading-relaxed mb-8">
            Chame o Miguel no WhatsApp. A mensagem já vai pronta, e o seu dia 1 começa hoje.
          </p>
          <BotaoParticipar />
        </div>
      </section>
    </>
  )
}
