import React, { useState, useEffect } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import Item from "./Item";

const Items = (data: any) => {
  const [items, setItems] = useState<[] | null>(null);

  useEffect(() => {
    console.log(data.data);
    setItems(data.data);
    console.log(items);
  }, [data]);

  return (
    <div
      className={`w-full my-12 overflow-x-hidden  md:overflow-x-scroll 
      }`}
    >
      {items && items.map((item: any) => <Item />)}
    </div>
  );
};

export default Items;
