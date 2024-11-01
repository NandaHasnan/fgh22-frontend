/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // 'cover-' : "url('./src/assets/gambar/Rectangle 1.png')",
        'bg-marvel' : "url('./src/assets/gambar/marvel.png')",
        'bg-marvel2' : "url('./src/assets/gambar/marvel2.png')",
        'cover-marvel' : "url('./src/assets/gambar/cover.png')",
        'cover-detail' : "url('./src/assets/gambar/Rectangle 613.png')"
        // 'spiderman' : "url('./src/assets/gambar/spiderman.png')"
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black' : '#000000',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'red' : '#F95454',
      'biru' : '#1D4ED8',
      'abu' : '#A0A3BD',
      'abuMuda' : '#8692A6',
      'abuMuda2' : '#EFF0F6',
      'abuMuda3' : '#DEDEDE',
      'text1' : '#4E4B66',
      'ungu' : '#3B1E54',
      'oren' : '#FF6600',
      'orenMuda' : '#ff983f'
    },
  },
  plugins: [],
}

