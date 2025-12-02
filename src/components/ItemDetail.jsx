import "../css/itemCount.css";
import ItemCount from "./ItemCount";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ detalle }) => {
  const { addItem, totalItems } = useContext(CartContext);
  const [stockActual, setStockActual] = useState(0);

  useEffect(() => {
    if (detalle?.stock !== undefined) {
      setStockActual(detalle.stock - totalItems(detalle.id));
    }
  }, [detalle, totalItems]);

  const onAdd = (cantidad) => {
    addItem(detalle, cantidad);
  };

  if (!detalle?.id) return <p>Cargando producto...</p>;

  return (
    <div className="muestraDetalle">
      <div className="card-item">
        <h2>{detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name} className="card-item-img" />
        <span>${detalle.price}</span>
        <p>{detalle.description}</p>
        <ItemCount stock={stockActual} onAdd={onAdd} />
        <small>Stock disponible: {stockActual} unidades</small>
      </div>
    </div>
  );
};

export default ItemDetail;
