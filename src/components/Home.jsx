import React, { useContext } from "react";
import { Context } from "./main/context/Context";

import OrderManage from "./main/home/ordermanag/OrderManage";
import OrderOverview from "./main/home/orderoverview.jsx/OrderOverview";
import SidePanel from "./main/home/sidepanel/SidePanel";
import PickupDetails from "./main/home/popup/PickupDetails";
import ContactDetails from "./main/home/popup/ContactDetails";

export default function Home() {
  const { pickupPopup, contactPopup } = useContext(Context);
  return (
    <div className="relative  w-full gap-4  flex px-10 my-5">
      <div className="w-[70vw] gap-4  flex  flex-col">
        <OrderManage />
        <OrderOverview />
      </div>
      <div className="w-[30vw] ">
        <SidePanel />
      </div>

      <div
        className={
          pickupPopup
            ? "fixed top-0 left-0 transition-all  duration-[500ms]"
            : "fixed top-0 left-[100vw]  transition-all duration-[500ms]"
        }
      >
        <PickupDetails />
      </div>

      <div
        className={
          contactPopup
            ? "fixed top-0 left-0 transition-all  duration-[500ms]"
            : "fixed top-0 left-[100vw]  transition-all duration-[500ms]"
        }
      >
        <ContactDetails />
      </div>
    </div>
  );
}
