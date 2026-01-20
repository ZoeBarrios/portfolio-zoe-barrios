module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'prettier',
        'import',
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'prettier/prettier': 'warn',

        // TypeScript
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/no-explicit-any': 'warn',

        // React
        'react/react-in-jsx-scope': 'off', // Vite + React 17+

        // Imports
        'import/order': [
            'warn',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                ],
                'newlines-between': 'always',
            },
        ],
    },
}
