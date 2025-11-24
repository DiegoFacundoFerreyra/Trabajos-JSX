import "../css/CartImg.css";

const CartWidget = (props) => {
  {
    console.log(props);
  }
  return (
    <div>
      <span>
        <a href="">
          <img
            src="../carrito.png"
            alt="carrito"
            style={{ width: "40px", height: "40px" }}
          />
        </a>
      </span>
      <span className="cart-counter">{props.counter}</span>
    </div>
  );
};

export default CartWidget;
