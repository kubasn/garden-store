import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Cart, CreateItem, Header, Main } from "./components";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { getItems } from "./components/utils/functionsFirebase";
import { actionType } from "./state/actionType";
import Wishlist from "./components/Wishlist";
import Orders from "./components/Orders";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import NoMatch from "./components/NoMatch";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const dispatch = useDispatch();

  const fetchData = async () => {
    await getItems().then((data) => {
      console.log(data);
      dispatch({
        type: actionType.SET_ITEMS,
        payload: {
          items: data,
        },
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Components = (
    <Routes>
      <Route path="/createItem" element={<CreateItem />} />
      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );

  return (
    <AnimatePresence exitBeforeEnter>
      <div className=" w-screen h-auto flex flex-col bg-gray-100">
        <Header />
        <main className="mt-36 px-8 py-4 w-full">{Components}</main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
