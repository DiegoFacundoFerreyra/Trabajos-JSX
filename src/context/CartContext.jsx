import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const carritoInicial = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(carritoInicial);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  const totalCantidad = cart.reduce(
    (acc, product) => (acc += product.quantity),
    0
  );

  const montoTotal = () => {
    return cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };

  const totalItems = (id) => {
    const itemInCart = cart.find((product) => product.id === id);
    if (itemInCart) {
      return itemInCart.quantity;
    } else {
      return 0;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        clearCart,
        removeItem,
        addItem,
        totalItems,
        totalCantidad,
        montoTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
