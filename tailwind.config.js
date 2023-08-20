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
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

