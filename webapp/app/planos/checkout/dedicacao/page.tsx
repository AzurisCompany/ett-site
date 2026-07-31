import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CheckoutDemo, { type PedidoDemo } from '@/components/CheckoutDemo'
import { PRECO_MENSAL, PRECO_ANUAL, PRECO_ADESAO } from '@/lib/planos'

// Prévia do checkout enquanto o gateway não está ligado. Fica fora do índice:
// é página de transação, não de conteúdo.
export const metadata: Metadata = {
  title: `Trilha de Dedicação — R$ ${PRECO_MENSAL}/mês`,
  robots: { index: false, follow: false },
}

const pedido: PedidoDemo = {
  titulo: `Trilha de Dedicação — R$ ${PRECO_MENSAL}/mês`,
  subtitulo: 'Assinatura mensal. Cancela quando quiser.',
  voltarHref: '/planos/dedicacao/',
  itens: [
    { descricao: 'ETT Player completo — as 10 ferramentas', valor: 'incluso' },
    { descricao: 'Plano de estudos personalizado', valor: 'incluso' },
    { descricao: 'Acompanhamento e feedback das ferramentas', valor: 'incluso' },
    { descricao: 'Encontros online e presenciais', valor: 'incluso' },
  ],
  total: `R$ ${PRECO_MENSAL},00`,
  totalNota: 'por mês',
  inclui: [
    'Sem rotina obrigatória — a dedicação sugerida é de 1h por dia',
    'O sistema acompanha e registra sua evolução',
    'Cancelamento a qualquer momento, sem multa',
    `Opção anual por R$ ${PRECO_ANUAL} (dois meses de desconto)`,
  ],
  observacao: `A Trilha de Dedicação é a continuação depois dos 30 dias inclusos na adesão de R$ ${PRECO_ADESAO}. Se preferir não pagar mensalidade, a Trilha de Aceleração fica em R$ 0 enquanto você mantiver a meta. Nota fiscal emitida pela Azuris.`,
  mensagemWhatsapp: `Olá! Vim do site ETT — quero assinar a Trilha de Dedicação de R$ ${PRECO_MENSAL}/mês.`,
}

export default function Page() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <CheckoutDemo pedido={pedido} />
      <Footer />
    </main>
  )
}
