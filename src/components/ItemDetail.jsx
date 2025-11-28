import React from "react";
import "../css/itemCount.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detalle }) => {
  return (
    <div className="muestraDetalle">
      <div className="card-item">
        <h2>Caracteristicas del producto: {detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name} className="card-item-img" />
        <span className="card-item-title">${detalle.price}</span>
        <p className="card-item-title">{detalle.description}</p>
        <ItemCount className="contador" stock={detalle.stock} />
        <small>Stock disponible: {detalle.stock} unidades </small>
      </div>
    </div>
  );
};

export default ItemDetail;
