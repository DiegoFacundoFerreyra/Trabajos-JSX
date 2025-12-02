import "../css/Navbar.css";
import CartWidgetIcons from "./CartWidgetIcons";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <NavLink to="/">
        <img
          style={{ width: "120px", height: "64px" }}
          src="/logo.png"
          alt="Logo de la marca"
        />
      </NavLink>
      <NavLink className="anchors" to="/category/Artes marciales">
        Artes marciales
      </NavLink>
      <NavLink className="anchors" to="/category/Mas populares">
        Mas polulares
      </NavLink>
      <NavLink className="anchors" to="/category/Gimnasia">
        Gimnasia
      </NavLink>
      <NavLink className="anchors" to="/category/Acuaticos">
        Acuaticos
      </NavLink>
      <NavLink className="contador" to="/cart">
        <CartWidgetIcons />
      </NavLink>
    </nav>
  );
};

export default Navbar;
