import { ReactNode } from "react";
import { SidebarProvider } from "./Sidebar.provider";
import { sidebarComponents, T_SidebarComponents } from "./_config";

interface SidebarProps {
  children: ReactNode;
}
type T_Sidebar = React.FC<SidebarProps> & T_SidebarComponents;

export const SidebarComponent: T_Sidebar = (props) => {
  return <SidebarProvider>{props.children}</SidebarProvider>;
};

export const Sidebar = Object.assign(
  SidebarComponent,
  sidebarComponents
) as T_Sidebar;
