/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    "root": true,
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-typescript/recommended"
    ],
    "env": {
        "vue/setup-compiler-macros": true
    },
    "overrides": [
        {
            "files": [
                "cypress/integration/**.spec.{js,ts,jsx,tsx}"
            ],
            "extends": [
                "plugin:cypress/recommended"
            ]
        }
    ],
    "rules": {
        "indent": ['warn', 4],
        "semi": ['error', 'always'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        "camelcase": 'off',
        "radix": 'off',
        '@typescript-eslint/camelcase': 'off',
        'max-len': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'no-return-assign': 'off',
        'newline-after-var': 'off',
        'newline-per-chained-call': ['error', {
            ignoreChainWithDepth: 3,
        }],
        'no-param-reassign': 'off',
        'no-explicit-any': 'off',
        'prefer-destructuring': ['warn',
            {
                object: false,
                array: false,
            }, {
                enforceForRenamedProperties: false,
            },
        ],
        'linebreak-style': 'off',
        'lines-between-class-members': 'off',
        'no-restricted-syntax': 'off',
        'default-case': 'off',
        'max-classes-per-file': 'off',
        'no-underscore-dangle': 'off',
        'no-trailing-spaces': 'off',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: 'if',
                next: 'if',
            },
        ],
        'no-prototype-builtins': 'off',
        'spaced-comment': 'off',
        'space-after-function-name': 'off',

        "vue/component-tags-order": ["error", {
            "order": [ "template", "script", "style" ]
        }],
    }
};
