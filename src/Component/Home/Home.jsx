import React from "react";
import "./home.css";
import MainBanner from "./MainBanner/MainBanner";
import OurCourses from "./OurCourses/OurCourses";
import Projects from "./Projects/Projects";
import OurLatest from "./OurLatest/OurLatest"
import Testimonials from "../Testmonial/Testmonial"
const Home = () => {
  return (
    <div className="entire-home" onScroll={scrollTo(0,0)}>
      <MainBanner />
      <OurCourses />
      <OurLatest/>
    </div>
  );
};

export default Home;
