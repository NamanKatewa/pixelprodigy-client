import React from "react";
import "./Policy.scss";

const Policy = () => {
  return (
    <div className="policy">
      <h1>Privacy Policy</h1>
      <p>
        Your privacy is important to us at Pixel Prodigy. This Privacy Policy
        outlines how we collect, use, and protect your personal information.
      </p>
      <div>
        <h2>Information We Collect</h2>
        <span>Personal Information:</span>
        <p>
          When you purchase a poster, or contact us, we may collect personal
          details like your name, email address, phone number, and shipping
          address.
        </p>
        <span>Usage Data:</span>
        <p>We do not collect any usage data, or user interactions</p>
      </div>
      <div>
        <h2>How We Use Your Information</h2>
        <p>To process and fulfill your orders.</p>
        <p>To communicate with you about your orders, inquiries.</p>
      </div>
      <div>
        <h2>Protection of Your Information</h2>
        <p>
          We implement various security measures to ensure the safety of your
          personal information. However, please note that no method of
          transmission over the internet is completely secure.
        </p>
      </div>
      <div>
        <h2>Cookies</h2>
        <p>We do not collect any cookies.</p>
      </div>
      <div>
        <h2>Third-Party Services</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties except when necessary to provide our services.
        </p>
        <p>
          By using our site, you consent to our Privacy Policy. If you have any
          questions, please contact us at{" "}
          <a href="mailto:namankatewa@gmail.com">namankatewa@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Policy;
