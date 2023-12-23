import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [selectedTab, setSelectedTab] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        orderCount: updatedCart[existingItemIndex].orderCount + 1,
      };
      setCart(updatedCart);
    } else {
      const itemWithOrderCount = {
        ...item,
        orderCount: 1,
        date: new Date().toLocaleString("en-IN", { dateStyle: "short" }),
      };
      setCart([...cart, itemWithOrderCount]);
    }
  };

  //removeFromCart handles both deletion and decrement of order(tried to create a flexible function)
  const removeFromCart = (item) => {
    if (item > -1) {
      setCart(cart.filter((item1) => item1.id !== item));
    } else {
      const existingItemIndex = cart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        if (item.orderCount !== 1) {
          const updatedCart = [...cart];
          updatedCart[existingItemIndex] = {
            ...updatedCart[existingItemIndex],
            orderCount: updatedCart[existingItemIndex].orderCount - 1,
          };
          setCart(updatedCart);
        }
      }
    }
  };

  const onTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.orderCount,
      0
    );
  };

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        cart,
        addToCart,
        removeFromCart,
        selectedTab,
        onTabChange,
        isLoggedIn,
        calculateTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
