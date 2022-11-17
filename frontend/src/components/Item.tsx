import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoMdPricetags } from "react-icons/io";

interface ItemProps {
  id: number;
  imageUrl: string;
  category: string;
  description: string;
  price: string;
  title: string;
}

const Item: React.FC<ItemProps> = ({
  id,
  imageUrl,
  category,
  description,
  price,
  title,
}) => {
  console.log(id);
  return (
    <div className="w-[80%] h-62 md:h-48 mx-auto mb-4  md:w-[200px]  md:min-w-[200px]   shadow-md bg-white hover:bg-stone-200 hover:shadow-xl rounded-md relative ">
      <div className="w-full flex flex-col items-center justify-center gap-y-1 md:gap-y-2 ">
        <img src={imageUrl} alt="item" className=" h-40 md:h-24 " />
        <div className="w-full px-1  ">
          <div className="flex text-xl items-center md:items-end w-full flex-col md:gap-y-2">
            <p className="text-normal font-bold text-right  text-stone-600 px-2">
              {title}
            </p>
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

      <p className="text-xl text-stone-700 flex absolute top-0 right-1 md:top-auto   md:bottom-1 md:right-1  items-center   ">
        {/* <IoMdPricetags className="relative top-2 text-base" /> */}
        {price}
        <span className="text-green-700 text-sm ">$</span>
      </p>
    </div>
  );
};

export default Item;
