module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],

  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        object: true,
        array: false,
      },
      AssignmentExpression: {
        object: false,
        array: false,
      },
    }, {
      enforceForRenamedProperties: false,
    }],
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxBOF: 0,
      maxEOF: 0,
    }],
    'padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: '*',
      next: ['if', 'for', 'function', 'switch', 'do', 'while', 'try'],
    }],
    'no-restricted-syntax': 'off',
    'no-param-reassign': ['error', {
      props: false,
    }],
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],
    'no-underscore-dangle': ['error', {
      allow: ['_uid'],
    }],
    'no-constant-condition': ['error'],
    'no-alert': ['error'],
    'no-console': ['error', {
      allow: ['warn', 'error'],
    }],
    'func-names': ['error'],
    'id-length': ['error', {
      min: 2,
      max: Infinity,
      properties: 'always',
    }],
    'max-len': ['error', 100, 2, {
      ignoreUrls: false,
      ignoreStrings: false,
      ignoreComments: false,
      ignoreRegExpLiterals: false,
      ignoreTemplateLiterals: false,
      ignoreTrailingComments: false,
    }],
  },
};
