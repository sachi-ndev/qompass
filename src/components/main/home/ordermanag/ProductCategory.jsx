import React from "react";

export default function ProductCategory() {
  return (
    <div className="bg-[#f4f9fc] px-3 py-5 rounded-[6px] flex  items-center justify-between text-[14px] font-[500]">
      Product Category
      <div className="flex items-center rounded-[6px] overflow-hidden  border-[1px] border-[#d4d4d4]" >
        <div className="bg-white px-3 py-2 md:min-w-[230px]">Electronics</div>
        <button className="bg-[#e3eeff] px-6 py-2 text-[#4b535f]">Change</button>
      </div>
    </div>
  );
}
