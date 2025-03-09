import { ReactNode } from "react";
import { NavbarProvider } from "./Navbar.provider";
import { NavbarBase, T_NavbarBase } from "./Navbar.Base";
import { NavbarLink, T_NavbarLink } from "./Navbar.Link";
import { NavbarLogo, T_NavbarLogo } from "./Navbar.Logo";
import { NavbarMenu, T_NavbarMenu } from "./Navbar.Menu";
import { NavbarToggle, T_NavbarToggle } from "./Navbar.Toggle";
import { NavbarContainer, T_NavbarContainer } from "./Navbar.Container";
import { NavbarNavigation, T_NavbarNavigation } from "./Navbar.Navigation";

interface NavbarProps {
  children: ReactNode;
}

type T_Navbar = React.FC<NavbarProps> & {
  Base: T_NavbarBase;
  Link: T_NavbarLink;
  Logo: T_NavbarLogo;
  Menu: T_NavbarMenu;
  Toggle: T_NavbarToggle;
  Container: T_NavbarContainer;
  Navigation: T_NavbarNavigation;
};

export const Navbar: T_Navbar = (props) => {
  return <NavbarProvider>{props.children}</NavbarProvider>;
};

Navbar.Base = NavbarBase;
Navbar.Link = NavbarLink;
Navbar.Logo = NavbarLogo;
Navbar.Menu = NavbarMenu;
Navbar.Toggle = NavbarToggle;
Navbar.Container = NavbarContainer;
Navbar.Navigation = NavbarNavigation;
