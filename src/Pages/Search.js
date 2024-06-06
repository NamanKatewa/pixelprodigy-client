import "./Search.scss";
import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard/ProductCard";
import axios from "axios";
import { server } from "../variables";

const Search = () => {
  const [term, setTerm] = useState("");
  const [products, setProducts] = useState();

  useEffect(() => {
    async function getProducts() {
      if (term) {
        const data = await axios.get(`${server}/data/search?query=${term}`);
        setProducts(data.data);
      }
    }
    getProducts();
  }, [term]);

  return (
    <div className="search">
      <div className="input">
        <input
          type="text"
          placeholder="Search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          autoFocus
        />
        <span onClick={() => setTerm("")}>Clear</span>
      </div>
      <div className="results">
        {term && (
          <>
            <h2>Poster results for "{term}"</h2>
            {products && products.length > 0 ? (
              <div className="products">
                {products.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            ) : (
              <p>No Results Found</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
