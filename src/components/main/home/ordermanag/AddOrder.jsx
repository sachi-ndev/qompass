import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";

export default function AddOrder() {
  const {
    product,
    setProduct,
    nextId,
    setNextId,
    addProduct,
    setAddProduct,
    orderPopup,
    setOrderPopup,
  } = useContext(Context);

  const [addedProducts, setAddedProducts] = useState(() => {
    const savedProducts = localStorage.getItem("addedProducts");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const generateRandomId = () => {
    return crypto.randomUUID().slice(0, 5);
  };
  const handleSave = () => {
    const prevAddedProducts =
      JSON.parse(localStorage.getItem("addedProducts")) || [];

    const newProduct = {
      id: generateRandomId(),
      category: product.category,
      type: product.type,
      qty: product.qty,
    };

    const updatedProducts = [...prevAddedProducts, newProduct];

    setAddedProducts(updatedProducts);
    localStorage.setItem("addedProducts", JSON.stringify(updatedProducts));

    setProduct([{ category: "", type: "", qty: "" }]);
    setAddProduct(!addProduct);
  };

  return (
    <div className="bg-[#f4f9fc] px-3 py-5 rounded-[6px] flex md:flex-row flex-col  md:items-center text-[13px] font-[500]">
      <div className="w-[80%] flex flex-wrap md:gap-2 gap-4 justify-between items-">
        <div className="w-">
          <div className="flex items-center">
            Volumetric
            <div
              className={
                product.category && product.type && product.qty
                  ? "bg-white w-full h-full flex  rounded-[4px]  border-[#d4d4d4] ml-2 border-[1px]  text-[12px] text-[#333]"
                  : "bg-white w-full h-full flex  rounded-[4px]  border-[#d4d4d4] ml-2 border-[1px]  text-[12px] text-[#d6d6d6]"
              }
            >
              <div className="px-3 py-2 w-[50%] border-r-[1px]  border-[#d4d4d4] h-full min-h-[1.6lh]">
                {product.category && product.type && product.qty
                  ? "12"
                  : "Length"}
              </div>
              <div className="px-3 py-2 w-[50%] h-full ">
                {product.category && product.type && product.qty
                  ? "12"
                  : "Breath"}
              </div>
              <div className="px-3 py-2 w-[50%] border-l-[1px]  border-[#d4d4d4] h-full min-h-[1.6lh]">
                {product.category && product.type && product.qty
                  ? "12"
                  : "Height"}
              </div>
            </div>
          </div>
          <p className="text-[9px] mt-2 text-[#616060]">
            {" "}
            Length + Breadth + Height should be at-least 15 cm
          </p>
        </div>
        <div className="w-">
          <div className="flex items-center w-full">
            <p className=" whitespace-nowrap">Actual Weight</p>
            <div className="bg-white  h-full flex  rounded-[4px]  border-[#d4d4d4] ml-2 border-[1px]  ">
              <div
                className={
                  product.category && product.type && product.qty
                    ? "px-3 py-2 text-[#333] border-r-[1px]  border-[#d4d4d4] h-full "
                    : "px-3 py-2 text-[#d6d6d6] border-r-[1px]  border-[#d4d4d4] h-full "
                }
              >
                {product.category && product.type && product.qty
                  ? "118Kg"
                  : "Weight"}
              </div>
              <div className="px-3 py-2 text-[#262626]  h-full ">Kg</div>
            </div>
          </div>
          <p className="text-[9px] mt-2 text-[#616060]">
            {" "}
            Packaged weight should be at least 50 grams
          </p>
        </div>

        <div className="w- flex flex-col items-center">
          <div className="flex items-center w-full">
            <p className=" whitespace-nowrap">Invoice no</p>
            <div className="bg-white  h-full flex  rounded-[4px]  border-[#d4d4d4] ml-2 border-[1px]  ">
              <div
                className={
                  product.category && product.type && product.qty
                    ? "px-3 py-2 text-[#333]  h-full "
                    : "px-3 py-2 text-[#d6d6d6]  h-full "
                }
              >
                {/* 0000000 */}
                {product.category && product.type && product.qty
                  ? `QOMP${nextId}`
                  : "0000000"}
              </div>
            </div>
          </div>
          <p className="text-[9px] mt-2 text-[#616060]"> </p>
        </div>
      </div>
      <div className="flex md:w-[20%] md:justify-end">
        <button
          onClick={() => {
            if (product.category && product.type && product.qty) {
              setOrderPopup(true);
              handleSave();
            }
          }}
          className="font-[500] text-[13px] px-2 py-1 bg-white  h-full md:w-auto w-fit whitespace-nowrap  rounded-[4px]  border-[#d4d4d4] "
        >
          Add Order <span className="pl-1 text-[16px]"> +</span>
        </button>
      </div>
    </div>
  );
}
