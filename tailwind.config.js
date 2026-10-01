/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'taste-bg': '#000000',
        'taste-surface': '#09090B', // zinc-950
        'taste-border': '#27272A', // zinc-800
        'taste-text': '#FAFAFA', // zinc-50
        'taste-muted': '#A1A1AA', // zinc-400
        'taste-accent': '#E85D04',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
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
      },
      boxShadow: {
        'taste-glow': '0 0 40px -10px rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
}
