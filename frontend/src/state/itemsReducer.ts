import produce from "immer";
import { Action } from "./actions";
import { actionType } from "./actionType";
import { initialState, StateType } from "./initialState";

const reducer = produce((state: StateType = initialState, action: Action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
}, initialState);

export default reducer;
