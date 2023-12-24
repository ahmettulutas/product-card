import React, { /*  useState, */ useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { toggleTheme } from "~/store/api/redux/common";
import { useAppDispatch, useAppSelector } from "~/utils/hooks";

const DarkModeToggle = () => {
  const isDarkMode = useAppSelector((state) => state.common.isDarkTheme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  return (
    <button
      type="button"
      className={`z-[2] relative inline-block w-10 h-6 ${
        isDarkMode ? "bg-gray-500" : "bg-gray-200"
      } rounded-full shadow-inner transition duration-200 ease-in-out`}
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle dark mode"
    >
      <span
        className={`z-[2] absolute left-0 w-5 h-5 -translate-y-1/2 bg-white rounded-full shadow transform transition duration-200 ease-in-out ${
          isDarkMode ? "translate-x-5" : "translate-x-0"
        }`}
      />
      <FaSun className="absolute top-1/2 left-1/2 transform -translate-x-0 -translate-y-1/2 text-yellow-500" />
      <FaMoon
        className={
          "absolute top-1/2 left-1/2 transform -translate-x-4 -translate-y-1/2 text-yellow-500"
        }
      />
    </button>
  );
};

export default DarkModeToggle;
