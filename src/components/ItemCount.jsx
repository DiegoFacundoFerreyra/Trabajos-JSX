import "../css/ItemCount.css";
import { useState, useEffect } from "react";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  //Ejemplo de useEffect por ende el onClick del agregar al carrito tambien lo es
  const [compra, setCompra] = useState(false);
  useEffect(() => {}, [compra]);

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
      <button className="btnadd" onClick={() => setCompra(!compra)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
