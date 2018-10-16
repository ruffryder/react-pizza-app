import React from "react";
import Aux from "../../hoc/Auxiliary";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import bgImage from "../../assets/img/1.jpg";
import bgImage2 from "../../assets/img/2.jpg";
import bgImage3 from "../../assets/img/3.jpg";

const Content = ({ dishes }) => {
  return (
    <Aux>
      <Header
        title="We love food"
        subtitle=" We pride ourselves on producing great pizzas, pastas, salads. Quality
        ingredients is where it all starts. We then take those ingredients and
        put them together in just that perfect way to create some great tasting
        food"
      />
      <img src={bgImage} className="img-fluid w-100" alt="kneading dough" />
      <Header
        title="You can choose."
        subtitle="Our pizza is made with hand-tossed dough & real milk cheese. Choose between regular or thin crust. Create your own pizza."
      />
      <img src={bgImage2} className="img-fluid w-100" alt="delicious pizza" />
      <Menu dishes={dishes} />
      <Header title="We deliver. 24/7." />
      <img src={bgImage3} className="img-fluid w-100" alt="slicing pizza" />
      {/* <DishCardList dishesData={dishesData} /> */}
    </Aux>
  );
};

export default Content;
