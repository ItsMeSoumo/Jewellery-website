/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: "#fef6e4",
          200: "#fcedc9",
          300: "#f9e4ae",
          400: "#f7db93",
          500: "#f4d278", // Medium gold
          600: "#d4af37", // Classic gold
          700: "#b8860b", // Dark goldenrod
          800: "#a36f00", // Dark gold
          900: "#8b5a00", // Very dark gold
        },
        purple: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
        jewel: {
          100: "#f8f4ff",
          200: "#e6d9ff",
          300: "#d4beff",
          400: "#c2a3ff",
          500: "#a778fa",
          600: "#8c55f6",
          700: "#7132f2",
          800: "#5a10ee",
          900: "#4d0ecc",
        },
        dark: {
          100: "#303030", 
          200: "#252525",
          300: "#202020",
          400: "#181818",
          500: "#101010", // Primary dark
          600: "#080808",
          700: "#050505",
          800: "#030303",
          900: "#000000",
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'serif'],
      },
      boxShadow: {
        'gold': '0 4px 20px -2px rgba(168, 85, 247, 0.25)',
        'gold-lg': '0 10px 30px -3px rgba(168, 85, 247, 0.3)',
      },
      backgroundImage: {
        'hero-jewelry': 'linear-gradient(to right, rgba(88, 28, 135, 0.8), rgba(139, 90, 0, 0.8)), url("https://images.unsplash.com/photo-1601121141461-9d6647bca1ed")',
        'gold-gradient': 'linear-gradient(to right, #7e22ce, #d4af37)',
        'purple-gold-gradient': 'linear-gradient(to right, #7e22ce, #d4af37)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'slow-pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 