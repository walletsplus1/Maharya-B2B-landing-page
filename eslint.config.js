const js = require("@eslint/js");
const globals = require("globals");
const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");
const jsxA11yPlugin = require("eslint-plugin-jsx-a11y");
const importPlugin = require("eslint-plugin-import");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Not needed in React 19
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-unused-vars": "warn",
    },
  },
  {
    ignores: ["build/", "node_modules/", "dist/"],
  },
];
