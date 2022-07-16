const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.js', './src/**/*.jsx'],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: colors.slate[900],
        text: colors.slate[50],
        surfaceDark: colors.slate[800],
        surfaceLight: colors.slate[600],
        lightGray: colors.slate[400],
        red: colors.red[900],
        orange: colors.orange[900],
        yellow: colors.yellow[900],
        green: colors.green[900],
        blue: colors.blue[900],
        purple: colors.purple[900],
        pink: colors.pink[900],
        teal: colors.teal[900],
        cyan: colors.cyan[900],
        rose: colors.rose[900],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}
