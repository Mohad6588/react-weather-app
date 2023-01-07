import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function MaxTemp() {
    let temp = Math.round(props.data.temperature.maximum);
    return `${temp}°`;
  }
  function MinTemp() {
    let temp = Math.round(props.data.temperature.minimum);
    return `${temp}°`;
  }
  let date = new Date(props.data.time * 1000);
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }

  function month() {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let month = date.getMonth();
    return months[month];
  }
  function dates() {
    let dates = date.getDate();
    return dates;
  }

  return (
    <div className="WeatherForecast-card">
      <div className="row">
        <ul className="col-3">
          <li className="WeatherForecast-day">{day()}</li>
          <li className="WeatherForecast-date">
            {month()} {dates()}
          </li>
        </ul>
        <div className="col-3">
          <WeatherIcon
            code={props.data.condition.icon}
            alt={props.data.condition.description}
            width={57}
          />
        </div>
        <ul className="col-6 WeatherForecast-description">
          <li>{props.data.condition.description}</li>
          <li className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-min">{MaxTemp()}</span>
            <span className="WeatherForecast-temp-max">{MinTemp()}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
