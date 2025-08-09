import React from "react";
import "./MainBanner.css";
import Typewriter from "typewriter-effect";

const MainBanner = () => {
  return (
    <div className="MainBanner">
      <h1>Welcome to Our Website</h1>
      <p>Explore our services and offerings.</p>
      <div className="typewriter-effect">
        <p>What we offer:</p>
         <Typewriter options={{ strings: ["Drone Assembly.", "PCB Designing.", "Telemetry.","Embeded System Testing."], autoStart: true, loop: true }} />
      </div>
      <button className="main-banner-button">Explore</button>
    </div>
  );
};

export default MainBanner;
