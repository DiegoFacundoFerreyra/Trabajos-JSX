import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2 style={{ fontSize: "40px" }}>La pagina no existe!!🤷‍♂️</h2>
      <button style={{ backgroundColor: "white", border: "none" }}>
        <Link
          style={{ textDecoration: "none", color: "red", fontSize: "28px" }}
          to="/"
        >
          Volver a la pagina principal...
        </Link>
      </button>
    </div>
  );
};

export default Error;
