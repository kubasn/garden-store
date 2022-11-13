import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateItem, Header, Main } from "./components";
import { AnimatePresence } from "framer-motion";

function App() {
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
