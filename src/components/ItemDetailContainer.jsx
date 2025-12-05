import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getOneProduct, getProducts } from "../mock/AsyncMock";
import { Link, useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponents";
import { db } from "../service/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const docRef = doc(db, "items", id);
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetalle({ id: res.id, ...res.data() });
        } else {
          setInvalid(true);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return <ItemDetail detalle={detalle} />;
};

export default ItemDetailContainer;
