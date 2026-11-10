import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronDown,
  ClipboardCheck,
  FileText,
  Gift,
  Info,
  MessagesSquare,
  PauseCircle,
  RefreshCw,
  ShieldCheck,
  Timer,
  UserRound,
} from 'lucide-react'
import {
  CHECKOUT_ADESAO,
  CHECKOUT_ACELERACAO,
  DIA_VALIDO,
  PRECO_ADESAO,
  PRECO_MENSAL,
  PRECO_APOSTILA,
  META_DIAS,
  faqCobranca,
} from '@/lib/planos'

/**
 * Layout próprio da Trilha de Aceleração (/planos/aceleracao/), no mesmo modelo
 * de AdesaoDetalhe e DedicacaoDetalhe (09/11/2026).
 *
 * Regras (AUDITORIA-CONTEUDO-2026-11-09.md): mesmo acompanhamento da Dedicação,
 * sem mensalidade enquanto a pessoa mantém META_DIAS dias válidos por mês. NÃO
 * prometer contador, histórico nem selo no Player (ele não tem conta): a meta é
 * registrada pela pessoa e conferida pelo ETT. "R$ 0" nunca sozinho — sempre com
 * a âncora riscada e o custo em dedicação. Ninguém entra sem a ativação antes.
 */

const resumo = [
  'Plano de prática revisado todo mês',
  'Material personalizado atualizado',
  'Acompanhamento e feedback do ETT',
  `Material impresso no 1º mês de meta batida`,
]

const inclui = [
  {
    icon: RefreshCw,
    titulo: 'Plano revisado todo mês',
    texto:
      'O mesmo acompanhamento da Trilha de Dedicação: o seu plano de prática é revisto conforme você avança.',
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
      'O ETT acompanha a sua rotina, confere os seus dias de prática e devolve feedback pra você ajustar o plano.',
  },
  {
    icon: MessagesSquare,
    titulo: 'Encontros contam como dia válido',
    texto:
      'Participar do encontro online de segunda ou do IEP Talks de sábado vale como dia de prática. Os encontros continuam gratuitos pra todos.',
  },
  {
    icon: Gift,
    titulo: 'Prêmio no 1º mês de meta',
    texto: `O seu material de prática impresso (R$ ${PRECO_APOSTILA}), entregue em mãos no IEP Talks ou enviado pra sua casa.`,
  },
  {
    icon: PauseCircle,
    titulo: 'Sem cobrança automática',
    texto:
      'Se não bater a meta, a bolsa entra em pausa e você escolhe o que fazer. Nunca existe cobrança retroativa nem multa.',
  },
]

const meta = [
  {
    icon: Timer,
    titulo: `${META_DIAS} dias válidos por mês`,
    texto: 'Dá cerca de cinco dias por semana: fim de semana livre e margem pra semana ruim.',
  },
  {
    icon: CalendarCheck,
    titulo: 'O que é um dia válido',
    texto: `É o ${DIA_VALIDO}.`,
  },
  {
    icon: ClipboardCheck,
    titulo: 'Como é acompanhada',
    texto:
      'Hoje você registra os seus dias de prática e o ETT confere no acompanhamento. A medição automática dentro do ETT Player ainda está em construção.',
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
    titulo: 'Você entra na Aceleração',
    texto: `A partir daí, a mensalidade fica em R$ 0 enquanto você mantiver ${META_DIAS} dias válidos de prática por mês.`,
  },
  {
    quando: 'Todo mês',
    titulo: 'Você pratica e registra',
    texto: 'O plano é revisto, o material se atualiza e o ETT confere os seus dias de prática.',
  },
  {
    quando: 'Se não bater a meta',
    titulo: 'Um mês de recuperação',
    texto:
      'Se ainda assim não fechar, a bolsa entra em pausa e você escolhe: assina a Trilha de Dedicação ou segue só nos encontros. Bater a meta de novo devolve a gratuidade.',
  },
]

/* Do FAQ de cobrança, só o que importa pra quem está decidindo a Aceleração. */
const perguntas = faqCobranca.filter((f) =>
  /meta da Aceleração|encontros|usar as ferramentas|desistir|nota fiscal/i.test(f.pergunta)
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

function LinkEntrar() {
  return (
    <p className="text-sm text-ink-muted mt-4">
      Já fez a ativação?{' '}
      <a href={CHECKOUT_ACELERACAO} className="font-semibold text-brand-red hover:underline">
        Entrar na Trilha de Aceleração
      </a>
    </p>
  )
}

export default function AceleracaoDetalhe() {
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
                Trilha de Aceleração:{' '}
                <span className="gradient-text">você paga com prática.</span>
              </h1>
              <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                O mesmo acompanhamento da Trilha de Dedicação, sem mensalidade, pra quem topa manter
                uma rotina: {META_DIAS} dias válidos de prática por mês, cerca de uma hora por dia.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 max-w-2xl">
                {[
                  { icon: Timer, t: '1h por dia', s: `${META_DIAS} dias válidos/mês` },
                  { icon: MessagesSquare, t: 'Encontros contam', s: 'como dia válido' },
                  { icon: PauseCircle, t: 'Sem multa', s: 'nem cobrança retroativa' },
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
              <div className="text-xs text-ink-muted uppercase tracking-wider mb-2">Trilha de Aceleração</div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-ink-faint text-lg line-through">R$ {PRECO_MENSAL}/mês</span>
                <span className="text-5xl font-black text-brand-red">R$ 0</span>
              </div>
              <p className="text-ink font-semibold text-sm mb-1">Custa 1h da sua dedicação por dia.</p>
              <p className="text-ink-muted text-sm mb-6">a partir do 2º mês, com a meta em dia</p>

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
                  acompanhada de R$ {PRECO_ADESAO}. A Aceleração começa no dia 31.
                </p>
              </div>

              <BotaoAtivacao className="w-full" />
              <LinkEntrar />

              <p className="flex items-start gap-2 text-xs text-ink-subtle leading-relaxed mt-4">
                <ShieldCheck className="w-4 h-4 shrink-0 text-brand-silver" />
                Perder a bolsa nunca tira o seu acesso aos encontros nem às ferramentas abertas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A META */}
      <section className="py-16 md:py-20 bg-surface-alt border-y border-surface-line">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">A meta, explicada</h2>
          <p className="text-ink-muted text-lg mb-10 max-w-2xl">
            Uma regra só, igual pra todo mundo.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {meta.map((i) => (
              <div key={i.titulo} className="rounded-2xl border border-brand-red/25 bg-surface-card p-6">
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

      {/* O QUE ESTÁ INCLUSO */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">O que está incluso</h2>
          <p className="text-ink-muted text-lg mb-10 max-w-2xl">
            Tudo o que a Trilha de Dedicação tem, enquanto você mantiver a meta.
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

      {/* COMO FUNCIONA */}
      <section className="py-16 md:py-20 bg-surface-alt border-y border-surface-line">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">Como funciona</h2>
          <p className="text-ink-muted text-lg mb-10 max-w-2xl">
            Ninguém entra na Aceleração direto: o primeiro mês é sempre a ativação acompanhada.
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

      {/* ACELERAÇÃO × DEDICAÇÃO */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">Aceleração ou Dedicação?</h2>
          <p className="text-ink-muted text-lg mb-10 max-w-2xl">
            As duas trilhas têm o mesmo acompanhamento. A diferença é como você paga por ele.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-brand-red/35 bg-surface-card p-6">
              <div className="text-[11px] font-bold uppercase tracking-widest text-brand-red mb-2">Você está aqui</div>
              <h3 className="font-bold text-ink text-lg mb-2">Trilha de Aceleração</h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-ink-faint text-sm line-through">R$ {PRECO_MENSAL}/mês</span>
                <span className="text-3xl font-black text-ink">R$ 0</span>
              </div>
              <p className="text-ink text-sm font-semibold mb-2">Custa 1h da sua dedicação por dia.</p>
              <p className="text-sm text-ink-muted leading-relaxed">
                Pra quem topa manter a rotina de {META_DIAS} dias válidos por mês e registrar a prática.
              </p>
            </div>
            <Link
              href="/planos/dedicacao/"
              className="group rounded-2xl border border-surface-line bg-surface-card p-6 hover:border-brand-red/40 transition-all"
            >
              <div className="text-[11px] font-bold uppercase tracking-widest text-ink-muted mb-2">A outra opção</div>
              <h3 className="font-bold text-ink text-lg mb-2">Trilha de Dedicação</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-black text-ink">R$ {PRECO_MENSAL}</span>
                <span className="text-ink-subtle text-sm">por mês</span>
              </div>
              <p className="text-sm text-ink-muted leading-relaxed mb-4">
                Pra quem prefere praticar no próprio ritmo, sem meta e sem registrar os dias.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red">
                Ver a Trilha de Dedicação <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* PERGUNTAS */}
      <section className="py-16 md:py-20 bg-surface-alt border-y border-surface-line">
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
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <MessagesSquare className="w-10 h-10 text-brand-red mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Pronto pra começar?</h2>
          <p className="text-ink-muted text-lg leading-relaxed mb-8">
            O primeiro passo é a ativação acompanhada (R$ {PRECO_ADESAO}, seu 1º mês). No dia 31, a
            Aceleração continua o acompanhamento sem mensalidade, enquanto você mantiver a meta.
          </p>
          <BotaoAtivacao />
          <LinkEntrar />
          <p className="text-ink-subtle text-xs leading-relaxed mt-5">
            Nunca existe cobrança automática na Aceleração. Perder a bolsa não tira o seu acesso aos
            encontros nem às ferramentas abertas do ETT Player.
          </p>
          <Link href="/#precos" className="inline-block mt-6 text-sm font-semibold text-brand-red hover:underline">
            Comparar com as outras opções
          </Link>
        </div>
      </section>
    </>
  )
}
