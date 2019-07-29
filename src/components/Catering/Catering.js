import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import wedding from "../../assets/img/wedding3.jpg";
import corporate from "../../assets/img/corporate.jpg";
import social from "../../assets/img/social2.jpg";

const Catering = () => {
  return (
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
            Pizza Restaurant. Exquisite & creative cousine, friendly atmosphere
            and highly professional staff will make your special day beautiful &
            unforgettable. You can select from couple of pre-made menus for
            every occasion that should please many different palates or work
            with us to create your own menu.
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
      <div className="row mb-10">
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
            Weather you are celebrating your birthday, have a family reunion or
            something else, we’ll make it enjoying and memorable. Our experts
            have years of experience in party planning and will make sure it is
            a delicious success, enjoying and memorable for you and your guests!
            Time to put your party hat on!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Catering;
