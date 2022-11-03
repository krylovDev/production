module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
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
    'i18next',
    'react-hooks',
  ],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx'],
    }],
    'react/react-in-jsx-scope': 0,
    'import/no-unresolved': 0,
    // Проверяет хуки
    'react-hooks/rules-of-hooks': 2,
    // Проверяет deps в хуках
    'react-hooks/exhaustive-deps': 2,
    'import/prefer-default-export': 0,
    'no-unused-vars': 1,
    'react/require-default-props': 0,
    'no-tabs': 0,
    'react/jsx-props-no-spreading': 1,
    'react/function-component-definition': 0,
    'no-shadow': 0,
    'no-mixed-spaces-and-tabs': 0,
    'import/extensions': 0,
    'no-param-reassign': 0, // для redux-toolkit
    'linebreak-style': 0,
    'no-undef': 0,
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': 1,
    'i18next/no-literal-string': [2, {
      markupOnly: true,
      /* Чтобы i18n не ругался на отсутствие перевода в data-testid */
      ignoreAttribute: ['data-testid', 'to'],
    }],
    camelcase: 0,
    'max-len': [2, { ignoreComments: true, code: 110 }],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  /* Перезаписываем правила правила */
  overrides: [
    {
      files: ['**/src/**/*.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 0,
      },
    },
  ],
};
