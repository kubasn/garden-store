import produce from "immer";
import { fetchCart } from "../components/utils/fetchLocalStorage";
import { Action } from "./actions";
import { actionType } from "./actionType";

interface CartType {
  id: number;
  imageUrl: string;
  category: string;
  description: string;
  price: string;
  title: string;
  qty: number;
}

interface StateType {
  show: boolean;
  items: CartType[] | null;
}

const cart = fetchCart();
const initialState: StateType = { show: false, items: cart };

const reducer = produce((state: StateType = initialState, action: Action) => {
  switch (action.type) {
    case actionType.SET_CART_SHOW:
      return {
        ...state,
        show: action.payload.show,
        items: action.payload.items,
      };

    default:
      return state;
  }
}, initialState);

export default reducer;
