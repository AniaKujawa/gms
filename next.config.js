const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
}