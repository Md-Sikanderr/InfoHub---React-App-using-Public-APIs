import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=91975ad2ac606055fcfb8db6fc72a1a5&units=metric`
      );
      if (response.data.cod !== 200) {
        alert("City not found. Please enter a valid city name.");
        setWeather(null); // Clear previous result
      } else {
        setWeather(response.data);
      }
    } catch (error) {
      alert("Wrong city name", error);
      setWeather(null);
    }
  };

  return (
    <section className="weatherCont">
      <Link className="backlink" to="/">
        Home page
      </Link>
      <div className="container mainContainer text-center mt-5">
        <h2 className="mb-3">WeatherVibe</h2>
        <p className="mb-3">Feel The Forecast</p>
        <div className="WeatherInput mb-3">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="form-control mb-2"
          />
          <button onClick={handleSubmit} className="btn btn-primary">
            Search
          </button>
        </div>

        {weather && (
          <div className="weatherdata mt-4">
            <h3 className="weatherhead">{weather.name}</h3>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Weather: {weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Weather;
