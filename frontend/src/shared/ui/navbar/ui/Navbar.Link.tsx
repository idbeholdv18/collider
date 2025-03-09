import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useNavbarDispatch } from "../hooks/useNavbarDispatch";
import { E_NavbarAction } from "../actions/NavbarAction.enum";

interface NavbarLinkProps {
  children: ReactNode;
  className?: string;
  to: string;
}

export const NavbarLink: FC<NavbarLinkProps> = (props) => {
  const dispatch = useNavbarDispatch();
  const onNavigate = () => {
    dispatch({ type: E_NavbarAction.Close });
  };
  return (
    <NavLink
      className={({ isActive }: { isActive: boolean }) =>
        isActive ? "text-foreground-contranst" : "text-foreground-primary"
      }
      to={props.to}
      onClick={onNavigate}
    >
      {props.children}
    </NavLink>
  );
};

export type T_NavbarLink = typeof NavbarLink;
