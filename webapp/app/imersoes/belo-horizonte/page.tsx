import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImersaoDetalhe from '@/components/ImersaoDetalhe'

export const metadata: Metadata = {
  title: 'Imersão em Inglês — Belo Horizonte 2026 (Set · Out · Nov) | ETT × Cherry Top',
  description:
    'Imersão presencial de 5 dias na Immersion Village Brazil (Lagoa Santa/MG). 3 turmas confirmadas: 03–07/set, 08–12/out e 18–22/nov 2026. 90h de certificado, 8 vagas por turma, hospedagem e refeições inclusas. Bonding + Native-like.',
  openGraph: {
    title: 'Imersão BH 2026 — ETT × Cherry Top',
    description:
      '5 dias de imersão total na sede oficial Cherry Top do Brasil. Múltiplas turmas Q3/Q4 2026.',
    url: 'https://englishtalktime.com.br/imersoes/belo-horizonte/',
    images: [{ url: '/imersoes/bh-2026/01.jpeg', width: 1200, height: 630 }],
  },
}

const fotosBH = [
  '01', '02', '03', '04', '05', '06', '07', '08',
  '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
].map((n) => `/imersoes/bh-2026/${n}.jpeg`)

export default function BeloHorizontePage() {
  return (
    <>
      <Navbar />
      <ImersaoDetalhe
        eyebrow="Imersão Belo Horizonte • Cherry Top"
        city="Belo Horizonte"
        uf="MG"
        headline="5 dias na sede oficial Cherry Top. Inglês 24 horas por dia."
        intro="Você desloca-se até a Immersion Village Brazil, em Lagoa Santa/MG, e vive em inglês com até 8 colegas durante 5 dias seguidos — hospedagem, refeições e atividades inclusas. Sai com certificado de 90 horas e a fluência acelerada pela metodologia Bonding + Native-like, validada em 40+ anos de Cherry Top."
        turmas={[
          {
            label: 'Turma 1 — OMEGA / ZETA',
            when: '03 a 07 de setembro de 2026',
            detalhe: 'Advanced + Upper Intermediate + Intermediate',
          },
          {
            label: 'Turma 2 — GAMA / DELTA',
            when: '08 a 12 de outubro de 2026',
            detalhe: 'Pré-Intermediate + Intermediate + Advanced',
          },
          {
            label: 'Turma 3 — ALPHA / BETA',
            when: '18 a 22 de novembro de 2026',
            detalhe: 'Elementary + iniciantes (com onboarding online prévio)',
          },
        ]}
        format="5 dias de imersão presencial — formato Cherry Top"
        local={{
          name: 'Immersion Village Brazil',
          address: 'Lagoa Santa — MG (a 20 km do aeroporto de Confins)',
        }}
        lideranca="Equipe Cherry Top na Immersion Village Brazil"
        metodologia="Bonding + Native-like"
        highlights={[
          'Sede oficial Cherry Top — 40+ anos de história em imersão',
          'Apenas 8 vagas por turma — alto contato e feedback individual',
          'Inglês 24 horas por dia — regra "english only" durante toda a imersão',
          'Foco em tech: devs, dados, IA, BI e cloud',
          '3 turmas confirmadas (set, out, nov) — você escolhe a melhor para seu nível',
          'Certificado de 90 horas reconhecido Cherry Top',
        ]}
        inclusos={[
          'Programa completo de 5 dias',
          'Hospedagem na Immersion Village',
          'Refeições completas',
          'Material didático',
          'Certificado de 90 horas',
        ]}
        naoInclusos={[
          'Deslocamento até BH/Confins',
          'Gastos pessoais',
        ]}
        fotos={fotosBH}
        fotosLegenda="Fotos da Immersion Village Brazil e edições anteriores Cherry Top — o ambiente que vai te receber."
        ctaLabel="Quero participar da imersão em BH"
        vagasInfo="8 vagas por turma — 3 turmas (set · out · nov 2026)"
      />
      <Footer />
    </>
  )
}
