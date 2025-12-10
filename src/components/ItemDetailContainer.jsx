import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getOneProduct, getProducts } from "../mock/AsyncMock";
import { Link, useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponents";
import { db } from "../service/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const [loading, setLoading] = useState(true);
  const [invalid, setInvalid] = useState(null);
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
  }, [id]);
  if (invalid) {
    return (
      <div>
        <h2 style={{ color: "red" }}>El producto no existe</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <LoaderComponent text="Cargando detalle..." />
      ) : (
        <ItemDetail detalle={detalle} />
      )}
    </>
  );
};

export default ItemDetailContainer;
