import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Sydney"/>
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
        </footer>
      </div>
    </div>
  );
}
