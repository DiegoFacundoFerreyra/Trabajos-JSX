import "../css/ItemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (type) {
          setData(res.filter((prod) => prod.category === type));
        } else {
          setData(res);
        }
      })
      .catch((error) => console.log(error));
  }, [type]);

  return (
    <div>
      <h1>{mensaje}</h1>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
