import React from "react";
import "../css/ItemList.css";

const Item = ({ prod }) => {
  return (
    <div className="card-item">
      <img src={prod.img} alt={prod.name} className="card-item-img" />
      <h3 className="card-item-title">{prod.name}</h3>
      <p className="card-item-price">${prod.price}</p>
      <button className="card-item-btn">Agregar al carrito</button>
    </div>
  );
};

export default Item;
