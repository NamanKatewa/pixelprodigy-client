import "./HomeProductCard.scss";
import { Link } from "react-router-dom";

const HomeProductCard = ({ data }) => {
  return (
    <div className="homeproduct">
      <img src={data.posterImg} alt="" />
      <div className="gradient"></div>
      <div className="info">
        <h1>{data.name}</h1>
        <p>From ₹200</p>
        <Link to={`/product/${data.id}`}>Shop Now</Link>
      </div>
    </div>
  );
};

export default HomeProductCard;
