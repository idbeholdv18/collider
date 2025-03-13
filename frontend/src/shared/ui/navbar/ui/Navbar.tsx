import { ReactNode } from "react";
import { NavbarProvider } from "./Navbar.provider";
import { navbarComponents, T_NavbarComponents } from "./_config";

interface NavbarProps {
  children: ReactNode;
}

type T_Navbar = React.FC<NavbarProps> & T_NavbarComponents;

export const NavbarComponent: React.FC<NavbarProps> = (props) => {
  return <NavbarProvider>{props.children}</NavbarProvider>;
};

export const Navbar = Object.assign(
  NavbarComponent,
  navbarComponents
) as T_Navbar;
