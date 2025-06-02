import "./App.css";
import React from "react";
import HomePage from "./Components/HomePage";
import Weather from "./Components/Weather";
import { Route, Routes } from "react-router-dom";
import News from "./Components/News";
import Crypto from "./Components/Crypto";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/news" element={<News />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
