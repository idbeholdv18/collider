import { NavbarBase, T_NavbarBase } from "./Navbar.Base";
import { NavbarLink, T_NavbarLink } from "./Navbar.Link";
import { NavbarLogo, T_NavbarLogo } from "./Navbar.Logo";
import { NavbarMenu, T_NavbarMenu } from "./Navbar.Menu";
import { NavbarToggle, T_NavbarToggle } from "./Navbar.Toggle";
import { NavbarContainer, T_NavbarContainer } from "./Navbar.Container";
import { NavbarNavigation, T_NavbarNavigation } from "./Navbar.Navigation";

export const navbarComponents = {
  Base: NavbarBase as T_NavbarBase,
  Link: NavbarLink as T_NavbarLink,
  Logo: NavbarLogo as T_NavbarLogo,
  Menu: NavbarMenu as T_NavbarMenu,
  Toggle: NavbarToggle as T_NavbarToggle,
  Container: NavbarContainer as T_NavbarContainer,
  Navigation: NavbarNavigation as T_NavbarNavigation,
} as const;

export type T_NavbarComponents = typeof navbarComponents;
