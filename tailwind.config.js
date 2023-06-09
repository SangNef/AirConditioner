/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Slab', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

