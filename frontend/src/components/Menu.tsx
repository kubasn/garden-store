import React from "react";
import { categories } from "../backend";
import {
  GiGardeningShears,
  GiButterflyFlower,
  GiCandleLight,
} from "react-icons/gi";
import { TbTrees } from "react-icons/tb";

const Menu = () => {
  const catIcons = {
    tools: <GiGardeningShears className=" text-gray-700 text-[50px]   " />,
    gardenPlants: <TbTrees className=" text-gray-700 text-[50px]   " />,
    indoorPlants: (
      <GiButterflyFlower className=" text-gray-700 text-[50px]   " />
    ),
    accessories: <GiCandleLight className=" text-gray-700 text-[50px]   " />,
  };

  //   Object.values()

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p
        className="text-2xl  font-semibold  text-gray-700 relative before:absolute 
  before:w-full  before:h-[3px]  before:bottom-[-6px]  
before:bg-green-700  before:scale-x-[.8]"
      >
        Products
      </p>
      <div className="w-full flex justify-center gap-x-2 my-8">
        {categories &&
          categories.map((category) => {
            type ObjectKey = keyof typeof catIcons;
            const key = category.urlParamName as ObjectKey;
            return (
              <div className="bg-green-700 w-40 h-32 rounded-md flex py-2   flex-col items-center justify-center ">
                <span className="flex w-14 h-14 justify-center items-center bg-white rounded-full p-3">
                  {catIcons[key]}
                </span>
                <p className="text-center text-stone-200">{category.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Menu;
