import React from "react";

import CartonBox from "./../../../../assets/home/carton.png";
import WoodenBox from "./../../../../assets/home/wooden.png";
import Plastic from "./../../../../assets/home/plastics.png";
import Others from "./../../../../assets/home/other.png";

export default function OrderType() {
  return (
    <div className="bg-[#f4f9fc]  rounded-[6px] text-[14px] font-[500]">
      <div className="flex  items-center px-3 py-5 justify-between ">
        Select Order Type
        <div className="flex items-center h-full rounded-[6px] overflow-hidden  border-[1px] border-[#d4d4d4]">
          <div className="bg-white w-[230px] h-full flex   ">
            <input
              type="text"
              className="px-3 py-2 w-[50%] border-r-[1px]  border-[#d4d4d4] h-full min-h-[1.6lh] outline-none"
            />
            <input
              type="text"
              className="px-3 py-2 w-[50%] h-full outline-none "
            />
          </div>
          <button className="bg-[#e3eeff] px-6 py-2 text-[#4b535f]">
            Change
          </button>
        </div>
      </div>

      <div className="py-5 px-3 border-t-[1px] grid grid-cols-6 gap-6">
        <div className="w-full  aspect-[1.2/1] hover:shadow-lg transition-all duration-200 rounded-[4px] border-[1px] border-[#e3eeff] flex flex-col items-center justify-center">
          <img src={CartonBox} className="h-[50%]" alt="" />
          <h3 className="mt-2 font-[500]">Sports equipments</h3>
        </div>
        <div className="w-full  aspect-[1.2/1] hover:shadow-lg transition-all duration-200 rounded-[4px] border-[1px] border-[#e3eeff] flex flex-col items-center justify-center">
          <img src={WoodenBox} className="h-[50%]" alt="" />
          <h3 className="mt-2 font-[500]">Clothes Items</h3>
        </div>
        <div className="w-full  aspect-[1.2/1] hover:shadow-lg transition-all duration-200 rounded-[4px] border-[1px] border-[#e3eeff] flex flex-col items-center justify-center">
          <img src={Plastic} className="h-[50%]" alt="" />
          <h3 className="mt-2 font-[500]">HouseHold Items</h3>
        </div>
        <div className="w-full  aspect-[1.2/1] hover:shadow-lg transition-all duration-200 rounded-[4px] border-[1px] border-[#e3eeff] flex flex-col items-center justify-center">
          <img src={Others} className="h-[50%]" alt="" />
          <h3 className="mt-2 font-[500]">Others</h3>
        </div>
      </div>

      <div className="p-4 flex items-center justify-between text-[13px]">
        <div className="flex items-center rounded-[4px] justify-between border-[2px] border-primary overflow-hidden w-fit">
          <div className="px-2 py-2 bg-primary text-white font-[400]">
            Enter Load Quantity
          </div>
          <input type="number" className="py-2 w-[80px] px-3 outline-none" />
        </div>
        <button className="flex  items-center rounded-[4px] px-4 py-2 justify-between border-[2px] border-slate-300 text-slate-600 overflow-hidden w-fit">
          Proceed
        </button>
      </div>
    </div>
  );
}
