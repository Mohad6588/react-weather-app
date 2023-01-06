import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("Celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("Celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "Celsius") {
    return (
      <div className="WeatherTemperature">
        {Math.round(props.celsius)}
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        {Math.round(fahrenheit())}
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
