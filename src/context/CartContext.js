// src/context/CartContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    // Load cart from localStorage
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Calculate total
    const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
    setCartTotal(total);
  }, [cartItems]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.selectedOption === item.selectedOption
    );

    if (existingItemIndex !== -1) {
      // Item already exists, update quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += item.quantity;
      updatedCartItems[existingItemIndex].totalPrice =
        updatedCartItems[existingItemIndex].price *
        updatedCartItems[existingItemIndex].quantity;

      setCartItems(updatedCartItems);
    } else {
      // Add new item to cart
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (itemId, selectedOption) => {
    const updatedCartItems = cartItems.filter(
      (item) => !(item.id === itemId && item.selectedOption === selectedOption)
    );
    setCartItems(updatedCartItems);
  };

  const updateQuantity = (itemId, selectedOption, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.selectedOption === selectedOption) {
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: item.price * newQuantity,
        };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
