import { actionType } from "./actionType";

export interface SetUserAction {
  type: actionType.SET_USER;
  payload: {
    user: any;
  };
}

export interface SetItemsAction {
  type: actionType.SET_ITEMS;
  payload: {
    items: [] | null;
  };
}

export interface SetCartShowAction {
  type: actionType.SET_CART_SHOW;
  payload: {
    show: boolean;
    items: [] | null;
  };
}

export type Action = SetUserAction | SetItemsAction | SetCartShowAction;
