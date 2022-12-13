interface StateType {
  providerId: string;
  uid: string;
  email: string;
  phoneNumber: string | null;
  photoURL: string;
}

export const fetchUser = () => {
  let user: StateType;

  user =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user") as string)
      : localStorage.clear();

  return user;
};

export const fetchCart = () => {
  let cart;

  cart =
    localStorage.getItem("cart") !== "undefined"
      ? JSON.parse(localStorage.getItem("cart") as string)
      : localStorage.clear();

  return cart;
};
