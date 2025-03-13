import clsx from "clsx";
import { FC, ReactNode } from "react";

interface NavbarBaseProps {
  children: ReactNode;
  className?: string;
}

export const NavbarBase: FC<NavbarBaseProps> = (props) => {
  return (
    <div
      className={clsx(
        "flex justify-center w-screen h-14 z-50 fixed",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export type T_NavbarBase = typeof NavbarBase;
