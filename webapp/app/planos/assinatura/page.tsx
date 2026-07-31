import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CheckoutDemo, { type PedidoDemo } from '@/components/CheckoutDemo'
import { PRECO_MENSAL, PRECO_ANUAL, PRECO_ADESAO } from '@/lib/planos'

// Prévia do checkout enquanto o gateway não está ligado. Fica fora do índice:
// é página de transação, não de conteúdo.
export const metadata: Metadata = {
  title: `Trilha Livre — R$ ${PRECO_MENSAL}/mês`,
  robots: { index: false, follow: false },
}

const pedido: PedidoDemo = {
  titulo: `Trilha Livre — R$ ${PRECO_MENSAL}/mês`,
  subtitulo: 'Assinatura mensal. Cancela quando quiser.',
  itens: [
    { descricao: 'ETT Player completo — as 10 ferramentas', valor: 'incluso' },
    { descricao: 'Plano de estudos personalizado', valor: 'incluso' },
    { descricao: 'Acompanhamento do seu progresso', valor: 'incluso' },
    { descricao: 'Turmas por nível e presencial de sábado', valor: 'incluso' },
  ],
  total: `R$ ${PRECO_MENSAL},00`,
  totalNota: 'por mês',
  inclui: [
    'Sem rotina obrigatória — ninguém cobra meta de você',
    'Cancelamento a qualquer momento, sem multa',
    `Opção anual por R$ ${PRECO_ANUAL} (dois meses de desconto)`,
    'Encontro online de segunda, que é aberto a qualquer pessoa de todo jeito',
  ],
  observacao: `A Trilha Livre é a continuação depois dos 30 dias inclusos na adesão de R$ ${PRECO_ADESAO}. Se você preferir não pagar mensalidade, a Trilha de Aceleração é gratuita enquanto você mantiver a rotina. Nota fiscal emitida pela Azuris.`,
  mensagemWhatsapp: `Olá! Vim do site ETT — quero assinar a Trilha Livre de R$ ${PRECO_MENSAL}/mês.`,
}

export default function AssinaturaPage() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <CheckoutDemo pedido={pedido} />
      <Footer />
    </main>
  )
}
