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
