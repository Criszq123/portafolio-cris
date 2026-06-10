/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Reddish/Rose colors optimized for dark mode readability and premium design
        brand: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e', // Warm rose
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239', // Deep burgundy
          900: '#881337', // Dark cherry
          950: '#4c0519', // Very deep rich dark cherry
        },
        // Custom background colors: slate infused with soft warm/rose undertones
        // This makes reading text in dark mode much more comfortable than cold blacks or blues.
        dark: {
          50: '#faf9fa',
          100: '#f5f2f4',
          200: '#ebe6ea',
          300: '#d7ced5',
          400: '#baaab5',
          500: '#9a8694',
          600: '#7b6775',
          700: '#5e4e59',
          800: '#332730', // Warm grey/plum
          900: '#1e161c', // Deep plum/charcoal
          950: '#0f0a0d', // Base background: soft dark with red-plum undertone
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
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
    },
  },
  plugins: [],
}
