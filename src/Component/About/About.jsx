import React from "react";
import Offer from "./Offer/Offer";
import OurMission from "./OurMission/OurMission";
import "./About.css"

const About = () => {
  return (
    <div className="about" onScroll={scrollTo(0,0)}>
      {/* <OurMission/> */}
      <Offer/>
    </div>
  );
};

export default About;
