/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        // namecolor:{
          // LIGTH: '#111111',
          // DARK: '#000000',
        // },
        // secondcolor:'#222222',
      }
    },
  },
  plugins: [],
}

