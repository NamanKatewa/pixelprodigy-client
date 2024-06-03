import React from "react";
import "./PaymentPolicy.scss";

const PaymentPolicy = () => {
  return (
    <div className="paymentpolicy">
      <h1>Cancellation, Shipping and Refund Policy</h1>
      <p>
        Thank you for shopping with Pixel Prodigy. Please read our policy
        carefully to understand how we handle cancellations, shipping, and
        refunds.
      </p>
      <div>
        <span>Cancellation Policy</span>
        <p>
          Email us at{" "}
          <a href="mailto:namankatewa@gmail.com">namankatewa@gmail.com</a> as
          soon as possible, and we will try to accomodate cancellation. Order
          cannot be cancelled after its processed.
        </p>
        <p>Processing is usually done within 2 hours</p>
      </div>
      <div>
        <span>Shipping Policy</span>
        <p>We currently offer shipping only in India.</p>
        <p> Shipping costs are included in your purchase.</p>
        <p>Orders are typically processed within 12 hours.</p>
        <p>You will receive a receipt after succesful checkout.</p>
        <p>
          You will receive a email with tracking information once your order has
          been shipped
        </p>
      </div>
      <div>
        <span>Refund Policy</span>
        <p>
          We currently do not accept refunds, and we working hard to make
          refunds possible.
        </p>
      </div>
    </div>
  );
};

export default PaymentPolicy;
