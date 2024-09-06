import React from "react";

export default function PaymentSummary() {
  return (
    <div className="w-full bg-[#f7fbff] rounded-[6px] border-[1px] border-[#d8d8d8]  ">
      <div className=" flex items-center justify- px-5 py-3.5">
        <p className="w-[55%] font-[600] text-black">Payment Summary</p>
        <div className="flex items-center justify-between gap-2 w-[45%] text-[14px] ">
          <p className=" font-[600] flex   whitespace-nowrap">
            Total Weight 284kg
          </p>
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
        </div>
      </div>

      <div className="  flex flex-col gap-3 border-t-[1px] ">
        <div className=" flex items-center justify-between w-full border-t-[1px]">
          <h1 className="py-2 pl-5  w-[50%] border-r-[1px] ">lorem</h1>
          <h1 className="py-2 pl-5 w-[50%]">lorem</h1>
        </div>
        <div className=" flex items-center justify-between w-full border-t-[1px]">
          <h1 className="py-2 pl-5  w-[50%] border-r-[1px] ">lorem</h1>
          <h1 className="py-2 pl-5 w-[50%]">lorem</h1>
        </div>
        <div className=" flex items-center justify-between w-full border-t-[1px]">
          <h1 className="py-2 pl-5  w-[50%] border-r-[1px] ">lorem</h1>
          <h1 className="py-2 pl-5 w-[50%]">lorem</h1>
        </div>
        <div className=" flex items-center justify-between w-full border-t-[1px]">
          <h1 className="py-2 pl-5  w-[50%] border-r-[1px] ">lorem</h1>
          <h1 className="py-2 pl-5 w-[50%]">lorem</h1>
        </div>
      </div>
    </div>
  );
}
