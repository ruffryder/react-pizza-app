import React, { useState } from "react";
import "./About.css";
import john_img from "../../../assets/img/person1.jpg";
import jack_img from "../../../assets/img/person2.jpg";
import jake_img from "../../../assets/img/person3.jpg";

function About() {
  const [showPerson1Info, setPerson1Info] = useState(false);
  const [showPerson2Info, setPerson2Info] = useState(false);
  const [showPerson3Info, setPerson3Info] = useState(false);
  return (
    <div className="container">
      <h1 className="text-center mb-5 about-title">About us</h1>
      <section className="story w-75">
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
      </section>

      <section className="team w-75 text-center">
        <h2>Our Team</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-3 offset-lg-1">
              <div className="profile">
                <img
                  src={john_img}
                  className="img-fluid"
                  alt="john baker profile"
                />
                <h3>John Baker</h3>
                <p>Founder</p>
                <button
                  onClick={() => setPerson1Info(!showPerson1Info)}
                  className="btn btn-large btn-general"
                >
                  More about John
                </button>
                <p
                  className={`${
                    showPerson1Info ? "show" : "hide"
                  } mt-4 slide-bottom`}
                >
                  Food junkie. Coffee enthusiast. Bacon advocate. Passionate
                  entrepreneur. Travel expert.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3 offset-lg-1">
              <div className="profile">
                <img
                  src={jack_img}
                  className="img-fluid"
                  alt="jack baker profile"
                />
                <h3>Jack Baker</h3>
                <p>Co-founder</p>
                <button
                  onClick={() => setPerson2Info(!showPerson2Info)}
                  className="btn btn-large btn-general"
                >
                  More about Jack
                </button>
                <p
                  className={`${
                    showPerson2Info ? "show" : "hide"
                  } mt-4 slide-bottom`}
                >
                  Wannabe web fan. Internet trailblazer. Creator. Devoted social
                  media enthusiast. Subtly charming bacon junkie. Zombie ninja.
                  Alcohol guru.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3 offset-lg-1">
              <div className="profile">
                <img
                  src={jake_img}
                  className="img-fluid"
                  alt="jake baker profile"
                />
                <h3>Jake Baker</h3>
                <p>Co-founder</p>
                <button
                  onClick={() => setPerson3Info(!showPerson3Info)}
                  className="btn btn-large btn-general"
                >
                  More about Jake
                </button>
                <p
                  className={`${
                    showPerson3Info ? "show" : "hide"
                  } mt-4 slide-bottom`}
                >
                  Thinker. Infuriatingly humble pop culture buff. Entrepreneur.
                  Professional bacon junkie. Total reader. Tv nerd. Food
                  practitioner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
