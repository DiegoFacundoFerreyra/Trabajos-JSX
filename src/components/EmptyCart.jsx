import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div>
      <h1> Tu carrito esta vacio 😱</h1>
      <h3>Te ivitamos a ver nuestros productos</h3>
      <Link style={{ textDecoration: "none" }} className="html" to="/">
        {" "}
        Ir a la pagina principal
      </Link>
    </div>
  );
};


