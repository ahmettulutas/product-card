import React, { useState } from "react";
import DarkModeToggle from "../UIComponents/DarkModeToggle";
import MenuButton from "~/assets/icons/menu-button.svg";
import ToggleLang from "../UIComponents/ToggleLang";
import { useTranslation } from "react-i18next";
import Purse from "~/assets/icons/purse.svg";

import { Link } from "react-router-dom";
import { useAppSelector } from "~/utils/hooks";
import CartIcon from "../UIComponents/CartIcon";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const cart = useAppSelector((state) => state.cart.cart);

  return (
    <header className="w-full z-30 top-0 fixed dark:bg-gray-900 bg-white">
      <nav className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-6">
        <label
          className="cursor-pointer md:hidden block"
          onClick={() => setOpen(!open)}
        >
          <MenuButton className="text-gray-900 dark:text-yellow-500" />
        </label>
        {/* Mobile Menu */}
        <div
          className="overflow-hidden grid transition-all duration-300 w-full md:hidden"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <ul
            className={`transition-all duration-500 min-h-0 items-center justify-between text-base ${
              open ? "p-4" : "p-0"
            }`}
          >
            <li>
              <Link
                className="inline-block no-underline hover:text-black dark:hover:text-white hover:underline py-2 pr-4"
                to="/"
              >
                <p>{t("lbl.shop")}</p>
              </Link>
            </li>
            <li>
              <Link
                className="inline-block no-underline hover:text-black dark:hover:text-white hover:underline py-2 pr-4"
                to="#"
              >
                <p>{t("lbl.about")}</p>
              </Link>
            </li>
            <li>
              <Link
                className="md:hidden flex no-underline hover:text-black dark:hover:text-white hover:underline py-2 pr-4"
                to="/cart"
              >
                <p>{t("lbl.cart")}</p>
              </Link>
            </li>
            <li className="md:hidden">
              <ToggleLang />
            </li>
            <li className="md:hidden">
              <DarkModeToggle />
            </li>
          </ul>
        </div>
        {/* End of the Mobile Menu */}
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-between w-full" id="menu">
          <div className="flex gap-4">
            <li className="flex items-center justify-center gap-2 ">
              <Link
                className="no-underline hover:text-black dark:hover:text-white hover:underline"
                to="#"
              >
                <p>{t("lbl.about")}</p>
              </Link>
            </li>
            <li className=" flex items-center justify-center gap-2 ">
              <Link
                className="no-underline hover:text-black dark:hover:text-white hover:underline"
                to="/"
              >
                <p>{t("lbl.shop")}</p>
              </Link>
            </li>
          </div>
          <li className="inline-flex gap-2 items-center justify-center font-semibold text-xl">
            <Purse />
            <p>AHMTYOL</p>
          </li>
          <div className="flex gap-2">
            <li className="inline-flex items-center justify-center">
              <CartIcon count={cart.length} />
            </li>
            <li className="inline-flex items-center justify-center leading-6">
              <ToggleLang />
            </li>
            <li className="inline-flex items-center justify-center">
              <DarkModeToggle />
            </li>
          </div>
        </ul>
        {/* End of the Desktop Menu */}
      </nav>
    </header>
  );
};

export default Header;
