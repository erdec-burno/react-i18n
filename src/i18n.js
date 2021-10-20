import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
// import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  // Подключение бэкенда i18next
  .use(Backend)
  // Автоматическое определение языка 
  // .use(LanguageDetector)
  // модуль инициализации
  .use (initReactI18next)
  .init({
    lng: document.querySelector('html').lang,
    // Стандартный язык
    fallbackLng: 'ru',
    debug: false,
    // Распознавание и кэширование языковых кук
    detection: {
      order: ['queryString', 'cookie', 'localStorage'],
      cache: ['cookie']
    },
    interpolation: {
      escapeValue: false
    },
    // backend: {
    //   loadPath: '/locales2/{{lng}}/{{ns}}.json'
    // }
  })

  fetch('http://localhost:3000/locales/ru/translation.json')
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		i18n.addResourceBundle('ru', "back", data)
	}
);

export default i18n;