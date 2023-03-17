import { useDispatch } from "react-redux";
import type { AppDispatch } from "~/store/api/redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
