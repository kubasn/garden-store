import React from "react";
import Delivery from "../images/delivery.png";
import Home from "./Home";

const Main = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <Home />
      <section className="w-full p-4 ">
        <div
          className="w-full flex items-center justify-between text-gray-700 relative before:absolute 
         before:content before:scale-x-[0] hover:before:scale-x-[1] before:h-1 before:bottom-0 
         before:left-0 before:bg-green-700 transition-all ease-in-out duration-1000"
        >
          <p className="text-2xl font-semibold">List of our items</p>
        </div>
      </section>
    </div>
  );
};

export default Main;
