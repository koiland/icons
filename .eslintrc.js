module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true
  },
  plugins: ['react', 'prettier', 'react-hooks', '@typescript-eslint'],
  extends: ["airbnb", "prettier", "prettier/react", "airbnb-typescript", "prettier/@typescript-eslint"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'radix': 0,
    '@typescript-eslint/array-type': ['error', {
      'array': true
    }],
    '@typescript-eslint/naming-convention': ['error', {
      selector: 'variableLike',
      format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow'
    }],
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/keyword-spacing': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-magic-numbers': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/prop-types': 'off',
    'no-console': 0,
    'comma-dangle': 0,
    'global-require': 0,
    'import/imports-first': 0,
    'import/no-unresolved': 0,
    'object-curly-newline': 0,
    'import/extensions': 0,
    'no-duplicate-imports': 1,
    'no-underscore-dangle': 0,
    'no-case-declarations': 0,
    'class-methods-use-this': 0,
    'no-extra-boolean-cast': 0,
    'react/no-danger': 0,
    'import/order': 0,
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-dynamic-require': 0,
    'react/forbid-prop-types': 0,
    'react/no-unused-prop-types': 0,
    'react/require-extension': 0,
    'import/prefer-default-export': 0,
    'no-unused-expressions': 0,
    'no-alert': 0,
    'no-plusplus': 0,
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'arrow-parens': 1,
    /* WARN: TS doesn't understand dynamic type as prop */
    'react/button-has-type': 0,
    'quotes': ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: false
    }],
    'max-len': ['error', {
      'code': 120
    }],
    'react/jsx-wrap-multilines': 0,
    "implicit-arrow-linebreak": 0,
    'prettier/prettier': ['error', {
      trailingComma: 'es5',
      tabWidth: 2,
      printWidth: 120,
      semi: true,
      useTabs: false,
      singleQuote: true,
      bracketSpacing: true,
      arrowParens: 'always'
    }]
  }
};
