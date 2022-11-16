import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoMdPricetags } from "react-icons/io";

const Item = () => {
  return (
    <div className="w-[90%] mx-auto mb-4    md:min-w-[250] md:w-[250px] h-auto shadow-md bg-white rounded-md relative">
      <div className="w-full flex flex-col items-center justify-center gap-y-4 ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/gardenstore-7ffba.appspot.com/o/Images%2F1668589823421-tree1.png?alt=media&token=1febeb41-8619-4dd8-89d8-1cd1131b5d89"
          alt="item"
          className="w-60"
        />
        <div className="w-full flex  justify-start ml-4 pb-2  ">
          <div className="flex flex-col gap-y-2">
            <p className="text-2xl text-stone-700 flex   ">
              {/* <IoMdPricetags className="relative top-2 text-base" /> */}
              500$
            </p>
            <p className="text-normal ml-2 text-stone-600">Title tila awd</p>
          </div>
        </div>
      </div>
      <motion.div
        whileTap={{ scale: 0.8 }}
        className="hidden md:block absolute top-2 right-2"
      >
        <button className="bg-stone-700 hover:bg-stone-900  hover:shadow-xl p-3 text-white rounded-full">
          <FaShoppingBasket />
        </button>
      </motion.div>

      <motion.div
        whileTap={{ scale: 0.8 }}
        className=" md:hidden w-full flex   pb-2  "
      >
        <button className=" relative  mx-auto w-[90%] bg-stone-700 hover:bg-stone-900  hover:shadow-xl text-white rounded-full py-2">
          <p className="w-full text-center">ADD TO CART</p>
        </button>
      </motion.div>
    </div>
  );
};

export default Item;
