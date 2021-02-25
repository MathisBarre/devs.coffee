module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // Next.js particularitie(s)
    'react/react-in-jsx-scope': 'off',

    // Personnal preference(s)
    'space-before-function-paren': 'off',

    // Prettier conflit resolver (I do not want to use the prettier config)
    'react/no-unescaped-entities': 'warn',
    'multiline-ternary': 'off'
  }
}
