import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CalendarCheck,
  Check,
  ChevronDown,
  FileText,
  Gauge,
  LayoutGrid,
  MessagesSquare,
  ShieldCheck,
  UserRound,
} from 'lucide-react'
import {
  CHECKOUT_ADESAO,
  PRECO_ADESAO,
  PRECO_MENSAL,
  PRECO_ANUAL,
  META_DIAS,
  faqCobranca,
} from '@/lib/planos'

/**
 * Layout próprio da página da ativação acompanhada (/planos/adesao/), desde
 * 09/11/2026 — a ativação virou a única porta de entrada (o teste grátis saiu)
 * e o vídeo antigo, gravado na época do R$ 67, foi retirado.
 *
 * Regras de copy (CLAUDE.md): orientação de USO, não aula particular; encontro
 * nunca aparece como benefício pago (aqui só como "continua aberto"); nada de
 * promessa de resultado; ferramenta só se existir no ETT Player. Preço e
 * checkout só de lib/planos.ts.
 */

const CTA = `Fazer minha ativação — R$ ${PRECO_ADESAO}`

const resumo = [
  '2 sessões individuais de 1 hora de orientação',
  'Diagnóstico, plano e material personalizados',
  'Acompanhamento durante os 30 dias',
]

const inclui = [
  {
    icon: UserRound,
    titulo: '2 sessões individuais de 1 hora',
    texto:
      'Orientação de uso da plataforma com alguém do ETT, pra configurar as ferramentas e a rotina pros seus objetivos. Não é aula particular de inglês.',
  },
  {
    icon: Gauge,
    titulo: 'Diagnóstico feito com você',
    texto:
      'Vocês fazem juntos o Level Check, que estima o seu nível e mapeia as palavras que faltam, e transformam o resultado num plano de prática.',
  },
  {
    icon: FileText,
    titulo: 'Material de prática personalizado',
    texto:
      'Gerado a partir do seu diagnóstico: as palavras que faltam pra você, no contexto que você usa. Não é apostila genérica.',
  },
  {
    icon: LayoutGrid,
    titulo: 'Ferramentas configuradas pra você',
    texto:
      'As ferramentas do ETT Player são abertas pra experimentar. Na orientação, vocês escolhem quais usar e com que conteúdo: a sua série, o seu livro, a sua rádio.',
  },
  {
    icon: BarChart3,
    titulo: 'Acompanhamento durante os 30 dias',
    texto:
      'Entre uma sessão e outra, o ETT acompanha como está a sua rotina e ajusta o plano com você.',
  },
  {
    icon: MessagesSquare,
    titulo: 'Encontros continuam gratuitos',
    texto:
      'O encontro online de segunda e o IEP Talks de sábado são abertos a todos, com ou sem ativação. Não fazem parte do que você paga.',
  },
]

const jornada = [
  {
    quando: 'Semana 1',
    titulo: 'Primeira sessão',
    texto: 'Vocês rodam o diagnóstico juntos, montam o seu plano de prática e configuram a sua rotina diária.',
  },
  {
    quando: 'Semana 2',
    titulo: 'Segunda sessão',
    texto:
      'Ajuste do que travou de verdade e escolha de conteúdo do seu nível nas ferramentas: a sua série, o seu livro, a sua rádio.',
  },
  {
    quando: 'Até o dia 30',
    titulo: 'Prática no dia a dia',
    texto:
      'Você usa as ferramentas no seu ritmo. Os encontros de conversação, online às segundas e o IEP Talks aos sábados, continuam abertos a todos.',
  },
  {
    quando: 'Dia 31',
    titulo: 'Você escolhe sua trilha',
    texto: 'Com um mês de uso, você já sabe como a plataforma encaixa na sua rotina e escolhe como continuar.',
  },
]

/* Do FAQ de cobrança, só o que importa pra quem está decidindo a ativação. */
const perguntas = faqCobranca.filter((f) =>
  /vira mensalidade|usar as ferramentas|desistir|encontros|nota fiscal/i.test(f.pergunta)
)

function BotaoCompra({ className = '' }: { className?: string }) {
  return (
    <a
      href={CHECKOUT_ADESAO}
      className={`inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-4 rounded-xl bg-brand-red-deep text-white font-bold text-[15px] sm:text-base whitespace-nowrap hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red-lg ${className}`}
    >
      {CTA}
      <ArrowRight className="w-4 h-4" />
    </a>
  )
}

export default function AdesaoDetalhe() {
  return (
    <>
      {/* HERO: proposta | cartão de compra */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 via-surface to-surface" />
        <div className="absolute top-24 right-0 w-[28rem] h-[28rem] bg-brand-red/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative max-w-6xl">
          <Link
            href="/#precos"
            className="inline-flex items-center gap-1.5 text-ink-muted hover:text-brand-red text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Todas as opções
          </Link>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] gap-10 lg:gap-14 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-5">
                Comece por aqui · seu 1º mês
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-ink mb-5 leading-[1.1]">
                Ativação acompanhada:{' '}
                <span className="gradient-text">pratique com um plano.</span>
              </h1>
              <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                Seu primeiro mês com orientação individual: duas sessões pra montar o seu plano de
                prática, configurar as ferramentas do ETT Player pros seus objetivos e organizar a sua
                rotina, com material personalizado e acompanhamento.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 max-w-2xl">
                {[
                  { icon: LayoutGrid, t: '30 dias', s: 'de acompanhamento' },
                  { icon: UserRound, t: '2 × 1 hora', s: 'orientação individual' },
                  { icon: CalendarCheck, t: 'Pagamento único', s: 'não vira mensalidade' },
                ].map((f) => (
                  <div key={f.t} className="flex items-center gap-3 rounded-xl border border-surface-line bg-surface-card px-4 py-3">
                    <f.icon className="w-5 h-5 text-brand-red shrink-0" />
                    <div>
                      <div className="text-ink font-bold text-sm leading-tight">{f.t}</div>
                      <div className="text-ink-muted text-xs">{f.s}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cartão de compra */}
            <div className="rounded-2xl border border-brand-red/35 bg-surface-card shadow-brand-red p-7">
              <div className="text-xs text-ink-muted uppercase tracking-wider mb-2">Ativação acompanhada</div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-black text-brand-red">R$ {PRECO_ADESAO}</span>
              </div>
              <p className="text-ink-soft text-sm mb-1">pagamento único · é o seu 1º mês</p>
              <p className="text-ink-muted text-sm mb-6">PIX ou cartão em até 3x</p>

              <ul className="space-y-2.5 mb-7">
                {resumo.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-brand-red" />
                    {r}
                  </li>
                ))}
              </ul>

              <BotaoCompra className="w-full" />

              <p className="flex items-start gap-2 text-xs text-ink-subtle leading-relaxed mt-4">
                <ShieldCheck className="w-4 h-4 shrink-0 text-brand-silver" />
                7 dias de arrependimento garantidos por lei. Nota fiscal emitida pela Azuris.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE ESTÁ INCLUSO */}
      <section className="py-16 md:py-20 bg-surface-alt border-y border-surface-line">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">O que está incluso</h2>
          <p className="text-ink-muted text-lg mb-10 max-w-2xl">
            Tudo o que você precisa pra começar a usar a plataforma do jeito certo, num pagamento só.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {inclui.map((i) => (
              <div key={i.titulo} className="rounded-2xl border border-surface-line bg-surface-card p-6">
                <div className="w-11 h-11 rounded-xl bg-brand-red/10 flex items-center justify-center mb-4">
                  <i.icon className="w-5 h-5 text-brand-red" />
                </div>
                <h3 className="font-bold text-ink mb-2">{i.titulo}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{i.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEUS 30 DIAS */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">Como são os seus 30 dias</h2>
          <p className="text-ink-muted text-lg mb-10 max-w-2xl">
            As duas sessões são orientação de uso da plataforma, não aula particular. O objetivo é você
            sair praticando sozinho.
          </p>
          <ol className="relative border-l-2 border-brand-red/25 ml-3 space-y-8">
            {jornada.map((j, i) => (
              <li key={j.quando} className="pl-8 relative">
                <span className="absolute -left-[13px] top-0.5 w-6 h-6 rounded-full bg-brand-red-deep text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">{j.quando}</div>
                <h3 className="text-lg font-bold text-ink mb-1">{j.titulo}</h3>
                <p className="text-ink-muted leading-relaxed">{j.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DIA 31: AS TRILHAS */}
      <section className="py-16 md:py-20 bg-surface-alt border-y border-surface-line">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">No dia 31, você escolhe como continuar</h2>
          <p className="text-ink-muted text-lg mb-10 max-w-2xl">
            As trilhas só existem depois da ativação. Você decide com um mês de uso, sabendo como a
            plataforma encaixa na sua rotina.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <Link
              href="/planos/dedicacao/"
              className="group rounded-2xl border border-surface-line bg-surface-card p-6 hover:border-brand-red/40 transition-all"
            >
              <h3 className="font-bold text-ink text-lg mb-2">Trilha de Dedicação</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-black text-ink">R$ {PRECO_MENSAL}</span>
                <span className="text-ink-subtle text-sm">por mês</span>
              </div>
              <p className="text-sm text-ink-muted leading-relaxed mb-4">
                O acompanhamento continua todo mês, sem meta obrigatória. Cancela quando quiser. Anual
                por R$ {PRECO_ANUAL}.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red">
                Ver a Trilha de Dedicação <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
            <Link
              href="/planos/aceleracao/"
              className="group rounded-2xl border border-surface-line bg-surface-card p-6 hover:border-brand-red/40 transition-all"
            >
              <h3 className="font-bold text-ink text-lg mb-2">Trilha de Aceleração</h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-ink-faint text-sm line-through">R$ {PRECO_MENSAL}/mês</span>
                <span className="text-3xl font-black text-ink">R$ 0</span>
              </div>
              <p className="text-ink text-sm font-semibold mb-2">Custa 1h da sua dedicação por dia.</p>
              <p className="text-sm text-ink-muted leading-relaxed mb-4">
                O mesmo acompanhamento, sem mensalidade, enquanto você mantiver {META_DIAS} dias válidos
                de prática por mês.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red">
                Ver a Trilha de Aceleração <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
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
          <MessagesSquare className="w-10 h-10 text-brand-red mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Pronto pra começar?</h2>
          <p className="text-ink-muted text-lg leading-relaxed mb-8">
            R$ {PRECO_ADESAO}, uma vez só: duas sessões de orientação, plano e material personalizados e acompanhamento por 30 dias.
            Depois, você escolhe a sua trilha.
          </p>
          <BotaoCompra />
          <p className="text-ink-subtle text-xs leading-relaxed mt-5">
            Cobrança única, não vira mensalidade. PIX ou cartão em até 3x. Os encontros de conversação
            continuam abertos a todos, com ou sem ativação.
          </p>
          <Link href="/#precos" className="inline-block mt-6 text-sm font-semibold text-brand-red hover:underline">
            Comparar com as outras opções
          </Link>
        </div>
      </section>
    </>
  )
}
