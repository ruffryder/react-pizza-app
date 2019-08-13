import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9">
            <div className="row">
              <span className="col-sm-4 pl-5">
                <strong className="letter-spacing-1">Address</strong>
                <br />
                362 Leatherwood Rd. Downingtown, PA 19335
              </span>
              <span className="col-sm-8 col-lg-6 mt-xs-5 mt-sm-0">
                <div className="row">
                  <a className="col-lg-5 col-sm-6 col-xs-12" href="/">
                    Terms and Conditions
                  </a>

                  <Link className="col-lg-5 col-sm-6 col-xs-12" to="/contact">
                    Contact Us
                  </Link>
                </div>
                <div className="row">
                  <a className="col-lg-5 col-sm-6 col-xs-12" href="/">
                    Sitemap
                  </a>

                  <a className="col-lg-5 col-sm-6 col-xs-12" href="/">
                    FAQ
                  </a>
                </div>
                <div className="row">
                  <a className="col-lg-5 col-sm-6 col-xs-12" href="/">
                    Join Our Team
                  </a>
                </div>
              </span>
            </div>
          </div>
          <div className="col-sm-3 text-center mt-xs-5">
            <a className="d-inline-block LinkInsta" href="instagram.com" />
            <a className="d-inline-block LinkFacebook" href="facebook.com" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center align-self-center mt-5">
            <p>Copyright &copy; 2019 Bocciani Italian Pizza</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
