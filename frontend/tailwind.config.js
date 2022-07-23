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
      backgroundSize: {
        'b-1':  '100% 1px'
      },
      backgroundPosition: {
        'b100': '0px 100%'
      },
      colors: {
        background: colors.blueGray[900],
        linkGray: 'rgba(255, 255, 255, 0.13)',
        gray: colors.blueGray,
        amber: colors.amber,
        primary: colors.amber[600],
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
