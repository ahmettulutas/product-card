import React, { useState } from "react";
import DarkModeToggle from "../UIComponents/DarkModeToggle";
import MenuButton from "~/assets/icons/menu-button.svg";
import ToggleLang from "../UIComponents/ToggleLang";
import { useTranslation } from "react-i18next";
import Purse from "~/assets/icons/purse.svg";
import Cart from "~/assets/icons/cart.svg";
import About from "~/assets/icons/about.svg";
import { Link } from "react-router-dom";
import { useAppSelector } from "~/utils/hooks";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const cart = useAppSelector((state) => state.cart.cart);
  return (
    <header className="w-full z-30 top-0 fixed dark:bg-gray-900 bg-white">
      <nav className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3 tracking-wide">
        <label
          className="cursor-pointer md:hidden block"
          onClick={() => setOpen(!open)}
        >
          <MenuButton className="fill-current text-gray-900 dark:text-yellow-500" />
        </label>
        <div
          className="overflow-hidden grid transition-all duration-300 w-full"
          style={
            open ? { gridTemplateRows: "1fr" } : { gridTemplateRows: "0fr" }
          }
        >
          <ul className="min-h-0 items-center justify-between text-base pt-4 md:pt-0">
            <li>
              <Link
                className="inline-block no-underline hover:text-black dark:hover:text-white hover:underline py-2 pr-4"
                to="/"
              >
                {t("lbl.shop")}
              </Link>
            </li>
            <li>
              <Link
                className="inline-block no-underline hover:text-black dark:hover:text-white hover:underline py-2 pr-4"
                to="#"
              >
                {t("lbl.about")}
              </Link>
            </li>
            <li>
              <Link
                className="md:hidden flex no-underline hover:text-black dark:hover:text-white hover:underline py-2 pr-4"
                to="/cart"
              >
                <Cart className="fill-current hover:text-black" />
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
        <ul className="hidden md:flex justify-between w-full" id="menu">
          <div className="flex gap-2">
            <li className="flex items-center justify-center gap-2 ">
              <About className="fill-current hover:text-black" />
              <Link
                className="no-underline hover:text-black dark:hover:text-white hover:underline"
                to="#"
              >
                <p>{t("lbl.about")}</p>
              </Link>
            </li>
            <li className=" flex items-center justify-center gap-2 ">
              <Cart className="fill-current hover:text-black" />
              <Link
                className="no-underline hover:text-black dark:hover:text-white hover:underline"
                to="/cart"
              >
                <p>{t("lbl.cart")}</p>
              </Link>
            </li>
          </div>
          <li className="inline-flex items-center justify-center">
            <Link
              className="flex items-center  no-underline font-bold text-xl"
              to="#"
            >
              <Purse className="fill-current mr-2" />
              AHMTYOL
            </Link>
          </li>
          <div className="flex gap-2">
            <li className="inline-flex items-center justify-center">
              <Link
                className="inline-flex items-center justify-center pr-2 no-underline hover:text-black dark:hover:text-white relative"
                to="/cart"
              >
                <span className="bg-yellow-500 text-sm rounded-full p-1 py-0.5 left-4 absolute bottom-3 dark:bg-white dark:text-black w-6 h-6 text-center">
                  {cart.length}
                </span>
                <Cart className="fill-current" />
              </Link>
            </li>
            <li className="leading-6 inline-flex items-center justify-center">
              <ToggleLang />
            </li>
            <li className="inline-flex items-center justify-center">
              <DarkModeToggle />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
