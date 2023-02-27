module.exports = {
  root: true,
  env: { browser: true, amd: true, node: true, es6: true, jest: true },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'unused-imports',
    'testing-library',
    'autofix',
  ],
  extends: [
    'eslint:recommended',
    '@react-native-community',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals',
  ],
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  rules: {
    'no-redeclare': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-unused-vars': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'unused-imports/no-unused-imports': 'error',
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../'],
      },
    ],
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    semi: ['error', 'never'],
    'sort-imports': [
      'error',
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
    'import/order': [
      1,
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['sibling', 'parent'],
          'index',
        ],
        pathGroups: [
          { pattern: 'react', group: 'external', position: 'before' },
          { pattern: '@/src/*', group: 'internal' },
          { pattern: '@/api/*', group: 'internal' },
          { pattern: '@/components/*', group: 'internal' },
          { pattern: '@/config/*', group: 'internal' },
          { pattern: '@/contexts/*', group: 'internal' },
          { pattern: '@/ds/*', group: 'internal' },
          { pattern: '@/ds', group: 'internal' },
          { pattern: '@/illustrations/*', group: 'internal' },
          { pattern: '@/illustrations/*', group: 'internal' },
          { pattern: '@/forms/*', group: 'internal' },
          { pattern: '@/pages/*', group: 'internal' },
          { pattern: '@/presenters/*', group: 'internal' },
          { pattern: '@/styles/*', group: 'internal' },
          { pattern: '@/utilities/*', group: 'internal' },
          { pattern: '@/trans', group: 'internal' },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}
