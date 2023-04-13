module.exports = { // Q. copy paste or alternatively just npm i, and downloads packages specified in this file ?
  parser: "@typescript-eslint/parser", //download these.
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  env: {
    browser: true,
    es6: true,
    node: true, // 
  },      //download these.         //download these.  
  plugins: ["eslint-plugin-react", "eslint-plugin-react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",

    // You can do more rule customizations here...
  },
};
