import React from "react";
import { enums } from "~/lib/enums";
import useLanguage from "~/lib/translations/translation-config";

const ToggleLang: React.FC = () => {
  const { toggleLang, lang } = useLanguage();
  return (
    <div className="flex gap-1 cursor-pointer">
      <p
        className={`${
          lang === enums.langs.en ? "text-yellow-500 underline " : ""
        } transition-all duration-200 uppercase`}
        onClick={() => toggleLang("en")}
      >
        {enums.langs.en}
      </p>
      <span>|</span>
      <p
        className={`${
          lang === enums.langs.tr ? "text-yellow-500 underline" : ""
        } transition-all duration-200 uppercase`}
        onClick={() => toggleLang("tr")}
      >
        {enums.langs.tr}
      </p>
    </div>
  );
};

export default ToggleLang;
