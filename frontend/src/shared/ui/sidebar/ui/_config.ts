import { SidebarToggle, T_SidebarToggle } from "./Sidebar.Toggle";

export const sidebarComponents = {
  Toggle: SidebarToggle as T_SidebarToggle,
} as const;

export type T_SidebarComponents = typeof sidebarComponents;
