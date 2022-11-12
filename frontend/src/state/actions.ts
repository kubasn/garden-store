import { actionType } from "./actionType";

export interface SetUserAction {
  type: actionType.SET_USER;
  payload: {
    user: {};
  };
}

export type Action = SetUserAction;
