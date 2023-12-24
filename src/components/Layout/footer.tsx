import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { personalLinks } from "~/lib/constants";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full border-t border-gray-400">
      <div className="container flex px-3 py-4">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full lg:w-1/2 ">
            <div className="px-3 md:px-0">
              <h3 className="font-bold">{t("lbl.about")}</h3>
              <p className="py-4">{t("msg.about")}</p>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
            <div className="px-3 md:px-0">
              <h3 className="font-bold">{t("lbl.social")}</h3>
              <ul className="list-reset items-center pt-3">
                <li>
                  <a
                    className="inline-block no-underline hover:text-black dark:hover:text-white hover:underline py-1"
                    href={personalLinks.blog}
                  >
                    {t("lbl.whoamI")}
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="inline-block no-underline hover:text-black dark:hover:text-white hover:underline py-1"
                    href={personalLinks.github}
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="inline-block no-underline hover:text-black dark:hover:text-white hover:underline py-1"
                    href={personalLinks.linkedin}
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
