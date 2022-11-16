import { fetchUser } from "../components/utils/fetchLocalStorage";

const user = fetchUser();
console.log(user);

export interface StateType {
  user: {
    providerId: string;
    uid: string;
    email: string;
    phoneNumber: string | null;
    photoURL: string;
  };
  items: [] | null;
}

export const initialState: StateType = {
  user: user,
  items: null,
};
