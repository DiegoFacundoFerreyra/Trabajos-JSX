import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Swal from "sweetalert2";
import { FaBeer } from "react-icons/fa";
import "./App.css";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer mensaje={"Bienvenidos a la tienda de deportes"} />
      <ItemCount stock={99} />
    </>
  );
}

export default App;
