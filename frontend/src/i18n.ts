import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./i18n/locales/en/translation.json";
import arTranslations from "./i18n/locales/ar/translation.json";
import frTranslations from "./i18n/locales/fr/translation.json";
import deTranslations from "./i18n/locales/de/translation.json";
import itTranslations from "./i18n/locales/it/translation.json";
import esTranslations from "./i18n/locales/es/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    ar: { translation: arTranslations },
    fr: { translation: frTranslations },
    de: { translation: deTranslations },
    it: { translation: itTranslations },
    es: { translation: esTranslations },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
