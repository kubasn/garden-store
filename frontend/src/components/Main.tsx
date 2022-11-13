import React from "react";
import Delivery from "../images/delivery.png";

const Main = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="py-4 flex flex-1 flex-col items-start md:items-center justify-center gap-4 ">
        <div className="flex items-center bg-green-700 p-2 gap-2 rounded-md">
          <p className="text-gray-50">Shipping in 24 hours !</p>
          <img
            className="w-10 rounded-full bg-white drop-shadow-xl"
            src={Delivery}
            alt="delivery"
          />
        </div>
        <p className="text-[2.4rem] font-bold tracking-wider text-gray-700">
          The best plants & tools for your{" "}
          <span className="text-green-600 text-[2.6rem]"> GARDEN </span>
        </p>
        <p className="text-base text-gray-700 text-center md:text-left">
          We help realize your dreams about wonderful garden. Let's start with
          small things that can change the world, so you can enjoy the fresh air
          forever.
        </p>

        <button className="bg-green-700 text-white tracking-wide  rounded-md py-2 w-full hover:shadow-lg transition-all ease-in-out duration-100">
          Order Now
        </button>
      </div>

      <div className="py-4 bg-blue-400 flex-1"></div>
    </div>
  );
};

export default Main;
