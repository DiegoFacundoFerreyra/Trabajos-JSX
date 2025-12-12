import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/CartView.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartView = () => {
  const { cart, montoTotal, removeItem, clearCart } = useContext(CartContext);

  const preClearCart = () => {
    Swal.fire({
      title: "Seguro que deseas vaciar el carrito?",
      text: "No te va a guardar ningun producto agregado anteriormente!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No, cancelar!",
      confirmButtonText: "Si, deseo eliminar el carrito!",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "El carrito esta vacio!",
          icon: "success",
        });
      }
    });
  };

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
      <span>Total a pagar: ${montoTotal()} </span>
      <div>
        <button onClick={preClearCart}>Vaciar carrito</button>
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
