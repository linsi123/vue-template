module.exports = {
  root: true,

  // parser: "typescript-eslint-parser",
  // parserOptions: {
  //     jsx: true,
  //     useJSXTextNode: true
  // },
  parserOptions: {
    parser: 'typescript-eslint-parser',
    ecmaFeatures : {
      jsx: true,
      useJSXTextNode: true,
      allowImportExportEverywhere: true
    },
    ecmaVersion: 7,
    sourceType: 'module'
  },

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
    'plugin:prettier/recommended'
  ],

  plugins: ['vue','prettier'],

  rules: {
    'prettier/prettier': ['error',{
      singleQuote: true,
      trailingComma: 'none',
      bracketSpacing: true,
      jsxBracketSameLine: true,
      semi: false,
      arrowParens: 'avoid'
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': 'off',
    semi: [
      2,
      'never'
    ],
    'typescript/class-name-casing': 'error',
    'no-plusplus': 'off',
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'ignore'
      }
    ],
    'class-methods-use-this': 'off',
    'no-extra-parens': 'off'
  },

};
