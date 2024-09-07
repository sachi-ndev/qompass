import React from "react";

export default function OrderOverview() {
  return (
    <div className="w-full  border-[1px] border-[#d4d4d4] rounded-[8px] min-h-[30vh]">
      <div className=" p-3 w-full flex items-center justify-between border-b-[1px]  border-[#d4d4d4]">
        <h1 className="font-[500]">Order Overview</h1>
        <div className="flex items-center gap-3">
          <button
            className=" bg-[#e1f0ff] aspect-square h-7 shrink-0 hover:bg-[#d5e7fa] transition-all duration-300  ease-in border-[1px]+
           border-[#aeafb0] flex items-center justify-center  px-0.5  rounded-[6px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3b3c3d"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <button
            className=" bg-[#e1f0ff] aspect-square h-7 shrink-0 hover:bg-[#d5e7fa] transition-all duration-300  ease-in border-[1px]+
           border-[#aeafb0] flex items-center justify-center  p-1.5  rounded-[6px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3b3c3d"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </button>

          <button
            className=" bg-[#e1f0ff] aspect-square h-7 shrink-0 hover:bg-[#d5e7fa] transition-all duration-300  ease-in border-[1px]+
           border-[#aeafb0] flex items-center justify-center  p-1.5  rounded-[6px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3b3c3d"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-copy"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
              <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
            </svg>
          </button>
          <button
            className=" bg-[#e1f0ff] aspect-square h-7 shrink-0 hover:bg-[#d5e7fa] transition-all duration-300  ease-in border-[1px]+
           border-[#aeafb0] flex items-center justify-center  p-1.5  rounded-[6px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3b3c3d"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-save"
            >
              <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
              <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
              <path d="M7 3v4a1 1 0 0 0 1 1h7" />
            </svg>
          </button>

          <button
            className=" bg-[#e1f0ff] aspect-square h-7 shrink-0 hover:bg-[#d5e7fa] transition-all duration-300  ease-in border-[1px]+
           border-[#aeafb0] flex items-center justify-center  p-1.5  rounded-[6px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3b3c3d"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-paperclip"
            >
              <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
            </svg>
          </button>

          <button
            className=" bg-[#e1f0ff] aspect-square h-7 shrink-0 hover:bg-[#d5e7fa] transition-all duration-300  ease-in border-[1px]+
           border-[#aeafb0] flex items-center justify-center  p-1.5  rounded-[6px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3b3c3d"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-trash"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
          </button>

          <button
            className=" bg-[#e1f0ff] aspect-square h-7 shrink-0 hover:bg-[#d5e7fa] transition-all duration-300  ease-in border-[1px]+
           border-[#aeafb0] flex items-center justify-center  p-1.5  rounded-[6px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3b3c3d"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-refresh-ccw"
            >
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
              <path d="M16 16h5v5" />
            </svg>
          </button>

          <button
            className=" bg-[#e1f0ff] aspect-square h-7 shrink-0 hover:bg-[#d5e7fa] transition-all duration-300  ease-in border-[1px]+
           border-[#aeafb0] flex items-center justify-center  p-1.5  rounded-[6px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3b3c3d"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-settings"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>

          <button
            className=" bg-[#e1f0ff] aspect-square h-7 shrink-0 hover:bg-[#d5e7fa] transition-all duration-300  ease-in border-[1px]+
           border-[#aeafb0] flex items-center justify-center  p-1.5  rounded-[6px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3b3c3d"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-ellipsis-vertical"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </button>
        </div>
      </div>
      <div className=" py-3 flex flex-col w-full ">
        <div className="w-[100%] min-h-[1.6lh] bg-[#f4f9fc] text-[#121212] flex items-center  text-[12px] py-2">
          <p className="px-3 shrink-0 w-full  max-w-[5%] whitespace-nowrap">
            No
          </p>
          <p className="px-2 shrink-0 w-full  max-w-[9%] whitespace-nowrap">
            Invoice No
          </p>
          <p className="px-2 shrink-0 w-full  max-w-[10%] whitespace-nowrap">
            Load Type
          </p>
          <p className="px-2 shrink-0 w-full  max-w-[10%] whitespace-nowrap">
            Load Quantity
          </p>
          <p className="px-2 shrink-0 w-full  max-w-[10%] whitespace-nowrap">
            Actual Weight{" "}
          </p>
          <p className="px-2 shrink-0 w-full  max-w-[14%] whitespace-nowrap">
            Volumetric{" "}
          </p>
          <p className="px-2 shrink-0 w-full  max-w-[13%] whitespace-nowrap">
            Product category{" "}
          </p>
          <p className="px-2 shrink-0 w-full  max-w-[11%] whitespace-nowrap">
            HAZMAT class{" "}
          </p>
          <p className="px-2 shrink-0 w-full  max-w-[10%] whitespace-nowrap">
            Action
          </p>
        </div>

        <div className="w-[100%] min-h-[1.6lh] bg-[#] text-[#121212] flex items-center  text-[11px] py-4">
          <p className="px-3 shrink-0 w-full  max-w-[5%] whitespace-nowrap">
            1
          </p>
          <p className="px-2 shrink-0 w-full  max-w-[9%] whitespace-nowrap">
            <div className="border-[1px] rounded-[2px] border-[#afafaf] text- px-3 py-1">
              ADH52R
            </div>
          </p>
          <p className="px-2 shrink-0 w-full  max-w-[10%] whitespace-nowrap">
            <div className="border-[1px] rounded-[2px] border-[#afafaf] text- px-3 py-1">
              Carton Box
            </div>
          </p>
          <p className="px-2 shrink-0 w-full  max-w-[10%] whitespace-nowrap">
            <div className="border-[1px] rounded-[2px] border-[#afafaf] text- px-3 py-1">
              06
            </div>
          </p>
          <p className="px-2 shrink-0 w-full  max-w-[10%] whitespace-nowrap">
            <div className="flex items-center justify-between border-[1px] rounded-[2px] border-[#afafaf] text- pl-3 ">
              100
              <div className=" border-l-[1px] pr-3 pl-2 border-[#afafaf] py-1 ">
                Kg
              </div>
            </div>
          </p>
          <p className="px-2 shrink-0 w-full  max-w-[14%] whitespace-nowrap">
            <div className="flex items-center justify-between border-[1px] rounded-[2px] border-[#afafaf] text-  ">
              <div className=" border--[1px] pr-3 pl-2 border-[#afafaf] py-1 ">
                12
              </div>
              <div className=" border-l-[1px] pr-3 pl-2 border-[#afafaf] py-1 ">
                12
              </div>
              <div className=" border-l-[1px] pr-3 pl-2 border-[#afafaf] py-1 ">
                12
              </div>
            </div>
          </p>
          <p className="px-2 shrink-0 w-full  max-w-[13%] whitespace-nowrap">
            <div className="border-[1px] rounded-[2px] border-[#afafaf]  text- px-3 py-1">
              Electronics
            </div>
          </p>
          <p className="px-2 shrink-0 w-full  max-w-[11%] whitespace-nowrap">
            <div className="border-[1px] rounded-[2px] border-[#afafaf] text- px-3 py-1">
              No{" "}
            </div>{" "}
          </p>
          <p className="px-2 shrink-0 w-full  max-w-[10%] whitespace-nowrap">
            <div className="flex items-center gap-3">
              <button
                className=" bg-[#e1f0ff] aspect-square h-7 shrink-0 hover:bg-[#d5e7fa] transition-all duration-300  ease-in border-[1px]+
           border-[#aeafb0] flex items-center justify-center  p-1.5  rounded-[6px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b3c3d"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-pen-line"
                >
                  <path d="M12 20h9" />
                  <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
                </svg>
              </button>
              <button
                className=" bg-[#e1f0ff] aspect-square h-7 shrink-0 hover:bg-[#d5e7fa] transition-all duration-300  ease-in border-[1px]+
           border-[#aeafb0] flex items-center justify-center  p-1.5  rounded-[6px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b3c3d"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-trash"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                </svg>
              </button>

              <button
                className=" bg-[#e1f0ff] aspect-square h-7 shrink-0 hover:bg-[#d5e7fa] transition-all duration-300  ease-in border-[1px]+
           border-[#aeafb0] flex items-center justify-center  p-1.5  rounded-[6px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b3c3d"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-square-plus"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              </button>

              <button
                className=" bg-[#e1f0ff] aspect-square h-7 shrink-0 hover:bg-[#d5e7fa] transition-all duration-300  ease-in border-[1px]+
           border-[#aeafb0] flex items-center justify-center  p-1.5  rounded-[6px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b3c3d"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-ellipsis-vertical"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
