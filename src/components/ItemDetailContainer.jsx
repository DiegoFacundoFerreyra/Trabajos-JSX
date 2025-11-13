import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getOneProduct } from "../mock/AsyncMock";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  useEffect(() => {
    getOneProduct("4")
      .then((res) => setDetalle(res))
      .catch((error) => console.log(error));
  }, []);

  return <ItemDetail detalle={detalle} />;
};

export default ItemDetailContainer;
