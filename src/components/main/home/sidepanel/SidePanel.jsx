import React, { useState } from "react";
import OrderSummary from "./PanelComponents/OrderSummary";
import PaymentSummary from "./PanelComponents/PaymentSummary";

export default function SidePanel() {
  const [checked, setChecked] = useState(false);
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

      <div className="mt-4">
        <div
          className="flex items-center gap-1 text-[14px] font-[550]"
          onClick={() => setChecked(!checked)}
        >
          <div
            className={
              checked
                ? "w-6 h-6 border-[2px] rounded-[4px] flex items-center justify-center bg-primary  border-primary"
                : "w-6 h-6 border-[2px] rounded-[4px] flex items-center justify-center bg-[#fff] border-[#D0D5DD]"
            }
          >
            <svg
              className={checked ? "block" : "hidden"}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M10 3.5L4.5 9L2 6.5"
                stroke="white"
                strokeWidth="1.6666"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          I agree to this terms and conditions
        </div>
        <p className=" mt-2">
          By checking this box. I confirm that i have read and agree to abide by
          the terms governing this transaction, including refund and
          cancellation polices
        </p>
        <button className="px-16 rounded-[6px] py-3 bg-[#0d824c] text-[16px] font-[600] text-white mt-3">
          Pay INR 2967.00
        </button>
      </div>
    </div>
  );
}
