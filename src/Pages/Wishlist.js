import "./Wishlist.scss";
import { useWishlist } from "../context/wishlistContext";
import ProductCard from "../Components/ProductCard/ProductCard"; // Ensure the import path is correct

const Wishlist = () => {
  const { wishlist, clearWishlist } = useWishlist();

  return (
    <div className="wishlist">
      <div className="top">
        <h1>Wishlist</h1>
        <button onClick={() => clearWishlist()}>Clear</button>
      </div>
      <div className="products">
        {wishlist.length > 0 ? (
          wishlist.map((w) => <ProductCard key={w.id} data={w} />)
        ) : (
          <p>No posters in the wishlist</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
