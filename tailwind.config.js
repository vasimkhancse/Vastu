/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCF9',
          100: '#FAF7F2',
          200: '#F4ECE1',
          300: '#EBDDCC',
          400: '#DFCAB2',
          500: '#CEB294',
        },
        gold: {
          50: '#FBF8F1',
          100: '#F7F0DF',
          200: '#EDDCB8',
          300: '#DFBF87',
          400: '#D0A65B',
          500: '#C5963E', // Primary muted gold
          600: '#A97B2C',
          700: '#875E20',
          800: '#69471A',
          900: '#4D3414',
        },
        sage: {
          50: '#F3F7F5',
          100: '#E4EDE8',
          200: '#C9DCD2',
          300: '#A4C3B4',
          400: '#7AA392',
          500: '#548371',
          600: '#3D6858',
          700: '#2C4E42', // Deep spiritual sage
          800: '#203930',
          900: '#14251F',
        },
        earth: {
          50: '#F9F7F5',
          100: '#F2ECE6',
          200: '#E2D5CA',
          300: '#CEB8A7',
          400: '#B49782',
          500: '#947761',
          600: '#755B47',
          700: '#5B4434',
          800: '#423125',
          900: '#2E2118',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        accent: ['"Marcellus"', 'Cinzel', 'serif']
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(122, 104, 88, 0.06), 0 2px 6px -1px rgba(122, 104, 88, 0.04)',
        'soft-lg': '0 12px 32px -4px rgba(122, 104, 88, 0.09), 0 4px 12px -2px rgba(122, 104, 88, 0.04)',
        'gold-glow': '0 0 25px rgba(197, 150, 62, 0.22)',
        'sage-glow': '0 0 25px rgba(44, 78, 66, 0.18)',
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
