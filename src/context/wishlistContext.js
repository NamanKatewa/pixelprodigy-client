import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const storedWIshlist = localStorage.getItem("wishlist");
    return storedWIshlist ? JSON.parse(storedWIshlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.some((wishlistItem) => wishlistItem.id === item.id)) {
        return [...prevWishlist, item];
      }
      return prevWishlist;
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id)
    );
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  const contextValue = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    isInWishlist,
  };

  return (
    <WishlistContext.Provider value={contextValue}>
      {children}
    </WishlistContext.Provider>
  );
};
