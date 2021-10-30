import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

import { TRANSLATIONS_PL, TRANSLATIONS_EN } from './translations';


i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pl',
    lng: 'pl',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      pl: {
        translation: TRANSLATIONS_PL,
      },
    },
  });

export default i18n;