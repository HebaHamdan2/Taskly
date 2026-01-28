// https://docs.expo.dev/guides/using-eslint/
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

 module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier", "react-native"],
  eslintPluginPrettierRecommended,
   rules: {
     "prettier/prettier": "error",
     "react-native/no-unused-styles": "error",
   },
    ignores: ["dist/*"],
  
 };