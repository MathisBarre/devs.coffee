module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        144: '36rem'
      },
      minHeight: {
        9: '2.25rem'
      },
      minWidth: {
        5: '1.25rem'
      },
      colors: {
        'gray-1000': '#0c121d',
        'gray-1100': '#080b11',
        'oc-500': '#7451eb',
        'oc-600': '#5e3cd2',
        'mypurple-500': '#68278c',
        'mypurple-600': '#581c79'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
}
