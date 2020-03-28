module.exports = {
    root: true,
    env: {
      node: true,
      browser: true
    },
    extends: [
      'plugin:vue/essential',
      "eslint:recommended",
      '@vue/prettier',
    ],
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          tabWidth: 2,
          sort: true,
          useTabs: false,
        }
      ],
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    parserOptions: {
      parser: 'babel-eslint',
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: {
        vue: true
      }
    }
}