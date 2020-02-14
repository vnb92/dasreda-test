import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ru } from './ru';

const resources = {
  ru: {
    translation: {
      ...ru,
    },
  },
};

const interpolation = {
  format(value: any, format?: string, lng?: string) {
    if (format === 'intlDate') {
      const formatter = new Intl.DateTimeFormat(lng, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      const formattedDate = formatter.format(value);
      return formattedDate;
    }

    return value;
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    interpolation,
  });

export default i18n;
