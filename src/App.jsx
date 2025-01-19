import React, { useEffect, useRef } from "react";
import "./TravelWebsite.css";
import { initializeMap, attachCityListeners } from "./travelWebsiteLogic"; // Correct import

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
      <div className="header">
        <h1>Explore Cities</h1>
      </div>

      <div className="cards-container">
        <div className="card" data-city="Paris">
          <h3>Paris</h3>
          <p>City of Light</p>
        </div>
        <div className="card" data-city="London">
          <h3>London</h3>
          <p>The Big Smoke</p>
        </div>
        <div className="card" data-city="Mumbai">
          <h3>Mumbai</h3>
          <p>The City That Never Sleeps</p>
        </div>
        <div className="card" data-city="Delhi">
          <h3>Delhi</h3>
          <p>Heart of India</p>
        </div>
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
    </div>
  );
}

export default App;
