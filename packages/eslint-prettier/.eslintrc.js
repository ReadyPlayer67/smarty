module.exports = {
  // env: {
  //   browser: true,
  //   es2021: true,
  // },
  // extends: 'airbnb-base',
  // overrides: [
  // ],
  // parserOptions: {
  //   ecmaVersion: 'latest',
  //   sourceType: 'module',
  // },
  // rules: {
  // },
  env:{
    node: true,
    browser: true
  },
  globals: {
    ga: true,
    chrome: true,
    __DEV__: true
  },
  parser: "vue-eslint-parser",
  // parser: "@typescript-eslint/parser",
  parserOptions: {
    file: "./src/*.*",
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  extends: [
    'eslint:recommended'
  ],
  plugins: ["prettier"],
  rules: {
    "no-unused-vars": "off",
    "no-console": "warn",
    "prettier/prettier": "error"
  }
};
