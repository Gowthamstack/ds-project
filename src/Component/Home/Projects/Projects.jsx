import React from "react";
import { assests } from "../../../assets/assests";
import "./Projects.css";

const Category = () => {
  return (
    <div className="project">
      <h1>Final Year Projects For Students</h1>
       <div className="project-content">
        <div className="project-img">
          <div className="project-img-top">
            <img src={assests.Project} alt="ProjectImage"/>
            <img src={assests.Project} alt="ProjectImage"/>
          </div>
          <div className="project-img-center">
            <img src={assests.Project} alt="ProjectImage"/>
          </div>
          <div className="project-img-bottom">
            <img src={assests.Project} alt="ProjectImage"/>
            <img src={assests.Project} alt="ProjectImage"/>
          </div>
        </div>
        <div className="description">
          <h1>Our Projects</h1>
          <div className="description-content">We Craft innovative Solutions In Electronics,Drones,And Embedded System</div>
          <ul>
            <li><b>PCB Design:</b>High-Performance,Reliable Curcuit Board</li>
            <li><b>Drone Assembly:</b>Custom-built Drones For Driverse Missions</li>
            <li><b>Embedded Testing:</b>Real-time data systems for areospace,IOT,and more...</li>
            <li><b>Student Projects:</b>Industry-grade final year project Guidence</li>
          </ul>
          <div>From Concept to Creation,we bring ideas to life</div>
       </div>

       </div>
    </div>
  );
};

export default Category;
