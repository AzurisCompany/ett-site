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
        'neon-green': '#00FF9D',
        'tech-blue': '#00BFFF',
        'dark': {
          DEFAULT: '#050510',
          secondary: '#0D0D1A',
          card: '#0F0F1E',
          border: '#1E1E3A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-grid': "radial-gradient(circle at 1px 1px, rgba(0,255,157,0.07) 1px, transparent 0)",
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
        'neon-green': '0 0 20px rgba(0, 255, 157, 0.3)',
        'neon-blue': '0 0 20px rgba(0, 191, 255, 0.3)',
        'neon-green-lg': '0 0 40px rgba(0, 255, 157, 0.4)',
      },
    },
  },
  plugins: [],
}

export default config
