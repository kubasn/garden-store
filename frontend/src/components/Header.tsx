import React from "react";
import Avatar from "../images/avatar.png";
import logo from "../images/logo.svg";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link, useLinkClickHandler } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config.js";

const Header: React.FC = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const loginHandle = async () => {
    const {
      user: { refreshToken, providerData },
    } = await signInWithPopup(auth, provider);
    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;
    //     // The signed-in user info.
    //     const user = result.user;
    //     // ...
    //   }).catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //     // ...
    //   });
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
              src={Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px]  drop-shadow-xl cursor-pointer "
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
