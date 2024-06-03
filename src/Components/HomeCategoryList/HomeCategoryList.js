import { Link } from "react-router-dom";
import HomeProductCard from "../HomeProductCard/HomeProductCard";
import "./HomeCategoryList.scss";

const HomeCategoryList = ({ data }) => {
  return (
    <div className="homecategory">
      <div className="details">
        <h3>{data.name}</h3>
        <Link className="all" to={`/category/${data.id}`}>
          View All
        </Link>
      </div>
      <div className="list">
        {data.products.map((d) => (
          <HomeProductCard key={d.id} data={d} />
        ))}
      </div>
    </div>
  );
};

export default HomeCategoryList;
