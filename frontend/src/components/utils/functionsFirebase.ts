import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../../firebase.config";

export const saveItem = async (data: {}) => {
  await setDoc(doc(firestore, "items", `${Date.now()}`), data, { merge: true });
};

export const saveWishlist = async (data: {}) => {
  await setDoc(doc(firestore, "wishlist", `${Date.now()}`), data, {
    merge: true,
  });
};

export const getItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "items"), orderBy("id", "desc"))
  );
  //latest product will be at the top
  return items.docs.map((doc) => doc.data());
};

export const getWishlist = async () => {
  const items = await getDocs(
    query(collection(firestore, "wishlist"), orderBy("id", "desc"))
  );
  //latest product will be at the top
  return items.docs.map((doc) => doc.data());
};
