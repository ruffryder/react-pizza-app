import React from "react";
import "./Footer.css";

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
            </div>
          </div>
          <div className="col-sm-3 text-center mt-xs-5">
            <a
              className="d-inline-block LinkInsta"
              title="instagram profile"
              href="instagram.com"
            />
            <a
              className="d-inline-block LinkFacebook"
              title="facebook page"
              href="facebook.com"
            />
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
