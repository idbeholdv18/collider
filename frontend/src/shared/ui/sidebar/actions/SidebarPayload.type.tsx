import { E_SidebarAction } from "./SidebarAction.enum";

export type T_SidebarPayload = {
  [E_SidebarAction.Toggle]: undefined;
  [E_SidebarAction.Open]: undefined;
  [E_SidebarAction.Close]: undefined;
};
