import { combineReducers } from "redux";
import userReducer from "./userReducer";
import itemsReducer from "./itemsReducer";

const reducer = combineReducers({
  user: userReducer,
  items: itemsReducer,
});

export default reducer;
export type RootState = ReturnType<typeof reducer>;
