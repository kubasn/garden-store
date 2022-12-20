import React from "react";
import Delivery from "../images/delivery.png";
import HomeImg from "../images/homeImg.svg";
import { motion } from "framer-motion";

const Home = () => {
  const visible = { opacity: 1, y: 0, transition: { duration: 1.0 } };
  const visible1 = { opacity: 1, x: 0, transition: { duration: 1.0 } };

  const container = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };

  const container1 = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.0 } },
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 w-full" id="home">
      <div className="py-4 flex flex-1 flex-col items-center md:items-start justify-center gap-4 ">
        <div className="flex items-center  bg-green-700 p-2 gap-2 rounded-md">
          <p className="text-gray-50">Shipping in 24 hours !</p>
          <img
            className="w-10 rounded-full bg-white drop-shadow-xl"
            src={Delivery}
            alt="delivery"
          />
        </div>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={container}
          className="text-[2.4rem] lg:text-[4rem] font-bold tracking-wider text-center md:text-start text-gray-700"
        >
          The best plants & tools for your{" "}
          <span className="text-green-600 text-[2.6rem] lg:text-[4.2rem]">
            {" "}
            GARDEN{" "}
          </span>
        </motion.p>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={container1}
          className="text-base text-gray-700 text-center md:text-left md:w-[80%]"
        >
          We help realize your dreams about wonderful garden. Let's start with
          small things that can change the world, so you can enjoy the fresh air
          forever.
        </motion.p>

        <button className="bg-green-700 text-white tracking-wide  rounded-md py-2 w-full md:w-auto px-2 hover:shadow-lg transition-all ease-in-out duration-100">
          Order Now
        </button>
      </div>

      <div className="py-2 flex flex-1 items-center">
        <img
          className="w-[100%] md:w-auto mx-auto  md:ml-auto md:mr-0"
          src={HomeImg}
        ></img>
      </div>
    </section>
  );
};

export default Home;
