import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { actionType } from "../state/actionType";
import { saveItem } from "./utils/functionsFirebase";

interface wishListType {
  id: number;
  imageUrl: string;
  price: string;
  qty: number;
  title: string;
}

const Wishlist = () => {
  const [itemsList, setItemsList] = useState<[]>([]);
  const user = useTypedSelector((state) => state.user);

  const dispatch = useDispatch();
  const cart = useTypedSelector((state) => state.cart);
  const [items, setItems] = useState<any>([]);
  let newItems = JSON.parse(JSON.stringify(cart.items));

  const getWishlist = () => {
    try {
      let items = JSON.parse(localStorage.getItem("wishlist") as string);
      if (items && user && user.uid == items.userId) {
        setItemsList(items.wishItems);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWishlist();
  }, []);

  /////////////

  const addToCart = () => {
    if (items && items.length > 0) {
      dispatch({
        type: actionType.SET_CART_SHOW,
        payload: {
          ...cart,
          items: items,
        },
      });
      localStorage.setItem("cart", JSON.stringify(items));
    }
  };

  useEffect(() => {
    addToCart();
  }, [items]);

  const addItem = (elem: wishListType) => {
    let flag = 0;
    // item.
    newItems?.map((item: any) => {
      if (item.id === elem.id) {
        item.qty += 1;
        flag = 1;
      }
    });
    if (flag == 1) {
      if (cart.items && cart.items.length > 0) setItems(newItems);
    } else {
      setItems(
        cart.items && cart.items.length > 0 ? [...cart.items, elem] : [elem]
      );
    }
  };

  return (
    <div className="h-full min-h-[calc(100vh-11rem)]">
      <div>
        <p className="font-semibold tracking-wider text-3xl text-stone-800 text-center">
          Wishlist
        </p>
        <p className="text-center text-sm text-stone-500">
          {itemsList && itemsList.length} items on wishlist
        </p>
      </div>
      <div>
        {itemsList &&
          itemsList.map((item: wishListType) => {
            return (
              <div className="w-full flex flex-col">
                <div className="flex mb-2  ">
                  <img className="w-36 " src={item.imageUrl} alt="item" />
                  <div className="flex flex-col items-start justify-center w-full">
                    <p className="text-xl text-stone-700">{item.title}</p>
                    <p>{item.price} $</p>
                    <p
                      onClick={() => addItem(item)}
                      className=" underline cursor-pointer uppercase "
                    >
                      Add to bag
                    </p>
                  </div>
                </div>
                <span className="h-[1px] w-full bg-stone-700"></span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Wishlist;
