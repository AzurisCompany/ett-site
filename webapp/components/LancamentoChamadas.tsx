'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { INSCRICAO_URL, evento, rastrearInscricao, useLancamentoAtivo } from '@/lib/lancamento'

/* Chamadas de reforço do lançamento — somem sozinhas depois do evento. */

/** Faixa marinha antes do formulário da RD: último convite pra quem rolou a home toda. */
export function LancamentoChamadaFinal() {
  const ativo = useLancamentoAtivo()
  if (!ativo) return null

  return (
    <section className="tema-escuro bg-surface py-14 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45 }}
        className="container mx-auto px-4 max-w-4xl text-center"
      >
        <p className="text-sm font-bold uppercase tracking-wide text-brand-red mb-3">
          {evento.dataExtenso} · {evento.horario} · {evento.local}, Curitiba
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
          Vem pro lançamento do ETT.
        </h2>
        <p className="text-ink-soft max-w-2xl mx-auto mb-8 leading-relaxed">
          Cinco conversas sobre destravar o inglês, a plataforma do ETT ao vivo e sorteio de
          prêmios. Entrada gratuita, {evento.vagas} lugares abertos ao público.
        </p>
        <a
          href={INSCRICAO_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => rastrearInscricao('chamada-final')}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-brand-red-deep text-white font-bold text-lg hover:bg-brand-red-deep/90 transition-all"
        >
          Quero minha vaga gratuita
          <ArrowUpRight className="w-5 h-5" />
        </a>
        <p className="text-sm text-ink-muted mt-6">
          Não vai conseguir ir? Deixe seu e-mail logo abaixo e receba as datas dos próximos
          encontros.
        </p>
      </motion.div>
    </section>
  )
}

/** Barra fixa no rodapé da tela, só no celular — lá o menu não mostra botão nenhum.
    Aparece depois que o hero sai da tela. */
export function LancamentoBarraCelular() {
  const ativo = useLancamentoAtivo()
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Com a barra na tela, o botão flutuante do WhatsApp sobe pra não cobrir o "Inscrever-me" (globals.css).
  useEffect(() => {
    const raiz = document.documentElement
    if (ativo && visivel) raiz.dataset.barraLancamento = '1'
    else delete raiz.dataset.barraLancamento
    return () => {
      delete raiz.dataset.barraLancamento
    }
  }, [ativo, visivel])

  if (!ativo) return null

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
        visivel ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="tema-escuro bg-surface border-t border-surface-line px-4 py-3 flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-ink leading-tight">Lançamento do ETT</p>
          <p className="text-xs text-ink-muted truncate">
            {evento.diaSemana}, {evento.dia}/10 · 13h30 · IEP · grátis
          </p>
        </div>
        <a
          href={INSCRICAO_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => rastrearInscricao('barra-celular')}
          className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-brand-red-deep text-white font-bold text-sm"
        >
          Inscrever-me
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
