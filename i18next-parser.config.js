module.exports = {
  createOldCatalogs: true,
  lexers: {
    js: ['JsxLexer'],
    default: ['JavascriptLexer'],
  },
  locales: ['pl', 'en'],
  namespaceSeparator: '.',
  output: 'src/translations/$LOCALE/$NAMESPACE.json',
  input: [
    'src/**/*.ts',
    'src/**/*.tsx',
  ],
};
