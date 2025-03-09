import clsx from "clsx";
import { FC, ReactNode } from "react";

interface NavbarLogoProps {
  className?: string;
  children: ReactNode;
}

export const NavbarLogo: FC<NavbarLogoProps> = (props) => {
  return <div className={clsx(props.className)}>{props.children}</div>;
};

export type T_NavbarLogo = typeof NavbarLogo;
