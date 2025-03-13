import { E_NavbarAction } from "./NavbarAction.enum";

export type T_NavbarPayload = {
  [E_NavbarAction.Toggle]: undefined;
  [E_NavbarAction.Close]: undefined;
};
