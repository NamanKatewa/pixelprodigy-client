import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) =>
          cartItem.id === item.id && cartItem.size.idd === item.size.id
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + item.quantity,
        };
        return updatedCart;
      } else {
        return [...prevCart, item];
      }
    });
  };

  const removeFromCart = (id, sizeId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id || item.size.id !== sizeId)
    );
  };

  const increaseQuantity = (id, sizeId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.size.id === sizeId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id, sizeId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.size.id === sizeId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce(
      (total, item) => total + item.size.price * item.quantity,
      0
    );
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    getTotal,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
