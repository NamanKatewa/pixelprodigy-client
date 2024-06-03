import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      We are <span id="title"> Pixel Prodigy</span> Posters, your go-to source
      for premium quality posters. Explore a vibrant collection featuring maps,
      artists, songs, movies, and shows, perfect for adding a personal touch to
      your space. Discover your passions with Pixel Prodigy Posters, where
      high-quality meets artistic expression.
      <br />
      <br />
      Transforming walls, One Poster at a time.
      <br />
      <div className="links">
        <Link>About</Link>
        <hr />
        <Link>Contact</Link>
        <hr />
        <Link>Privacy Policy</Link>
        <hr />
        <Link>Terms of Service</Link>
        <hr />
        <Link>Shipping, Cancellation and Refund Policy</Link>
        <hr />
        <Link>FAQ</Link>
      </div>
    </div>
  );
};

export default Footer;
