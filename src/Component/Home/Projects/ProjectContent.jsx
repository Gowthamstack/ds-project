import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "./Projects.css";

export default function ProjectContent() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // animation duration
//       once: true      // animate only once
//     });
//   }, []);

  const projects = [
    {
      title: "Smart PCB Design & Development",
      description:
        "We create high-performance Printed Circuit Boards tailored for complex electronics applications, ensuring precision, reliability, and efficiency."
    },
    {
      title: "Custom Drone Assembly & Integration",
      description:
        "Our drones are designed for a variety of purposes — from aerial surveillance to research. We assemble, program, and fine-tune each drone for peak performance."
    },
    {
      title: "Telemetry Embedded Systems Testing",
      description:
        "We build and test embedded systems capable of capturing and transmitting critical data in real-time for aerospace, automotive, and IoT applications."
    },
    {
      title: "Final Year Student Projects",
      description:
        "We mentor and assist students in building industry-grade final-year projects, turning academic ideas into practical, working models."
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">Our Innovative Projects</h2>
      <p className="section-intro">
        At DS Interconnect, we transform concepts into fully functional engineering solutions.
        From electronics to aeronautics, every creation is a testament to our expertise and commitment.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            data-aos="fade-up"
            data-aos-delay={index * 200}
            key={index}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
