module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint', 'prettier'],
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    env: {
        browser: true,
        jasmine: true,
        jest: true,
        node: true,
    },
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'consistent-return': 'off',
        'react/prop-types': 'off',
        'import/no-cycle': 'off',
        'import/prefer-default-export': 'off',
        'no-param-reassign': 'off',
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        '@typescript-eslint/no-unused-vars': ['error'],
    },
};
