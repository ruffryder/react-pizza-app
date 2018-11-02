import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="BlogFooter">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <span>
              <a href="/">Terms and conditions</a>
              <br />
              <a href="/">Contact Us</a>
            </span>
          </div>
          <div className="col-lg-8 text-right pr-5">
            <a className="d-inline-block LinkInsta" href="instagram.com" />
            <a className="d-inline-block LinkFacebook" href="facebook.com" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
