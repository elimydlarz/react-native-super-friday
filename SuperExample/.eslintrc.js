module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'jest',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
  },
  env: {
    'jest/globals': true,
  },
};
