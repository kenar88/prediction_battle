module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
    "node": true,
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12,
  },
  "rules": {
    'no-var': 'error',
    'no-multi-spaces': 'error',
    'no-console': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
    'eol-last': ['error', 'always'],
    'space-before-function-paren': ['error', {
      'asyncArrow': 'always',
      'named': 'never',
      'anonymous': 'never',
    }],
    'no-use-before-define': ['error', { functions: false }],
    'arrow-parens': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    'no-underscore-dangle': 'off',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
  },
};
