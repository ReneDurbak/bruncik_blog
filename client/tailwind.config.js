/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
      hurricane:"'Hurricane', cursive",
      poppins: "'Poppins', sans-serif",
      spectral: "'Spectral', serif",
      spectralsc: "'Spectral SC', serif",
      indieflower: ['Indie Flower', 'cursive'],
      cabin: ['Cabin', 'sans-serif'],
      mplus: ['"M PLUS Rounded 1c"', 'sans-serif'],
      fjalla: ['"Fjalla One"', 'sans-serif'],
      caveat: ['"Caveat"', 'cursive'],
      abhaya: ['"Abhaya Libre"', 'serif']
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
  plugins: [
    require('flowbite/plugin'),
  ],
}

