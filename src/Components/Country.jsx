import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Country = () => {
  const [input, setInput] = useState("");
  const [countryData, setCountry] = useState("");
  const [error, setError] = useState("");

  const fetchCountryData = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${input}`
      );
      console.log(response.data[0]);
      setCountry(response.data[0]);
      setError("");
    } catch (err) {
      setError("Please enter correct country name..");
      console.error(err);
      setCountry(null);
    }
  };
  return (
    <section className="countrySection">
      <Link className="backlink" to="/">
        Home Page
      </Link>
      <div className="container text-center">
        <h2>Discover Countries Around the World</h2>
        <p>
          Get detailed information about any country including population, flag,
          currency, and more.
        </p>
        <input
          type="text"
          placeholder="Enter country name:"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="cbtn btn btn-primary" onClick={fetchCountryData}>
          Get Info
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {countryData && (
          <div className="countrydetails" style={{ marginTop: "25px" }}>
            <img src={countryData.flags.svg} alt="countryImg" width="100" />
            <h2>{countryData.name.common}</h2>
            <p>
              <strong>Capital: </strong>
              {countryData.capital?.[0]}
            </p>
            <p>
              <strong>Region: </strong>
              {countryData.region}
            </p>
            <p>
              <strong>Population:</strong>
              {countryData.population.toLocaleString()}
            </p>
            <p>
              <strong>Language:</strong>
              {Object.values(countryData.languages).join(", ")}
            </p>
            <p>
              <strong>Currency:</strong>
              {Object.values(countryData.currencies)[0].name}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Country;
