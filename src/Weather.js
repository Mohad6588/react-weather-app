import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-7">
          <form>
            <input
              type="search"
              placeholder="Enter a city ..."
              className="form-control d-inline-block me-2 lh-2"
              autoFocus="on"
            />
            <input type="submit" value="Search" className=" lh-2  p-1 " />
          </form>
          <h2 className="mt-3">San Francisco </h2>
          <h4>United States of America</h4>
          <ul>
            <li>Saturday 11:00</li>
            <li>Heavy intensity rain</li>
            <li>Feels Like: 13℃</li>
            <li>Humidity: 100%</li>
            <li>Wind: 16km/h</li>
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
                className="d-inline-block "
              />
              <span className="currentTemp">13</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-5">forecast</div>
      </div>
    </div>
  );
}
