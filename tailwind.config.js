/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // aqui é o segredo para usar o modo dark via classe CSS
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
