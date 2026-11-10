import type { Metadata } from 'next'

/**
 * Rota antiga, substituída em 09/11/2026 pela página curta /es/ (decisão do
 * Alessandro: "página curta por idioma"). Fica só como redirecionamento, pra
 * não quebrar links já compartilhados. Export estático: sem redirect de
 * servidor, então meta refresh.
 */
export const metadata: Metadata = {
  title: 'English Talk Time',
  robots: { index: false, follow: true },
  alternates: { canonical: '/es/' },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-surface flex items-center justify-center p-8 text-center">
      <meta httpEquiv="refresh" content="0; url=/es/" />
      <p className="text-ink-soft">
        Esta página cambió de lugar.{' '}
        <a href="/es/" className="text-brand-red underline">
          Ir a la página en español
        </a>
        .
      </p>
    </main>
  )
}
