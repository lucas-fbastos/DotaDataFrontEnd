/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}"],
  theme: {
    screens:{
      sm:'280px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        brightRed:'hsl(12,88%,59%)',
        veryLightGray: 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
}
