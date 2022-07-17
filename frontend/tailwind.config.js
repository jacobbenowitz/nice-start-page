const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
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
      fontFamily: {
        'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }
}
