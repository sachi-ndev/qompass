// context/Context.js
import React, { createContext, useState } from "react";

const Context = createContext();

const AppProvider = ({ children }) => {
  const [pickupPopup, setPickupPopup] = useState(false);
  const [contactPopup, setContactPopup] = useState(false);
  const [ordersummaryPopup, setOrdersummaryPopup] = useState(false);
  const [paymentsummaryPopup, setPaymentsummaryPopup] = useState(false);
  const [productCate, setProductCate] = useState(false);
  const [loadCate, setLoadCate] = useState(false);
  const [nextId, setNextId] = useState(1);

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
        productCate,
        setProductCate,
        loadCate,
        setLoadCate,
        product,
        setProduct,
        nextId, setNextId,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { AppProvider, Context };
