import type { Metadata } from 'next'

/**
 * O teste grátis de 30 dias ("Quero conhecer") foi removido em 09/11/2026 e
 * fundido na ativação acompanhada. A rota fica só como redirecionamento, pra
 * não quebrar links antigos (descrição do vídeo no YouTube, e-mails, blog).
 * Site é export estático: sem redirect de servidor, então meta refresh.
 */
export const metadata: Metadata = {
  title: 'Ativação acompanhada | English Talk Time',
  robots: { index: false, follow: true },
  alternates: { canonical: '/planos/adesao/' },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-surface flex items-center justify-center p-8 text-center">
      <meta httpEquiv="refresh" content="0; url=/planos/adesao/" />
      <p className="text-ink-soft">
        O teste de 30 dias agora faz parte da ativação acompanhada.{' '}
        <a href="/planos/adesao/" className="text-brand-red underline">
          Ir para a ativação
        </a>
        .
      </p>
    </main>
  )
}
