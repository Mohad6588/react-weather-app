import React from "react";
import "./WeatherApp.css";


export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="container">
        <h1>WeatherApp</h1>
        <footer>
          This project was coded by{" "}
          <a
            href="https://symphonious-sunflower-8ca288.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Mohadeseh Moradian
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/Mohad6588/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open_sourced on GitHub
          </a>
          <button className="btn btn-primary d-block">Submit</button>
        </footer>
      </div>
    </div>
  );
}
