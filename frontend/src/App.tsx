import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { CreateItem, Header, Main } from "./components";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { getItems } from "./components/utils/functionsFirebase";
import { actionType } from "./state/actionType";

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
      <Route path="/" element={<Main />} />
      <Route path="/createItem" element={<CreateItem />} />
    </Routes>
  );

  return (
    <AnimatePresence exitBeforeEnter>
      <div className=" w-screen h-auto flex flex-col bg-gray-100">
        <Header />
        <main className="mt-36 px-8 py-4 w-full">{Components}</main>
      </div>
    </AnimatePresence>
  );
}

export default App;
