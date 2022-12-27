import React, { useState, useEffect } from "react";
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
import { BiLogIn } from "react-icons/bi";
import { CgAdd } from "react-icons/cg";
import Cart from "./Cart";
import { AiFillHeart, AiOutlinePlus } from "react-icons/ai";

const Header: React.FC = () => {
  const userInfo: any = useTypedSelector((state) => state.user);
  const cart = useTypedSelector((state) => state.cart);
  //to fix !!!
  const [user, setUser] = useState<any | null>(userInfo);
  const [showMenu, setShowMenu] = useState(false);
  const [bg, setBg] = useState(false);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  //to fix !!!
  const logout = () => {
    setShowMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      payload: { user: null },
    });
    setUser(null);
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      payload: { ...cart, show: !cart.show },
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  }, []);

  const loginHandle = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(auth, provider);
      dispatch({
        type: actionType.SET_USER,
        payload: { user: providerData[0] },
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
      setUser(providerData[0]);
    } else {
      setShowMenu(!showMenu);
    }
  };

  return (
    <header
      className={`fixed z-50 w-screen p-3 px-4 md:p-8 md:px-16 ${
        bg && "bg-white p-1 md:p-1"
      } transition-all duration-200`}
    >
      {/* dekstop and tablet */}
      <div className="hidden md:flex w-full h-full  justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            className={`w-24  ${bg && "w-14"}  transition-all duration-200`}
            alt="logo"
          />
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center   text-gray-500 gap-8  font-semibold "
          >
            <Link to="/">
              <li className="text-lg cursor-pointer  hover:text-gray-900 ease-in-out transition-all ">
                Home
              </li>
            </Link>
            <Link to="/aboutUs">
              <li className="text-lg cursor-pointer hover:text-gray-900 ease-in-out transition-all">
                About us
              </li>
            </Link>
          </motion.ul>
          <div className="relative flex items-center">
            <FiShoppingCart
              className="text-gray-500 text-xl  cursor-pointer"
              onClick={() => showCart()}
            />
            {cart.items && (
              <div className="w-4 h-4 absolute top-[-10px] left-5 text-center rounded-full bg-red-800">
                <p className="text-xs text-white font-semibold">
                  {cart.items.length}
                </p>
              </div>
            )}
          </div>
          <div>
            <motion.img
              whileTap={{ scale: 0.8 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px]  drop-shadow-xl cursor-pointer rounded-full "
              alt="userprofile"
              onClick={() => loginHandle()}
            />
            {showMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-white shadow-xl rounded-xl absolute flex flex-col  right-16 top-28 text-left text-gray-700 "
              >
                {user && user.email == "sosinkuba@gmail.com" && (
                  <Link to="createItem">
                    <p
                      className="flex cursor-pointer transition-all hover:bg-gray-300 hover:rounded-t-xl w-full px-2"
                      onClick={() => setShowMenu(false)}
                    >
                      <AiOutlinePlus className="relative top-1 rotate-90" /> New
                      item
                    </p>
                  </Link>
                )}
                <Link to="wishlist">
                  <p
                    className="flex cursor-pointer transition-all hover:bg-gray-300 hover:rounded-t-xl w-full px-2"
                    onClick={() => setShowMenu(false)}
                  >
                    <AiFillHeart className="relative top-1" /> Wishlist
                  </p>
                </Link>
                <Link to="orders">
                  <p
                    className="flex cursor-pointer transition-all hover:bg-gray-300 hover:rounded-t-xl w-full px-2"
                    onClick={() => setShowMenu(false)}
                  >
                    My orders
                  </p>
                </Link>

                <p
                  onClick={logout}
                  className="flex cursor-pointer transition-all ease-in-out hover:rounded-b-xl hover:bg-gray-300 w-full px-2"
                >
                  <BiLogIn className="relative top-1 right-[2px]" /> Logout
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <div className="relative flex items-center">
          <FiShoppingCart
            className="text-gray-500 text-[40px]  cursor-pointer"
            onClick={() => showCart()}
          />
          {cart.items && (
            <div className="w-4 h-4 absolute top-[-10px] left-5 text-center rounded-full bg-red-800">
              <p className="text-xs text-white font-semibold">
                {cart.items.length}
              </p>
            </div>
          )}
        </div>

        <Link to="/" className="flex items-center gap-2">
          <img src={logo} className="w-24" alt="logo" />
        </Link>

        <div>
          <motion.img
            whileTap={{ scale: 0.8 }}
            src={user ? user.photoURL : Avatar}
            className="w-12 min-w-[40px] h-12 min-h-[40px]  drop-shadow-xl cursor-pointer rounded-full "
            alt="userprofile"
            onClick={() => loginHandle()}
          />
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-white shadow-xl rounded-xl absolute flex flex-col  right-4 top-24 text-left text-gray-700 "
            >
              {user && user.email == "sosinkuba@gmail.com" && (
                <Link to="createItem">
                  <p
                    className="flex cursor-pointer transition-all justify-center hover:bg-gray-300 text-gray-500 font-semibold text-lg  hover:rounded-t-xl w-full px-2 py-2"
                    onClick={() => setShowMenu(false)}
                  >
                    <AiOutlinePlus className="relative top-1 rotate-90" /> New
                    item
                  </p>
                </Link>
              )}
              <Link to="wishlist">
                <p
                  className="flex cursor-pointer transition-all justify-center hover:bg-gray-300 text-gray-500 font-semibold text-lg w-full px-2 py-2"
                  onClick={() => setShowMenu(false)}
                >
                  <AiFillHeart className="relative top-1" /> Wishlist
                </p>
              </Link>
              <Link to="orders">
                <p
                  className="flex cursor-pointer transition-all justify-center hover:bg-gray-300 text-gray-500 font-semibold text-lg w-full px-2 py-2"
                  onClick={() => setShowMenu(false)}
                >
                  My orders
                </p>
              </Link>
              <ul className="flex flex-col items-center  text-gray-500   font-semibold  ">
                <Link to="/">
                  <li
                    className="text-lg cursor-pointer  hover:bg-gray-300 ease-in-out transition-all text-center   w-full px-2 py-2"
                    onClick={() => setShowMenu(false)}
                  >
                    Home
                  </li>
                </Link>
                <li
                  className="text-lg cursor-pointer hover:bg-gray-300 ease-in-out transition-all text-center   w-full px-2 py-2"
                  onClick={() => setShowMenu(false)}
                >
                  About us
                </li>
              </ul>

              <p
                onClick={logout}
                className="flex justify-center cursor-pointer transition-all ease-in-out hover:rounded-b-xl bg-gray-200 hover:bg-gray-400 w-full  text-gray-500 font-semibold text-lg px-2 py-2 "
              >
                <BiLogIn className="relative top-1 right-[2px]" /> Logout
              </p>
            </motion.div>
          )}
        </div>
      </div>
      {cart.show && <Cart />}
    </header>
  );
};

export default Header;
