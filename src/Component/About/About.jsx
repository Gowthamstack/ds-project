import React from "react";
import Offer from "./Offer/Offer";
import OurMission from "./OurMission/OurMission";
import "./About.css"
import Courses from "./Courses/Courses";

const About = () => {
  return (
    <div className="about" onScroll={scrollTo(0,0)}>
      {/* <OurMission/>
      <Offer/> */}
      <Courses/>
    </div>
  );
};

export default About;
