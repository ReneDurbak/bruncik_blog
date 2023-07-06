/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      hurricane:"'Hurricane', cursive",
      poppins: "'Poppins', sans-serif",
    },
    fontWeight: {
      thin: 100,
      normal: 400,
      bold: 700,
    }

  },
  plugins: [],
}

