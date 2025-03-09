import { FC, ReactNode } from "react";
import { E_NavbarAction } from "../actions/NavbarAction.enum";
import { useNavbarDispatch } from "../hooks/useNavbarDispatch";

interface NavbarToggleProps {
  children: ReactNode;
  className?: string;
}

export const NavbarToggle: FC<NavbarToggleProps> = (props) => {
  const dispatch = useNavbarDispatch();
  const onToggle = () => {
    dispatch({ type: E_NavbarAction.Toggle });
  };
  return (
    <button onClick={onToggle} className={props.className}>
      {props.children}
    </button>
  );
};

export type T_NavbarToggle = typeof NavbarToggle;
