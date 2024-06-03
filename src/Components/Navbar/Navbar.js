import "./Navbar.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useShowCart } from "../../context/showCartContext";
import Cart from "../Cart/Cart";
import { useCart } from "../../context/cartContext";
import { useWishlist } from "../../context/wishlistContext";

const Navbar = () => {
  const { showCart, openCart } = useShowCart();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link to="/">
            <img src="/Logo.svg" alt="" />
          </Link>
          <Link className="link">Shop</Link>
          <Link to="/search" className="link">
            Search
          </Link>
        </div>
        <div className="center">
          <Link to="/">
            <img src="/Text Logo.svg" alt="" />
          </Link>
        </div>
        <div className="right">
          <Link to="/wishlist" className="item">
            <FavoriteBorderIcon className="icon" />
            <span>{wishlist.length}</span>
          </Link>
          <div className="item" onClick={() => openCart()}>
            <ShoppingCartOutlinedIcon className="icon" />
            <span>{cart.length}</span>
          </div>
        </div>
      </div>
      {showCart && <Cart />}
    </>
  );
};

export default Navbar;
