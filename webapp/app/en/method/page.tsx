import type { Metadata } from 'next'

/**
 * Rota antiga, substituída em 09/11/2026 pela página curta /en/ (decisão do
 * Alessandro: "página curta por idioma"). Fica só como redirecionamento, pra
 * não quebrar links já compartilhados. Export estático: sem redirect de
 * servidor, então meta refresh.
 */
export const metadata: Metadata = {
  title: 'English Talk Time',
  robots: { index: false, follow: true },
  alternates: { canonical: '/en/' },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-surface flex items-center justify-center p-8 text-center">
      <meta httpEquiv="refresh" content="0; url=/en/" />
      <p className="text-ink-soft">
        This page has moved.{' '}
        <a href="/en/" className="text-brand-red underline">
          Go to the English page
        </a>
        .
      </p>
    </main>
  )
}
