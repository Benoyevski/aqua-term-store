module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react-refresh", "react", "@typescript-eslint"],
    rules: {
        "react-refresh/only-export-components": "warn",
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        indent: [2, 4],
        "react/jsx-filename-extension": [
            2,
            {
                extensions: [".js", ".jsx", ".tsx"],
            },
        ],
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-var-requires": "off",
        "react/function-component-definition": "off",
        "no-shadow": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "no-underscore-dangle": "off",
        "react/button-has-type": "off",
        "linebreak-style": 0,
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "no-param-reassign": "off",
        "@typescript-eslint/ban-ts-comment": "warn",
        "no-undef": "off",
        "max-len": [
            "error",
            {
                ignoreComments: true,
                code: 120,
            },
        ],
    },
};
