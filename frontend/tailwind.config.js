const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: colors.blueGray[900],
        gray: colors.slate,
        amber: colors.amber,
        text: "F8FAFC",
        surfaceDark: "1E293B",
        surfaceLight: "64748B",
        yellow: "FFD369"
      },
    },
    variants: {
      extend: {},
    },
  }
}
