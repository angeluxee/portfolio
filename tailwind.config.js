/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'titles': '#ffedcb',
        'github': '#c6b595',
        'deploy': '#c2fcf2'
      }
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}