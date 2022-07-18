const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Mulish', 'sans-serif']
    },
    extend: {
      gridTemplateColumns: {
        'autoFill-300': 'repeat(auto-fill, 300px)'
      },
      colors: {
        background: colors.blueGray[900],
        gray: colors.blueGray,
        amber: colors.amber,
        whiteMain: "#F8FAFC",
        surfaceDark: "#1E293B",
        surfaceLight: "#64748B",
        yellow: "#FFD369"
      },
    },
    minHeight: {
      '150': '150px',
    },
    variants: {
      extend: {},
    },
  }
}
