import React, { createContext, useContext } from "react";

const MyAppContext = createContext({});

export const MyAppProvider = ({}) => {
  return <MyAppContext.Provider value={{}}>{}</MyAppContext.Provider>;
};
