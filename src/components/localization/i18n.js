import i18next from 'i18next';
import { initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


import en from '../localization/locales/en/translation.json';
import ua from '../localization/locales/ua/translation.json';



i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    debug: true,
        fallbackLng: "en",
    detection: {
      order: [ 'cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    resources: {
      en: {
        translation: en,
      },
      ua: {
        translation: ua,
      },
    },
  })

export default i18next;