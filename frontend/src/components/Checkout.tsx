import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import logo from "../images/logo.png";
import { motion } from "framer-motion";

interface cartType {
  category: string;
  description: string;
  id: number;
  imageUrl: string;
  price: string;
  qty: number;
  title: string;
}

const Checkout = () => {
  const cart = useTypedSelector((state) => state.cart);
  const user = useTypedSelector((state) => state.user);
  const [items, setItems] = useState<cartType[]>([]);

  useEffect(() => {
    if (cart && cart.items !== null) setItems(cart.items);
  }, [cart]);

  return (
    <div className="h-full min-h-[calc(100vh-22rem)] flex flex-col gap-10">
      <div className="flex mx-auto">
        <p className=" text-stone-800 text-3xl uppercase">Checkout</p>
      </div>
      <div className="flex justify-between ">
        {/* items */}
        <div className="w-1/2 ">
          {items.map((item) => (
            <div className="flex gap-2 items-center relative">
              <img className="w-20" src={item.imageUrl} />
              <div>
                <p className="">{item.title}</p>
                <p className="text-[12px] text-stone-400">Qty: {item.qty}</p>
              </div>
              <p className="absolute right-0 bottom-0 text-stone-600">
                {item.price} $
              </p>
            </div>
          ))}
        </div>
        {/* order summary */}
        <div className=" bg-white w-1/3">
          <div className="bg-gray-200 py-2 pl-2 uppercase font-semibold">
            <p>Order summary</p>
          </div>

          <div className="pl-2">
            <p className="flex justify-between">
              <span>Subtotal</span>
              <span className="mr-4">560 $</span>
            </p>
            <p className="flex justify-between">
              <span>Delivery</span>
              <span className="mr-4">560 $</span>
            </p>
            <p className="flex justify-between mt-4 font-semibold ">
              <span>Estimated total</span>
              <span className="mr-4">560 $</span>
            </p>
          </div>
          <div className="w-4/5 h-[1px] bg-gray-200 my-4 m-auto"></div>
          <motion.button
            whileTap={{ scale: 1.1 }}
            className="w-4/5 m-auto flex py-1 justify-center border-[1px] text-white text-sm bg-sky-900"
          >
            TRADITIONAL PAYMENT
          </motion.button>
          <div className="flex items-center gap-2 w-[98%] m-auto ">
            <div className="w-4/5 h-[1px] bg-gray-200 my-4 m-auto"></div>
            <p className="text-gray-500">Or</p>
            <div className="w-4/5 h-[1px] bg-gray-200 my-4 m-auto"></div>
          </div>
          <motion.button
            whileTap={{ scale: 1.1 }}
            className=" flex border-[1px] border-black w-4/5 m-auto mb-4 rounded-sm"
          >
            <img src={logo} className="w-1/2 m-auto py-1  " alt="" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
