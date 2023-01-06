import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="currentWeather mt-3">
        {" "}
        <h2 className="pt-2 mb-1">{props.data.city}</h2>
        <h5>{props.data.country}</h5>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <ul className="d-flex justify-content-between mb-1">
          <div>
            <li>Feels Like: {Math.round(props.data.feels)}℃</li>
            <li>Humidity: {props.data.humidity}%</li>
          </div>
          <div>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
            <li>Pressure: {props.data.pressure} hPa</li>
          </div>
          <div></div>
        </ul>
        <div className="temperature d-flex justify-content-between me-5">
          <div></div>
          <div className="d-inline-block currentIcon ">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
          <div className="currentTemp">
            <WeatherTemperature celsius={props.data.temperature} />
            
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
