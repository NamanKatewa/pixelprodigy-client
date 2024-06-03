import { createContext, useContext, useState } from "react";

const ShowCartContext = createContext();

export const useShowCart = () => {
  return useContext(ShowCartContext);
};

export const ShowCartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const contextValue = {
    showCart,
    openCart,
    closeCart,
  };

  return (
    <ShowCartContext.Provider value={contextValue}>
      {children}
    </ShowCartContext.Provider>
  );
};
