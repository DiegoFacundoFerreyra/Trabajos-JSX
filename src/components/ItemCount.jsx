import "../css/ItemCount.css";
import { useState, useEffect } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const comprar = () => {
    onAdd(count);
  };

  return (
    <>
      {stock > 0 ? (
        <div className="item-count">
          <button className="btnres" onClick={restar}>
            -
          </button>
          <span className="btnnum">{count}</span>
          <button className="btnmas" onClick={sumar}>
            +
          </button>

          <button
            className="btnadd"
            disabled={stock === 0}
            onClick={() => onAdd(count)}
          >
            Agregar al carrito
          </button>
        </div>
      ) : (
        <p>Sin stock disponible</p>
      )}
    </>
  );
};

export default ItemCount;
