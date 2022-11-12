import { defaultMaxListeners } from "events";
import { Action } from "./actions";
import { actionType } from "./actionType";

interface State {
  user: {} | null;
}

const initialState: State = {
  user: null,
};

const reducer = (state: State = initialState, action: Action) => {
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
};

export default reducer;
