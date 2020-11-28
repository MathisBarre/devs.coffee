module.exports = {
  purge: [
    './**/*.html',
    './**/*.js',
    './**/*.jsx',
    './**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "144":"36rem"
      },
      minHeight: {
        "9":"2.25rem"
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
