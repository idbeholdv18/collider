import { useContext } from "react";
import { SidebarContext } from "../context/Sidebar.context";

export const useSidebar = () => {
  return useContext(SidebarContext);
};
