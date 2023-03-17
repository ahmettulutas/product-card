import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer:React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full border-t border-gray-400">
      <div className="container flex px-3 py-4">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full lg:w-1/2 ">
            <div className="px-3 md:px-0">
              <h3 className="font-bold">{t("lbl.about")}</h3>
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia.
              </p>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
            <div className="px-3 md:px-0">
              <h3 className="font-bold">{t("lbl.social")}</h3>
              <ul className="list-reset items-center pt-3">
                <li>
                  <Link className="inline-block no-underline hover:text-black hover:underline py-1" to="#">Facebook</Link>
                </li>
                <li>
                  <Link className="inline-block no-underline hover:text-black hover:underline py-1" to="#">Twitter</Link>
                </li>
                <li>
                  <Link className="inline-block no-underline hover:text-black hover:underline py-1" to="#">Instagram</Link>
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