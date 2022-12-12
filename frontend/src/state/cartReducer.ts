import produce from "immer";
import { Action } from "./actions";
import { actionType } from "./actionType";

interface StateType {
  show: boolean;
  items: [] | null;
}

const initialState: StateType = { show: false, items: null };

const reducer = produce((state: StateType = initialState, action: Action) => {
  switch (action.type) {
    case actionType.SET_CART_SHOW:
      return { ...state, items: action.payload.items };

    default:
      return state;
  }
}, initialState);

export default reducer;
