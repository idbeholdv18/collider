import { E_SidebarAction } from "../actions/SidebarAction.enum";
import { T_SidebarActions } from "../actions/SidebarAction.type";
import { T_SidebarState } from "../types/SidebarState.type";

export function sidebarReducer(
  state: T_SidebarState,
  action: T_SidebarActions
): T_SidebarState {
  switch (action.type) {
    case E_SidebarAction.Open:
      return { ...state, isOpen: true };
    case E_SidebarAction.Close:
      return { ...state, isOpen: false };
    case E_SidebarAction.Toggle:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}
