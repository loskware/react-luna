module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "latest",
    },
  },
  rules: {
    "react/prop-types": 0,
    "no-warning-comments": [1, { terms: ["todo", "fixme"], location: "start" }],
    "no-console": ["warn"],
  },
};
