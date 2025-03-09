import { useContext } from "react";
import { DispatchNavbarContext } from "../context/DispatchNavbar.context";

export const useNavbarDispatch = () => {
  return useContext(DispatchNavbarContext);
};
