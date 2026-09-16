/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ai-bg': '#FAFAF9',      // Warm off-white
        'ai-card': '#FFFFFF',    // Pure white for cards
        'ai-text': '#1C1C1C',    // Soft charcoal
        'ai-muted': '#78716C',   // Stone 500 for secondary text
        'ai-border': '#E7E5E4',  // Stone 200 for subtle borders
        'ai-accent': '#334155',  // Slate 700 for subtle accents
        'ai-hover': '#F5F5F4',   // Stone 100 for hover states
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 40px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 50px -5px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
