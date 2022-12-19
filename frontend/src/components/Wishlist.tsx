import React from "react";
import { saveItem } from "./utils/functionsFirebase";

const Wishlist = () => {
  const saveDetails = () => {
    try {
      // saveItem(data);
    } catch (err) {
      console.log(err);
    }

    // fetchData();
  };

  return (
    <div className="h-full min-h-[calc(100vh-11rem)]">
      <div>
        <p className="font-semibold tracking-wider text-4xl text-stone-800">
          Wishlist
        </p>
      </div>
    </div>
  );
};

export default Wishlist;
