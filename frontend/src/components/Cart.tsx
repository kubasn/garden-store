import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { BsFillTrashFill } from "react-icons/bs";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { useDispatch } from "react-redux";
import { actionType } from "../state/actionType";
import CartItem from "./CartItem";
// import CartGif from '../images/cart.gif'

const Cart: React.FC = () => {
  const cart = useTypedSelector((state) => state.cart);
  const user = useTypedSelector((state) => state.user);

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      payload: { ...cart, show: !cart.show },
    });
  };

  const reduce = () => {
    let total = 0;
    if (cart.items != null)
      for (let val of cart.items) {
        total += parseFloat(val.price) * val.qty;
      }
    return total;
  };

  const emptyCart = () => {
    localStorage.removeItem("cart");
    dispatch({
      type: actionType.SET_CART_SHOW,
      payload: { ...cart, items: [] },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 h-screen  w-full md:w-[23rem] bg-white drop-shadow-md flex flex-col z-[101] "
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 1.5 }}>
          <MdKeyboardBackspace
            className="text-gray-700 text-3xl"
            onClick={closeCart}
          />
        </motion.div>
        <p className="text-2xl font-semibold before:content-['Cart'] "> </p>
        <motion.p
          whileTap={{ scale: 1.2 }}
          className="flex  px-2 py-1 rounded-md text-rose-800 text-xl  "
        >
          <BsFillTrashFill
            onClick={emptyCart}
            className="relative right-1 top-[6px] text-lg"
          />{" "}
        </motion.p>
      </div>

      {/* botton */}
      {cart.items && cart.items!.length ? (
        <>
          <div className="w-full h-full rounded-t-[40px] border-y-[1px]  flex flex-col">
            <div className="w-full h-[340px] md:h-[42px] px-6 py-10 flex flex-col gap-3">
              {/* items */}
              {cart.items?.map((item) => {
                return (
                  <div className="w-full flex justify-center">
                    <CartItem {...item} />
                  </div>
                );
              })}
            </div>
            {/* submit */}
          </div>
          <div className="bg-gray-200 text-gray-700 py-2 w-full text-center">
            ORDER SUMMARY
          </div>
          <div className="w-full flex-1 bg-gray-50  flex flex-col items-center justify-evenly px-8 pb-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-500 text-lg">Subtotal</p>
              <p className="text-gray-500 text-lg">{reduce()}$</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-500 text-lg">Delivery cost:</p>
              <p className="text-gray-500 text-lg">4.5$</p>
            </div>
            <div className="w-full border-b border-gray-600 my-2"></div>

            <div className="w-full flex items-center justify-between">
              <p className="text-gray-500 text-lg">Estimated total:</p>
              <p className="text-gray-500 text-lg">13$</p>
            </div>

            {user ? (
              <motion.button
                whileTap={{ scale: 1.3 }}
                className="w-3/4 p-2 rounded-md bg-stone-700 hover:bg-stone-800 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out"
              >
                Proceed to checkout
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 1.3 }}
                className="w-3/4 p-2 rounded-md bg-stone-700 hover:bg-stone-800 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out"
              >
                Sign In to checkout
              </motion.button>
            )}
          </div>
        </>
      ) : (
        <div>
          <img
            className="w-60 mx-auto pt-24"
            src={require("../images/cart.gif")}
            alt="loading..."
          />
          <p className="text-center text-2xl text-stone-700">Cart is empty</p>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
