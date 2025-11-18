import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import simpleImportSort from "eslint-plugin-simple-import-sort";
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    ignores: [
      ".husky",
      ".vscode",
      ".yarn",
      "build",
      "dist",
      "coverage",
      "node_modules",
      "public",
      "/tools/scripts",
      "*.d.ts",
      "jest.setup.ts",
      "jest.preset.js",
    ],
    files: ['**/*.{ts,tsx}'],
    plugins: {
      "simple-import-sort": simpleImportSort,
      '@stylistic': stylistic,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@stylistic/semi': ['error', 'always'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      "prefer-const": "error",
      '@stylistic/indent': ['error', 2],
      "@typescript-eslint/no-explicit-any": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@stylistic/no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    },
  },
])
