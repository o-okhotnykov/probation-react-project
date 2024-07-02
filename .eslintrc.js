module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint', 'prettier', 'testing-library'],
    extends: [
        'airbnb-typescript',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/typescript',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
    },
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
        '@typescript-eslint/indent': 'off',
        'react/jsx-indent': 'off',
        'import/named': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'react/jsx-props-no-spreading': 'off',
        'consistent-return': 'off',
        'react/prop-types': 'off',
        'import/no-cycle': 'off',
        'import/prefer-default-export': 'off',
        'no-param-reassign': 'off',
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        '@typescript-eslint/no-unused-vars': ['error'],
    },
    overrides: [
        {
            files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
            extends: ['plugin:testing-library/react'],
        },
    ],
};
