import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      city: response.data.city,
      country: response.data.country,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      feels: response.data.temperature.feels_like,
      icon: response.data.condition.icon,
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
              <div className="row">
                <div className="col-9 ">
                  <input
                    type="search"
                    placeholder="Enter a city ..."
                    className="form-control  lh-2"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>{" "}
                <div className="col-2 ps-0">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-warning searchBtn ms-0"
                  />
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData} />
          </div>
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
