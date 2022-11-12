import { defaultMaxListeners } from "events";
import produce from "immer";
import { Action } from "./actions";
import { actionType } from "./actionType";
import { initialState, StateType } from "./initialState";

// interface State {
//   user: {} | null;
// }

// const initialState: State = {
//   user: null,
// };

const reducer = produce((state: StateType = initialState, action: Action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.payload.user,
      };

    default:
      return state;
  }
}, initialState);

export default reducer;
