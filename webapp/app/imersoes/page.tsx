import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Imersoes from '@/components/Imersoes'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Imersões em Inglês para Profissionais de Tech — ETT × Cherry Top',
  description:
    'Imersão presencial em Curitiba (Jun/26) e Belo Horizonte (Q3-Q4/26), e 30 dias na Flórida (Jan–Mar/27). Em parceria com Cherry Top — 40+ anos, metodologia Bonding + Native-like. Vagas limitadas.',
  openGraph: {
    title: 'Imersões em Inglês ETT × Cherry Top',
    description:
      'Em 5 dias no Brasil ou 30 dias na Flórida, a gente arranca seu inglês do papel. Metodologia Bonding + Native-like.',
    url: 'https://englishtalktime.com.br/imersoes/',
    images: [{ url: '/images/ETT-top01.png', width: 1200, height: 630 }],
  },
}

export default function ImersoesPage() {
  return (
    <>
      <Navbar />
      <Imersoes />
      <Footer />
    </>
  )
}
