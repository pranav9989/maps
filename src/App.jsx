import React, { useEffect, useRef } from "react";
import "./TravelWebsite.css";
import { initializeMap, attachCityListeners } from "./travelWebsiteLogic";
import Card from './components/Card';
import Navbar from "./components/Navbar";
import WebsiteIntro from "./components/WebsiteIntro";
import Footer from "./components/Footer";

function App() {
  const mapRef = useRef(null); // Create a ref to store the map instance

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = initializeMap(); // Initialize the Mapbox map only once
    }
    attachCityListeners(mapRef.current); // Attach click listeners to city cards
  }, []); // Empty dependency array ensures this runs once after the component mounts

  return (
    <div>
      <Navbar />
      <WebsiteIntro />
      <div className="header">
        <h1>Explore Cities</h1>
      </div>

      <div className="cards-container">
        <Card cityName={"Paris"} cityQuote={"City of Light"} />
        <Card cityName={"London"} cityQuote={"The Big Smoke"} />
        <Card cityName={"Mumbai"} cityQuote={"The City That Never Sleeps"} />
        <Card cityName={"Delhi"} cityQuote={"Heart Of India"} />
      </div>

      <div id="details-section">
        <div id="map"></div>
        <div className="weather-details">
          <h3 id="city-name"></h3>
          <p id="weather-info"></p>
          <p id="best-time">
            Best time to visit: <span id="visit-time"></span>
          </p>
          <div className="slideshow" id="slideshow">
            {/* Images will be dynamically added here */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
