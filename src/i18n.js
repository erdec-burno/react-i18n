import i18n from 'i18next'
// import ChainedBackend from "i18next-chained-backend";
import HttpBackend from 'i18next-http-backend'
// import FsBackend from "i18next-fs-backend";
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'

i18n
	// Подключение бэкенда i18next
	.use(HttpBackend)
	// Автоматическое определение языка
	.use(LanguageDetector)
	// модуль инициализации
	.use(initReactI18next)
	.init(
		{
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
			},
			backend: {
				loadPath: 'http://localhost.admin-dev.template.online:3000/locales/{{lng}}/{{ns}}.json'
			},
			/*backend: {
				backends: [HttpBackend, FsBackend],
				backendOptions: [{loadPath: 'http://localhost.admin-dev.template.online:3000/locales/{{lng}}/{{ns}}.json'}, {loadPath: 'http://localhost.admin-dev.template.online:3000/locales2/{{lng}}/{{ns}}.json'}]
			}*/
		}
	)

i18n.addResourceBundle('ru', "translation", /*"/locales2/en/translation.json"*/
	{
		"description1": {
			"subtitle1": "Learn React123123",
			"subtitle2": "Switch language between english and russian using buttons above.",
			"subtitle3": "from included component"
		}
	})
// )


// console.log("i18n", i18n)

export default i18n;

