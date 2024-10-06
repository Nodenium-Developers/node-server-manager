// @ts-check

import typescriptEslint from '@typescript-eslint/eslint-plugin';

export default {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['**/*.js'],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
    },
    plugins: {
        '@typescript-eslint': typescriptEslint,
    }
    

}