import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

/* const CartWidgetIcons = ({ counter }) => {
  const carrito = useContext(CartContext);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      <TiShoppingCart fontSize="1.8rem" />
      <span className="cart-counter">{counter}</span>
    </div>
  );
}; */

const CartWidgetIcons = ({ counter }) => {
  const carrito = useContext(CartContext);
  return (
    <div style={{ position: "relative" }}>
      <TiShoppingCart fontSize="1.8rem" />
      <span className="cart-counter">{counter}</span>
    </div>
  );
};
export default CartWidgetIcons;
