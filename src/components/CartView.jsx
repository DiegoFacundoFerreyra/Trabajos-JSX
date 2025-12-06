import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/CartView.css";
import { Link } from "react-router-dom";

const CartView = () => {
  const { cart, montoTotal, removeItem, clearCart } = useContext(CartContext);
  return (
    <div>
      <h2>Tu carrito 🛒</h2>
      <div>
        {cart.map((compra) => (
          <div key={compra.id}>
            <img src={compra.img} alt={compra.name} />
            <span>{compra.name}</span>
            <span>${compra.price}</span>
            <span>cantidad:{compra.quantity}</span>
            <span>precio final: ${compra.quantity * compra.price}</span>
            <button onClick={() => removeItem(compra.id)}>X</button>
          </div>
        ))}
      </div>
      <span>Total a pagar: ${} </span>
      <div>
        <button onClick={clearCart}>Vaciar carrito</button>
        <button>
          {
            <Link style={{ textDecoration: "none" }} to="/checkout">
              Finalizar Compra
            </Link>
          }
        </button>
      </div>
    </div>
  );
};

export default CartView;
