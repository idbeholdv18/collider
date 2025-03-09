import { createContext } from "react";
import { T_NavbarState } from "../types/NavbarState.type";

export const navbarInitialState: T_NavbarState = {
  isOpen: false,
};

export const NavbarContext = createContext<T_NavbarState>(navbarInitialState);
