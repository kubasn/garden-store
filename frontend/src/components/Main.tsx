import React, { useRef, useEffect } from "react";
import Delivery from "../images/delivery.png";
import Home from "./Home";
import { motion } from "framer-motion";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import Items from "./Items";
import { useTypedSelector } from "../hooks/use-typed-selector";
import Menu from "./Menu";
import Cart from "./Cart";

const Main = () => {
  const newItems = useTypedSelector((state) => state.items);
  const cart = useTypedSelector((state) => state.cart);

  const itemsRef = useRef<HTMLDivElement | null>(null);

  const scroll = (scrollOffset: any) => {
    if (itemsRef.current) {
      itemsRef.current.scrollLeft += scrollOffset;
    }
  };

  useEffect(() => {}, [cart.show]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <Home />
      <section className="w-full p-4 ">
        <div className="w-full flex items-center justify-between">
          <p
            className="text-2xl font-semibold  text-gray-700 relative before:absolute 
          before:w-full  before:h-[2px] before-left-0 before:bottom-[-6px]  
        before:bg-green-700  before:scale-x-90 before:origin-bottom-left"
          >
            List of our recommendations
          </p>
          <div className="hidden md:flex gap-x-6 items-center">
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="flex items-center justify-center text-white hover:text-slate-300 w-10 h-6 bg-green-700 hover:bg-green-900 transition-all duration-100 ease-in-out hover:shadow-lg  cursor-pointer rounded-md hover:rounded-lg"
              onClick={() => scroll(-200)}
            >
              <BsFillCaretLeftFill />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="flex items-center justify-center text-white hover:text-slate-300 w-10 h-6 bg-green-700 hover:bg-green-900 transition-all duration-100 ease-in-out hover:shadow-lg cursor-pointer rounded-md hover:rounded-lg"
              onClick={() => scroll(200)}
            >
              <BsFillCaretRightFill />
            </motion.div>
          </div>
        </div>
        <Items ref={itemsRef} data={newItems} />
      </section>

      <section className="w-full my-6 ">
        <Menu />
      </section>
      {/* {cart.show && <Cart />} */}
    </div>
  );
};

export default Main;
