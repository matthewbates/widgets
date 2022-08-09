import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import Weather from "./components/Weather";

console.log(process.env.REACT_APP_API_KEY);

export default function App() {
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((r) => r.json())
        .then(setData);
    };
    fetchData();
  }, [lat, lon]);

  return (
    <div>
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
