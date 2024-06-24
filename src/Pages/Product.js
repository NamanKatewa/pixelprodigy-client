import "./Product.scss";
import { Favorite } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";
import { server } from "../variables";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Similar from "../Components/Similar/Similar";
import { useCart } from "../context/cartContext";
import toast from "react-hot-toast";
import { useWishlist } from "../context/wishlistContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Slider from "../Components/Slider/Slider";
import { extractColors } from "extract-colors";

const Product = () => {
  const [data, setData] = useState();
  const [frame, setFrame] = useState(false);
  const [frameSizes, setFrameSizes] = useState([]);
  const [noFrameSizes, setNoFrameSizes] = useState([]);
  const [color, setColor] = useState("Black");
  const [size, setSize] = useState({
    price: 0,
  });
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  const [backColor, setBackColor] = useState([]);

  useEffect(() => {
    async function getData() {
      const product = await axios.get(`${server}/data/product/${id}`);
      setData(product.data);
    }
    getData();
  }, [id]);

  useEffect(() => {
    async function getBackColor() {
      if (data && data.posterImg) {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = data.posterImg;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, img.width, img.height);
          extractColors(canvas.toDataURL()).then((colors) => {
            setBackColor(colors);
          });
        };
      }
    }

    setFrameSizes(data?.frameSizes);
    setNoFrameSizes(data?.noFrameSizes);
    setSize({
      price: 0,
    });
    setQuantity(1);
    setColor("Black");
    getBackColor();
  }, [data]);

  const backgroundStyle =
    backColor.length >= 2
      ? {
          background: `radial-gradient(${backColor[0].hex}33, ${backColor[1].hex}33)`,
        }
      : {};

  return (
    <div className="product" style={backgroundStyle}>
      {data && (
        <>
          <div className="details">
            <div className="images">
              <div className="title">
                <div className="poster">
                  <img src={data.posterImg} alt="" />
                </div>
                <div className="name">
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
                  <h1>{data.name}</h1>
                  <p>{data.description}</p>
                  <div className="description">
                    <h3>Product Details</h3>
                    <ul>
                      <li>High Quality Fade Proof Print</li>
                      <li>250-300 GSM</li>
                      <li>Rolled up</li>
                      <li>Adhesive Strips</li>
                      <li>Glossy Frame Finish</li>
                      <li>Laminated Frame</li>
                      <li>3-6mm Board Thickness</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mockup">
                <Slider data={data.mockupImg} />
              </div>
            </div>
            <div className="options">
              <div className="select">
                <h3>
                  Frame: <span>{frame ? "Yes" : "No"}</span>
                </h3>
                <div className="selectoptions">
                  <div
                    className={frame ? "option active" : "option"}
                    onClick={() => {
                      setFrame(true);
                      setSize(frameSizes[0]);
                    }}
                  >
                    Yes
                  </div>
                  <div
                    className={frame ? "option" : "option active"}
                    onClick={() => {
                      setFrame(false);
                      setSize(noFrameSizes[0]);
                    }}
                  >
                    No
                  </div>
                </div>
              </div>
              <div className="select">
                <h3>
                  Size: <span>{size.name}</span>
                </h3>
                <div className="selectoptions">
                  {frameSizes && frame
                    ? frameSizes.map((d) => (
                        <div
                          key={d.name}
                          className={`option ${
                            size.name === d.name ? "active" : ""
                          }`}
                          onClick={() => {
                            setSize(d);
                          }}
                        >
                          {d.name}
                        </div>
                      ))
                    : noFrameSizes &&
                      noFrameSizes.map((d) => (
                        <div
                          key={d.name}
                          className={`option ${
                            size.name === d.name ? "active" : ""
                          }`}
                          onClick={() => {
                            setSize(d);
                          }}
                        >
                          {d.name}
                        </div>
                      ))}
                </div>
              </div>
              <div className="select">
                {frame && (
                  <>
                    <h3>
                      Frame Color: <span>{color.toUpperCase()}</span>
                    </h3>
                    <div className="selectoptions">
                      <div
                        className={`option black ${
                          color === "black" ? "color" : ""
                        }`}
                        onClick={() => setColor("black")}
                      ></div>
                      <div
                        className={`option white ${
                          color === "white" ? "color" : ""
                        }`}
                        onClick={() => setColor("white")}
                      ></div>
                    </div>
                  </>
                )}
              </div>
              <div className="cart">
                <div className="quantity">
                  <div
                    className="icon"
                    onClick={() => {
                      if (quantity === 1) {
                        setQuantity(1);
                      } else {
                        setQuantity(quantity - 1);
                      }
                    }}
                  >
                    <RemoveIcon />
                  </div>
                  <hr />
                  <span>{quantity}</span>
                  <hr />
                  <div
                    className="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <AddIcon />
                  </div>
                </div>
                <div
                  className="addtocart"
                  onClick={() => {
                    if (size.name) {
                      addToCart({
                        id: data.id,
                        title: data.name,
                        img: data.posterImg,
                        size: size,
                        quantity: quantity,
                        frame: frame,
                        color: color,
                      });
                    } else {
                      toast.error("Please Select a Size");
                    }
                  }}
                >
                  Add to Cart - ₹{size.price * quantity}
                </div>
              </div>
            </div>
          </div>

          <Similar id={data.id} catId={data.categoryId} />
        </>
      )}
    </div>
  );
};

export default Product;
