import { createContext, Dispatch } from "react";
import { T_NavbarActions } from "../actions/NavbarAction.type";

export const dispatchNavbarInitialState: Dispatch<T_NavbarActions> = () => {};

export const DispatchNavbarContext = createContext<Dispatch<T_NavbarActions>>(
  dispatchNavbarInitialState
);
