const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
const path = require("node:path");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const sharedConfig = compat.config({
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: path.join(__dirname, "..", "tsconfig.json"),
  },
  plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y", "@vitest"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/function-component-definition": [
      "error",
      { namedComponents: "arrow-function" },
    ],
    "react/prop-types": "off",
    "jsx-a11y/no-autofocus": "off",
  },
  overrides: [
    {
      files: ["*.test.ts", "*.test.tsx", "tests/**/*.{ts,tsx}"],
      env: {
        "vitest-globals/env": true,
      },
      rules: {
        "@typescript-eslint/no-empty-function": "off",
      },
    },
  ],
});

module.exports = [
  {
    ignores: ["dist/**", "docs/**", "bun.lock", "*.config.js", "*.config.cjs"],
  },
  ...sharedConfig,
];

