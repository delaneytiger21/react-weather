import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="ForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <div className="forecastDescription">Sunny</div>
      <WeatherIcon code="01d" size={36} />
      <div className="forecastMax">90°</div>
    </div>
  );
}