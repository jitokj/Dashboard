import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { dataWeather } from "../features/weatherSlice";

const Navbar = () => {
  const weather = useSelector(dataWeather);
  return (
    <div className="navbar">
      <h3>{weather?.location}</h3>
      <p>Status Updated: {weather?.time}</p>
    </div>
  );
};

export default Navbar;
