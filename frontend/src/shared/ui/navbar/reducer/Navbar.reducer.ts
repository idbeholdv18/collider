import { E_NavbarAction } from "../actions/NavbarAction.enum";
import { T_NavbarActions } from "../actions/NavbarAction.type";
import { T_NavbarState } from "../types/NavbarState.type";

export function navbarReducer(
  state: T_NavbarState,
  action: T_NavbarActions
): T_NavbarState {
  switch (action.type) {
    case E_NavbarAction.Toggle:
      return { ...state, isOpen: !state.isOpen };
    case E_NavbarAction.Close:
      return { ...state, isOpen: false };
    default:
      return state;
  }
}
