import React, { useEffect, useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoMdPricetags } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { actionType } from "../state/actionType";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

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
  const dispatch = useDispatch();
  const cart = useTypedSelector((state) => state.cart);
  const user = useTypedSelector((state) => state.user);
  const [items, setItems] = useState<any>([]);
  const [whishlist, setWhishlist] = useState<boolean>(false);
  let newItems = JSON.parse(JSON.stringify(cart.items));

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

  const addToWishlist = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setWhishlist(!whishlist);
  };

  useEffect(() => {
    let local = JSON.parse(localStorage.getItem("wishlist") as string);
    if (whishlist == true) {
      let wishItem = {
        id,
        imageUrl,
        title,
        price,
      };
      let listToSave;
      //if there is not item with the same id
      if (
        local !== null &&
        !local.wishItems.some((item: any) => item.id == id)
      ) {
        listToSave = {
          userId: user.uid,
          wishItems: [...local.wishItems, wishItem],
        };
      } else {
        listToSave = {
          userId: user.uid,
          wishItems: [wishItem],
        };
      }
      localStorage.setItem("wishlist", JSON.stringify(listToSave));
    } else {
      if (
        local !== null &&
        local.wishItems.some((item: any) => item.id == id)
      ) {
        const updatedArray = local.wishItems.filter(
          (item: any) => item.id !== id
        );
        let listToSave = {
          userId: user.uid,
          wishItems: updatedArray,
        };
        localStorage.setItem("wishlist", JSON.stringify(listToSave));
      }
    }
  }, [whishlist]);

  const addItem = () => {
    let flag = 0;
    let newItem = {
      id,
      imageUrl,
      category,
      description,
      price,
      title,
      qty: 1,
    };
    newItems?.map((item: any) => {
      if (item.id === id) {
        item.qty += 1;
        flag = 1;
      }
    });
    if (flag == 1) {
      if (cart.items && cart.items.length > 0) setItems(newItems);
    } else {
      setItems(
        cart.items && cart.items.length > 0
          ? [...cart.items, newItem]
          : [newItem]
      );
    }
  };

  return (
    <div className="w-[80%] h-62 md:h-48  mb-7  md:w-[200px]  md:min-w-[200px] group hover:rounded-b-none    shadow-md bg-white hover:bg-stone-200 hover:shadow-xl rounded-md relative ">
      <div className="w-full flex flex-col items-center justify-center gap-y-1 md:gap-y-2 ">
        <img src={imageUrl} alt="item" className=" h-40 md:h-24 " />
        <div className="w-full px-1  ">
          <div className="flex text-xl  w-full flex-col md:gap-y-2">
            <p className="text-normal font-semibold  text-center  text-stone-600 px-2">
              {title}
            </p>
          </div>
        </div>
      </div>
      <motion.div
        whileTap={{ scale: 0.8 }}
        className="hidden md:block absolute top-2 right-2"
      >
        <button
          onClick={addToWishlist}
          className="bg-stone-700 hover:bg-stone-900  hover:shadow-xl p-2 text-white rounded-full"
        >
          {whishlist ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.8 }}
        className="absolute bottom-[0rem] z-[-10] w-full h-6 group-hover:z-10   group-hover:block transition-all group-hover:bottom-[-1.4rem]  duration-[500ms]"
      >
        <button
          onClick={addItem}
          className=" bg-stone-700 hover:bg-stone-900  hover:shadow-xl h-6 w-full text-white rounded-b-md "
        >
          <div className="flex justify-center gap-2">
            <FaShoppingBasket className="relative top-1" />
            <p className=" ">Add to cart</p>
          </div>
        </button>
      </motion.div>

      <motion.div
        whileTap={{ scale: 0.8 }}
        className=" md:hidden w-full flex   pb-2  "
      >
        <button
          onClick={addItem}
          className=" relative  mx-auto w-[90%] bg-stone-700 hover:bg-stone-900  hover:shadow-xl text-white rounded-full py-2"
        >
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
