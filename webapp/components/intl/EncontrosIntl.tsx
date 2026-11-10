'use client'

import { useEffect, useState } from 'react'
import { encontrosOnlineRecorrentes, REINICIO } from '@/lib/agenda-events'

/**
 * Datas e horários das landings /en/ e /es/, calculados NO NAVEGADOR.
 *
 * O site é export estático: data calculada no build fica vencida. E o horário
 * depende do fuso de quem visita — por isso sempre no cliente, com skeleton
 * antes (evita erro de hidratação).
 *
 * Os encontros são em horário de Brasília (BRT, GMT-3; o Brasil não tem horário
 * de verão desde 2019, então o offset fixo -03:00 é seguro).
 */

type IntlLocale = 'en' | 'es'

const TZ_BRT = 'America/Sao_Paulo'

/** "Agora" com os campos locais iguais ao relógio de Brasília — os geradores de
 * lib/agenda-events usam getDay()/getHours() locais, então isso faz a regra
 * "segunda antes das 22h ainda conta" valer em BRT para qualquer visitante. */
function agoraEmBrasilia(): Date {
  return new Date(new Date().toLocaleString('en-US', { timeZone: TZ_BRT }))
}

function instanteBrt(dataIso: string, hora: string): Date {
  return new Date(`${dataIso}T${hora}:00-03:00`)
}

const TEXTO = {
  en: {
    yourTime: 'Your time',
    brasilia: 'Brasília time (BRT)',
    sameZone: 'You are on Brasília time.',
    backOn: 'Back on',
  },
  es: {
    yourTime: 'Tu horario',
    brasilia: 'Horario de Brasilia (BRT)',
    sameZone: 'Estás en el horario de Brasilia.',
    backOn: 'Vuelve el',
  },
} as const

interface Linha {
  local: string
  brt: string
}

function useVisitante() {
  const [tz, setTz] = useState<string | null>(null)
  useEffect(() => {
    try {
      setTz(Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC')
    } catch {
      setTz('UTC')
    }
  }, [])
  return tz
}

/** Próximos 3 encontros online (segundas, 20h–21h30 BRT) no fuso do visitante + BRT. */
export function ProximosOnlineIntl({ locale }: { locale: IntlLocale }) {
  const t = TEXTO[locale]
  const tz = useVisitante()
  const [linhas, setLinhas] = useState<Linha[] | null>(null)
  const [mesmoFuso, setMesmoFuso] = useState(false)

  useEffect(() => {
    if (!tz) return
    const eventos = encontrosOnlineRecorrentes(3, agoraEmBrasilia())
    const dia = (zona: string) =>
      new Intl.DateTimeFormat(locale, { weekday: 'long', day: 'numeric', month: 'long', timeZone: zona })
    const hora = (zona: string) =>
      new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: '2-digit', timeZone: zona })
    const nomeFuso = (d: Date) =>
      new Intl.DateTimeFormat(locale, { timeZoneName: 'short', timeZone: tz })
        .formatToParts(d)
        .find((p) => p.type === 'timeZoneName')?.value ?? tz

    const amostra = instanteBrt(eventos[0].date, eventos[0].startTime)
    const offset = (zona: string) =>
      new Date(amostra.toLocaleString('en-US', { timeZone: zona })).getTime()
    setMesmoFuso(offset(tz) === offset(TZ_BRT))

    setLinhas(
      eventos.map((e) => {
        const ini = instanteBrt(e.date, e.startTime)
        const fim = instanteBrt(e.date, e.endTime)
        return {
          local: `${dia(tz).format(ini)} · ${hora(tz).format(ini)}–${hora(tz).format(fim)} (${nomeFuso(ini)})`,
          brt: `${dia(TZ_BRT).format(ini)} · ${hora(TZ_BRT).format(ini)}–${hora(TZ_BRT).format(fim)} BRT`,
        }
      }),
    )
  }, [tz, locale])

  if (!linhas) {
    return (
      <ul className="space-y-3" aria-busy="true">
        {[0, 1, 2].map((i) => (
          <li key={i} className="h-16 rounded-xl bg-surface-line/60 animate-pulse" />
        ))}
      </ul>
    )
  }

  return (
    <ul className="space-y-3">
      {linhas.map((l) => (
        <li key={l.brt} className="rounded-xl border border-surface-line bg-surface-card px-4 py-3">
          {mesmoFuso ? (
            <p className="font-semibold text-ink first-letter:uppercase">{l.brt}</p>
          ) : (
            <>
              <p className="text-xs uppercase tracking-wider text-ink-subtle">{t.yourTime}</p>
              <p className="font-semibold text-ink first-letter:uppercase">{l.local}</p>
              <p className="text-sm text-ink-muted mt-1">
                {t.brasilia}: <span className="first-letter:uppercase">{l.brt}</span>
              </p>
            </>
          )}
        </li>
      ))}
      {mesmoFuso && <li className="text-sm text-ink-muted">{t.sameZone}</li>}
    </ul>
  )
}

/** "Volta em <data>" enquanto a pausa não terminou; some sozinho depois. */
export function VoltaIntl({ locale, tipo }: { locale: IntlLocale; tipo: keyof typeof REINICIO }) {
  const [texto, setTexto] = useState<string | null>(null)

  useEffect(() => {
    const volta = instanteBrt(REINICIO[tipo], '00:00')
    if (agoraEmBrasilia() >= new Date(`${REINICIO[tipo]}T00:00:00`)) return
    const data = new Intl.DateTimeFormat(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: TZ_BRT,
    }).format(volta)
    setTexto(`${TEXTO[locale].backOn} ${data}`)
  }, [locale, tipo])

  if (!texto) return null
  return (
    <span className="inline-block rounded-full bg-brand-red/10 border border-brand-red/30 px-3 py-1 text-xs font-semibold text-brand-red">
      {texto}
    </span>
  )
}
