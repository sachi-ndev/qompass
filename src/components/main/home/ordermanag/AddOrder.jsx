import React from "react";

export default function AddOrder() {
  return (
    <div className="bg-[#f4f9fc] px-3 py-5 rounded-[6px] flex  items-center text-[13px] font-[500]">
      <div className="w-[80%] flex justify-between items-">
        <div className="w-">
          <div className="flex items-center">
            Volumetric
            <div className="bg-white w-full h-full flex  rounded-[4px]  border-[#d4d4d4] ml-2 border-[1px]  text-[12px] text-[#d6d6d6]">
              <div className="px-3 py-2 w-[50%] border-r-[1px]  border-[#d4d4d4] h-full min-h-[1.6lh]">
                Length
              </div>
              <div className="px-3 py-2 w-[50%] h-full ">Breath</div>
              <div className="px-3 py-2 w-[50%] border-l-[1px]  border-[#d4d4d4] h-full min-h-[1.6lh]">
                Height
              </div>
            </div>
          </div>
          <p className="text-[9px] mt-2 text-[#616060]">
            {" "}
            Length + Breadth + Height should be at-least 15 cm
          </p>
        </div>
        <div className="w-">
          <div className="flex items-center w-full">
            <p className=" whitespace-nowrap">Actual Weight</p>
            <div className="bg-white  h-full flex  rounded-[4px]  border-[#d4d4d4] ml-2 border-[1px]  ">
              <div className="px-3 py-2 text-[#d6d6d6] border-r-[1px]  border-[#d4d4d4] h-full ">
                {" "}
                Weight
              </div>
              <div className="px-3 py-2 text-[#262626]  h-full ">Kg</div>
            </div>
          </div>
          <p className="text-[9px] mt-2 text-[#616060]">
            {" "}
            Packaged weight should be at least 50 grams
          </p>
        </div>

        <div className="w- flex flex-col items-center">
          <div className="flex items-center w-full">
            <p className=" whitespace-nowrap">Invoice no</p>
            <div className="bg-white  h-full flex  rounded-[4px]  border-[#d4d4d4] ml-2 border-[1px]  ">
              <div className="px-3 py-2 text-[#d6d6d6]  h-full ">000000</div>
            </div>
          </div>
          <p className="text-[9px] mt-2 text-[#616060]"> </p>
        </div>
      </div>
      <div className="flex w-[20%] justify-end">
        <button className="font-[500] text-[13px] px-2 py-1 bg-white  h-full   rounded-[4px]  border-[#d4d4d4] ">
          Add Order <span className="pl-1 text-[16px]"> +</span>
        </button>
      </div>
    </div>
  );
}
