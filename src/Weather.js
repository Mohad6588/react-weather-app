import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      feels: response.data.temperature.feels_like,
      icon:response.data.condition.icon,
    });
  }

  function search() {
    const apiKey = "1ba7253fcfa69a274oe0449641943et5";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a city ..."
                className="form-control d-inline-block me-2 lh-2"
                autoFocus="on"
                onChange={handleCityChange}
              />
              <input
                type="submit"
                value="Search"
                className="btn btn-warning searchBtn"
              />
            </form>
            <WeatherInfo data={weatherData} />
          </div>
          {/* <div className="weatherForecast col-6">
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
          </div> */}
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
