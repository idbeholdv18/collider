import { createContext } from "react";
import { T_SidebarState } from "../types/SidebarState.type";

export const sidebarInitialState: T_SidebarState = {
  isOpen: false,
};

export const SidebarContext =
  createContext<T_SidebarState>(sidebarInitialState);
