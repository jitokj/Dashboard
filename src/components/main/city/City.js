import React, { useEffect, useState } from "react";
import "./City.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import axios from "../../../api/api";

const City = () => {
  const [kochi, setKochi] = useState({});
  useEffect(() => {
    axios
      .get(`/current.json?key=8cd3ba8f524c4b1cb8261025212801&q=Kochi`)
      .then(({ data }) => {
        setKochi(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="city">
      <Card className="city__card">
        <CardContent>
          <Typography variant="subtitle2">{kochi?.location?.name}</Typography>
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
            {kochi?.current?.temp_c}
            <sup>oC</sup>
          </h1>
        </div>
        <div className="city__card--bottom">
          <hr id="horizontal__line" />
          <p>{kochi?.current?.feelslike_c}</p>
        </div>
      </Card>
      {/***** */}
    </div>
  );
};

export default City;
