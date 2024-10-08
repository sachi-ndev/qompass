import React, { useContext } from "react";
import { Context } from "../../../context/Context";

export default function PaymentSummary() {
  const { paymentsummaryPopup, setPaymentsummaryPopup ,product,storedProducts} = useContext(Context);
  return (
    <div className="w-full bg-[#f7fbff] rounded-[6px] border-[1px] border-[#d8d8d8]  ">
      <div
        className={
          (product.category && product.type && product.qty) ||
          storedProducts.length != 0
            ? " flex items-center justify- px-5 py-3.5 text-black"
            : " flex items-center justify- px-5 py-3.5   bg-slate-200  text-slate-500 pointer-events-none"
        }
      >
        <p className="w-[55%] font-[600] ">Payment Summary</p>
        <div className="flex items-center justify-between gap-2 w-[45%] text-[14px] ">
          <p className=" font-[600] flex   whitespace-nowrap">
            Total Weight {  (product.category && product.type && product.qty) ||
          storedProducts.length != 0?'284kg':''} 
          </p>
          <button

className={paymentsummaryPopup?'rotate-[180deg] transition-all duration-300':'rotate-[0deg] transition-all duration-300'}

            onClick={() => {
              setPaymentsummaryPopup(!paymentsummaryPopup);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
      <div className={paymentsummaryPopup ? "block" : "hidden"}>
        <div className="  flex flex-col gap border-t-[1px] ">
          <div className=" flex items-center justify-between w-full border-t-[1px]">
            <h1 className="py-2 pl-5 w-[50%] border-r-[1px]">
              Total Shipment Count
            </h1>
            <h1 className="py-2 pl-5 w-[50%]">10.00</h1>
          </div>

          <div className=" flex items-center justify-between w-full border-t-[1px]">
            <h1 className="py-2 pl-5 w-[50%] border-r-[1px]">
              Base freight amount
            </h1>
            <h1 className="py-2 pl-5 w-[50%]">10.00</h1>
          </div>

          <div className=" flex items-center justify-between w-full border-t-[1px]">
            <h1 className="py-2 pl-5 w-[50%] border-r-[1px]">
              Accessorial freight amount
            </h1>
            <h1 className="py-2 pl-5 w-[50%]">546kg</h1>
          </div>

          <div className=" flex items-center justify-between w-full border-t-[1px]">
            <h1 className="py-2 pl-5 w-[50%] border-r-[1px]">Docket Charge</h1>
            <h1 className="py-2 pl-5 w-[50%]">Jh # 2,016.00</h1>
          </div>

          <div className=" flex items-center justify-between w-full border-t-[1px]">
            <h1 className="py-2 pl-5 w-[50%] border-r-[1px]">
              Stationary Charge
            </h1>
            <h1 className="py-2 pl-5 w-[50%]">₹ 50.00</h1>
          </div>

          <div className=" flex items-center justify-between w-full border-t-[1px]">
            <h1 className="py-2 pl-5 w-[50%] border-r-[1px]">
              Handling Charge(Per Box)
            </h1>
            <h1 className="py-2 pl-5 w-[50%]">₹ 500.00</h1>
          </div>

          <div className=" flex items-center justify-between w-full border-t-[1px]">
            <h1 className="py-2 pl-5 w-[50%] border-r-[1px]">CGST 8%</h1>
            <h1 className="py-2 pl-5 w-[50%]">₹ 200.00</h1>
          </div>

          <div className=" flex items-center justify-between w-full border-t-[1px]">
            <h1 className="py-2 pl-5 w-[50%] border-r-[1px]">SGST 8%</h1>
            <h1 className="py-2 pl-5 w-[50%]">₹ 200.00</h1>
          </div>

          <div className=" flex items-center justify-between w-full border-t-[1px]">
            <h1 className="py-2 pl-5 w-[50%] border-r-[1px]">IGST 8%</h1>
            <h1 className="py-2 pl-5 w-[50%]">₹ 00.00</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
