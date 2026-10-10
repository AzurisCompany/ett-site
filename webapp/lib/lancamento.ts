'use client'

import { useEffect, useState } from 'react'

/* Lançamento oficial do ETT dentro do congresso DSSBR 2026 (27–29/10, IEP).
   Fonte única de tudo que a home mostra sobre o evento — hero, programação,
   chamada final, barra do celular e botão do menu leem daqui.
   Materiais originais na pasta lancamento/ da raiz (do Alessandro — só ler).

   Inscrição: SÓ pelo Google Forms (decisão do Alessandro, 10/10/2026). Os
   inscritos não entram na RD; o formulário da RD segue na home pra quem não
   puder ir ao evento. */
export const INSCRICAO_URL = 'https://forms.gle/aTbkieevUxouRU6e8'

/* Depois do fim do evento tudo isso some e a home volta ao normal. Checado no
   navegador, nunca no build: o export estático pode ficar semanas sem rodar. */
export const FIM_DO_EVENTO = new Date('2026-10-27T17:15:00-03:00')

export const MAPA_URL =
  'https://www.google.com/maps/search/?api=1&query=Instituto+de+Engenharia+do+Paran%C3%A1+Rua+Emiliano+Perneta+174+Curitiba'

export const evento = {
  diaSemana: 'Terça',
  dia: '27',
  mes: 'OUT',
  dataExtenso: 'Terça, 27 de outubro',
  horario: '13h30 às 17h15',
  local: 'Auditório do IEP',
  endereco: 'Rua Emiliano Perneta, 174 — Centro, Curitiba',
  vagas: 60,
}

export type Atracao = {
  hora: string
  nome: string
  org: string
  titulo: string
  foto: string | null
  logo?: string
}

export const programacao: Atracao[] = [
  {
    hora: '13h30',
    nome: 'Alessandro Binhara',
    org: 'English Talk Time',
    titulo: 'Lançamento do ETT: do inglês travado ao inglês funcional',
    foto: null,
    logo: '/images/ett-simbolo-positiva.svg',
  },
  {
    hora: '14h00',
    nome: 'Rubens Queiroz',
    org: 'Unicamp · criador do portal Aprendendo Inglês',
    titulo: 'Por que você desiste do inglês? O que 30 anos aprendendo e ensinando me ensinaram',
    foto: '/images/lancamento/rubens-queiroz.webp',
  },
  {
    hora: '14h45',
    nome: 'Maria Leonardo Aparecida',
    org: 'Cherry Top',
    titulo: 'Seu inglês está pronto para o mundo? Imersão no Brasil e no exterior',
    foto: null,
    logo: '/images/logo-cherrytop.jpeg',
  },
  {
    hora: '15h30',
    nome: 'José Motta Filho',
    org: 'Silicon Valley Brasil',
    titulo: 'AI para além dos prompts: uma conversa franca sobre os novos tempos da Educação',
    foto: '/images/lancamento/jose-motta.webp',
  },
  {
    hora: '16h30',
    nome: 'Miguel Donizete',
    org: 'IEP · UTFPR',
    titulo: 'IEP Talks: o grupo de conversação do IEP, com leitura guiada e debate em inglês',
    foto: '/images/lancamento/miguel-donizete.webp',
  },
]

/** true até o fim do evento. Começa true pra o HTML estático já trazer o anúncio. */
export function useLancamentoAtivo(): boolean {
  const [ativo, setAtivo] = useState(true)
  useEffect(() => {
    setAtivo(new Date() <= FIM_DO_EVENTO)
  }, [])
  return ativo
}

/* Clique no botão de inscrição → evento no GA4, com a origem, pra saber qual
   chamada converte. Só dispara se o visitante aceitou cookies (o gtag só
   existe nesse caso — ver components/Analytics.tsx). */
export function rastrearInscricao(origem: string) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void }
  w.gtag?.('event', 'inscricao_lancamento', { origem })
}
