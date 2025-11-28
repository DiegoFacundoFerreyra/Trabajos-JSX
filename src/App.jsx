import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Swal from "sweetalert2";
import { FaBeer } from "react-icons/fa";
import "./App.css";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                mensaje={"Bienvenidos a la tienda de deportes"}
              />
            }
          />
          <Route path="/category/:type" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/*    <ItemCount stock={15} />  */}
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
