import React from "react";
import Circle from "./circle/Circle";
import Details from "./details/Details";
import Forecast from "./forecast/Forecast";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <Circle />
      <Details />
      <Forecast />
    </div>
  );
};

export default Main;
