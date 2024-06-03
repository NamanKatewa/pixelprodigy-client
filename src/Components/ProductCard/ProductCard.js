import { Link } from "react-router-dom";
import "./ProductCard.scss";
import { Favorite } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useWishlist } from "../../context/wishlistContext";

const ProductCard = ({ data }) => {
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  return (
    <Link to={`/product/${data.id}`} className="productcard">
      {isInWishlist(data.id) ? (
        <div
          className="like"
          onClick={(e) => {
            e.preventDefault();
            removeFromWishlist(data.id);
          }}
        >
          <Favorite />
        </div>
      ) : (
        <div
          className="like"
          onClick={(e) => {
            e.preventDefault();
            addToWishlist({
              id: data.id,
              squareImg: data.squareImg,
              name: data.name,
              minPrice: data.minPrice,
            });
          }}
        >
          <FavoriteBorderIcon />
        </div>
      )}
      <img src={data.squareImg} alt="" />
      <div className="info">
        <h2>{data.name}</h2>
        <p>₹{data.minPrice}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
