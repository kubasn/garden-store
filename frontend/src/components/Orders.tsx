import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { getOrdersById } from "./utils/functionsFirebase";

interface OrderType {
  date: string;
  orderItems: string;
  subtotal: number;
  userId: string;
}

const Orders = () => {
  const user = useTypedSelector((store) => store.user);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let newOrders: any = [];
    (async () => {
      newOrders = await getOrdersById(user.uid);
      if (newOrders && newOrders.length > 0) setOrders(newOrders);
      console.log(newOrders);
    })();
  }, []);

  console.log(orders);
  return (
    <div className="h-full min-h-[calc(100vh-22rem)]">
      <div>
        <p className="font-semibold tracking-wider text-3xl text-stone-800 text-center mb-10">
          Orders list
        </p>
      </div>
      <div className="flex flex-col gap-7 mb-4">
        {orders && orders.length > 0
          ? orders.map((order: OrderType) => (
              <div className="bg-white w-1/2 py-1 px-1 mx-auto rounded-md">
                <div className="border-y-[2px] py-2 w-4/5 mx-auto border-stone-400  flex flex-col items-center my-4   ">
                  <div>
                    <p>
                      <b>Order date:</b> {order.date}
                    </p>
                    <ul>
                      {JSON.parse(order.orderItems).map((item: any) => (
                        <div className="flex flex-col ">
                          <li>
                            <b>Item:</b> {item.title}
                          </li>
                          <div className="flex gap-2 ml-8">
                            <li>Price: {item.price}</li>
                            <li>Qty: {item.qty}</li>
                          </div>
                        </div>
                      ))}
                    </ul>
                    <div className="flex flex-col items-end mt-4">
                      <div className="bg-stone-400 w-1/2 h-[2px]"></div>
                      <p>
                        <b>Subtotal:</b> ${order.subtotal}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Orders;
