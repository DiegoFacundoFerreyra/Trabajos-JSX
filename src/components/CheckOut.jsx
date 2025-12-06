import "../css/CheckOut.css";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const CheckOut = () => {
  const [buyer, setBuyer] = useState({});
  const [validMail, setValidMail] = useState("");
  const [orderID, setOrderID] = useState(null);
  const { cart, clear } = useContext(CartContext);
  const [process, setProcess] = useState(false);
  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };
  console.log(buyer);
  const finalizarCompra = (e) => {
    e.preventDefault();
    let orden = {
      Comprador: buyer,
      Items: cart,
      Total: "",
      Fecha: serverTimestamp(),
    };
    const ventas = collection(db, "orders");
    addDoc(ventas, orden)
      .then((res) => {
        setOrderID(res.id);
        clear();
      })
      .catch((error) => console.log(error))
      .finally(() => setProcess(false));
  };
  if (!cart.length && !orderID) {
    return <EmptyCart />;
  }
  return (
    <>
      {orderID ? (
        <div className="order-complete">
          <p>
            Su número de orden es: <strong>{orderID}</strong>
          </p>
          <Link to="/">Volver al inicio</Link>
        </div>
      ) : (
        <div>
          <h3>Complete sus datos</h3>
          <form className="p-4" onSubmit={finalizarCompra}>
            <input
              type="text"
              placeholder="Nombre"
              required
              onChange={buyerData}
            />
            <input
              type="text"
              placeholder="Apellido"
              required
              onChange={buyerData}
            />
            <input
              type="email"
              placeholder="Email"
              required
              onChange={buyerData}
            />
            <input
              type="email2"
              placeholder="Confirme su Email"
              required
              onChange={(e) => setValidMail(e.target.value)}
            />
            <input type="tel" placeholder="Telefono" required />
            <button type="submit" disabled={process}>
              {process ? "Procesando pedido..." : "Generar orden de compra"}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

Swal.fire({
  icon: "success",
  title: "¡Gracias por tu compra! 🛍️",
  text: "Tu pedido ha sido procesado correctamente.",
  confirmButtonColor: "#28a745",
});

export default CheckOut;
