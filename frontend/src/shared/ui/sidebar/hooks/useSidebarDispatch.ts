import { useContext } from "react";
import { DispatchSidebarContext } from "../context/DispatchSidebar.context";

export const useSidebarDispatch = () => {
  return useContext(DispatchSidebarContext);
};
