module.exports = {
  purge: ['./pages/**/*.jsx', './components/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "144":"36rem"
      },
      minHeight: {
        "9":"2.25rem",
      },
      minWidth: {
        "5":"1.25rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
