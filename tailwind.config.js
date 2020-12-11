module.exports = {
  purge: ['./pages/**/*.jsx', './components/**/*.jsx'],
  darkMode: 'media', // or 'media' or 'class'
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
      },
      colors: {
        'gray-1000':'#0c121d',
        'gray-1100':'#080b11',
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
