import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="row">
              <span className="col-lg-4 ">
                <strong className="letter-spacing-1">Address</strong>
                <br />
                362 Leatherwood Rd. Downingtown, PA 19335
              </span>
              <br />
              <span className="col-lg-4 offset-lg-2">
                <a href="/">Terms and Conditions</a>
                <br />
                <a href="/">Contact Us</a>
                <br />
                <a href="/">Sitemap</a>
                <br />
                <a href="/">FAQ</a>
              </span>
            </div>
          </div>
          <div className="col-lg-4 text-center align-self-center">
            <p>Copyright &copy; 2019 Bocciani Italian Pizza</p>
          </div>
          <div className="col-lg-4 text-right pr-5">
            <a className="d-inline-block LinkInsta" href="instagram.com" />
            <a className="d-inline-block LinkFacebook" href="facebook.com" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
