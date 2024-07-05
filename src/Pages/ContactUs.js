import React from "react";
import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <div className="contactus">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you!</p>
      <p>
        If you have any questions realted to your order, feedback, or concerns,
        please don’t hesitate to reach out
      </p>
      <div>
        <span>Email:</span>
        <p>
          <a href="mailto:namankatewa@gmail.com">namankatewa@gmail.com</a>
        </p>
        <span>Phone:</span>
        <p>
          <a href="tel:+919983270009">91+9983270009</a>
        </p>
        <span>Address:</span>
        <p>
          Pixel Prodigy <br />
          B-301,Unique Apartments <br /> Dwarka, Sector-6 <br />
          New Delhi, 110075 <br />
          India
        </p>
        <span>Instagram</span>
        <p>
          <a href="https://www.instagram.com/_pixel__prodigy/">
            _pixel__prodigy
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
