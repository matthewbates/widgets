import React from "react";
import { WeatherContainer } from "./WeatherElements";

export default function Weather({ weatherData }) {
  console.log(weatherData.main.min_temp);
  const celsiusToFarenheit = (weatherData.main.temp * 1.8 + 32).toFixed(2);
  const minTemp = (weatherData.main.temp_min * 1.8 + 32).toFixed(2);
  const maxTemp = (weatherData.main.temp_max * 1.8 + 32).toFixed(2);
  return (
    <WeatherContainer>
      <p>{weatherData.name}</p>
      <p>{celsiusToFarenheit}°</p>
      <img src={`../weather-icons/${weatherData.weather[0].icon}.png`} />
      <p>{weatherData.weather[0].main}</p>
      <p>
        H:{maxTemp}° L:{minTemp}°
      </p>
    </WeatherContainer>
  );
}
