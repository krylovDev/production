import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n /* .use - подключение плагинов */
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'ru', // Язык по умолчанию
		debug: __IS_DEV__, // Спамит в консоль подгрузку переводов и т.п.

		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json'
		}
	});


export default i18n;
