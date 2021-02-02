import React from "react";
import "./Forecast.css";
import { useSelector } from "react-redux";
import { dataWeather } from "../../features/weatherSlice";
const Forecast = () => {
  const weather = useSelector(dataWeather);
  return (
    <div className="forecast">
      <div className="forecast__data">
        <p>Today</p>
        <div className="forecast__rectangle">
          <h6> {weather?.condition} </h6>
          <hr></hr>
          <h6> {weather?.temp} </h6>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
