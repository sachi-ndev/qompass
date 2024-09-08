import React, { useContext } from "react";
import { Context } from "../../../context/Context";

export default function OrderSummary() {
  const {
    pickupPopup,
    setPickupPopup,
    contactPopup,
    setContactPopup,
    ordersummaryPopup,
    setOrdersummaryPopup,
  } = useContext(Context);

  return (
    <div className="w-full bg-[#f7fbff] rounded-[6px] border-[1px] border-[#d8d8d8]  ">
      <div className="flex items-center justify- px-5 py-3.5 ">
        <p className="w-[55%] font-[600] text-black">Order Summary</p>
        <div className="flex items-center justify-between gap-2 w-[45%] text-[14px] ">
          <p className=" font-[600] flex   whitespace-nowrap">
            Total Distance 56Kms
          </p>
          <button 
          className={ordersummaryPopup?'rotate-[180deg] transition-all duration-300':'rotate-[0deg] transition-all duration-300'}
          onClick={()=>{
            
            setOrdersummaryPopup(!ordersummaryPopup)
          }}>
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
      <div
       className={ordersummaryPopup?"block":"hidden"}
      >
        <div className="py-3 flex flex-col gap-3 border-t-[1px] px-5">
          <div>
            <h3 className="text-[13px] py-1.5 font-[600] text-black">
              Pickup Address{" "}
              <span
                className="text-primary cursor-pointer"
                onClick={() => {
                  setPickupPopup(true);
                }}
              >
                ( Edit )
              </span>
            </h3>
            <h3 className="text-[12.5px] font-[500]">
              Borgir St cea Police Station, Fort Negar, Fort Kochi, <br />
              Kochi, Kerala 682001, India
            </h3>
          </div>

          <div>
            <h3 className="text-[13px] py-1.5 font-[600] text-black">
              Pickup Contact Details
            </h3>
            <h3 className="text-[12.5px] font-[500]">
              Jack Goe | +91 9874563210 | jackgoe15215@gmail.com
            </h3>
          </div>

          <div>
            <h3 className="text-[13px] py-1.5 font-[600] text-black">
              Pickup Time & Date
            </h3>
            <h3 className="text-[12.5px] font-[500]">
              24/07/2024 | 16:00 - 20:00
            </h3>
          </div>
        </div>

        <div className="py-3 flex flex-col gap-3 border-t-[1px] px-5">
          <div>
            <h3 className="text-[13px] py-1.5 font-[600] text-black">
              Delivery Address{" "}
              <span
                onClick={() => {
                  setContactPopup(true);
                }}
                className="text-primary cursor-pointer"
              >
                ( Edit )
              </span>
            </h3>
            <h3 className="text-[12.5px] font-[500]">
              6/40 Mattanchery Cochin, Jew Town Rd, Ernamkulam <br />
              Kochi, Kerala 682001, India
            </h3>
          </div>

          <div>
            <h3 className="text-[13px] py-1.5 font-[600] text-black">
              Delivery Contact Details
            </h3>
            <h3 className="text-[12.5px] font-[500]">
              Napier | +91 9874563210 | napier15215@gmail.com
            </h3>
          </div>
        </div>

        <div className="py-3 flex flex-col gap-3 border-t-[1px] px-5">
          <div>
            <h3 className="text-[13px] py-1.5 font-[600] text-black">
              Product Category
            </h3>
            <h3 className="text-[12.5px] font-[500] bg-[#e0ecfd] text-[#494e56] px-1 py-0.5 w-fit">
              Electronics
            </h3>
          </div>
        </div>

        <div className="py-3 flex flex-col gap-3 border-t-[1px] px-5">
          <div>
            <h3 className="text-[13px] py-1.5 font-[600] text-black">
              Load Category
            </h3>
            <h3 className="text-[12.5px] font-[500] bg-[#e0ecfd] text-[#494e56] px-1 py-0.5 w-fit">
              Carton Box
            </h3>
          </div>
        </div>

        <div className="py-3 flex flex-col gap-3 border-t-[1px] px-5">
          <div>
            <h3 className="text-[12px] font-[500] flex  gap-1 text-[#494e56]">
              <svg
                className="shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#494e56"
      
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1" />
              </svg>
              The estimate cost may vary from the final shipping cost based on
              the package dimensions & weight mesured before delivery.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
