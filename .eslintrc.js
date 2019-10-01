module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    "indent": [0, "tab", { "SwitchCase": 1, "VariableDeclarator": 1 }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': ["error", { "props": false }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
