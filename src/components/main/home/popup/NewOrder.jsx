import React, { useContext } from "react";
import Tick from "./../../../../assets/home/tick-svgrepo-com.png";
import { Context } from "../../context/Context";

export default function NewOrder() {
    const{orderPopup, setOrderPopup,addProduct,setAddProduct}=useContext(Context)
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-primary/5  ">
      <div className="px-20 py-10 bg-white flex flex-col items-center rounded-md shadow-2xl">
        <div className="aspect-square rounded-full bg-[#76bb7f]/20 mb-6">
          <img className="w-[100px]" src={Tick}  alt="" />
        </div>
        <h1 className="text-[20px] font-[600]">Your Order Added</h1>
        <button className="px-3 py-1 rounded-sm bg-slate-300 mt-3" onClick={()=>{
            setOrderPopup(false)
            setAddProduct(!addProduct)
        }}>Ok</button>
      </div>
    </div>
  );
}
