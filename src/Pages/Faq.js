import React from "react";
import "./Faq.scss";

const Faq = () => {
  return (
    <div className="faq">
      <h1>FAQ</h1>
      <div>
        <span>How do I place an order?</span>
        <p>
          To place an order, simply browse our shop, add the poster you wish to
          purchase including the size, frame, and color to your cart, and
          proceed to checkout.
        </p>
      </div>
      <div>
        <span>What payment methods do you accept?</span>
        <p>We accept, UPI, Netbanking and major Credit and Debit cards.</p>
      </div>
      <div>
        <span>How can I track my order?</span>
        <p>
          once your order has shipped, you will receive a email with tracking
          information.
        </p>
      </div>
      <div>
        <span>Do you offer international shipping?</span>
        <p>No, we currently only offer shipping in India.</p>
      </div>
      <div>
        <span>How can I contact customer service?</span>
        <p>
          You can reach out to{" "}
          <a href="mailto:namankatewa@gmail.com">namankatewa@gmail.com</a>,{" "}
          <a href="tel:+919983270009">+919983270009</a>
        </p>
      </div>
    </div>
  );
};

export default Faq;
