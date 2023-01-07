import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="currentWeather mt-3">
        {" "}
        <h2 className="pt-3 mb-0">{props.data.city}</h2>
        <h6 className=" mb-3">{props.data.country}</h6>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <ul className="d-flex justify-content-between mt-3 mb-3">
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
            <WeatherIcon
              code={props.data.icon}
              alt={props.data.description}
              width={88}
            />
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
