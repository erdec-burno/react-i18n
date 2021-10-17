import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  // Подключение бэкенда i18next
  .use(Backend)
  // Автоматическое определение языка 
  .use(LanguageDetector)
  // модуль инициализации
  .use (initReactI18next)
  .init({
    lng: document.querySelector('html').lang,
    // Стандартный язык
    fallbackLng: 'ru',
    debug: true,
    // Распознавание и кэширование языковых кук
    detection: {
      order: ['cookie', 'queryString', 'localStorage', 'cookie'],
      cache: ['cookie']
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n;