import produce from "immer";
import { Action } from "./actions";
import { actionType } from "./actionType";
// import { initialState, StateType } from "./initialState";

// interface StateType {
//   items: [] | null;
// }

const initialState: [] | null = null;

const reducer = produce((state: [] | null = initialState, action: Action) => {
  switch (action.type) {
    case actionType.SET_ITEMS:
      state = action.payload.items;
      // state = action.payload.items;
      return state;

    default:
      return state;
  }
}, initialState);

export default reducer;
