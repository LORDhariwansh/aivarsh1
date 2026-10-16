/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cinematic Dark SaaS Theme Tokens
        background: '#08080C',
        surface: '#111019',
        'surface-secondary': '#151421',
        'surface-elevated': '#181726',
        'text-primary': '#F8F7FF',
        'text-secondary': '#A8A5B8',
        'text-dim': '#6B677E',
        border: 'rgba(190, 170, 255, 0.15)',
        'border-subtle': 'rgba(255, 255, 255, 0.07)',
        'border-violet': 'rgba(139, 92, 246, 0.25)',

        // Luminous Accents
        'accent-violet': '#8B5CF6',
        'bright-lavender': '#B9A0FF',
        violet: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
        },
        lavender: '#C4B5FD',

        // Aliases for unified component styling & backward compatibility
        bg: '#08080C',
        'bg-elevated': '#111019',
        'bg-card': '#151421',
        foreground: '#F8F7FF',
        muted: '#A8A5B8',
        accent: '#8B5CF6',
        saffron: '#8B5CF6',
        coral: '#8B5CF6',
        'sunshine-yellow': '#FFD166',
        'sky-blue': '#7CCBFA',
        'mint-green': '#A8E6CF',
      },
      fontFamily: {
        sans: ['Manrope', 'Satoshi', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Satoshi', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'violet-glow': '0 0 35px -5px rgba(139, 92, 246, 0.35)',
        'violet-glow-lg': '0 0 60px -10px rgba(139, 92, 246, 0.45)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
