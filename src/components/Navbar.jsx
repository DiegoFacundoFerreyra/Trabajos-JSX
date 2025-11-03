import "../css/Navbar.css";
import CartWidget from "./CartWidget";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <img
        style={{ width: "120px", height: "64px" }}
        src="../logo.png"
        alt="Logo de la marca"
      />
      <a className="anchors" href="">
        Artes marciales
      </a>
      <a className="anchors" href="">
        Mas polulares
      </a>
      <a className="anchors" href="">
        Gimnasia
      </a>
      <a className="anchors" href="">
        Acuaticos
      </a>
      <CartWidget counter={8} />
    </nav>
  );
};

export default Navbar;
