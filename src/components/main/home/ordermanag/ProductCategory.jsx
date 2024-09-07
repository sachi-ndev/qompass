import React, { useContext } from "react";
import Consumables from "./../../../../assets/home/consumables.png";
import Electronics from "./../../../../assets/home/electronics.png";
import SportsItem from "./../../../../assets/home/sports.png";
import HouseHold from "./../../../../assets/home/household.png";
import Cloths from "./../../../../assets/home/cloths.png";
import Others from "./../../../../assets/home/other.png";
import { Context } from "../../context/Context";

export default function ProductCategory() {
  const { productCate, setProductCate,setLoadCate ,product, setProduct} = useContext(Context);

console.log(product);

  return (
    <div
      className={
        productCate
          ? "bg-[#fff]  shadow-2xl  rounded-[6px] text-[14px] font-[500]"
          : "bg-[#f4f9fc]  rounded-[6px] text-[14px] font-[500]"
      }
    >
      <div className="flex  items-center   py-5 px-3 justify-between ">
        Product Category
        <div
          className={
            productCate
              ? "hidden"
              : "flex items-center rounded-[6px] overflow-hidden  border-[1px] border-[#d4d4d4]"
          }
        >
          <input
            type="text"
            className="bg-white px-3 py-2 md:min-w-[230px] outline-none"
            value={product.category}
          />

          <button
            onClick={() => {
              setProductCate(true);
            }}
            className="bg-[#e3eeff] px-6 py-2 text-[#4b535f]"
          >
            Change
          </button>
        </div>
      </div>
      <div
        className={
          productCate
            ? "py-5 px-3 border-t-[1px] grid grid-cols-6 gap-6 "
            : "hidden"
        }
      >
        <div
          onClick={() => {
            setProductCate(false);
            setLoadCate(true);
            setProduct((prevProduct) => ({ ...prevProduct, category: "Consumables" }));
          }}
          className="w-full  aspect-[1.2/1] hover:shadow-lg transition-all duration-200 rounded-[4px] border-[1px] border-[#e3eeff] flex flex-col items-center justify-center"
        >
          <img src={Consumables} className="h-[40%]" alt="" />
          <h3 className="mt-4 font-[500]">Consumables</h3>
        </div>
        <div
        onClick={()=>{
          setProductCate(false)
          setLoadCate(true)
          setProduct((prevProduct)=>({...prevProduct,category:'Electronics'}))
        }}
        className="w-full  aspect-[1.2/1] hover:shadow-lg transition-all duration-200 rounded-[4px] border-[1px] border-[#e3eeff] flex flex-col items-center justify-center">
          <img src={Electronics} className="h-[40%]" alt="" />
          <h3 className="mt-4 font-[500]">Electronics</h3>
        </div>
        <div
        onClick={()=>{
          setProductCate(false)
          setLoadCate(true)
          setProduct((prevProduct)=>({...prevProduct,category:'Sports'}))
        }}
        className="w-full  aspect-[1.2/1] hover:shadow-lg transition-all duration-200 rounded-[4px] border-[1px] border-[#e3eeff] flex flex-col items-center justify-center">
          <img src={SportsItem} className="h-[40%]" alt="" />
          <h3 className="mt-4 font-[500]">Sports equipments</h3>
        </div>
        <div
        onClick={()=>{
          setProductCate(false)
          setLoadCate(true)
          setProduct((prevProduct)=>({...prevProduct,category:'Clothes'}))
        }}
        className="w-full  aspect-[1.2/1] hover:shadow-lg transition-all duration-200 rounded-[4px] border-[1px] border-[#e3eeff] flex flex-col items-center justify-center">
          <img src={Cloths} className="h-[40%]" alt="" />
          <h3 className="mt-4 font-[500]">Clothes Items</h3>
        </div>
        <div
        onClick={()=>{
          setProductCate(false)
          setLoadCate(true)
          setProduct((prevProduct)=>({...prevProduct,category:'HouseHold'}))
        }}
        className="w-full  aspect-[1.2/1] hover:shadow-lg transition-all duration-200 rounded-[4px] border-[1px] border-[#e3eeff] flex flex-col items-center justify-center">
          <img src={HouseHold} className="h-[40%]" alt="" />
          <h3 className="mt-4 font-[500]">HouseHold Items</h3>
        </div>
        <div
        onClick={()=>{
          setProductCate(false)
          setLoadCate(true)
          setProduct((prevProduct)=>({...prevProduct,category:'Others'}))
        }}
        className="w-full  aspect-[1.2/1] hover:shadow-lg transition-all duration-200 rounded-[4px] border-[1px] border-[#e3eeff] flex flex-col items-center justify-center">
          <img src={Others} className="h-[40%]" alt="" />
          <h3 className="mt-4 font-[500]">Others</h3>
        </div>
      </div>
    </div>
  );
}
