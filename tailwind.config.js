/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './src/components/**/*.{jsx,js,tsx,ts}'],
  theme: {
    extend: {
      colors:{
        mainText1: "#FF5C98",
        mainBgBlue: '#ADD5F8',
        mainTextBlue: '#5B84FF',
      }
    },
    fontFamily: {
      'slab': ['Roboto Slab', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
