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
      spectral: "'Spectral', serif",
      shadows: "'Shadows Into Light', cursive",
      spectralsc: "'Spectral SC', serif",
      indieflower: ['Indie Flower', 'cursive'],
      cabin: ['Cabin', 'sans-serif'],
    },
    screens: {
      'sm': '640px',


      'md': '768px',


      'lg': '1024px',


      'xl': '1280px',

      '2xl': '1536px',

      '3xl': '2500px',
    }
    

  },
  plugins: [],
}

