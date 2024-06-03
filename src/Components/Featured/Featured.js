import { PagesSharp } from "@mui/icons-material";
import { HighQualitySharp } from "@mui/icons-material";
import "./Featured.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../variables";

const Featured = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    const featured = await axios.get(`${server}/data/featured`);
    setData(featured.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    data && (
      <div className="featured">
        <img src={data.mockupImg} alt="" />
        <div className="info">
          <div className="title">
            <h1>{data.name}</h1>
          </div>
          <div className="content">
            <div className="item">
              <PagesSharp />
              <p>Multiple Sizes</p>
            </div>
            <hr />
            <div className="item">
              <HighQualitySharp />
              <p>High Quality</p>
            </div>
          </div>
          <Link to={`product/${data.id}`}>Shop Now</Link>
        </div>
      </div>
    )
  );
};

export default Featured;
