// stylelint.config.mjs
/** @type {import('stylelint').Config} */
export default {
    extends: [
        'stylelint-config-standard-scss', // SCSS/Sass rules + syntax
        'stylelint-config-prettier',      // disable formatting rules that Prettier will handle
    ],
    ignoreFiles: ['dist/**/*', 'node_modules/**/*'],
    rules: {
        // Add overrides here if Stylelint complains about something you don't care about, e.g.:
        // 'scss/dollar-variable-pattern': null,
    },
}
