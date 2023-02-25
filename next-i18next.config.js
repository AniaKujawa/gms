module.exports = {
  i18n: {
    createOldCatalogs: true,
    lexers: {
      js: ['JsxLexer'],
      default: ['JavascriptLexer'],
    },
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
    // namespaceSeparator: '.',
    // output: 'src/translations/$LOCALE/$NAMESPACE.json',
    // input: [
    //   'src/**/*.ts',
    //   'src/**/*.tsx',
    // ],
  },
};
