import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImersaoDetalhe from '@/components/ImersaoDetalhe'

export const metadata: Metadata = {
  title: 'Imersão em Inglês — Flórida, EUA 2027 | ETT × Cherry Top',
  description:
    'Imersão internacional no Windsor Cay Resort, Flórida. 2 turmas em 2027: 10-27/jan (18 dias) e 29/jan-01/mar (30+ dias). Liderada por Leonarda Flyhigher. Bonding + Native-like.',
  openGraph: {
    title: 'Imersão Flórida 2027 — ETT × Cherry Top',
    description:
      'Até 30+ dias em resort na Flórida, em inglês 24h por dia. 2 turmas em 2027.',
    url: 'https://englishtalktime.com.br/imersoes/florida/',
    images: [{ url: '/imersoes/florida-2027/cover.jpeg', width: 1200, height: 630 }],
  },
}

const fotosFlorida = [
  'cover',
  '01', '02', '03', '04', '05', '06', '07', '08', '09',
  '11', '12', '14', '15', '16', '17', '18', '19', '20',
  '21', '22', '23', '24', '25', '26', '28',
].map((n) => `/imersoes/florida-2027/${n}.jpeg`)

export default function FloridaPage() {
  return (
    <>
      <Navbar />
      <ImersaoDetalhe
        eyebrow="Imersão Internacional • Cherry Top"
        city="Flórida"
        uf="EUA"
        headline="A experiência mais transformadora da trilha ETT."
        intro="Você vive em um resort completo na Flórida, com a turma, em inglês 24 horas por dia — refeições juntos, atividades culturais, simulações profissionais, dias inteiros sem voltar para o português. Em até 30+ dias, sua fluência salta para o patamar Native-like. Liderada por Leonarda Flyhigher (Cherry Top), com mentor residente nos EUA."
        turmas={[
          {
            label: 'Turma 1 — 18 dias',
            when: '10 a 27 de janeiro de 2027',
            detalhe: 'Versão intensiva — quarto individual ou compartilhado',
          },
          {
            label: 'Turma 2 — 30+ dias',
            when: '29 de janeiro a 01 de março de 2027',
            detalhe: 'Versão estendida — máxima imersão para o salto Native-like',
          },
        ]}
        format="Imersão internacional — 100% em inglês 24h por dia"
        local={{
          name: 'Windsor Cay Resort',
          address: 'Flórida, EUA — região de Orlando',
        }}
        lideranca="Leonarda Flyhigher (Cherry Top) + mentor residente nos EUA"
        metodologia="Bonding + Native-like"
        highlights={[
          '2 turmas em 2027 — você escolhe a duração que faz sentido',
          'Windsor Cay Resort — infraestrutura completa, "férias em grande estilo"',
          'Inglês 24 horas por dia — convivência intensa acelera fluência em até 10×',
          'Liderança Cherry Top com 40+ anos de experiência em imersão',
          'Turma pequena — alto contato individual',
          'Acompanhantes permitidos com nível mínimo pré-intermediário (regra english only)',
        ]}
        inclusos={[
          'Programa de imersão completo',
          'Hospedagem no Windsor Cay Resort',
          'Coordenação Cherry Top (Immersion Tuition)',
          'Atividades culturais programadas',
          'Mentor residente nos EUA',
        ]}
        naoInclusos={[
          'Passagem aérea (~US$ 1.000, parcelável)',
          'Visto americano B1/B2',
          'Alimentação fora da casa de imersão',
          'Transporte local e ingressos turísticos',
        ]}
        fotos={fotosFlorida}
        fotosLegenda="Fotos do Windsor Cay Resort e de edições Cherry Top anteriores nos Estados Unidos."
        ctaLabel="Entrar na lista de interesse — Flórida 2027"
        vagasInfo="Vagas extremamente limitadas (capacidade do resort)"
      />
      <Footer />
    </>
  )
}
