import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Agenda from '@/components/Agenda'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Agenda — Próximos encontros | ETT English Talk Time',
  description:
    'Agenda dos próximos 30 dias do ETT: encontros online toda segunda (8h–21h30) e presenciais semanais em Curitiba (IEP, UTFPR, Hard Rock, Habita).',
  openGraph: {
    title: 'Agenda ETT — Próximos encontros',
    description:
      'Online toda segunda + presencial semanal em Curitiba. Veja as próximas datas e marque na sua agenda.',
    url: 'https://ett.dssbr.com.br/agenda/',
    images: [{ url: '/images/ETT-top01.png', width: 1200, height: 630 }],
  },
}

export default function AgendaPage() {
  return (
    <>
      <Navbar />
      <Agenda />
      <Footer />
    </>
  )
}
