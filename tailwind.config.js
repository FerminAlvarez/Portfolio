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
      'primary': '#C8D349',
      'secondary': '#6366F1',
      'tertiary': '#DDB62B',
    },
    },
  },
  plugins: [require("daisyui")],
}
