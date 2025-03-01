module.exports = {
  singleQuote: true,
  arrowParens: 'always',
  trailingComma: 'none',
  printWidth: 100,
  tabWidth: 2,
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['^next/(.*)$', '^lib/(.*)$', '^components/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  tailwindFunctions: ['cn']
};
