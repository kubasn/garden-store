import { defaultMaxListeners } from "events";
import produce from "immer";
import { fetchUser } from "../components/utils/fetchLocalStorage";
import { Action } from "./actions";
import { actionType } from "./actionType";

const user = fetchUser();

interface StateType {
  providerId: string;
  uid: string;
  email: string;
  phoneNumber: string | null;
  photoURL: string;
}

const initialState: StateType = user;

const reducer = produce((state: StateType = initialState, action: Action) => {
  switch (action.type) {
    case actionType.SET_USER:
      state = action.payload.user;
      return state;

    default:
      return state;
  }
}, initialState);

export default reducer;
