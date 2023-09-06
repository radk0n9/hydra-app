/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "roboto-mono": ['Roboto Mono', "monospace"],
    },
    extend: {
      
    },
  },
  plugins: [
      require('tailwindcss-animated'),
  ],
}

