import "../css/itemCount.css";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ detalle }) => {
  const [purchase, setPurchase] = useState(false);
  const { addItem, totalItems } = useContext(CartContext);
  const onAdd = (cantidad) => {
    addItem(detalle, cantidad);
    setPurchase(true);
  };

  const stockActual = detalle.stock - totalItems(detalle.id);
  console.log(detalle);
  return (
    <div className="muestraDetalle">
      <div className="card-item">
        <h2>{detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name} className="card-item-img" />
        <span>${detalle.price}</span>
        <p>{detalle.description}</p>
        <small>Stock disponible: {stockActual} unidades</small>
        {purchase ? (
          <Link to="/cart" className="btn btn-success mt-3">
            Ir al carrito
          </Link>
        ) : (
          <ItemCount stock={stockActual} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
