import { createContext, Dispatch } from "react";
import { T_SidebarActions } from "../actions/SidebarAction.type";

export const dispatchSidebarInitialState: Dispatch<T_SidebarActions> = () => {};

export const DispatchSidebarContext = createContext<Dispatch<T_SidebarActions>>(
  dispatchSidebarInitialState
);
