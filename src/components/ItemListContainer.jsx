import "../css/ItemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncMock";
import ItemList from "./ItemList";

const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setData(res));
  }, []);

  return (
    <div>
      <h1>{mensaje}</h1>

      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
