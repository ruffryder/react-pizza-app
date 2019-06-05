import React from "react";
import "./About.css";
import john_img from "../../assets/img/person1.jpg";
import jack_img from "../../assets/img/person2.jpg";
import jake_img from "../../assets/img/person3.jpg";

const About = props => {
  return (
    <div className="container">
      <article className="story w-75">
        <h2>
          “One bite of the crispy crust is enough for you to be brought to Italy
          where life is simple – you just have to decide whether you want a
          traditional margherita or a Capricciosa…”
        </h2>
        <p>
          Our restaurant is designed in traditional late 60s Italian style and
          is located near the center of Sofia. It is one of Sofia’s most
          recognizable pizzerias and it offers a variety of traditional Italian
          dishes – from pizzas to pasta to desserts.
        </p>
        <p>
          Open every day from 10AM to 23PM, Boccani is the perfect place for a
          quick snack, a lingering meal, a night out with your family or
          friends, or a larger social gathering. The first restaurant to have a
          Cured Meats HACCP plan approved by the Bulgarian Health Department,
          Bocciani is famous with its variety of house-cured meats. What really
          makes Our pizzeria stand out from others are its pizzas which are made
          from traditional ingredients only. Together with the authentic methods
          of cooking, this is a promise for a unforgettable experience.
        </p>
      </article>

      <article className="team w-75 text-center">
        <h2>Our Team</h2>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 offset-md-1">
              <div className="profile">
                <img
                  src={john_img}
                  className="img-fluid w-100"
                  alt="john baker profile"
                />
                <h3>John Baker</h3>
                <p>Founder</p>
                <button className="btn btn-large btn-profile">
                  More about John
                </button>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 offset-md-1">
              <div className="profile">
                <img
                  src={jack_img}
                  className="img-fluid w-100"
                  alt="jack baker profile"
                />
                <h3>Jack Baker</h3>
                <p>Co-founder</p>
                <button className="btn btn-large btn-profile">
                  More about Jack
                </button>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 offset-md-1">
              <div className="profile">
                <img
                  src={jake_img}
                  className="img-fluid w-100"
                  alt="jake baker profile"
                />
                <h3>Jake Baker</h3>
                <p>Co-founder</p>
                <button className="btn btn-large btn-profile">
                  More about Jake
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default About;
