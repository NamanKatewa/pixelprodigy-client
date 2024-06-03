import "./Similar.scss";
import axios from "axios";
import { server } from "../../variables";
import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useParams } from "react-router-dom";

const Similar = ({ id, catId }) => {
  const [data, setData] = useState();

  async function getData() {
    const products = await axios.get(`${server}/data/similar/${catId}/${id}`);
    setData(products.data);
  }

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="similar">
      <h1>More like this</h1>
      <div className="products">
        {data && data.map((d) => <ProductCard key={d.id} data={d} />)}
      </div>
    </div>
  );
};

export default Similar;
