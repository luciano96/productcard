/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  bracketSpacing: true,
  singleAttributePerLine: false,
};
