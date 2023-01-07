import React from "react";
import ClearSkyDay from "./icons/clear-day.svg";
import ClearSkyNight from "./icons/clear-night.svg";
import FewCloudsDay from "./icons/few-clouds-day.svg";
import FewCloudsNight from "./icons/few-clouds-night.svg";
import ScatteredCloudsDay from "./icons/scattered-clouds-day.svg";
import ScatteredCloudsNight from "./icons/scattered-clouds-night.svg";
import BrokenCloudsDay from "./icons/broken-clouds-day.svg";
import BrokenCloudsNight from "./icons/broken-clouds-night.svg";
import ShowerRainDay from "./icons/shower-rain-day.svg";
import ShowerRainNight from "./icons/shower-rain-night.svg";
import RainDay from "./icons/rain-day.svg";
import RainNight from "./icons/rain-night.svg";
import ThunderstormDay from "./icons/thunderstorm-day.svg";
import ThunderstormNight from "./icons/thunderstorm-night.svg";
import SnowDay from "./icons/snow-day.svg";
import SnowNight from "./icons/snow-night.svg";
import MistDay from "./icons/mist-day.svg";
import MistNight from "./icons/mist-night.svg";

//All weather icons made by Bas Milius from https://bas.dev/work/meteocons

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": ClearSkyDay,
    "clear-sky-night": ClearSkyNight,
    "few-clouds-day": FewCloudsDay,
    "few-clouds-night": FewCloudsNight,
    "scattered-clouds-day": ScatteredCloudsDay,
    "scattered-clouds-night": ScatteredCloudsNight,
    "broken-clouds-day": BrokenCloudsDay,
    "broken-clouds-night": BrokenCloudsNight,
    "shower-rain-day": ShowerRainDay,
    "shower-rain-night": ShowerRainNight,
    "rain-day": RainDay,
    "rain-night": RainNight,
    "thunderstorm-day": ThunderstormDay,
    "thunderstorm-night": ThunderstormNight,
    "snow-day": SnowDay,
    "snow-night": SnowNight,
    "mist-day": MistDay,
    "mist-night": MistNight,
  };
  return (
    <img
      src={codeMapping[props.code]}
      alt={props.alt}
      className="mt-0 "
      width={props.width}
    />
  );
}
