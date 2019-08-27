import React from "react";
import interior from "../../assets/img/interior.jpg";

export default function Contact() {
  return (
    <div className="container">
      <h1 className="text-center mb-6">Contact Us</h1>
      <div className="row">
        <div className="col">
          <img
            src={interior}
            className="img-fluid rounded"
            alt="Bocciani pizza restaurant interior"
          />
          <h2 className="mt-4">Open Hours:</h2>
          <p>Monday - Thursday 8am - 6pm</p>
          <p>Friday - Sunday 11am - 4pm</p>
        </div>
        <div className="col">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                title="Bocciani Restaurant map"
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=italy%20pizza&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6 text-center w-75" />
      <div className="row mt-6 text-center">
        <div className="col-4">
          <h2>Event Inquiries</h2>
          <p>boccianicatering@example.com</p>
          <p>For all other questions, please use the form on the right</p>
        </div>
        <div className="col-8">
          <form>
            <label htmlFor="email">Email*</label>
            <div className="form-input">
              <input
                className="w-75"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <label htmlFor="subject">Subject*</label>
            <div className="form-input">
              <input
                className="w-75"
                id="subject"
                type="text"
                placeholder="Subject"
              />
            </div>
            <label htmlFor="message">Message*</label>
            <div className="form-input">
              <textarea
                className="w-75 resize-none"
                name="message"
                id="message"
                cols="100"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              className="btn btn-large btn-general-inverted"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
