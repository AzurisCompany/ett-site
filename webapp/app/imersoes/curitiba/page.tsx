import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImersaoDetalhe from '@/components/ImersaoDetalhe'

export const metadata: Metadata = {
  title: 'Imersão em Inglês — Curitiba 29/jul a 02/ago 2026 | ETT × Cherry Top',
  description:
    'Primeira edição ETT em Curitiba. Imersão presencial de 5 dias (29/07 a 02/08/2026), em parceria com Cherry Top e IEP. Metodologia Bonding + Native-like para profissionais de tech. Vagas extremamente limitadas.',
  openGraph: {
    title: 'Imersão Curitiba 29/jul a 02/ago 2026 — ETT × Cherry Top',
    description:
      'Primeira edição ETT em Curitiba. 5 dias presenciais com Cherry Top e IEP.',
    url: 'https://englishtalktime.com.br/imersoes/curitiba/',
    images: [{ url: '/images/ETT-top01.png', width: 1200, height: 630 }],
  },
}

export default function CuritibaPage() {
  return (
    <>
      <Navbar />
      <ImersaoDetalhe
        eyebrow="Primeira edição em Curitiba • Cherry Top"
        city="Curitiba"
        uf="PR"
        headline="Primeira edição ETT em Curitiba — você pode estar aqui."
        intro="A imersão chega à capital paranaense em parceria com a Cherry Top e o IEP (Instituto de Engenharia do Paraná). Profissionais de tech do PR e arredores vão viver dias seguidos em inglês, com simulações reais de reuniões, demos e entrevistas internacionais — sem precisar viajar. Turma pequena, alto contato, vagas extremamente limitadas."
        turmas={[
          {
            label: 'Turma única — Primeira edição',
            when: '29 de julho a 02 de agosto de 2026',
            detalhe: '5 dias de imersão presencial — formato Cherry Top, perfil tech',
          },
        ]}
        format="5 dias de imersão presencial — formato Cherry Top"
        local={{
          name: 'IEP — Instituto de Engenharia do Paraná (a confirmar)',
          address: 'Curitiba — PR',
        }}
        lideranca="Equipe Cherry Top — facilitadores trazidos de BH"
        metodologia="Bonding + Native-like"
        highlights={[
          'Primeira edição em Curitiba — vagas extremamente limitadas',
          'Em parceria com o IEP, instituição centenária da engenharia paranaense',
          'Metodologia Cherry Top — Bonding + Native-like, até 10× mais rápido',
          'Foco em profissionais de tech: devs, dados, IA, BI, cloud',
          'Networking presencial com a comunidade ETT de Curitiba',
          'Sem precisar viajar — você dorme em casa, vive em inglês durante o dia',
        ]}
        inclusos={[
          'Programa completo presencial',
          'Material didático',
          'Coffee breaks',
          'Certificado Cherry Top',
        ]}
        naoInclusos={[
          'Hospedagem (a imersão é diurna)',
          'Deslocamento até o local',
          'Refeições principais',
        ]}
        fotos={[]}
        fotosLegenda="Esta é a primeira edição em Curitiba — fotos serão publicadas após a realização. Veja as imersões já realizadas pela Cherry Top na página principal de imersões."
        ctaLabel="Garantir minha vaga em Curitiba"
        vagasInfo="Vagas extremamente limitadas — primeira edição"
      />
      <Footer />
    </>
  )
}
