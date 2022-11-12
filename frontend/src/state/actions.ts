import { actionType } from "./actionType";
import { StateType } from "./initialState";

export interface SetUserAction {
  type: actionType.SET_USER;
  payload: {
    user: StateType;
  };
}

export type Action = SetUserAction;
