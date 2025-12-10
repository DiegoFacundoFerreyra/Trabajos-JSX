import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetIcons = () => {
  const { cart } = useContext(CartContext);

  const totalCantidad = cart.reduce(
    (acc, product) => (acc += product.quantity),
    0
  );
  //producto cantidad*producto.price

  return (
    <div
      style={{ position: "relative", textDecoration: "none", color: "black" }}
    >
      <TiShoppingCart fontSize="2rem" />
      {totalCantidad > 0 && (
        <span className="cart-counter">{totalCantidad}</span>
      )}
    </div>
  );
};

export default CartWidgetIcons;
