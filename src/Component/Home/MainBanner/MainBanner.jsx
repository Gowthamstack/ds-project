import React from "react";
import "./MainBanner.css";
import Typewriter from "typewriter-effect";
import NetBackground from "../../../NetBackground"

const MainBanner = () => {
  return (
    <div className="MainBanner">
      <h1>Connecting Innovation with Precision</h1>
      <h3>At DS Interconnect, We Design And Deleiver Cutting Edge.</h3>
      <div className="typewriter-effect">
         <Typewriter options={{ strings: ["Create.", "Design", "Code.","Build.","For.","Everyone."], autoStart: true, loop: true }} />
      </div>
      <div className="btns">
        <button className="main-banner-button">Explore Our Services </button>
      <button className="main-banner-button-touch">Get in Touch</button>
      </div>
    </div>
  );
};

export default MainBanner;
