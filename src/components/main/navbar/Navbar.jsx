import React from "react";
import "./Navabar.css";
import Logoimg from "./../../../assets/mainassets/Screenshot_2024-09-05_195236-removebg-preview (1).png";

export default function Navbar() {
  return (
    <div className="    ">
      <div className="flex px-10   py-3 items-center justify-between w-full text-[12px]">
        <img className="w-[120px]  container" src={Logoimg} alt="" />

        <div className="flex items-center gap-7">
          <p className="flex items-center gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3d64f0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-phone"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            917736172777
          </p>

          <p className="flex items-center gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3d64f0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
            Itsupport@Driverlogistics.In
          </p>

          <div className="w-[25px] rounded-full aspect-square bg-primary "/>
        </div>
      </div>
      <div className="flex px-10  text-[#a5a4a4]  items-center justify-between w-full text-[13px] border-[1px] border-[#d3d3d3] ">
        <p className="  py-1 pr-1 border-r-[1px] border-[#d3d3d3]">
          Order Management System
        </p>
        <p className=" py-1">Welcome Guest</p>
      </div>
    </div>
  );
}
