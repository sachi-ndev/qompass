import React from "react";
import OrderSummary from "./PanelComponents/OrderSummary";
import PaymentSummary from "./PanelComponents/PaymentSummary";

export default function SidePanel() {
  return (
    <div className="flex flex-col gap-4 text-[14px]">
      <OrderSummary />
      <PaymentSummary />
      <div className="w-full bg-[#f7fbff] rounded-[6px] border-[1px] border-[#d8d8d8] px-5 py-3.5 flex items-center justify-between">
        <p className="w-[55%] font-[600] text-black">Total Weight</p>
        <p className="w-[45%] text-[14px] font-[600]">118Kg</p>
      </div>
      <div className="w-full bg-[#e7f6fe] px-5 py-3.5 flex items-center justify-between">
        <p className="w-[55%] font-[600] text-black">SUB TOTAL</p>
        <p className="w-[45%] text-[14px] font-[600]">₹2967.00</p>
      </div>
    </div>
  );
}
