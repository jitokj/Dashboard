import React from "react";
import "./Forecast.css";
const Forecast = () => {
  return (
    <div className="forecast">
      <div className="forecast__data">
        <p>Today</p>
        <div className="forecast__rectangle">
          <h6> Clear ...................................... 32/19 </h6>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
