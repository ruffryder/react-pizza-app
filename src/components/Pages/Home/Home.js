import React from "react";
import Heading from "../../Heading/Heading";
import Aux from "../../../hoc/Auxiliary";
import bgImage from "../../../assets/img/1.jpg";
import bgImage2 from "../../../assets/img/2.jpg";
import delivery from "../../../assets/img/delivery.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Aux>
      <Heading
        title="You can choose."
        subtitle="Our pizza is made with hand-tossed dough & real milk cheese. Choose between regular or thin crust. Create your own pizza."
      >
        <Link to="/make-pizza" className="btn btn-pizza">
          Start making
        </Link>
      </Heading>
      <img src={bgImage2} className="img-fluid w-100" alt="delicious pizza" />
      <Heading
        title="We love food"
        subtitle=" We pride ourselves on producing great pizzas, pastas, salads. Quality
      ingredients is where it all starts. We then take those ingredients and
      put them together in just that perfect way to create some great tasting
      food"
      />
      <img src={bgImage} className="img-fluid w-100" alt="kneading dough" />
      <Heading title="We deliver anytime, anywhere." />
      <div className="text-center">
        <img src={delivery} className="img-fluid w-75" alt="slicing pizza" />
      </div>
    </Aux>
  );
};

export default Home;
