/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif']
    },
    colors: {
      'background': '#E6F4F1',
      'primary': '#DB751D',
      'secondary': '#356ab0',
      'brown': '#DC751E'
    },
    },
  },
  plugins: [require("daisyui")],
}
