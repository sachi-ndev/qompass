// context/Context.js
import React, { createContext, useState } from "react";

const Context = createContext();

const AppProvider = ({ children }) => {
  const [pickupPopup, setPickupPopup] = useState(false);
  const [contactPopup, setContactPopup] = useState(false);
  const [ordersummaryPopup, setOrdersummaryPopup] = useState(false);
  const [paymentsummaryPopup, setPaymentsummaryPopup] = useState(false);

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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { AppProvider, Context };
