import React from "react";
import "../css/itemDetail.css";

const ItemDetail = ({ detalle }) => {
  return (
    <div className="card-item">
      <h2>Caracteristicas del producto: {detalle.name}</h2>
      <img src={detalle.img} alt={detalle.name} className="card-item-img" />
      <span className="card-item-title">${detalle.price}</span>
      <p className="card-item-title">{detalle.description}</p>
      <button>Agregar al carrito</button>
      <small>Stock disponible: {detalle.stock} unidades </small>
    </div>
  );
};

export default ItemDetail;
