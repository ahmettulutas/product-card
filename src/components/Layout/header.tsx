import React, { useState } from "react";
import DarkModeToggle from "../UIComponents/DarkModeToggle";
import MenuButton from "~/assets/icons/menu-button.svg";
import ToggleLang from "../UIComponents/ToggleLang";
import { useTranslation } from "react-i18next";
import Purse from "~/assets/icons/purse.svg";
import Cart from "~/assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { useAppSelector } from "~/utils/hooks";

const Header:React.FC = () => {

  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const cart = useAppSelector(state => state.cart.cart);
  return (
    <header className="w-full z-30 top-0">
      <nav className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <label className="cursor-pointer md:hidden block" onClick={() => setOpen(!open)}>
          <MenuButton className="fill-current text-gray-900 dark:text-yellow-500"/>
        </label>
        <div className={`${open ? "block" : "hidden"} md:flex md:items-center md:w-auto w-full order-3 md:order-1`} id="menu">
          <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0">
            <li><Link className="inline-block no-underline hover:text-black dark:hover:text-white hover:underline py-2 pr-4" to="/">{t("lbl.shop")}</Link></li>
            <li><Link className="inline-block no-underline hover:text-black dark:hover:text-white hover:underline py-2 pr-4" to="#">{t("lbl.about")}</Link></li>
            <li>
              <Link className="block no-underline hover:text-black md:hidden" to="/cart">
                <Cart className="fill-current hover:text-black"/>
              </Link>
            </li>
          </ul>
        </div>

        <div className="order-1 md:order-2">
          <Link className="flex items-center tracking-wide no-underline font-bold text-xl" to="#">
            <Purse className="fill-current mr-2" />
            AHMTYOL
          </Link>
        </div>

        <div className="order-2 md:order-3 flex items-center" id="nav-content">
          <Link className="pr-2 no-underline hover:text-black dark:hover:text-white hidden md:inline-block relative" to="/cart">
            <span className="bg-yellow-500 text-sm rounded-xl p-1 py-0.5 left-4 absolute bottom-3 dark:bg-white dark:text-black">{cart.length}</span>
            <Cart className="fill-current"/>
          </Link>
          <ToggleLang />
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;