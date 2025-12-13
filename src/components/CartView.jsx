/* import React, { useContext } from "react";
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
            <button className="btnx" onClick={() => removeItem(compra.id)}>
              X
            </button>
          </div>
        ))}
      </div>
      <span>Total a pagar: ${montoTotal()} </span>
      <div>
        <button className="btnv" onClick={preClearCart}>
          Vaciar carrito
        </button>
        <button className="btnf">
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
 */

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/CartView.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartView = () => {
  const { cart, montoTotal, removeItem, clearCart } = useContext(CartContext);

  const preClearCart = () => {
    Swal.fire({
      title: "¿Seguro que deseas vaciar el carrito?",
      text: "No se guardarán los productos agregados",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vacío", "", "success");
      }
    });
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Tu carrito</h2>

      <div className="cart-items">
        {cart.map((compra) => (
          <div className="cart-card" key={compra.id}>
            <img src={compra.img} alt={compra.name} className="cart-img" />

            <div className="cart-info">
              <h3>{compra.name}</h3>
              <p>Precio: ${compra.price}</p>
              <p>Cantidad: {compra.quantity}</p>
              <p className="cart-subtotal">
                Subtotal: ${compra.price * compra.quantity}
              </p>
            </div>

            <button className="btnx" onClick={() => removeItem(compra.id)}>
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <h3>Total a pagar: ${montoTotal()}</h3>

        <div className="cart-actions">
          <button className="btnv" onClick={preClearCart}>
            Vaciar carrito
          </button>

          <Link className="btnf" to="/checkout">
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartView;
