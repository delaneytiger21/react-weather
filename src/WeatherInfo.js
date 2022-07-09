import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";



export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-1">
          <WeatherIcon code={props.info.icon} />
        </div>
        <div className="col-5">
          <WeatherTemperature celsius={props.info.temperature} />
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {Math.round(props.info.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}