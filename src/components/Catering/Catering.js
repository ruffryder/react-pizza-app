import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCalendar,
  faPhone,
  faTruck,
  faUtensils
} from "@fortawesome/free-solid-svg-icons";
import wedding from "../../assets/img/wedding3.jpg";
import corporate from "../../assets/img/corporate.jpg";
import social from "../../assets/img/social2.jpg";
import event1 from "../../assets/img/event1.jpg";
import event2 from "../../assets/img/event2.jpg";
import event3 from "../../assets/img/event3.jpg";
import "./Catering.css";
import Aux from "../../hoc/Auxiliary";

const Catering = () => {
  return (
    <Aux>
      <div className="container">
        <div className="row mb-10 mt-10">
          <div className="col-12 col-md-6 text-center ">
            <img
              className="img-fluid w-75 rounded"
              src={wedding}
              alt="special events - wedding"
            />
          </div>
          <div className="col-12 col-md-6 text-center">
            <h2 className="mb-6">Special Events</h2>
            <div className="d-inline-flex align-items-center">
              <FontAwesomeIcon
                color="#e5bd0a"
                className="ml-4"
                size="1x"
                icon={faCircle}
              />
              <span className="pl-2">Wedding</span>
            </div>
            <div className="d-inline-flex align-items-center">
              <FontAwesomeIcon
                color="#e5bd0a"
                className="ml-4"
                size="1x"
                icon={faCircle}
              />
              <span className="pl-2">Anniversaires</span>
            </div>
            <div className="d-inline-flex  align-items-center">
              <FontAwesomeIcon
                color="#e5bd0a"
                className="ml-4"
                icon={faCircle}
                size="1x"
              />
              <span className="pl-2">Baby Showers</span>
            </div>
            <p>
              Celebrate your special event in beautiful atmosphere of Bocciani
              Pizza Restaurant. Exquisite & creative cousine, friendly
              atmosphere and highly professional staff will make your special
              day beautiful & unforgettable. You can select from couple of
              pre-made menus for every occasion that should please many
              different palates or work with us to create your own menu.
            </p>
          </div>
        </div>
        <div className="row mb-10 d-flex flex-column-reverse flex-md-row">
          <div className="col-12 col-md-6 text-center">
            <h2 className="mb-6">Corporate Events</h2>
            <div className="d-inline-flex align-items-center">
              <FontAwesomeIcon
                color="#e5bd0a"
                className="ml-4"
                size="1x"
                icon={faCircle}
              />
              <span className="pl-2">Meeting</span>
            </div>
            <div className="d-inline-flex align-items-center">
              <FontAwesomeIcon
                color="#e5bd0a"
                className="ml-4"
                size="1x"
                icon={faCircle}
              />
              <span className="pl-2">Team Building</span>
            </div>
            <div className="d-inline-flex  align-items-center">
              <FontAwesomeIcon
                color="#e5bd0a"
                className="ml-4"
                icon={faCircle}
                size="1x"
              />
              <span className="pl-2">Corporate Parties</span>
            </div>
            <p>
              Planning an important business meeting with your partners? Impress
              them with lunch in RIverstone Bistro. Riverstone Bistro covers
              everything from business lunches, to custom team building programs
              and corporate parties. No matter of party size and occasion, our
              catering specialist will plan your event to meet your needs.
            </p>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img
              className="img-fluid w-75 rounded"
              src={corporate}
              alt="corporate event"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 text-center ">
            <img
              className="img-fluid w-75 rounded"
              src={social}
              alt="social event"
            />
          </div>
          <div className="col-12 col-md-6 text-center">
            <h2 className="mb-6">Social Events</h2>
            <div className="d-inline-flex align-items-center">
              <FontAwesomeIcon
                color="#e5bd0a"
                className="ml-4"
                size="1x"
                icon={faCircle}
              />
              <span className="pl-2">Birthdays</span>
            </div>
            <div className="d-inline-flex align-items-center">
              <FontAwesomeIcon
                color="#e5bd0a"
                className="ml-4"
                size="1x"
                icon={faCircle}
              />
              <span className="pl-2">Family Reunions</span>
            </div>
            <div className="d-inline-flex  align-items-center">
              <FontAwesomeIcon
                color="#e5bd0a"
                className="ml-4"
                icon={faCircle}
                size="1x"
              />
              <span className="pl-2">Or just because</span>
            </div>
            <p>
              Weather you are celebrating your birthday, have a family reunion
              or something else, we’ll make it enjoying and memorable. Our
              experts have years of experience in party planning and will make
              sure it is a delicious success, enjoying and memorable for you and
              your guests! Time to put your party hat on!
            </p>
          </div>
        </div>
      </div>

      <div className="sample-menu d-flex flex-column align-items-center justify-content-center">
        <h2 className="sample-menu-title display-0 Heading">Sample Menu</h2>
        <h2 className="sample-menu-title display-0 Heading">
          Special Events Menus
        </h2>
      </div>

      <div className="container">
        <div className="row mt-10">
          <div className="col-12 col-md-4 text-center ">
            <img
              className="img-fluid rounded w-75"
              src={event1}
              alt="Special events"
            />
            <h3 className="mt-6">Special Events Menu</h3>
            <div className="border-separator" />
            <p className="w-75 mx-auto event-content">
              Elegant and sensual dish choices for your special day that will
              please you and your guests. From rustic BBQ to multi-course menu,
              we’ll prepare something delicious and exciting.
            </p>
          </div>
          <div className="col-12 col-md-4 text-center ">
            <img
              className="img-fluid rounded w-75"
              src={event2}
              alt="Corporate events"
            />
            <h3 className="mt-6">Corporate Events Menu</h3>
            <div className="border-separator" />
            <p className="w-75 mx-auto event-content">
              Great food is a soul of every event, so our professional chefs
              offer you only the best dishes for your corporate event. From
              canapes to multi-course menus. Take a look!
            </p>
          </div>
          <div className="col-12 col-md-4 text-center ">
            <img
              className="img-fluid rounded w-75"
              src={event3}
              alt="Social events"
            />
            <h3 className="mt-6">Social Events Menu</h3>
            <div className="border-separator" />
            <p className="w-75 mx-auto event-content">
              Our talented culinary team have some nice surprises for you.
              Special combination of different dishes in one tasty and exciting
              menu! Menu that will please you and your guests.
            </p>
          </div>
        </div>
        <h2 className="mt-15 mb-5 display-2 text-center">The Process</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 px-0">
            <div className="text-center icon first">
              <FontAwesomeIcon
                className="icon-container fa-w-20 border-color-brown"
                color="#e5bd0a"
                icon={faPhone}
                border
                size="4x"
              />
            </div>
            <div className="mt-4 text-center">
              <h3>Contact Us</h3>
              <p className="w-50 mx-auto">
                Reach out to us - we'd love to know how we can help.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 px-0">
            <div className="text-center icon">
              <FontAwesomeIcon
                className="icon-container fa-w-20 border-color-brown"
                color="#e5bd0a"
                icon={faCalendar}
                border
                size="4x"
              />
            </div>
            <div className="mt-4 text-center">
              <h3>Event Details</h3>
              <p className="w-50 mx-auto">
                Once we have the details of your event, we will begin prep.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 px-0">
            <div className=" text-center icon">
              <FontAwesomeIcon
                className="icon-container fa-w-20 border-color-brown"
                color="#e5bd0a"
                icon={faTruck}
                border
                size="4x"
              />
            </div>
            <div className="mt-4 text-center">
              <h3>Delivery</h3>
              <p className="w-50 mx-auto">
                We'll be there for you at your gig, ready to impress the guests.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 px-0">
            <div className="text-center icon last">
              <FontAwesomeIcon
                className="icon-container fa-w-20 border-color-brown"
                color="#e5bd0a"
                icon={faUtensils}
                border
                size="4x"
              />
            </div>
            <div className="mt-4 text-center">
              <h3>Enjoy</h3>
              <p className="w-50 mx-auto">
                Enjoy delicious food and world class service!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default Catering;
