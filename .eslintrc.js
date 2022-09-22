module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx'],
    }],
    'react/react-in-jsx-scope': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 1,
    'react/require-default-props': 0,
    'no-tabs': 0,
    'react/jsx-props-no-spreading': 1,
    'react/function-component-definition': 0,
    'no-shadow': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': 1,
    camelcase: 0,
  },
  globals: {
    __IS_DEV__: true,
  },
};
