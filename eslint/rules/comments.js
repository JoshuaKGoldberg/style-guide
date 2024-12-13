module.exports = {
  plugins: ['@eslint-community/eslint-comments'],
  rules: {
    /**
     * Require comments on ESlint disable directives.
     *
     * 🚫 Not fixable - https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/require-description.html
     */
    '@eslint-community/eslint-comments/require-description': 'error',
  },
};
