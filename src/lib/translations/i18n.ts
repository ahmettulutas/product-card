import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import locales from "./locales";
declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false,
    returnEmptyString: false
  }
}
i18next
  .use(initReactI18next)
  .init({
    resources: locales,
    lng: localStorage.getItem("lang") || "tr",
    fallbackLng: "tr"

  });

export default i18next;