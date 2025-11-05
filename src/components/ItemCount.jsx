import "../css/ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock }) => {
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
    </div>
  );
};

export default ItemCount;
