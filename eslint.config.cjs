const tsPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // start from recommended rules
      ...tsPlugin.configs.recommended.rules,
      // project-specific overrides
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
