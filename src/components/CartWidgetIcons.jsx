import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetIcons = () => {
  const { totalCantidad, cart } = useContext(CartContext);

  return (
    <div
      style={{ position: "relative", textDecoration: "none", color: "black" }}
    >
      <TiShoppingCart fontSize="2rem" />
      {cart.length > 0 && <span className="cart-counter">{totalCantidad}</span>}
    </div>
  );
};

export default CartWidgetIcons;
