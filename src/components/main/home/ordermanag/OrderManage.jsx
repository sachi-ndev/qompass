import React, { useContext } from "react";
import ProductCategory from "./ProductCategory";
import OrderType from "./OrderType";
import AddOrder from "./AddOrder";
import { Context } from "../../context/Context";

export default function OrderManage() {
  const { setProductCate } = useContext(Context);
  return (
    <div className="w-full  border-[1px] border-[#d4d4d4] rounded-[8px] min-h-[30vh]">
      <div className=" p-3 w-full flex items-center justify-between border-b-[1px]  border-[#d4d4d4]">
        <h1 className="font-[500]">Order Management</h1>
        <button
          onClick={() => {
            setProductCate(true);
          }}
          className="font-[500] text-[12px] bg-primary text-white px-2 py-0.5 rounded-[6px]"
        >
          New Order <span className="pl-1 text-[16px]"> +</span>
        </button>
      </div>
      <div className="px-3 py-8 flex flex-col gap-6">
        <ProductCategory />
        <OrderType />
        <AddOrder />
      </div>
    </div>
  );
}
