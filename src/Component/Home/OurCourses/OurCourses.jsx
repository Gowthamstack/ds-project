import React from "react";
import "./OurCourses.css";
import { courses } from "../../../assets/assests";

const OurCourses = () => {
  return (
    <div className="courses">
      <h1>What We Do...</h1>
      <div className="All-courses">
        {courses.map((course, index) => (
          <div className="course" key={course.id}>
            <img src={course.img} alt="" />
            <h3>{course.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCourses;
