import React from "react";
import "../css/ItemList.css";

const ItemDetail = ({ detalle }) => {
  return (
    <div className="card-item">
      <h2>Caracteristicas del producto: {detalle.name}</h2>
      <img src={detalle.img} alt={detalle.name} className="card-item-img" />
      <span className="card-item-title">${detalle.price}</span>
      <p className="card-item-title">{detalle.description}</p>
      <p className="card-item-title">
        Stock disponible: {detalle.stock} unidades{" "}
      </p>
    </div>
  );
};

export default ItemDetail;
