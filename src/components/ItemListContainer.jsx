import "../css/ItemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncMock";
const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProducts().then((res) => setData(res));
    // Lógica para obtener datos o realizar acciones al montar el componente
  }, []);
  return (
    <div>
      <h1>{mensaje}</h1>
      {data.map((prod) => (
        <p>{prod.name}</p>
      ))}
    </div>
  );
};

export default ItemListContainer;
