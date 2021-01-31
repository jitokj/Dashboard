import React from "react";
import "./Detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faThermometerFull } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";

const Detail = () => {
  return (
    <div className="detail">
      <div className="detail__icons">
        <div className="detail__icon">
          <FontAwesomeIcon
            icon={faWind}
            color="white"
            size="lg"
            border
            className="detail__icon--style"
          />

          <div className="detail__text">
            <p>Wind Speed</p>
            <span>27.3kmph</span>
          </div>
        </div>

        <div className="detail__icon">
          <FontAwesomeIcon
            icon={faThermometerFull}
            color="white"
            size="lg"
            border
            className="detail__icon--style"
          />

          <div className="detail__text">
            <p>Real Feel</p>
            <span>27.3kmph</span>
          </div>
        </div>

        <div className="detail__icon">
          <FontAwesomeIcon
            icon={faSun}
            color="white"
            size="lg"
            border
            className="detail__icon--style"
          />

          <div className="detail__text">
            <p>UV Index</p>
            <span>27.3kmph</span>
          </div>
        </div>

        <div className="detail__icon">
          <FontAwesomeIcon
            icon={faTachometerAlt}
            color="white"
            size="lg"
            border
            className="detail__icon--style"
          />

          <div className="detail__text">
            <p>Pressure</p>
            <span>27.3kmph</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
