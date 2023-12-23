import { PayloadAction } from "@reduxjs/toolkit";
import { CommonReducers } from "./types";

const actions = {
  toggleTheme: (state: CommonReducers) => {
    state.isDarkTheme = !state.isDarkTheme;
  },
  setSearchQuery: (state: CommonReducers, action: PayloadAction<string>) => {
    state.searchQuery = action.payload;
  },
};

export default actions;
