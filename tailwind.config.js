/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'light-beige' : '#F9EFDB',
        'beige' : '#EBD9B4',
        'pastel-green' : '#9DBC98',
        'cyan' : '#638889'
      }
    },
  },
  plugins: [],
}

