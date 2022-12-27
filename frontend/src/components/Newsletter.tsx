import React from "react";
const Newsletter = () => {
  return (
    <div className="w-full h-[300px] bg-white flex ">
      <div className=" my-auto ml-10 ">
        <h2 className="uppercase text-stone-800 font-bold text-2xl">
          Register to receive a 10% discount <br /> on your first order.{" "}
        </h2>
        <p className="font-semibold text-sm">
          Stay up to date with our new arrivals and receive a 10% discount.
        </p>
        <div className="mt-4 flex gap-2">
          <input
            placeholder="E-MAIL"
            type="text"
            className="border-2 p-1 placeholder:text-stone-800 border-stone-800"
          />
          <button className="border-2 border-stone-800 py-1 px-2">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
