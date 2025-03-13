import clsx from "clsx";
import { FC, ReactNode } from "react";
import { useNavbar } from "../hooks/useNavbar";
import { Container } from "@/shared/ui/container";

interface NavbarMenuProps {
  children: ReactNode;
  className?: string;
}

export const NavbarMenu: FC<NavbarMenuProps> = (props) => {
  const { isOpen } = useNavbar();
  return (
    <div
      className={clsx(
        !isOpen && "max-lg:hidden",
        "max-lg:fixed max-lg:top-14 max-lg:left-0 max-lg:bottom-0 max-lg:w-screen max-lg:h-auto max-lg:overflow-scroll",
        props.className
      )}
    >
      <Container>{props.children}</Container>
    </div>
  );
};

export type T_NavbarMenu = typeof NavbarMenu;
