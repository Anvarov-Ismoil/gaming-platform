/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#FA9021',
        'btn-color': 'rgba(255, 255, 255, 0.11)',
        'input-color': 'rgba(255, 255, 255, 0.07)',
        'button': 'rgba(176, 0, 220, 0.11)',
        'light-brown': '#1C140F',
        'input-p': '#4F4F4F',
      },
      backgroundImage: {
        'optionsBg': "url('src/assets/images/bg.png')",
        'portfolioBg': "url('src/assets/images/Home3.png')",
        'FormBg': "url('src/assets/images/contactBg.png')"
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

