/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        cardiff: ['Cardiff', 'serif'],
        serif: ['Cardiff', 'serif'],
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      },
      colors: {
        'burgundy': '#800020',
        'editorial-cream': '#F5F3F0',
        'neon-cyan': '#22d3ee',
        'editorial-orange': '#6F1D1B',
        brutalist: {
          background: '#121212',
          text: '#FFFFFF',
          'accent-red': 'oklch(51.4% 0.222 16.935)',
          'block-dark': '#1F2937',
          'shadow-hard': '#000000',
        }
      },
      boxShadow: {
        'hard-sm': '2px 2px 0px theme(colors.brutalist.shadow-hard)',
        'hard-md': '4px 4px 0px theme(colors.brutalist.shadow-hard)',
        'hard-lg': '6px 6px 0px theme(colors.brutalist.shadow-hard)',
        'hard-accent-sm': '2px 2px 0px theme(colors.brutalist.accent-red)',
        'hard-accent-md': '4px 4px 0px theme(colors.brutalist.accent-red)',
        'hard-accent-lg': '6px 6px 0px theme(colors.brutalist.accent-red)',
      }
    },
  },
  plugins: [],
}
