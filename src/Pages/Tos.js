import React from "react";
import "./Tos.scss";

const Tos = () => {
  return (
    <div className="tos">
      <h1>Terms of Service</h1>
      <p>
        Welcome to Pixel Prodigy! By accessing and using our website, you agree
        to comply with and be by the following terms and conditions.
      </p>
      <div>
        <span>Use of Website</span>
        <p>
          You agree to use our website for lawful purposes only. You must not
          use our site in any way that may cause damage to the site or impair
          its accessibility.
        </p>
      </div>
      <div>
        <span>Product Information</span>
        <p>
          We strive to provide accurate product information, but we do not
          warrant that product descriptions or other content on our site are
          accurate, complete, reliable, or error-free.
        </p>
      </div>
      <div>
        <span>Limitation of Liability</span>
        <p>
          Pixel Prodigy will not be liable for any damages arising from the use
          of our website or the inability to use our website.
        </p>
      </div>
      <div>
        <span>Changes to Terms</span>
        <p>
          We reserve the right to modify these terms at any time. Any changes
          will be effective immediately upon posting on this page.
        </p>
      </div>
      <p>
        If you have any questions about these Terms of Service, please contact
        us at <a href="mailto:namankatewa@gmail.com">namankatewa@gmail.com</a>
      </p>
    </div>
  );
};

export default Tos;
