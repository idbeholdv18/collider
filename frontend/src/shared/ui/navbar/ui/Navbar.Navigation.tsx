import clsx from "clsx";
import { FC, ReactNode } from "react";

interface NavbarNavigationProps {
  children: ReactNode;
  className?: string;
}

export const NavbarNavigation: FC<NavbarNavigationProps> = (props) => {
  return <div className={clsx("", props.className)}>{props.children}</div>;
};

export type T_NavbarNavigation = typeof NavbarNavigation;
