/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#0a0a0a', // Very dark grey, almost black
        surface: '#1a1a1a', // Slightly lighter for cards
        primary: '#ffffff', // White text
        secondary: '#a1a1aa', // Light grey text
        accent: {
          green: '#4ade80', // Bright green for buttons/highlights
          'green-dark': '#22c55e',
          blue: '#60a5fa', // For other accents if needed
          orange: '#fb923c',
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(74, 222, 128, 0.15)',
      }
    },
  },
  plugins: [],
}

