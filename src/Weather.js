import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      country:response.data.country,
      date: `Saturday 11:00`,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      feels: response.data.temperature.feels_like,
      icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <form>
              <input
                type="search"
                placeholder="Enter a city ..."
                className="form-control d-inline-block me-2 lh-2"
                autoFocus="on"
              />
              <input
                type="submit"
                value="Search"
                className="btn btn-warning searchBtn"
              />
            </form>
            <div className="currentWeather mt-3">
              {" "}
              <h2 className="pt-2 mb-1">{weatherData.city}</h2>
              <h4>{weatherData.country}</h4>
              <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.description}</li>
                <li>Feels Like: {Math.round(weatherData.feels)}℃</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)} km/h</li>
              </ul>
              <div className="row mt-3">
                <div className="min-max col-4">
                  <ul>
                    <li>Min: 11℃</li>
                    <li>Max: 13℃</li>
                  </ul>
                </div>
                <div className="col-8">
                  <img
                    src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
                    alt="rainy"
                    className="d-inline-block currentIcon "
                  />
                  <span className="currentTemp">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="unit">°C</span>
                </div>
              </div>
            </div>
          </div>
          <div className="weatherForecast col-6">
            <div className="forecastCard mb-2">
              <div className="row">
                <ul className="col-3">
                  <li className="day">Sun</li>
                  <li className="day">Jun 24</li>
                </ul>
                <div className="col-3">
                  <img
                    src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
                    alt="{weatherData.description}"
                    className="forecastIcon"
                  />
                </div>
                <ul className="col-6 forecastDescription">
                  <li>Clear with periodic clouds</li>
                  <li>
                    <span className="forecastMinTemp">11°</span>
                    <span>14°</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1ba7253fcfa69a274oe0449641943et5";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
