import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, qty) => {
    if (isInCart(item.id)) {
      const updatedCart = cart.map((product) => {
        if (product.id === item.id) {
          return { ...product, quantity: product.quantity + qty };
        } else {
          return product;
        }
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: qty }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  return (
    <CartContext.Provider
      value={{ cart, clearCart, removeItem, isInCart, addItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
