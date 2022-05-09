module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true
  },
  'parser': 'babel-eslint',
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 7,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'experimentalDecorators': true,
      'jsx': true
    },
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'globals': {
    '__DEV__': false,
    '__dirname': false,
    'window': true,
    'define': true,
    'history': true,
    'location': true,
    'wxjs': true,
    '$': true,
    'WeixinJSBridge': true,
    'wx': true,
    'process': true,
    'qq': true,
  },
  'settings': {
    'react': {
      'version': '16.2.0',
    }
  },

  /**
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  'rules': {
    'no-cond-assign': 2,
    'no-console': [
      'error', {
        'allow': ['log', 'warn', 'error', 'info']
      }
    ],
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 0,

    'curly': [2, 'all'],
    'no-catch-shadow': 0,
    'no-label-var': 2,
    'no-restricted-globals': 2,
    'no-shadow': 0,
    'no-shadow-restricted-names': 2,
    'no-undef-init': 2,
    'no-undefined': 0,
    'no-use-before-define': 0,
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': [1, 'never'],
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': [2, 'self', 'that', '_self', '_that', 'me', '_this'],
    'func-names': 0,
    'eol-last': 2,
    'indent': [
      'error', 2
    ],
    'func-call-spacing': 2,
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'lines-around-comment': [2, {
      'beforeBlockComment': true
    }],
    'func-style': 0,
    'max-nested-callbacks': [2, 5],
    'id-blacklist': 0,
    'id-length': 0,
    'id-match': 0,
    'jsx-quotes': 0,
    'keyword-spacing': 2,
    // 'max-len': [2, 200, { 'ignoreUrls': true }],
    'max-lines': 0,
    'max-params': [1, 5],
    'max-statements': [1, 200],
    'max-statements-per-line': 0,
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2,
    'newline-after-var': 0,
    'no-array-constructor': 2,
    'no-bitwise': 0,
    'newline-before-return': 0,
    'newline-per-chained-call': 1,
    'no-continue': 0,
    'no-inline-comments': 0,
    'no-lonely-if': 0,
    'no-mixed-operators': 0,
    'no-mixed-spaces-and-tabs': [
      'error', 'smart-tabs'
    ],
    'no-multiple-empty-lines': [2, {
      'max': 2
    }],
    'no-negated-condition': 0,
    'no-nested-ternary': 0,
    'no-new-object': 2,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-spaced-func': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'one-var-declaration-per-line': 0,
    'operator-assignment': 0,
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': 0,
    'quote-props': 0,
    'quotes': [2, 'single', 'avoid-escape'],
    'require-jsdoc': 0,
    'semi-spacing': 2,
    'sort-vars': 0,
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!']
    }],
    'unicode-bom': 2,
    'wrap-regex': 0,
    'no-case-declarations': ['warn'],
    'arrow-body-style': 2,
    'arrow-parens': 2,
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }],
    'no-class-assign': 2,
    'no-confusing-arrow': 0,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 2,
    'no-new-symbol': 2,
    'no-restricted-imports': 0,
    'no-this-before-super': 2,
    'no-useless-computed-key': 0,
    'no-var': 1,
    'object-shorthand': 0,
    'prefer-arrow-callback': 0,
    'prefer-const': 0,
    'prefer-reflect': 0,
    'prefer-spread': 0,
    'prefer-template': 0,
    'prefer-rest-params': 0,
    'require-yield': 2,
    'template-curly-spacing': 1,
    'yield-star-spacing': 2,
    // 'linebreak-style': [2, 'unix'],
    'react/jsx-boolean-value': 2,
    'react/jsx-curly-spacing': [2, {
      'when': 'never',
      'children': true
    }],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': [1, {
      'maximum': 5
    }],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': 2,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 0,
    'react/no-deprecated': 2,
    'react/jsx-equals-spacing': 2,
    'react/jsx-filename-extension': [2, {
      'extensions': ['.js', '.jsx']
    }],
    'no-unused-vars': 0,
  }
};