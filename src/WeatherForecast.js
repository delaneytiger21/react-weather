import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {

  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div classname="WeatherForecast">
        <div className="row">
          <div className="col text-center">
            <div className="forecastDescription">Sunny</div>
            <WeatherIcon code="01d" size={36} />
            <div className="temp">{forecast[0].temp.max}°</div>
          </div>
        </div>
      </div>
    );
  } else {
  
    let apiKey = "0e27653dd62cdeffcdb4a7ba79215871";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse)
    return null;
  }
}


