// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
    // Ignore build output
    globalIgnores(['dist', 'node_modules']),

    // Base JS rules
    js.configs.recommended,

    // TypeScript rules (for .ts / .tsx)
    ...tseslint.configs.recommended,

    // React hooks + Vite fast-refresh
    reactHooks.configs.flat.recommended,
    reactRefresh.configs.vite,

    // Turn off ESLint rules that conflict with Prettier
    eslintConfigPrettier,

    // Project-specific settings
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: globals.browser,
        },
    },
])
