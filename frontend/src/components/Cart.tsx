import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Cart = () => {
  return (
    <div className="fixed top-0 right-0 h-screen  w-full md:w-[23rem] bg-white drop-shadow-md flex flex-col z-[101] ">
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 1.5 }}>
          <MdKeyboardBackspace className="text-gray-700 text-3xl" />
        </motion.div>
        <p className="text-2xl font-semibold before:content-['Cart'] "> </p>
        <motion.p
          whileTap={{ scale: 1.2 }}
          className="flex  px-2 py-1 rounded-md text-rose-800 text-xl  "
        >
          <BsFillTrashFill className="relative right-1 top-[6px] text-lg" />{" "}
        </motion.p>
      </div>

      {/* botton */}
      <div className="w-full h-full rounded-t-[40px] border-y-[1px]  flex flex-col">
        <div className="w-full h-[340px] md:h-[42px] px-6 py-10 flex flex-col gap-3">
          {/* items */}
          <div className="w-full p-1 px-2 border-y-2 border-gray-400 flex gap-3 items-center rounded-md ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/gardenstore-7ffba.appspot.com/o/Images%2F1668589823421-tree1.png?alt=media&token=1febeb41-8619-4dd8-89d8-1cd1131b5d89"
              className="w-20 h-20 max-w-[60px] rounded-full object-contain"
            />
            <div className=" flex flex-col">
              <p className="text-lg text-gray-900 font-semibold">Nice tree</p>
              <p className="text-lg text-gray-900 font-bold">85$</p>
            </div>

            <div className="group flex items-center gap-2 ml-auto cursor-pointer bg-gray-200 px-2 rounded-xl">
              <motion.div whileTap={{ scale: 1.3 }} className="">
                <AiOutlineMinus className=" " />
              </motion.div>
              <p className=" py-[1px] px-2 border-[1px] text-[0.8rem] ">
                QTY: 1
              </p>
              <motion.div whileTap={{ scale: 1.3 }} className="">
                <AiOutlinePlus className=" " />
              </motion.div>
            </div>
          </div>
          <div className="w-full p-1 px-2 border-y-2 border-gray-400 flex gap-3 items-center rounded-md ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/gardenstore-7ffba.appspot.com/o/Images%2F1668589823421-tree1.png?alt=media&token=1febeb41-8619-4dd8-89d8-1cd1131b5d89"
              className="w-20 h-20 max-w-[60px] rounded-full object-contain"
            />
            <div className=" flex flex-col">
              <p className="text-lg text-gray-900 font-semibold">Nice tree</p>
              <p className="text-lg text-gray-900 font-bold">85$</p>
            </div>

            <div className="group flex items-center gap-2 ml-auto cursor-pointer bg-gray-200 px-2 rounded-xl">
              <motion.div whileTap={{ scale: 1.3 }} className="">
                <AiOutlineMinus className=" " />
              </motion.div>
              <p className=" py-[1px] px-2 border-[1px] text-[0.8rem] ">
                QTY: 1
              </p>
              <motion.div whileTap={{ scale: 1.3 }} className="">
                <AiOutlinePlus className=" " />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
