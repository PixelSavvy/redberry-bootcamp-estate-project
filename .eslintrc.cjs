const { resolve } = require('node:path');
const project1 = resolve(__dirname, 'tsconfig.json');
const project2 = resolve(__dirname, 'tsconfig.node.json');

const { JAVASCRIPT_FILES } = require('@vercel/style-guide/eslint/constants');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [project1, project2],
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: [project1, project2],
      },
    },
    'jsx-a11y': {
      components: {
        // ... other components
      },
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', '.vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: 'last',
        reservedFirst: true,
      },
    ],
    // sort import statements
    'import/order': [
      'warn',

      {
        groups: [
          'builtin', // Node.js built-in modules (like 'fs', 'path')
          'external', // External modules (like 'lodash', 'react')
          'internal', // Internal modules (your own code)
          ['parent', 'sibling', 'index'], // Parent, sibling, and index files
          'object', // Object imports (for example, with import * as _ from 'lodash')
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        warnOnUnassignedImports: true,
      },
    ],
    // sort named imports within an import statement
    'sort-imports': [
      'warn',
      {
        ignoreCase: true, // Ignore case when sorting import declarations.
        ignoreDeclarationSort: true, // Allow `import/order` to handle the declaration sorting.
        ignoreMemberSort: false, // Sort members (named imports) within import statements.
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'], // Order of import syntax.
      },
    ],

    'unicorn/filename-case': [
      'warn',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],

    '@typescript-eslint/naming-convention': [
      'error',
      // Interface names should start with a capital 'I'
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      // Type alias names should start with a capital 'T'
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        prefix: ['T'],
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
      {
        selector: 'enum',
        format: ['UPPER_CASE'],
      },
      // boolean variable names should start with a verb
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'as', 'should', 'has', 'can', 'did', 'will'],
      },
      // boolean property names should start with a verb
      {
        selector: 'property',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'as', 'should', 'has', 'can', 'did', 'will'],
      },
    ],

    '@typescript-eslint/explicit-function-return-type': ['error'],

    '@typescript-eslint/consistent-type-definitions': 'off',

    'eslint-comments/require-description': 'off',

    'import/no-extraneous-dependencies': 'off',
  },

  overrides: [
    {
      files: JAVASCRIPT_FILES,
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },

    {
      files: ['*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },

    {
      files: ['*.config.{cjs,ts,js}'],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': [
          'off',
          {
            target: 'any',
          },
        ],
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'import/no-default-export': 'off',
        'unicorn/filename-case': 'off',
      },
    },
  ],
};
