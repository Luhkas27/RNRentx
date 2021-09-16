module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier', 'import-helpers'],
    rules: {
        'prettier/prettier': ['error', { tabWidth: 4 }],
        indent: ['error', 4, { SwitchCase: 1 }],
        quotes: ['error', 'single', { avoidEscape: true }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'linebreak-style': ['error', 'unix'],
        semi: ['error', 'always'],
        'import-helpers/order-imports': [
            'warn',
            {
                newlinesBetween: 'always',
                groups: [
                    '/^react/',
                    'module',
                    '/^@pages/',
                    '/^@shared/',
                    '/^@services/',
                    '/^@redux/',
                    '/^@routes/',
                    '/^@utils/',
                    '/^@theme/',
                    '/^@assets/',
                    '/^@mocks/',
                    ['parent', 'sibling', 'index'],
                ],
                alphabetize: { order: 'asc', ignoreCase: true },
            },
        ],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
