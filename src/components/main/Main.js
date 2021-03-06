import React, { useEffect, useState } from "react";
import Circle from "./circle/Circle";
import City from "./city/City";
import Details from "./details/Details";
import Forecast from "./forecast/Forecast";
import "./Main.css";
import publicIp from "public-ip";
import axios from "../../api/api";
import { useDispatch } from "react-redux";
import { selectWeather } from "../features/weatherSlice";

const Main = () => {
  const dispatch = useDispatch();
  const [ip, setIp] = useState("");
  const [city, setCity] = useState("");
  useEffect(() => {
    (async () => {
      const getIp = await publicIp.v4();
      setIp(getIp);
    })();

    if (ip) {
      fetch(
        `http://api.ipstack.com/${ip}?access_key=83ad949c9e7e44a98d913bbb6d67158c`
      )
        .then((data) => data.json())
        .then((result) => {
          setCity(`${result.latitude},${result.longitude}`);
          // console.log(result.latitude);
          // console.log(result.longitude);
        })
        .catch((err) => console.log(err));

      if (ip) {
        axios
          .get(`/current.json?key=8cd3ba8f524c4b1cb8261025212801&q=${city}`)
          .then(({ data }) => {
            console.log("data", data);
            dispatch(
              selectWeather({
                realFeel: data.current.feelslike_c,
                windSpeed: data.current.wind_kph,
                temp: data.current.temp_c,
                uv: data.current.uv,
                pressure: data.current.pressure_mb,
                condition: data.current.condition.text,
                location: data.location.name,
                time: data.location.localtime,
              })
            );
          })
          .catch((err) => console.log(err));
      }
    }
  }, [ip, city, dispatch]);

  useEffect(() => {}, [city]);

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
