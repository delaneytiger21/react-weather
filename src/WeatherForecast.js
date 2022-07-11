import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(true);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col text-center">
            <div className="forecastDescription">Sunny</div>
            <WeatherIcon code="01d" size={36} />
            <div className="forecastMax">90°</div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `0e27653dd62cdeffcdb4a7ba79215871`;
    let longitude = props.coordinates.coord.lon;
    let latitude = props.coordinates.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}