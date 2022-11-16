import { actionType } from "./actionType";
import { StateType } from "./initialState";

export interface SetUserAction {
  type: actionType.SET_USER;
  payload: {
    user: StateType;
  };
}

export interface SetItemsAction {
  type: actionType.SET_ITEMS;
  payload: {
    items: StateType;
  };
}

export type Action = SetUserAction | SetItemsAction;
