module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12,
  },
  "rules": {
    'no-console': 'error',
    'space-before-function-paren': ['error', 'always'],
    'no-use-before-define': ['error', { functions: false }],
    'arrow-parens': ['error', 'always'],
    'brace-style': ["error", "1tbs"],
    'no-underscore-dangle': 'off',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
  },
};
