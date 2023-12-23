import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Cross from "~/assets/icons/cross.svg";
import SearchIcon from "~/assets/icons/search.svg";
import { setSearchQuery } from "~/store/api/redux/common";
import { useAppDispatch } from "~/utils/hooks";
import { useDebounce } from "~/utils/hooks/";

const SearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const debouncedValue = useDebounce(searchInput, 500);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    dispatch(setSearchQuery(debouncedValue));
  }, [debouncedValue]);

  return (
    <div className="relative my-8 container">
      <div className="absolute inset-y-0 left-4 flex items-center pl-3 pointer-events-none">
        <SearchIcon />
      </div>
      <input
        value={searchInput}
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder={t("lbl.search")}
        onChange={handleChange}
      />
      <button
        onClick={() => setSearchInput("")} // resets the searchQuery
        className="hover:text-black dark:hover:text-white absolute inset-y-0 right-4 flex items-center pr-3 cursor-pointer"
      >
        <Cross className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SearchBar;
