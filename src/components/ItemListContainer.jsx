import "../css/ItemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts, products } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

import LoaderComponent from "./LoaderComponent";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);
  const { type } = useParams();

  //FIREBASE

  return (
    <>
      {loading ? (
        <LoaderComponent
          text={
            type ? `Cargando categoria ${type}...` : "Cargando Productos..."
          }
        />
      ) : (
        <div>
          {/* DESPUES SE BORRA!!!!!! */}
          {/* <button onClick={subirData}>SUBIR DATA</button> */}
          <h1 className="text-success">
            {mensaje}{" "}
            {type && (
              <span style={{ textTransform: "capitalize", color: "red" }}>
                {type}
              </span>
            )}
          </h1>
          {/* <Input/> */}
          <ItemList data={data} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
