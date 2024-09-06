import React, { useContext } from "react";
import { Context } from "./main/context/Context";

import OrderManage from "./main/home/ordermanag/OrderManage";
import OrderOverview from "./main/home/orderoverview.jsx/OrderOverview";
import SidePanel from "./main/home/sidepanel/SidePanel";

export default function Home() {
  const { name, setName } = useContext(Context);
  return (
    <div className="  w-full gap-4  flex px-10 my-5">
      <div className="w-[70vw] ">
        <OrderManage />
        <OrderOverview />
      </div>
      <div className="w-[30vw] ">
        <SidePanel/>
      </div>
    </div>
  );
}
