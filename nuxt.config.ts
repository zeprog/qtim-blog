import type { NuxtI18nOptions } from '@nuxtjs/i18n'

const i18n: NuxtI18nOptions = {
  locales: [
    { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
    { code: 'ru', iso: 'ru-RU', name: 'Русский', file: 'ru.json' },
  ],
  defaultLocale: 'en',
  lazy: true,
  langDir: 'locales/',
  strategy: 'no_prefix',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    fallbackLocale: 'en',
  },
}

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/scripts',
    '@nuxtjs/i18n',
    '@pinia/nuxt'
  ],

  i18n: i18n
})