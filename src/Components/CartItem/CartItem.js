import "./CartItem.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../../context/cartContext";

const CartItem = ({ data }) => {
  const { decreaseQuantity, increaseQuantity, removeFromCart } = useCart();
  return (
    <div className="cartitem">
      <div className="img">
        <img src={data.img} alt="" />
      </div>
      <div className="details">
        <p>{data.title}</p>
        <p>
          {data.size.name}
          {data.size.frame.name === "Frame" && "/Framed"}
        </p>
        <p
          className={data.size.frame.name === "Frame" && `color ${data.color}`}
        ></p>
        <div className="quantity">
          <div
            className="icon"
            onClick={() => decreaseQuantity(data.id, data.size.id)}
          >
            <RemoveIcon />
          </div>
          <span>{data.quantity}</span>
          <div
            className="icon"
            onClick={() => increaseQuantity(data.id, data.size.id)}
          >
            <AddIcon />
          </div>
        </div>
      </div>
      <div className="price">₹{data.size.price * data.quantity}</div>
      <div
        className="delete"
        onClick={() => removeFromCart(data.id, data.size.id)}
      >
        <DeleteIcon />
      </div>
    </div>
  );
};

export default CartItem;
