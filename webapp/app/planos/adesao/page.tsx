import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CheckoutDemo, { type PedidoDemo } from '@/components/CheckoutDemo'
import { PRECO_ADESAO, PRECO_MENSAL } from '@/lib/planos'

// Prévia do checkout enquanto o gateway não está ligado. Fica fora do índice:
// é página de transação, não de conteúdo.
export const metadata: Metadata = {
  title: `Adesão ETT — R$ ${PRECO_ADESAO}`,
  robots: { index: false, follow: false },
}

const pedido: PedidoDemo = {
  titulo: `Adesão ao ETT — R$ ${PRECO_ADESAO}`,
  subtitulo: 'Cobrança única. Não vira mensalidade.',
  itens: [
    { descricao: '2 encontros individuais de 1 hora', valor: 'incluso' },
    { descricao: 'Plano de estudos montado no encontro', valor: 'incluso' },
    { descricao: 'Conta no ETT Player + sala do ETT Speak', valor: 'incluso' },
    { descricao: 'Primeiros 30 dias de plataforma', valor: 'incluso' },
  ],
  total: `R$ ${PRECO_ADESAO},00`,
  totalNota: 'pagamento único',
  inclui: [
    'Diagnóstico ETT FluenteLevel e mapa das suas lacunas de vocabulário',
    'Rotina diária configurada com você, na primeira hora',
    'As 10 ferramentas do Player ativadas com conteúdo do seu nível',
    'Encontro online de segunda e o IEP Talks presencial de sábado',
  ],
  observacao: `A partir do dia 31 você escolhe: mantém a rotina e não paga mais nada (Trilha de Aceleração), ou assina a Trilha Livre por R$ ${PRECO_MENSAL}/mês. Compra pela internet tem 7 dias de arrependimento garantidos por lei. Nota fiscal emitida pela Azuris.`,
  mensagemWhatsapp: `Olá! Vim do site ETT — quero fazer minha adesão de R$ ${PRECO_ADESAO} e agendar os dois encontros.`,
}

export default function AdesaoPage() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <CheckoutDemo pedido={pedido} />
      <Footer />
    </main>
  )
}
