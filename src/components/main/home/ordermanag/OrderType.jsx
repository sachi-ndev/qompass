import React from 'react'

export default function OrderType() {
  return (
    <div className="bg-[#f4f9fc] px-3 py-5 rounded-[6px] flex  items-center justify-between text-[14px] font-[500]">
    Select Order Type
    <div className="flex items-center h-full rounded-[6px] overflow-hidden  border-[1px] border-[#d4d4d4]" >
      <div className="bg-white md:min-w-[230px] h-full flex   ">
        <div className='px-3 py-2 w-[50%] border-r-[1px]  border-[#d4d4d4] h-full min-h-[1.6lh]'></div>
        <div className='px-3 py-2 w-[50%] h-full '></div>
      </div>
      <button className="bg-[#e3eeff] px-6 py-2 text-[#4b535f]">Change</button>
    </div>
  </div>
  )
}
