import "../css/ItemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts, products } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

import LoaderComponents from "./LoaderComponents";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { type } = useParams();

  //FIREBASE

  useEffect(() => {
    setLoading(true);
    const productsCollection = type
      ? query(collection(db, "items"), where("category", "==", type))
      : collection(db, "items");
    getDocs(productsCollection)
      .then((res) => {
        console.log(res);
        console.log(res.docs);
        const list = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setData(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [type]);

  return (
    <>
      {loading ? (
        <LoaderComponents
          text={
            type ? `Cargando categoria ${type}...` : "Cargando Productos..."
          }
        />
      ) : (
        <div>
          <h2 className="text-success">
            {mensaje}{" "}
            {type && (
              <span style={{ textTransform: "capitalize", color: "green" }}>
                {type}
              </span>
            )}
          </h2>
          <ItemList data={data} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
