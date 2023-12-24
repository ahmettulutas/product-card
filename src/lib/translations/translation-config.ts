import i18next from "i18next";
import { Enums } from "../enums";

const useLanguage = () => {
  const lang = i18next.language as Enums["langs"];
  const toggleLang = (langKey: Enums["langs"]) => {
    i18next.changeLanguage(langKey, () => {
      localStorage.setItem("lang", langKey);
    });
  };
  return { lang, toggleLang };
};
export default useLanguage;
