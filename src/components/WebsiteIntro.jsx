import React from "react";
import "./WebsiteIntro.css";

const WebsiteIntro = () => {
  return (
    <div className="website-intro">
      <div className="intro-content">
        <h1 className="website-title">Voyage Hack2.0</h1>
        <p className="website-description">
          Welcome to <strong>Voyage Hack2.0</strong> – your ultimate travel companion! 
          Our platform assists travelers in seamless itinerary management, offering real-time weather updates, 
          destination insights, and interactive tools to plan your perfect trip. 
          Scroll down to explore cities and find the best time to visit!
        </p>
      </div>
    </div>
  );
};

export default WebsiteIntro;
