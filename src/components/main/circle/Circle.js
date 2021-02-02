import React from "react";
import "./Circle.css";
import { useSelector } from "react-redux";
import { dataWeather } from "../../features/weatherSlice";
const Circle = () => {
  const weather = useSelector(dataWeather);

  return (
    <div className="circle">
      <div className="circle__container">
        <span className="circle__container--Text">Clear</span>
        <span className="circle__container--Temp">
          {weather?.temp}
          <sup>oC</sup>
        </span>
      </div>
    </div>
  );
};

export default Circle;
