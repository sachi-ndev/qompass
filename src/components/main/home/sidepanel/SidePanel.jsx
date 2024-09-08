import React, { useContext, useState } from "react";
import OrderSummary from "./PanelComponents/OrderSummary";
import PaymentSummary from "./PanelComponents/PaymentSummary";
import { Context } from "../../context/Context";

export default function SidePanel() {
  const [checked, setChecked] = useState(false);
  const { product ,storedProducts,conformorderPopup, setConformOrderPopup} = useContext(Context);

  return (
    <div className="flex flex-col gap-4 text-[14px]">
      <OrderSummary />
      <PaymentSummary />
      <div
        className={
          product.category && product.type && product.qty ||storedProducts.length!=0
            ? "w-full bg-[#f7fbff] text-black rounded-[6px] border-[1px] border-[#d8d8d8] px-5 py-3.5 flex items-center justify-between"
            : "w-full bg-slate-200 text-slate-500 rounded-[6px] border-[1px] border-[#d8d8d8] px-5 py-3.5 flex items-center justify-between"
        }
      >
        <p className="w-[55%] font-[600] ">Total Weight</p>
        <p className="w-[45%] text-[14px] font-[600]">
          {product.category && product.type && product.qty ||storedProducts.length!=0 ? "118Kg" : ""}
        </p>
      </div>
      <div
        className={
          product.category && product.type && product.qty ||storedProducts.length!=0
            ? "w-full bg-[#e7f6fe] text-black px-5 py-3.5 flex items-center justify-between"
            : "w-full bg-slate-200  text-slate-500 px-5 py-3.5 flex items-center justify-between"
        }
      >
        <p className="w-[55%] font-[600] ">SUB TOTAL</p>
        <p className="w-[45%] text-[14px] font-[600]">
          {product.category && product.type && product.qty ||storedProducts.length!=0 ? "₹2967.00" : ""}
        </p>
      </div>

      <div className={   product.category && product.type && product.qty ||storedProducts.length!=0?"mt-4":"mt-4 hidden"}>
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
        <button 
        onClick={()=>{
          if(checked){
            setConformOrderPopup(true)
          }
          else{
            window.alert('Please agree T&C')
          }
          
        }}
        className="px-16 rounded-[6px] py-3 bg-[#0d824c] text-[16px] font-[600] text-white mt-3">
          Pay INR 2967.00
        </button>
      </div>
    </div>
  );
}
