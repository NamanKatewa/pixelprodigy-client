import "./Category.scss";
import ProductCard from "../Components/ProductCard/ProductCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../variables";
import { useParams } from "react-router-dom";

const Category = () => {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const categories = await axios.get(
        `${server}/data/category/${id}?page=${page}&size=10`
      );
      setData(categories.data);
    }
    getData();
  }, [page, id]);

  return (
    <div className="category">
      <h1>{data && data.title}</h1>
      <div className="products">
        {data && data.products.map((d) => <ProductCard key={d.id} data={d} />)}
      </div>
      <div className="pages">
        <button
          className={page > 1 ? "enabled" : ""}
          onClick={() => {
            page > 1 && setPage(page - 1);
          }}
        >
          <ArrowBackIosIcon />
          Previous
        </button>
        <button
          className={data && data.nextPage ? "enabled" : ""}
          onClick={() => {
            data.nextPage && setPage(page + 1);
          }}
        >
          Next
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
};

export default Category;
