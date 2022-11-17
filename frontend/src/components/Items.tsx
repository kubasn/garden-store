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
    console.log(data.data);
    setItems(data.data);
    console.log(items);
  }, [data]);

  return (
    <div
      ref={itemsRef}
      className="w-full flex flex-col md:flex-row my-12 overflow-x-hidden scrollbar-none   md:overflow-x-scroll gap-x-4 scroll-smooth
      "
    >
      {items && items.map((item: itemProps) => <Item {...item} />)}
    </div>
  );
});

export default Items;
