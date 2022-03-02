module.exports = {
  important: true,
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gilroy': "'Gilroy', sans-serif",
      },
      colors: {
        'econavOrange': '#FB7750',
        'econavPurple': '#3E3E70',
        'ekonavYellow': '#FDB914',
      },
      boxShadow: {
        'notification': '0 0.125rem 0.125rem rgba(0, 0, 0, 0.25);',
      },
      borderRadius: {
        'econav': '1.563rem',
      }
    },
  },
  plugins: [],
}