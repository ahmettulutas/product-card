import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "~/store/api/redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
