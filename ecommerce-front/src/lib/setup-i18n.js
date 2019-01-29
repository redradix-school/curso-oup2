import { addLocaleData } from 'react-intl'
import esLocaleData from 'react-intl/locale-data/es'
import enLocaleData from 'react-intl/locale-data/en'
import esTransaltions from '../config/translations/es.json'
import enTransaltions from '../config/translations/en.json'

const locales = {
  es: { data: esLocaleData, translations: esTransaltions },
  en: { data: enLocaleData, translations: enTransaltions }
}

export default function setupI18n(locale) {
  const { data, translations } = locales[locale.split('-')[0]]
  addLocaleData(data)
  return translations
}
