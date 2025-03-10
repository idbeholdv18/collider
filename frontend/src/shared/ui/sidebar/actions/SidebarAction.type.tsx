import { ActionMap } from "@/shared/types/ActionMap.type";
import { T_SidebarPayload } from "./SidebarPayload.type";

export type T_SidebarActions =
  ActionMap<T_SidebarPayload>[keyof ActionMap<T_SidebarPayload>];
