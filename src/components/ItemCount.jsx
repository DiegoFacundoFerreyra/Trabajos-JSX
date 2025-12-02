import "../css/ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
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
  );
};

export default ItemCount;
