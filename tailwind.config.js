/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ai-midnight': '#0B0D1A',
        'ai-deep': '#0D1020',
        'ai-charcoal': '#111426',
        'ai-surface': '#1A1D2E',
        'ai-ivory': '#F4F0E7',
        'ai-muted': '#A8A6A0',
        'ai-saffron': '#C96A32',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 4s infinite',
        'orbit': 'orbit 30s linear infinite',
        'orbit-reverse': 'orbit 40s linear infinite reverse',
        'pulse-dot': 'pulseDot 3s ease-in-out infinite',
        'draw-line': 'drawLine 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.5)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '100%' },
          '100%': { strokeDashoffset: '0%' },
        },
      },
      boxShadow: {
        'glow-saffron': '0 0 30px -5px rgba(201, 106, 50, 0.15)',
        'glow-soft': '0 0 40px -10px rgba(201, 106, 50, 0.1)',
        'card-dark': '0 4px 20px -4px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 30px -4px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
