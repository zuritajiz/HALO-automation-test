import chaiFriendly from "eslint-plugin-chai-friendly";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "plugin:cypress/recommended",
    "plugin:chai-friendly/recommended",
    "plugin:prettier/recommended",
), {
    plugins: {
        "chai-friendly": chaiFriendly,
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        ecmaVersion: "latest",
        sourceType: "module",
    },

    rules: {
        "linebreak-style": 0,
        "cypress/no-pause": "error",
        semi: ["error", "never"],
        "comma-dangle": ["error", "never"],
        "func-names": "off",
        "max-len": "off",
        "no-plusplus": "off",
        "import/no-extraneous-dependencies": "off",
        "class-methods-use-this": "off",
        "no-loop-func": "off",
        "import/no-import-module-exports": "off",
        "import/prefer-default-export": 0,
        "no-restricted-syntax": 0,
        "chai-friendly/no-unused-expressions": 0,
        "no-param-reassign": 0,
        "prefer-destructuring": 0,
        eqeqeq: 0,
        "guard-for-in": 0,
        "consistent-return": 0,
        "import/named": 0,
        "global-require": 0,
        "no-trailing-spaces": "error",
        "no-irregular-whitespace": "error",
        "prefer-arrow-callback": "error",

        "prettier/prettier": ["error", {
            endOfLine: "auto",
        }],

        "cypress/unsafe-to-chain-command": 0,
        camelcase: 0,
        "no-console": 1,
        "import/no-cycle": 0,
        "import/extensions": "error",
        "no-shadow": 1,
        radix: 0,
        "no-unused-vars": "error",
        "import/order": 0,
        "no-use-before-define": 0,
        "no-nested-ternary": 0,
    },
}];