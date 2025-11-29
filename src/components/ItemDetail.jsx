import "../css/itemCount.css";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ detalle }) => {
  const [purchase, setPurchase] = useState(false);
  const { addItem, totalItems } = useContext(CartContext);
  const onAdd = (cantidad) => {
    addItem(detalle, cantidad);
    setPurchase(true);
  };
  const stockActual = detalle.stock - totalItems(detalle.id);
  return (
    <div className="muestraDetalle">
      <div className="card-item">
        <h2>Caracteristicas del producto: {detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name} className="card-item-img" />
        <span className="card-item-title">${detalle.price}</span>
        <p className="card-item-title">{detalle.description}</p>
        <ItemCount className="contador" stock={stockActual} onAdd={onAdd} />
        <small>Stock disponible: {stockActual} unidades </small>
      </div>
    </div>
  );
};

export default ItemDetail;
