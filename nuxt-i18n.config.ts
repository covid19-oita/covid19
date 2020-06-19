export default {
  strategy: 'prefix_except_default',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected'
  },
  defaultLocale: 'ja',
  vueI18n: {
    fallbackLocale: 'ja',
    formatFallbackMessages: true
  },
  // vueI18nLoader: true,
  lazy: true,
  langDir: 'assets/locales/',
  locales: [
    {
      code: 'ja',
      name: '日本語',
      iso: 'ja-JP',
      file: 'ja.json',
      description: 'Japanese'
    },
    {
      code: 'en',
      name: 'English',
      iso: 'en-US',
      file: 'en.json',
      description: 'English'
    },
    {
      code: 'th',
      name: 'ภาษาไทย',
      iso: 'th-TH',
      file: 'th.json',
      description: 'Thai'
    },
    {
      code: 'id',
      name: 'Bahasa Indonesia',
      iso: 'id-ID',
      file: 'id.json',
      description: 'Indonesian'
    }
  ]
}
