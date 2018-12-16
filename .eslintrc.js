module.exports = {
  root: true,
  // parser: "typescript-eslint-parser",
  // parserOptions: {
  //     jsx: true,
  //     useJSXTextNode: true
  // },
  parserOptions: {
    // 'parser': 'babel-eslint',
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
      'singleQuote': true,
      'trailingComma': 'none',
      'bracketSpacing': true,
      'jsxBracketSameLine': true,
      'semi': false,
      'arrowParens': 'avoid'
      }
    ],
    // 'prettier/prettier': ['error',{
    //   "overrides": [{ "files": "*.vue", "options": { "parser": "babylon" } }]
    // }],
    // don't require .vue extension when importing
    // 'import/extensions': [
    //   'error',
    //   'always',
    //   {
    //     js: 'never',
    //     vue: 'never',
    //     ts: 'never'
    //   },
    // ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 去掉分号结尾
    'semi': [2, 'never'],
    // 类和接口的命名必须遵守帕斯卡命名法，比如 PersianCat
    'typescript/class-name-casing': 'error',
    // 禁止使用 ++ 或 -- 没必要限制
    'no-plusplus': 'off',
    // 禁止对函数的参数重新赋值
    'no-param-reassign': ["error", { "props": false }],
    // 结尾有逗号
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'never',
      imports: "never",
      exports: "never",
      functions: "ignore"
      }
    ],
    //在类的非静态方法中，必须存在对 this 的引用
    'class-methods-use-this': 'off',
    'no-extra-parens': 'off'
  }
};
