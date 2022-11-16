import React from "react";
import Delivery from "../images/delivery.png";
import Home from "./Home";
import { motion } from "framer-motion";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import Items from "./Items";
import { useTypedSelector } from "../hooks/use-typed-selector";

const Main = () => {
  const newItems = useTypedSelector((state) => state.items);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <Home />
      <section className="w-full p-4 ">
        <div className="w-full flex items-center justify-between">
          <p
            className="text-2xl font-semibold  text-gray-700 relative before:absolute 
          before:w-full before:scale-x-0 before:h-[2px] before-left-0 before:bottom-[-6px]  before:transition-transform 
        before:bg-green-700 ease-in-out before:duration-1000 origin-[0%,50%] hover:before:scale-x-100 before:origin-bottom-left"
          >
            List of our items
          </p>
          <div className="hidden md:flex gap-x-6 items-center">
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="flex items-center justify-center text-white hover:text-slate-300 w-10 h-6 bg-green-700 hover:bg-green-900 transition-all duration-100 ease-in-out hover:shadow-lg  cursor-pointer rounded-md hover:rounded-lg"
            >
              <BsFillCaretLeftFill />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="flex items-center justify-center text-white hover:text-slate-300 w-10 h-6 bg-green-700 hover:bg-green-900 transition-all duration-100 ease-in-out hover:shadow-lg cursor-pointer rounded-md hover:rounded-lg"
            >
              <BsFillCaretRightFill />
            </motion.div>
          </div>
        </div>
        <Items data={newItems} />
      </section>
    </div>
  );
};

export default Main;
