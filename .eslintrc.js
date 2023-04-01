module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    // 'eslint:recommended',
    'prettier',
    // 'airbnb-base',
    // 'plugin:react/recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/eslint-recommended',
  ],
  overrides: [
    // {
    //   files: ['*.ts'],
    //   parser: '@typescript-eslint/parser',
    //   parserOptions: { project: ['./tsconfig.json'] },
    //   extends: [
    //     'plugin:@typescript-eslint/recommended',
    //     'plugin:@typescript-eslint/recommended-requiring-type-checking',
    //     'prettier',
    //   ],
    // },
  ],
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    // 'react',
    'prettier',
    // '@typescript-eslint'
  ],
  rules: {
    'prettier/prettier': 'error',
  },
};
