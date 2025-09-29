/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue-light': '#59A5D8',
        'brand-blue': '#386FA4',
        'brand-blue-dark': '#133C55',
        'brand-dark': '#010101',
        'brand-light': '#f1f1f1',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
        display: ['var(--font-poppins)', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "url('/grid.svg')",
      }
    },
  },
  plugins: [],
}