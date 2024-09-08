import React, { useContext } from "react";
import { Context } from "../../context/Context";

export default function ConformOrder() {
  const { conformorderPopup, setConformOrderPopup,setStoredProducts } = useContext(Context);

  const handleReset = () => {
    localStorage.removeItem("addedProducts");

    setStoredProducts([]);

    setConformOrderPopup(false);
  };
  return (
    <div className="w-screen h-screen bg-primary/5 flex items-center justify-center ">
      <div className="bg-white p-4 rounded-md shadow-lg min-w-[30rem] min-h-[28rem]">
        <div className="w-full flex items-center justify-between text-[14px]">
          <p
            onClick={() => {
              setConformOrderPopup(false);
            }}
            className="flex items-center gap-1 cursor-pointer"
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
              class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M5 12l6 6" />
              <path d="M5 12l6 -6" />
            </svg>{" "}
            Back to order
          </p>
          <p
            className="cursor-pointer px-2 py-1 bg-slate-100"
            onClick={() => {
              setConformOrderPopup(false);
            }}
          >
            x
          </p>
        </div>

        <div className="flex gap-1 flex-col items-center mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00a82a"
            stroke-width="2.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-truck"
          >
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
            <path d="M15 18H9" />
            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
            <circle cx="17" cy="18" r="2" />
            <circle cx="7" cy="18" r="2" />
          </svg>
          <h1 className="text-black text-[15px] font-[600]">
            Your Booking is Confirmed, Thank you!
          </h1>
          <h1 className="text-slate-600 text-[10px] font-[400]">
            Order confirmation details sent to Mobile and email
          </h1>
        </div>

        <div className="text-[14px] border-[1px] border-slate-200 mt-5">
          <div className="bg-primary/5 flex items-center justify-between px-3 py-1">
            <p>Booked on 20-03-2024</p>
            <p>Ernakulam Unit Hub</p>
          </div>

          <div className="flex items-center justify-between w-full border-t-[1px] border-slate-200">
            <p className="w-[35%] py-2 px-3 border-r-[1px] border-slate-200">
              AWB ID
            </p>
            <p className="w-[65%] py-2 px-3">RTBLR98752</p>
          </div>
          <div className="flex items-center justify-between w-full border-t-[1px] border-slate-200">
            <p className="w-[35%] py-2 px-3 border-r-[1px] border-slate-200">
              From
            </p>
            <p className="w-[65%] py-2 px-3">FortKochi - 682001</p>
          </div>
          <div className="flex items-center justify-between w-full border-t-[1px] border-slate-200">
            <p className="w-[35%] py-2 px-3 border-r-[1px] border-slate-200">
              To
            </p>
            <p className="w-[65%] py-2 px-3">Kasaragod - 671121</p>
          </div>
          <div className="flex items-center justify-between w-full border-t-[1px] border-slate-200">
            <p className="w-[35%] py-2 px-3 border-r-[1px] border-slate-200">
              Total Distance
            </p>
            <p className="w-[65%] py-2 px-3">612kms</p>
          </div>
          <div className="flex items-center justify-between w-full border-t-[1px] border-slate-200">
            <p className="w-[35%] py-2 px-3 border-r-[1px] border-slate-200">
              Product Category
            </p>
            <p className="w-[65%] py-2 px-3">Electronics</p>
          </div>
          <div className="flex items-center justify-between w-full border-t-[1px] border-slate-200">
            <p className="w-[35%] py-2 px-3 border-r-[1px] border-slate-200">
              Amount Paid
            </p>
            <p className="w-[65%] py-2 px-3">✅ ₹2967.00</p>
          </div>
          <div className="flex items-center justify-between w-full border-t-[1px] border-slate-200">
            <p className="w-[35%] py-2 px-3 border-r-[1px] border-slate-200">
              EST Delivery Date
            </p>
            <p className="w-[65%] py-2 px-3">ORD123456</p>
          </div>

          <div className="flex items-center justify-between w-full border-t-[1px] border-slate-200">
            <p className=" py-2 px-3 flex items-center gap-1 text-primary cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3d64f0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-circle-plus"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M9 12h6" />
                <path d="M12 9v6" />
              </svg>
              Create an another order
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-[70px]">
          <button
          onClick={()=>{
            handleReset()
          }}
          className="py-2 rounded-[6px] bg-primary text-white">
            View Order Confirmation
          </button>
          <button className="py-2 rounded-[6px] text-primary bg-white border-[2px] border-primary">
            {" "}
            Download Receipt
          </button>
        </div>
      </div>
    </div>
  );
}
