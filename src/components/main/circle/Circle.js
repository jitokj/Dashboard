import React from "react";
import "./Circle.css";

const Circle = () => {
  return (
    <div className="circle">
      <div className="circle__container">
        <span className="circle__container--Text">Clear</span>
        <span className="circle__container--Temp">
          32<sup>oC</sup>
        </span>
      </div>
    </div>
  );
};

export default Circle;
