import React from "react";

const ItemDetail = ({ detalle }) => {
  return (
    <div>
      <h2>Caracteristicas del producto: {detalle.name}</h2>
      <img src={detalle.img} alt={detalle.name} />
      <span>${detalle.price}</span>
      <p>{detalle.description}</p>
      <p>Stock disponible: {detalle.stock} unidades </p>
    </div>
  );
};

export default ItemDetail;
