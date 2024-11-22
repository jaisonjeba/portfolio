import React from "react";
import webScrapper from "../images/real-estate.png";
import colorBlock from "../images/tictactoe.png";
import "./project.css";
import { useEffect, useContext } from "react";
import AOS from "aos";
import { ThemeContext } from "./NavBar";

export function Project() {
  const { styles } = useContext(ThemeContext);
  useEffect(() => {
    AOS.init();
  }, []);
  const projects = [
    {
      id: "web-scrapper",
      title: "Real Estate",
      imgSrc: webScrapper,
      frontEndSource:
        "https://github.com/jaisonjeba/mern-estate-frontend.git",
      live: "https://steady-smakager-7028cf.netlify.app/",
      backEndSource:
        "https://github.com/jaisonjeba/mern-estate.git",
      techStack: "Reactjs, NodeJs, Express, MongoDb",
    },
    {
      id: "color-blocks",
      title: "Movie App",
      imgSrc: colorBlock,
      frontEndSource: "https://github.com/jaisonjeba/movie-app.git",
      live: "https://stately-hotteok-5a9f14.netlify.app/",
      techStack: "Reactjs",
    },
  ];

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div style={{ backgroundColor: styles }} className="project-main-container">
      <h1 data-aos="fade-down" data-aos-delay="500">
        Project
      </h1>
      <p data-aos="fade-up" data-aos-delay="500">
        The login credentials are already filled in the text field by default.
      </p>
      <div className="mySwiper">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.imgSrc} alt={`Project ${project.id}`} />
            <h2 style={{ color: "violet" }}>{project.title}</h2>
            <h4 style={{ textAlign: "center" }}>
              Tech stack :{project.techStack}
            </h4>
            <div className="slider-buttons">
              <button onClick={() => openLink(project.frontEndSource)}>
                Front End Source
              </button>
              <button onClick={() => openLink(project.live)}>Live</button>
              {project.backEndSource ? (
                <button onClick={() => openLink(project.backEndSource)}>
                  Back End Source
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}