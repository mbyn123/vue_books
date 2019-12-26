module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multiple-empty-lines':'off',
    'indent':'off',
    'spaced-comment':'off',
    'space-before-function-paren':'off',
    'comma-spacing':'off',
    'space-before-blocks':'off',
    'object-curly-spacing':'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
