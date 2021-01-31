import React from "react";
import "./City.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const City = () => {
  return (
    <div className="city">
      <Card className="city__card">
        <CardContent>
          <Typography variant="subtitle2">New York</Typography>
        </CardContent>
        <div className="city__card--top">
          <CardContent>
            <FontAwesomeIcon
              icon={faCloud}
              color="blue"
              size="lg"
              className="city__card--Icon"
            />
          </CardContent>
          <div className="city__card--vert"></div>
          <h1>
            62<sup>oC</sup>
          </h1>
        </div>
        <div className="city__card--bottom">
          <hr id="horizontal__line" />
          <p>29</p>
        </div>
      </Card>
      {/***** */}
      <Card className="city__card">
        <CardContent>
          <Typography variant="subtitle2">New York</Typography>
        </CardContent>
        <div className="city__card--top">
          <CardContent>
            <FontAwesomeIcon
              icon={faCloud}
              color="blue"
              size="lg"
              className="city__card--Icon"
            />
          </CardContent>
          <div className="city__card--vert"></div>
          <h1>
            62<sup>oC</sup>
          </h1>
        </div>
        <div className="city__card--bottom">
          <hr id="horizontal__line" />
          <p>29</p>
        </div>
      </Card>

      <Card className="city__card">
        <CardContent>
          <Typography variant="subtitle2">New York</Typography>
        </CardContent>
        <div className="city__card--top">
          <CardContent>
            <FontAwesomeIcon
              icon={faCloud}
              color="blue"
              size="lg"
              className="city__card--Icon"
            />
          </CardContent>
          <div className="city__card--vert"></div>
          <h1>
            62<sup>oC</sup>
          </h1>
        </div>
        <div className="city__card--bottom">
          <hr id="horizontal__line" />
          <p>29</p>
        </div>
      </Card>
    </div>
  );
};

export default City;
