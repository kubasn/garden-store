import React from "react";
import Avatar from "../images/avatar.png";
import { FiShoppingCart } from "react-icons/fi";

const Header: React.FC = () => {
  return (
    <header className="fixed z-50 w-screen  p-6 px-16">
      {/* dekstop and tablet */}
      <div className="hidden md:flex w-full h-full  justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={Avatar} className="w-10 object-cover" alt="logo" />
          <p className="text-gray-700 text-xl font-bond">Gardena</p>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center text-gray-500 gap-8  font-semibold ">
            <li className="text-base cursor-pointer hover:text-gray-900 ease-in-out transition-all ">
              Home
            </li>
            <li className="text-base cursor-pointer hover:text-gray-900 ease-in-out transition-all">
              Menu
            </li>
            <li className="text-base cursor-pointer hover:text-gray-900 ease-in-out transition-all">
              About us
            </li>
          </ul>
          <div className="relative flex items-center">
            <FiShoppingCart className="text-gray-500 text-xl  cursor-pointer" />
            <div className="w-4 h-4 absolute top-[-10px] left-5 text-center rounded-full bg-red-800">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <img
            src={Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px]  drop-shadow-xl "
            alt="userprofile"
          />
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
