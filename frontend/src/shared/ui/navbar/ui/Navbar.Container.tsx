import clsx from "clsx";
import { FC, ReactNode } from "react";
import { Container } from "@/shared/ui/container";

interface NavbarContainerProps {
  children: ReactNode;
  className?: string;
}

export const NavbarContainer: FC<NavbarContainerProps> = (props) => {
  return (
    <Container
      className={clsx("flex justify-between items-center", props.className)}
    >
      {props.children}
    </Container>
  );
};

export type T_NavbarContainer = typeof NavbarContainer;
