import { useEffect, useState } from "react";
import Featured from "../Components/Featured/Featured";
import axios from "axios";
import "./Home.scss";
import { server } from "../variables";
import HomeCategoryList from "../Components/HomeCategoryList/HomeCategoryList";

function Home() {
  const [categories, setCategories] = useState();

  async function getCategories() {
    const data = await axios.get(`${server}/data/home`);
    setCategories(data.data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="home">
      <Featured />
      <div className="top">
        {categories &&
          categories.map((cat) => <HomeCategoryList key={cat.id} data={cat} />)}
      </div>
    </div>
  );
}

export default Home;
