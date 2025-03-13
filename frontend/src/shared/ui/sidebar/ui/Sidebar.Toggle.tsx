import clsx from "clsx";
import { FC, ReactNode } from "react";
import { useSidebarDispatch } from "../hooks/useSidebarDispatch";
import { E_SidebarAction } from "../actions/SidebarAction.enum";
import { useSidebar } from "../hooks/useSidebar";

interface SidebarToggleProps {
  className?: string;
  openIcon: ReactNode;
  closeIcon: ReactNode;
}

export const SidebarToggle: FC<SidebarToggleProps> = (props) => {
  const dispatchSidebar = useSidebarDispatch();
  const { isOpen } = useSidebar();
  const toggleSidebar = () => {
    dispatchSidebar({ type: E_SidebarAction.Toggle });
  };
  return (
    <button onClick={toggleSidebar} className={clsx("", props.className)}>
      {isOpen ? props.closeIcon : props.openIcon}
    </button>
  );
};

export type T_SidebarToggle = typeof SidebarToggle;
