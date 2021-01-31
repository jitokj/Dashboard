import React from "react";
import Circle from "./circle/Circle";
import City from "./city/City";
import Details from "./details/Details";
import Forecast from "./forecast/Forecast";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="main__row1">
        <Circle />
        <Details />
        <Forecast />
      </div>
      <div className="main__row2">
        <City />
      </div>
    </div>
  );
};

export default Main;
