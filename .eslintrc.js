module.exports = {
  root: true,

  extends: 'airbnb-base',

  env: {
    browser: true,
    es2021: true,
  },

  parser: '@babel/eslint-parser',

  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    requireConfigFile: false,
  },

  /* 🔥 THIS IS THE KEY FIX */
  ignorePatterns: [
    'plugins/experimentation/**',
    'scripts/sidekick.js',
  ],

  rules: {
    /* EDS-friendly rules */
    'import/extensions': 'off', // EDS does not require .js extensions
    'linebreak-style': 'off', // avoid Windows vs Unix issues
    'no-param-reassign': [2, { props: false }],
    'import/no-cycle': 0,

    /* Prevent unresolved import errors from optional tooling */
    'import/no-unresolved': 'off',

    'no-console': 'off',
  },
};
