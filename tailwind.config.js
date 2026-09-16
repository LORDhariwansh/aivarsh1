/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ai-ivory': '#F5F3EE',    // Warm Ivory (Primary)
        'ai-forest': '#17231D',   // Deep Forest (Secondary)
        'ai-gold': '#B59A62',     // Champagne Gold (Accent)
        
        // Semantic mapping for easier component updates
        'ai-bg': '#F5F3EE',      
        'ai-text': '#17231D',    
        'ai-accent': '#B59A62',  
        'ai-border': '#17231D1A', // Deep Forest with 10% opacity
        'ai-hover': '#17231D0A',  // Deep Forest with 4% opacity
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
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
        'soft': '0 10px 40px -10px rgba(23, 35, 29, 0.05)',
        'soft-lg': '0 20px 50px -15px rgba(23, 35, 29, 0.08)',
      }
    },
  },
  plugins: [],
}
