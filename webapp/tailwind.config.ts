import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Tema CLARO desde 06/10/2026 (logo positiva). Todas as cores semânticas vêm de variáveis
        // CSS em app/globals.css: o valor claro está em :root e o escuro em .tema-escuro (rodapé,
        // lightbox, faixas marinhas). Não escrever hex/gray-N/white em componente — usar estes.
        surface: {
          DEFAULT: 'rgb(var(--surface) / <alpha-value>)', // fundo da página
          alt: 'rgb(var(--surface-alt) / <alpha-value>)', // seção alternada
          card: 'rgb(var(--surface-card) / <alpha-value>)', // card
          line: 'rgb(var(--surface-line) / <alpha-value>)', // borda/divisória
        },
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)', // títulos (marinho no claro, branco no escuro)
          soft: 'rgb(var(--ink-soft) / <alpha-value>)', // texto corrido
          muted: 'rgb(var(--ink-muted) / <alpha-value>)', // texto secundário
          subtle: 'rgb(var(--ink-subtle) / <alpha-value>)', // legenda/metadado
          faint: 'rgb(var(--ink-faint) / <alpha-value>)', // placeholder, detalhe mínimo
        },
        'brand-red': {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)', // vermelho de texto/borda/tinta (oficial no claro, clareado no escuro)
          deep: '#D72229', // vermelho oficial da logo — botão/fundo sólido, sempre com texto branco
        },
        'brand-silver': 'rgb(var(--accent-2) / <alpha-value>)', // prata da logo (escurecido no claro pra ler como texto)
        'brand-navy': '#162B4E',
        'brand-gray': '#59595B',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-grid': "radial-gradient(circle at 1px 1px, rgba(240,90,96,0.07) 1px, transparent 0)",
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'brand-red': '0 8px 24px rgba(215, 34, 41, 0.30)',
        'brand-red-lg': '0 12px 36px rgba(215, 34, 41, 0.40)',
        'brand-silver': '0 8px 24px rgba(168, 169, 172, 0.20)',
      },
    },
  },
  plugins: [],
}

export default config
