import React, { useState, useEffect, forwardRef } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import Item from "./Item";

interface itemProps {
  id: number;
  imageUrl: string;
  category: string;
  description: string;
  price: string;
  title: string;
}

const Items = forwardRef((data: any, itemsRef: any) => {
  const [items, setItems] = useState<[] | null>(null);

  useEffect(() => {
    setItems(data.data);
  }, [data]);

  return (
    <div
      ref={itemsRef}
      className="w-full flex flex-col md:flex-row my-12 overflow-x-hidden scrollbar-none   md:overflow-x-scroll gap-x-4 scroll-smooth
      "
    >
      {items && items.length > 0 ? (
        items.map((item: itemProps) => <Item {...item} />)
      ) : (
        <div className="bg-gray-200 py-3 px-2 w-1/2 mx-auto rounded-md shadow-lg ">
          <h1 className="text-gray-700 font-bold text-center">
            Items not found!{" "}
          </h1>
        </div>
      )}
    </div>
  );
});

export default Items;
