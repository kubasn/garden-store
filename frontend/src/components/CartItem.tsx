import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { actionType } from "../state/actionType";
import { useDispatch } from "react-redux";

interface CartItemProps {
  id: number;
  imageUrl: string;
  title: string;
  price: string;
  qty: number;
}
const CartItem: React.FC<CartItemProps> = ({
  id,
  imageUrl,
  title,
  price,
  qty,
}) => {
  const [itemQty, setItemQty] = useState<number>(qty);
  let cart = useTypedSelector((state) => state.cart);
  const [items, setItems] = useState<any>(cart.items);
  const dispatch = useDispatch();
  let newItems = JSON.parse(JSON.stringify(cart.items));

  const updateCart = () => {
    console.log(items);
    localStorage.setItem("cart", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CART_SHOW,
      payload: {
        ...cart,
        items: items,
      },
    });
  };

  useEffect(() => {
    updateCart();
  }, [items]);
  const changeQuantity = (sign: string, id: number) => {
    if (sign == "+") {
      newItems?.map((item: any, key: number) => {
        if (item.id == id) {
          item.qty += 1;
        }
      });
      setItemQty(itemQty + 1);
      setItems(newItems);
    }

    if (sign == "-" && itemQty > 0) {
      newItems?.map((item: any, key: number) => {
        if (item.id == id) {
          item.qty -= 1;
        }
      });
      setItemQty(itemQty - 1);
      setItems(newItems);
    }
  };

  return (
    <div
      id={String(id)}
      className="w-full p-1 px-2 border-y-2 border-gray-400 flex gap-3 items-center rounded-md "
    >
      <img
        src={imageUrl}
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
      />
      <div className=" flex flex-col">
        <p className="text-lg text-gray-900 font-semibold">{title}</p>
        <p className="text-lg text-gray-900 font-bold">
          {parseFloat(price) * itemQty}$
        </p>
      </div>

      <div className="group flex items-center gap-2 ml-auto cursor-pointer bg-gray-200 px-2 rounded-xl">
        {itemQty > 1 ? (
          <motion.div
            onClick={() => changeQuantity("-", id)}
            whileTap={{ scale: 1.3 }}
            className=""
          >
            <AiOutlineMinus className=" " />
          </motion.div>
        ) : (
          <AiOutlineMinus className="text-gray-400 " />
        )}
        <p className=" py-[1px] px-2 border-[1px] text-[0.8rem] ">
          QTY: {itemQty}
        </p>
        <motion.div
          onClick={() => changeQuantity("+", id)}
          whileTap={{ scale: 1.3 }}
          className=""
        >
          <AiOutlinePlus className=" " />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
