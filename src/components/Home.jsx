import React, { useContext } from "react";
import { Context } from "./main/context/Context";

import OrderManage from "./main/home/ordermanag/OrderManage";
import OrderOverview from "./main/home/orderoverview.jsx/OrderOverview";
import OrderSummary from "./main/home/ordersummary/OrderSummary";

export default function Home() {
  const { name, setName } = useContext(Context);
  return (
    <div className=" h-screen w-full  flex px-10 my-5">
      <div className="w-[66vw] ">
        <OrderManage />
        <OrderOverview />
      </div>
      <div className="w-[34vw] bg-blue-100">
        <OrderSummary/>
      </div>
    </div>
  );
}
