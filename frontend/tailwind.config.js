module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "0F172A",
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
