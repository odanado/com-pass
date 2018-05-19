module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true
  },
  extends: ['plugin:vue/strongly-recommended', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-param-reassign': [2, { 'props': false }],
    'import/prefer-default-export': 0,
  },
  globals: {},
  settings: {
    "import/resolver": {
      "nuxt-import": {}
    }
  }
}
