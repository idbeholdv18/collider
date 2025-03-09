import { ActionMap } from "@/shared/types/ActionMap.type";
import { T_NavbarPayload } from "./NavbarPayload.type";

export type T_NavbarActions =
  ActionMap<T_NavbarPayload>[keyof ActionMap<T_NavbarPayload>];
