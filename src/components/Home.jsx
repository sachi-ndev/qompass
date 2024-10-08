import React, { useContext } from "react";
import { Context } from "./main/context/Context";

import OrderManage from "./main/home/ordermanag/OrderManage";
import OrderOverview from "./main/home/orderoverview.jsx/OrderOverview";
import SidePanel from "./main/home/sidepanel/SidePanel";
import PickupDetails from "./main/home/popup/PickupDetails";
import ContactDetails from "./main/home/popup/ContactDetails";
import NewOrder from "./main/home/popup/NewOrder";
import ConformOrder from "./main/home/popup/ConformOrder";

export default function Home() {
  const {
    pickupPopup,
    contactPopup,
    orderPopup,
    conformorderPopup,

  } = useContext(Context);
  return (
    <div className="relative  w-full gap-4  flex md:flex-row flex-col px-10 my-5">
      <div className="md:w-[70vw] w-full gap-4  flex  flex-col">
        <OrderManage />
        <OrderOverview />
      </div>
      <div className="md:w-[30vw] w-full ">
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

      <div
        className={
          orderPopup
            ? "fixed top-0 left-0 opacity-100  transition-all  duration-[500ms]"
            : "fixed top-0 left-0 hidden opacity-0  transition-all duration-[500ms]"
        }
      >
        <NewOrder />
      </div>

      <div
        className={
          conformorderPopup
            ? "fixed  top-0 left-0  transition-all  duration-[500ms]"
            : "fixed hidden top-0 left-0  transition-all  duration-[500ms]"
        }
      >
        <ConformOrder />
      </div>
    </div>
  );
}
