import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import logo from "../images/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";
import { saveOrders } from "./utils/functionsFirebase";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch } from "react-redux";
import { actionType } from "../state/actionType";

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
  const dispatch = useDispatch();
  const currency = "USD";
  const cart = useTypedSelector((state) => state.cart);
  const user = useTypedSelector((state) => state.user);
  const [selected, setSelected] = useState(false);
  const [items, setItems] = useState<cartType[]>([]);
  let delivery = cart.items && cart.items.length > 0 ? 1 : 0;
  const reduce = () => {
    let total = 0;
    if (cart.items != null)
      for (let val of cart.items) {
        total += parseFloat(val.price) * val.qty;
      }
    return total + delivery;
  };

  useEffect(() => {
    if (cart && cart.items !== null) setItems(cart.items);
  }, [cart]);

  const confirmOrder = () => {
    let date = new Date().toLocaleDateString();
    let orderItems: any = [];
    items.map((item) => {
      orderItems.push({
        id: item.id,
        price: item.price,
        title: item.title,
        qty: item.qty,
      });
    });
    let orderDetails = {
      userId: user.uid,
      date: date,
      subtotal: reduce(),
      orderItems: JSON.stringify(orderItems),
    };
    console.log(orderDetails);

    try {
      localStorage.removeItem("cart");
      dispatch({
        type: actionType.SET_CART_SHOW,
        payload: { ...cart, items: [] },
      });
      saveOrders(orderDetails);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-full min-h-[calc(100vh-22rem)] flex flex-col gap-10">
      <div className="flex mx-auto">
        <p className=" text-stone-800 text-3xl uppercase">Checkout</p>
      </div>
      <div className="flex flex-col md:flex-row  justify-between ">
        {/* items */}
        <div className="md:w-1/2 w-[95%] mx-auto  ">
          {items.map((item) => (
            <div className="flex gap-2 border-b-[1px] last-of-type:border-none border-stone-400 pb-4 items-center relative ">
              <img className="w-20" src={item.imageUrl} />
              <div>
                <p className="">{item.title}</p>
                <p className="text-[12px] text-stone-400">Qty: {item.qty}</p>
              </div>
              <p className="absolute right-2 bottom-2 text-stone-600">
                {item.price} $
              </p>
            </div>
          ))}
        </div>
        {/* order summary */}
        <div className=" bg-white mx-auto w-4/5 md:w-1/3">
          <div className="bg-gray-200 py-2 pl-2 uppercase font-semibold">
            <p>Order summary</p>
          </div>

          <div className="pl-2">
            <p className="flex justify-between">
              <span>Subtotal</span>
              <span className="mr-4">{reduce()} $</span>
            </p>
            <p className="flex justify-between">
              <span>Delivery</span>
              <span className="mr-4">{delivery} $</span>
            </p>
            <p className="flex justify-between mt-4 font-semibold ">
              <span>Estimated total</span>
              <span className="mr-4">{reduce()} $</span>
            </p>
          </div>
          <div className="w-4/5 h-[1px] bg-gray-200 my-4 m-auto"></div>
          {items && items.length > 0 ? (
            <div className="">
              <motion.button
                whileTap={{ scale: 1.1 }}
                onClick={() => setSelected(true)}
                className="w-4/5 m-auto flex py-1 justify-center border-[1px] text-white text-sm bg-sky-900"
              >
                TRADITIONAL PAYMENT
              </motion.button>
              <div className="flex items-center gap-2 w-[98%] m-auto ">
                <div className="w-4/5 h-[1px] bg-gray-200 my-4 m-auto"></div>
                <p className="text-gray-500">Or</p>
                <div className="w-4/5 h-[1px] bg-gray-200 my-4 m-auto"></div>
              </div>
              <div className="w-4/5 mt-2 mb-4 mx-auto relative z-[10]">
                <PayPalScriptProvider options={{ "client-id": "test" }}>
                  <PayPalButtons
                    className=" "
                    createOrder={(data, actions) => {
                      return actions.order
                        .create({
                          purchase_units: [
                            {
                              amount: {
                                currency_code: currency,
                                value: reduce().toString(),
                              },
                            },
                          ],
                        })
                        .then((orderId) => {
                          // Your code here after create the order
                          return orderId;
                        });
                    }}
                    onApprove={(data, actions) => {
                      confirmOrder();
                      return actions.order!.capture().then(function (details) {
                        alert("Transaction completed");
                      });
                    }}
                  />
                </PayPalScriptProvider>
              </div>
            </div>
          ) : (
            <div className="mb-4">
              <p className="text-center text-gray-500">
                {" "}
                Please add items to card
              </p>
            </div>
          )}
        </div>
      </div>
      {selected && (
        <AnimatePresence>
          <motion.div
            initial={{ x: 300, y: 100, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="absolute left-[20%] w-[60%] h-[40%] border-[1px] border-stone-300 bg-white"
          >
            <span
              onClick={() => setSelected(false)}
              className="absolute right-1 top-1"
            >
              <AiOutlinePlus className="rotate-45 text-2xl cursor-pointer text-rose-600" />
            </span>
            <p className="text-center mt-4 text-2xl  ">Payment</p>
            <div className=" h-[60%] flex flex-col gap-3 items-center justify-center">
              <p>
                Bank account: <b>412 421 5436 4563 234</b>
              </p>
              <p>
                Sum:<b> {reduce()}$</b>
              </p>
            </div>
            <motion.button
              whileTap={{ scale: 1.1 }}
              onClick={() => confirmOrder()}
              className="uppercase cursor-pointer w-1/3 m-auto flex py-3 justify-center border-[1px] text-white text-sm bg-sky-900"
            >
              confirm
            </motion.button>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Checkout;
