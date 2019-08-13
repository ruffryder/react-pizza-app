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
          <h3 className="mt-4">Open Hours:</h3>
          <p>Monday - Thursday 8am - 6pm</p>
          <p>Friday - Sunday 11am - 4pm</p>
        </div>
        <div className="col">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=italy%20pizza&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
