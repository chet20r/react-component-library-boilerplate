module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:react/recommended', 'prettier', 'prettier/react'],
  env: {
    es6: true,
    jest: true
  },
  plugins: ['react'],
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    // don't force es6 functions to include space before paren
    'space-before-function-paren': 0,

    // allow specifying true explicitly for boolean props
    'react/jsx-boolean-value': 0,

    // don't force exteraneous dependencies check
    'import/no-extraneous-dependencies': 0
  }
};
