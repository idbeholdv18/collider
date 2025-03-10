import { FC, ReactNode, useReducer } from "react";
import {
  SidebarContext,
  sidebarInitialState,
} from "../context/Sidebar.context";
import { sidebarReducer } from "../reducer/Sidebar.reducer";
import { DispatchSidebarContext } from "../context/DispatchSidebar.context";

export interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: FC<SidebarProviderProps> = (props) => {
  const [state, reduce] = useReducer(sidebarReducer, sidebarInitialState);
  return (
    <SidebarContext.Provider value={state}>
      <DispatchSidebarContext.Provider value={reduce}>
        {props.children}
      </DispatchSidebarContext.Provider>
    </SidebarContext.Provider>
  );
};
