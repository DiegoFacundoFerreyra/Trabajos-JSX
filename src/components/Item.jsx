import "../css/ItemList.css";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <div className="card-item">
      <img src={prod.img} alt={prod.name} className="card-item-img" />
      <h3 className="card-item-title">{prod.name}</h3>
      <p className="card-item-price">${prod.price}</p>
      <Link className="card-item-btn" to={`/item/${prod.id}`}>
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;
