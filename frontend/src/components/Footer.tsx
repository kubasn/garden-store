import React from "react";
import { BsFacebook, BsInstagram, BsSnapchat, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-[11rem] bg-stone-800 flex flex-col">
      <div className="flex gap-6 m-auto text-4xl text-white">
        <BsFacebook className="hover:text-blue-800 cursor-pointer" />
        <BsInstagram className="hover:text-rose-300 cursor-pointer" />
        <BsSnapchat className="hover:text-yellow-300 cursor-pointer" />
        <BsYoutube className="hover:text-rose-700 cursor-pointer" />
      </div>
      <span className="h-[1px] w-full bg-stone-100"></span>
      <div className="m-auto text-white">
        <p>© COPYRIGHT 2022 GARDENA STORE</p>
      </div>
    </div>
  );
};

export default Footer;
