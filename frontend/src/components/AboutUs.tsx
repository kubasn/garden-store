import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import garden from "../images/garden.png";
import { motion } from "framer-motion";

const stores = [
  {
    name: "Gardena NY",
    location: "East Harlem, NY",
    tel: "412 543 654",
    email: "ny_store@gardena.com",
  },
  {
    name: "Gardena Chicago",
    location: "Maywood, Chicago",
    tel: "645 325 000",
    email: "chicago_store@gardena.com",
  },
  {
    name: "Gardena Nashville",
    location: "Midtown, Nashville",
    tel: "486 356 755",
    email: "nashville_store@gardena.com",
  },
];

const visible = { opacity: 1, x: 0, transition: { duration: 1.0 } };

const container = {
  hidden: { opacity: 0, x: -20 },
  visible,
};

const container1 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
};

const AboutUs = () => {
  return (
    <div className="h-full min-h-[calc(100vh-22rem)]">
      <div className="">
        <div className="flex flex-col  items-center capitalize">
          <h1 className="text-stone-700 text-2xl font-semibold">About us</h1>
          <div className="bg-stone-500 h-[2px] w-4/5 md:w-[200px] "></div>
        </div>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={container}
          className="w-4/5 md:w-1/2 text-center mx-auto mt-4"
        >
          Welcome to our garden store! We are a family-owned business with a
          passion for all things green. Our team has a combined experience of
          over 20 years in the gardening industry, and we are dedicated to
          providing our customers with high-quality products and expert advice.
          We offer a wide selection of plants, seeds, tools, and accessories for
          all your gardening needs. Whether you're a seasoned pro or just
          starting out, we have something for everyone. In addition to our
          physical store, we also have a vibrant online community where garden
          enthusiasts can connect and share tips and ideas. We are constantly
          updating our inventory and adding new products, so make sure to check
          back often. Thank you for choosing our garden store.{" "}
          <span className="inline-block font-semibold">
            {" "}
            We hope to see you in-store or online soon!{" "}
          </span>
        </motion.p>
      </div>
      <div className="mt-8">
        <div className="flex flex-col items-center text-stone-700">
          <h2 className="text-stone-700 text-xl font-semibold">Our stores</h2>
          <div className="h-[2px] w-4/5 md:w-[200px] bg-stone-500 "></div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-around mt-6 ">
          {stores.map((store) => (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container1}
              className="flex flex-col gap-3 w-[300px] ml-14 md:ml-24"
            >
              <p className="font-semibold">{store.name}</p>
              <div className="ml-4">
                <p className="flex gap-2">
                  <FiMapPin className="relative top-[2px]" />
                  {store.location}
                </p>
                <p className="flex gap-2">
                  <AiOutlineMail className="relative top-[4px]" />
                  {store.email}
                </p>
                <p className="flex gap-2">
                  <BsFillTelephoneFill className="relative top-[2px]" />
                  {store.tel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
