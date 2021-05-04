import React from "react";
import Card from "./Card";

const Home = () => {
  return (
    <div className="bgHome">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6" align="center">
            <Card
              name="Noble Ploenchit"
              bedroom="2 Bedrooms"
              backgroundBedroom="#363946"
              backgroundColor="orange"
              image="https://drive.google.com/uc?id=1V68SW8FNXEOz5WBqN_KWfV6S_KFyPJVk"
              link="/Noble"
              status="available"
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6" align="center">
            <Card
              name="Laviq Sukhumvit 57"
              bedroom="2 Bedrooms"
              backgroundBedroom="#363946"
              backgroundColor="#ED6A5A"
              image="https://drive.google.com/uc?id=16RK8jSZiH_QLozkdlwiOmJfFt0rDHjxJ"
              link="/Laviq"
              status="unavailable"
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6" align="center">
            <Card
              name="Esse at  Singha Complex"
              bedroom="2 Bedrooms"
              backgroundBedroom="#363946"
              backgroundColor="#36C9C6"
              image="https://drive.google.com/uc?id=1-81Lecg_m5zLj3Om_6iEJAPcY6SkA5mh"
              link="/Esse"
              status="unavailable"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
