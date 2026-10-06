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
        // logo corrigida (06/10/2026): o verde saiu da marca — ação = vermelho, secundária = cinza
        'brand-red': {
          DEFAULT: '#F05A60', // vermelho da logo clareado p/ texto, borda e tinta em fundo marinho (AA)
          deep: '#D72229', // vermelho oficial da logo — botão/fundo sólido, sempre com texto branco
        },
        'brand-silver': '#A8A9AC', // cinza da logo ("Time" e 3º balão) — cor secundária
        'brand-navy': '#162B4E',
        'brand-gray': '#59595B',
        'dark': {
          DEFAULT: '#0A1630',
          secondary: '#0E1D3C',
          card: '#132649',
          border: '#24395F',
        },
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
