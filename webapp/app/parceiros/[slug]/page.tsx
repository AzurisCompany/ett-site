import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Check,
  GraduationCap,
  Info,
  MapPin,
  MessageCircle,
  MessagesSquare,
  Monitor,
  Users,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { professores, getProfessor } from '@/lib/professores'

/* Perfil de um professor parceiro. Dados em lib/professores.ts (só o que é
   público — ver o aviso no topo daquele arquivo). */

const SITE_URL = 'https://englishtalktime.com.br'

export function generateStaticParams() {
  return professores.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProfessor(params.slug)
  if (!p) return {}
  const url = `${SITE_URL}/parceiros/${p.slug}/`
  return {
    title: `${p.nome} — Professor parceiro | English Talk Time`,
    description: p.chamada,
    alternates: { canonical: `/parceiros/${p.slug}/` },
    openGraph: {
      type: 'profile',
      locale: 'pt_BR',
      title: `${p.nome} — Professor parceiro do ETT`,
      description: p.chamada,
      url,
      images: [{ url: `${SITE_URL}${p.fotoOg}`, width: 800, height: 800, alt: p.nome }],
    },
  }
}

function dataPorExtenso(iso: string) {
  const [a, m, d] = iso.split('-').map(Number)
  return new Date(Date.UTC(a, m - 1, d, 12)).toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  })
}

export default function Page({ params }: { params: { slug: string } }) {
  const p = getProfessor(params.slug)
  if (!p) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: p.nomeCompleto,
    alternateName: p.nome,
    image: `${SITE_URL}${p.fotoOg}`,
    jobTitle: 'Professor de inglês',
    url: `${SITE_URL}/parceiros/${p.slug}/`,
    knowsLanguage: ['en', 'pt-BR'],
  }

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* TOPO */}
      <section className="relative pt-28 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 via-surface to-surface" />
        <div className="container mx-auto px-4 relative max-w-5xl">
          <Link
            href="/parceiros/"
            className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-brand-red mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Todos os parceiros
          </Link>
          <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-center">
            <div className="relative w-56 h-56 md:w-[280px] md:h-[280px] mx-auto md:mx-0 rounded-3xl overflow-hidden border border-surface-line shadow-lg">
              <Image src={p.foto} alt={`Foto de ${p.nome}`} fill sizes="280px" className="object-cover" priority />
            </div>
            <div className="text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-red/30 text-brand-red bg-brand-red/5 mb-4">
                Professor parceiro ETT
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-ink mb-4 leading-tight">{p.nome}</h1>
              <p className="text-ink-soft text-lg leading-relaxed mb-6 max-w-2xl">{p.chamada}</p>
              <ul className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 text-sm text-ink-muted mb-7">
                <li className="inline-flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-brand-red" /> {p.experiencia}
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-red" /> {p.cidade}
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <Monitor className="w-4 h-4 text-brand-red" /> {p.formatos[0]}
                </li>
              </ul>
              {p.contatoUrl && (
                <a
                  href={p.contatoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-red-deep text-white font-bold hover:bg-brand-red-deep/90 transition-all"
                >
                  Entrar em contato <ArrowUpRight className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE + FICHA */}
      <section className="py-14 md:py-16 bg-surface-alt border-y border-surface-line">
        <div className="container mx-auto px-4 max-w-5xl grid lg:grid-cols-[1fr_320px] gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-5">Sobre {p.nome}</h2>
            {p.bio.map((par) => (
              <p key={par.slice(0, 30)} className="text-ink-soft leading-relaxed mb-4">
                {par}
              </p>
            ))}
            <p className="text-sm text-ink-subtle">{p.origem}.</p>
          </div>
          <aside className="rounded-2xl border border-surface-line bg-surface-card p-6 h-fit">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3">Especialidades</h3>
            <ul className="space-y-2 mb-6">
              {p.especialidades.map((e) => (
                <li key={e} className="flex items-start gap-2 text-sm text-ink-soft">
                  <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" /> {e}
                </li>
              ))}
            </ul>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">Níveis</h3>
            <p className="text-sm text-ink-soft mb-6">{p.niveis}</p>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">Formatos</h3>
            <div className="flex flex-wrap gap-2">
              {p.formatos.map((f) => (
                <span key={f} className="px-2.5 py-1 rounded-full text-xs border border-surface-line text-ink-soft">
                  {f}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* ENCONTRO ETT */}
      {p.encontro && (
        <section className="py-14 md:py-16 bg-surface">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-3 mb-3">
              <MessagesSquare className="w-7 h-7 text-brand-red" />
              <h2 className="text-2xl md:text-3xl font-bold text-ink">Encontro ETT com {p.nome}</h2>
            </div>
            <p className="text-ink-muted text-lg mb-8 max-w-3xl">
              Grupos pequenos de conversação em inglês, conduzidos por {p.nome} dentro da agenda do ETT.
              Começa em <strong className="text-ink">{dataPorExtenso(p.encontro.inicio)}</strong>, e acontece toda semana.
            </p>
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-4 mb-6">
              <div className="rounded-2xl border border-surface-line bg-surface-card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <CalendarDays className="w-5 h-5 text-brand-red" />
                  <div className="text-xs font-bold uppercase tracking-widest text-ink-subtle">
                    {p.encontro.horarios.length > 1 ? 'Horários' : 'Horário'} (de Brasília)
                  </div>
                </div>
                <ul className="divide-y divide-surface-line">
                  {p.encontro.horarios.map((h) => (
                    <li key={h.dia + h.inicio} className="flex justify-between gap-4 py-2 text-sm">
                      <span className="font-semibold text-ink">{h.dia}</span>
                      <span className="text-ink-soft">{h.rotulo}</span>
                    </li>
                  ))}
                </ul>
                {p.encontro.previstos && p.encontro.previstos.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-surface-line">
                    <div className="text-xs font-bold uppercase tracking-widest text-ink-subtle mb-1">
                      Previsão de novos encontros
                    </div>
                    <p className="text-xs text-ink-muted mb-2">
                      Horários sugeridos pelo professor, ainda sem data confirmada.
                    </p>
                    <ul className="space-y-1">
                      {p.encontro.previstos.map((h) => (
                        <li key={h.dia + h.inicio} className="flex justify-between gap-4 text-sm text-ink-muted">
                          <span>{h.dia}</span>
                          <span>{h.rotulo}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {[
                  { icon: Monitor, t: 'Formato', s: p.encontro.formato },
                  { icon: Users, t: 'Tamanho', s: p.encontro.limite },
                  { icon: MessagesSquare, t: 'Foco', s: `${p.encontro.foco}. ${p.encontro.nivel}.` },
                ].map((c) => (
                  <div key={c.t} className="rounded-2xl border border-surface-line bg-surface-card p-4 flex gap-3">
                    <c.icon className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-ink-subtle mb-0.5">{c.t}</div>
                      <p className="text-sm text-ink-soft leading-relaxed">{c.s}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-brand-red/20 bg-brand-red/5 p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-5">
              <div className="flex gap-3 flex-1">
                <Info className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <p className="text-sm text-ink-soft leading-relaxed">
                  <strong className="text-ink">Como participar:</strong> é gratuito pra quem está no{' '}
                  <Link href="/desafio/" className="text-brand-red font-semibold hover:underline">
                    Desafio de 7 dias
                  </Link>{' '}
                  ou é participante regular do programa ETT. Chame o Miguel no WhatsApp: ele te coloca no
                  desafio, se você ainda não está, e reserva a sua vaga. O encontro online de segunda, 20h,
                  continua aberto a qualquer pessoa.
                </p>
              </div>
              <a
                href={p.encontro.inscricaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-red-deep text-white font-bold hover:bg-brand-red-deep/90 transition-all shrink-0"
              >
                <MessageCircle className="w-5 h-5" /> Quero participar
              </a>
            </div>
          </div>
        </section>
      )}

      {/* AULAS COM O PROFESSOR */}
      <section className="py-14 md:py-16 bg-surface-alt border-t border-surface-line">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">Quer ter aulas com {p.nome}?</h2>
          <p className="text-ink-muted leading-relaxed mb-7">
            As aulas individuais e em grupo são oferecidas pelo próprio professor, com valores e condições
            combinados direto com ele. O ETT divulga e faz a ponte.
          </p>
          {p.contatoUrl ? (
            <a
              href={p.contatoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-red-deep text-white font-bold hover:bg-brand-red-deep/90 transition-all"
            >
              Entrar em contato <ArrowUpRight className="w-5 h-5" />
            </a>
          ) : (
            <Link
              href="/#inscricao"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-surface-line text-ink font-semibold hover:border-brand-red/40"
            >
              Fale com o ETT
            </Link>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
