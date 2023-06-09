import React from "react";
import { enums } from "~/lib/enums";
import useLanguage from "~/lib/translations/translationConfig";


const ToggleLang:React.FC = () => {
  const { toggleLang, lang } = useLanguage();
  return (
    <div className="flex gap-1 mx-2 cursor-pointer">
      <p className={`${lang === enums.langs.en ? "text-yellow-500 underline" : ""} transition-all duration-200`} onClick={() => toggleLang("en")}>EN</p>
      <span>|</span>
      <p className={`${lang === enums.langs.tr ? "text-yellow-500 underline" : ""} transition-all duration-200`} onClick={() => toggleLang("tr")}>TR</p>
    </div>
  );
};

export default ToggleLang;