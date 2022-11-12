import React, { useState } from "react";
import Avatar from "../images/avatar.png";
import logo from "../images/logo.svg";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link, useLinkClickHandler } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config.js";
import { useDispatch } from "react-redux";
import { actionType } from "../state/actionType";
import { useTypedSelector } from "../hooks/use-typed-selector";

const Header: React.FC = () => {
  const userInfo = useTypedSelector((state) => state.user);
  const [user, setUser] = useState<any | null>(userInfo);
  console.log(user);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const loginHandle = async () => {
    const {
      user: { refreshToken, providerData },
    } = await signInWithPopup(auth, provider);
    console.log(providerData);
    dispatch({ type: actionType.SET_USER, payload: { user: providerData[0] } });
    localStorage.setItem("user", JSON.stringify(providerData[0]));
    setUser(providerData[0]);
  };

  return (
    <header className="fixed z-50 w-screen  p-8 px-16">
      {/* dekstop and tablet */}
      <div className="hidden md:flex w-full h-full  justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} className="w-24" alt="logo" />
          {/* <p className="text-gray-700 text-xl font-bond">Gardena</p> */}
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center   text-gray-500 gap-8  font-semibold ">
            <li className="text-lg cursor-pointer  hover:text-gray-900 ease-in-out transition-all ">
              Home
            </li>
            <li className="text-lg cursor-pointer hover:text-gray-900 ease-in-out transition-all">
              Menu
            </li>
            <li className="text-lg cursor-pointer hover:text-gray-900 ease-in-out transition-all">
              About us
            </li>
          </ul>
          <div className="relative flex items-center">
            <FiShoppingCart className="text-gray-500 text-xl  cursor-pointer" />
            <div className="w-4 h-4 absolute top-[-10px] left-5 text-center rounded-full bg-red-800">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <div>
            <motion.img
              whileTap={{ scale: 0.8 }}
              src={user ? user.user.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px]  drop-shadow-xl cursor-pointer rounded-full "
              alt="userprofile"
              onClick={() => loginHandle()}
            />
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
