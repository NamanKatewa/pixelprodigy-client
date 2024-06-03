import "./Cart.scss";
import { useCart } from "../../context/cartContext";
import CloseIcon from "@mui/icons-material/Close";
import { useShowCart } from "../../context/showCartContext";
import CartItem from "../CartItem/CartItem";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../../variables";

const Cart = () => {
  const { cart, clearCart, getTotal } = useCart();
  const { closeCart } = useShowCart();
  return (
    <div className="shoppingcart" onClick={() => closeCart()}>
      <div className="wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="top">
          <p
            onClick={() => {
              clearCart();
              toast.success("Cart Cleared");
              closeCart();
            }}
          >
            Clear
          </p>
          <CloseIcon className="close" onClick={() => closeCart()} />
        </div>
        <div className="items">
          {cart.length > 0 ? (
            cart.map((c) => <CartItem key={c.id} data={c} />)
          ) : (
            <p>Your Cart is Empty</p>
          )}
        </div>
        <hr />
        <div className="checkout">
          <div className="price">
            <h4>Total</h4>
            <h4> ₹{getTotal()}</h4>
          </div>
          <button
            onClick={async () => {
              if (cart.length < 1) {
                toast.error("Cart is Empty");
              } else {
                const url = await axios.post(`${server}/order/checkout`, {
                  items: cart,
                });
                if (url.status === 200) {
                  window.location.href = url.data;
                } else {
                  toast.error("Something went wrong");
                }
              }
            }}
          >
            Checkout
            <ShoppingCartCheckoutIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
