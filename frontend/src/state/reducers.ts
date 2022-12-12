import { combineReducers } from "redux";
import userReducer from "./userReducer";
import itemsReducer from "./itemsReducer";
import cartReducer from "./cartReducer";

const reducer = combineReducers({
  user: userReducer,
  items: itemsReducer,
  cart: cartReducer,
});

export default reducer;
export type RootState = ReturnType<typeof reducer>;
