import { FC, ReactNode, useReducer } from "react";
import {
  NavbarContext,
  navbarInitialState,
} from "../context/Navbar.context";
import { navbarReducer } from "../reducer/Navbar.reducer";
import { DispatchNavbarContext } from "../context/DispatchNavbar.context";

interface NavbarProviderProps {
  children: ReactNode;
}

export const NavbarProvider: FC<NavbarProviderProps> = (props) => {
  const [state, reduce] = useReducer(navbarReducer, navbarInitialState);
  return (
    <NavbarContext.Provider value={state}>
      <DispatchNavbarContext.Provider value={reduce}>
        {props.children}
      </DispatchNavbarContext.Provider>
    </NavbarContext.Provider>
  );
};
