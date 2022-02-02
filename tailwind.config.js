module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
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
      },
      typography: (theme) => ({
        light: {
          css: [
            {
              color: theme('colors.gray.300'),
              '[class~="lead"]': {
                color: theme('colors.gray.200')
              },
              a: {
                color: theme('colors.white')
              },
              strong: {
                color: theme('colors.white')
              },
              'ol > li::before': {
                color: theme('colors.gray.300')
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600')
              },
              hr: {
                borderColor: theme('colors.gray.200')
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.600')
              },
              h1: {
                color: theme('colors.white')
              },
              h2: {
                color: theme('colors.white')
              },
              h3: {
                color: theme('colors.white')
              },
              h4: {
                color: theme('colors.white')
              },
              'figure figcaption': {
                color: theme('colors.gray.300')
              },
              code: {
                color: theme('colors.white')
              },
              'a code': {
                color: theme('colors.white')
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800')
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.300')
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600')
              }
            }
          ]
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
}
