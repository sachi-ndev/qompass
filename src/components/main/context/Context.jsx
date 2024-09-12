
import React, { createContext, useState } from "react";

const Context = createContext();

const AppProvider = ({ children }) => {
  const [pickupPopup, setPickupPopup] = useState(false);
  const [contactPopup, setContactPopup] = useState(false);
  const [orderPopup, setOrderPopup] = useState(false);
  const [conformorderPopup, setConformOrderPopup] = useState(false);
  const [ordersummaryPopup, setOrdersummaryPopup] = useState(false);
  const [paymentsummaryPopup, setPaymentsummaryPopup] = useState(false);
  const [productCate, setProductCate] = useState(false);
  const [loadCate, setLoadCate] = useState(false);
  const [nextId, setNextId] = useState(1);
  const [addProduct, setAddProduct] = useState(false);
  const [storedProducts, setStoredProducts] = useState([]);
  const [product, setProduct] = useState([{ category: "", type: "", qty: "" }]);

  return (
    <Context.Provider
      value={{
        pickupPopup,
        setPickupPopup,
        contactPopup,
        setContactPopup,
        ordersummaryPopup,
        setOrdersummaryPopup,
        paymentsummaryPopup,
        setPaymentsummaryPopup,
        conformorderPopup, setConformOrderPopup,
        productCate,
        setProductCate,
        loadCate,
        setLoadCate,
        product,
        setProduct,
        nextId,
        setNextId,
        addProduct,
        setAddProduct,
        storedProducts,
        setStoredProducts,
        orderPopup,
        setOrderPopup,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { AppProvider, Context };
