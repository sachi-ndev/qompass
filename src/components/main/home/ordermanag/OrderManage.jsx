import React from "react";
import ProductCategory from "./ProductCategory";
import OrderType from "./OrderType";
import AddOrder from "./AddOrder";

export default function OrderManage() {
  return (
    <div className="w-full  border-[1px] border-[#d4d4d4] rounded-[8px] min-h-[30vh]">
      <div className=" p-3 w-full flex items-center justify-between border-b-[1px]  border-[#d4d4d4]">
        <h1 className="font-[500]">Order Management</h1>
        <button className="font-[500] text-[14px] bg-[#f6f8fc] px-2 py-1">
          New Order <span className="pl-1 text-[16px]"> +</span>
        </button>
      </div>
      <div className="px-3 py-8 flex flex-col gap-6">

      <ProductCategory />
      <OrderType/>
      <AddOrder/>
      </div>
    </div>
  );
}
