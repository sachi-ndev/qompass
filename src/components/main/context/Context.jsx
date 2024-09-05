// context/Context.js
import React, { createContext, useState } from "react";

const Context = createContext();

const AppProvider = ({ children }) => {
 const [name,setName]=useState('Hello world')

  return (
    <Context.Provider
      value={{name,setName}}
    >
      {children}
    </Context.Provider>
  );
};

export { AppProvider, Context };
