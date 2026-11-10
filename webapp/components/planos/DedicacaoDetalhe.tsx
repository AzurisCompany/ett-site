import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronDown,
  FileText,
  Info,
  MessagesSquare,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  UserRound,
  Wallet,
} from 'lucide-react'
import {
  CHECKOUT_ADESAO,
  CHECKOUT_DEDICACAO,
  PRECO_ADESAO,
  PRECO_MENSAL,
  PRECO_ANUAL,
  META_DIAS,
  faqCobranca,
} from '@/lib/planos'

/**
 * Layout próprio da Trilha de Dedicação (/planos/dedicacao/), no mesmo modelo
 * de AdesaoDetalhe (09/11/2026).
 *
 * Regras (AUDITORIA-CONTEUDO-2026-11-09.md): a trilha vende a CONTINUIDADE do
 * acompanhamento (plano revisado, material atualizado, feedback) — não acesso
 * às ferramentas, que são abertas. Ninguém assina sem a ativação antes: o botão
 * principal é a ativação; quem já fez assina pelo link secundário. Encontros
 * gratuitos nunca entram como item pago. Preços e checkouts só de lib/planos.ts.
 */

const resumo = [
  'Plano de prática revisado todo mês',
  'Material personalizado atualizado',
  'Acompanhamento e feedback do ETT',
  'Sem meta obrigatória',
]

const inclui = [
  {
    icon: RefreshCw,
    titulo: 'Plano revisado todo mês',
    texto:
      'O seu plano de prática é revisto conforme você avança: o que já ficou fácil sai, o que ainda trava entra.',
  },
  {
    icon: FileText,
    titulo: 'Material que acompanha você',
    texto:
      'O material personalizado se refaz com as palavras que você ainda precisa, no contexto que você usa.',
  },
  {
    icon: UserRound,
    titulo: 'Acompanhamento e feedback',
    texto:
      'O ETT acompanha como está a sua rotina e devolve feedback pra você ajustar o que não está funcionando.',
  },
  {
    icon: Sparkles,
    titulo: 'Sem meta obrigatória',
    texto:
      'A sugestão é praticar cerca de uma hora por dia, mas ninguém cobra meta de você. O ritmo é seu.',
  },
  {
    icon: Wallet,
    titulo: 'Mensal ou anual',
    texto: `R$ ${PRECO_MENSAL} por mês, ou R$ ${PRECO_ANUAL} por ano (dois meses de desconto). Cancela quando quiser, direto no checkout, sem multa.`,
  },
  {
    icon: MessagesSquare,
    titulo: 'Encontros e ferramentas abertos',
    texto:
      'Os encontros de conversação são gratuitos pra todos e as ferramentas do ETT Player são abertas. Não fazem parte do que você paga.',
  },
]

const caminho = [
  {
    quando: '1º mês',
    titulo: `Ativação acompanhada — R$ ${PRECO_ADESAO}`,
    texto:
      'Todo mundo começa por aqui: duas sessões individuais de orientação, diagnóstico, plano e material personalizados.',
  },
  {
    quando: 'Dia 31',
    titulo: 'Você assina a Dedicação',
    texto: `R$ ${PRECO_MENSAL} por mês ou R$ ${PRECO_ANUAL} por ano. O acompanhamento continua sem interrupção.`,
  },
  {
    quando: 'Todo mês',
    titulo: 'Plano e material atualizados',
    texto: 'O plano é revisto e o material se refaz com o seu vocabulário, no ritmo em que você pratica.',
  },
  {
    quando: 'Quando quiser',
    titulo: 'Cancela sem multa',
    texto: 'Direto no checkout, sem precisar falar com ninguém. Os encontros continuam abertos pra você.',
  },
]

/* Do FAQ de cobrança, só o que importa pra quem está decidindo a Dedicação. */
const perguntas = faqCobranca.filter((f) =>
  /cancelo|desistir|encontros|usar as ferramentas|nota fiscal/i.test(f.pergunta)
)

function BotaoAtivacao({ className = '' }: { className?: string }) {
  return (
    <a
      href={CHECKOUT_ADESAO}
      className={`inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-4 rounded-xl bg-brand-red-deep text-white font-bold text-[15px] sm:text-base whitespace-nowrap hover:bg-brand-red-deep/90 transition-all hover:shadow-brand-red-lg ${className}`}
    >
      Começar pela ativação — R$ {PRECO_ADESAO}
      <ArrowRight className="w-4 h-4" />
    </a>
  )
}

function LinkAssinar() {
  return (
    <p className="text-sm text-ink-muted mt-4">
      Já fez a ativação?{' '}
      <a href={CHECKOUT_DEDICACAO} className="font-semibold text-brand-red hover:underline">
        Assinar a Dedicação — R$ {PRECO_MENSAL}/mês
      </a>
    </p>
  )
}

export default function DedicacaoDetalhe() {
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
                Depois da ativação · a partir do 2º mês
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-ink mb-5 leading-[1.1]">
                Trilha de Dedicação:{' '}
                <span className="gradient-text">o acompanhamento continua.</span>
              </h1>
              <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                Depois do primeiro mês, o seu plano de prática continua sendo revisado, o material se
                atualiza com o seu vocabulário e o ETT segue acompanhando você. Sem meta obrigatória:
                você pratica no seu ritmo.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 max-w-2xl">
                {[
                  { icon: Wallet, t: `R$ ${PRECO_MENSAL}/mês`, s: `ou R$ ${PRECO_ANUAL}/ano` },
                  { icon: Sparkles, t: 'Sem meta', s: 'pratique no seu ritmo' },
                  { icon: CalendarCheck, t: 'Cancela quando quiser', s: 'sem multa' },
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
              <div className="text-xs text-ink-muted uppercase tracking-wider mb-2">Trilha de Dedicação</div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-black text-brand-red">R$ {PRECO_MENSAL}</span>
                <span className="text-ink-subtle text-sm">por mês</span>
              </div>
              <p className="text-ink-soft text-sm mb-1">a partir do 2º mês</p>
              <p className="text-ink-muted text-sm mb-6">ou R$ {PRECO_ANUAL} por ano — dois meses de desconto</p>

              <ul className="space-y-2.5 mb-6">
                {resumo.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-brand-red" />
                    {r}
                  </li>
                ))}
              </ul>

              <div className="flex items-start gap-2.5 rounded-xl border border-brand-red/25 bg-brand-red/5 px-3.5 py-3 mb-5">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-brand-red" />
                <p className="text-xs text-ink-soft leading-relaxed">
                  <strong className="text-ink">Antes, a ativação.</strong> O 1º mês é a ativação
                  acompanhada de R$ {PRECO_ADESAO}. A mensalidade começa no dia 31.
                </p>
              </div>

              <BotaoAtivacao className="w-full" />
              <LinkAssinar />

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
            A continuidade do que começou na ativação, todo mês, enquanto você quiser.
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

      {/* COMO CHEGAR NA DEDICAÇÃO */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">Como funciona</h2>
          <p className="text-ink-muted text-lg mb-10 max-w-2xl">
            Ninguém assina a Dedicação direto: o primeiro mês é sempre a ativação acompanhada.
          </p>
          <ol className="relative border-l-2 border-brand-red/25 ml-3 space-y-8">
            {caminho.map((j, i) => (
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

      {/* DEDICAÇÃO × ACELERAÇÃO */}
      <section className="py-16 md:py-20 bg-surface-alt border-y border-surface-line">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">Dedicação ou Aceleração?</h2>
          <p className="text-ink-muted text-lg mb-10 max-w-2xl">
            As duas trilhas têm o mesmo acompanhamento. A diferença é como você paga por ele.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-brand-red/35 bg-surface-card p-6">
              <div className="text-[11px] font-bold uppercase tracking-widest text-brand-red mb-2">Você está aqui</div>
              <h3 className="font-bold text-ink text-lg mb-2">Trilha de Dedicação</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-black text-ink">R$ {PRECO_MENSAL}</span>
                <span className="text-ink-subtle text-sm">por mês</span>
              </div>
              <p className="text-sm text-ink-muted leading-relaxed">
                Pra quem prefere praticar no próprio ritmo, sem meta e sem precisar registrar os dias.
              </p>
            </div>
            <Link
              href="/planos/aceleracao/"
              className="group rounded-2xl border border-surface-line bg-surface-card p-6 hover:border-brand-red/40 transition-all"
            >
              <div className="text-[11px] font-bold uppercase tracking-widest text-ink-muted mb-2">A outra opção</div>
              <h3 className="font-bold text-ink text-lg mb-2">Trilha de Aceleração</h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-ink-faint text-sm line-through">R$ {PRECO_MENSAL}/mês</span>
                <span className="text-3xl font-black text-ink">R$ 0</span>
              </div>
              <p className="text-ink text-sm font-semibold mb-2">Custa 1h da sua dedicação por dia.</p>
              <p className="text-sm text-ink-muted leading-relaxed mb-4">
                Sem mensalidade enquanto você mantiver {META_DIAS} dias válidos de prática por mês.
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
            O primeiro passo é a ativação acompanhada (R$ {PRECO_ADESAO}, seu 1º mês). No dia 31, a
            Dedicação continua o acompanhamento por R$ {PRECO_MENSAL}/mês.
          </p>
          <BotaoAtivacao />
          <LinkAssinar />
          <p className="text-ink-subtle text-xs leading-relaxed mt-5">
            Cancela quando quiser, direto no checkout. Compra pela internet tem 7 dias de arrependimento
            garantidos por lei. Nota fiscal emitida pela Azuris.
          </p>
          <Link href="/#precos" className="inline-block mt-6 text-sm font-semibold text-brand-red hover:underline">
            Comparar com as outras opções
          </Link>
        </div>
      </section>
    </>
  )
}
