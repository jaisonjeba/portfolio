import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import dailycolor from "../images/dailycolor.jpg";
import movieApp from "../images/movieApp.jpg";
import webScrapper from "../images/webScrapper.jpg";
import Ekart from "../images/Ekart.jpg";
import colorBlock from "../images/colorBlock.jpg";
import "./project.css";
import { useEffect } from "react";
import AOS from "aos";
import { ThemeContext } from "./NavBar";
import { useContext } from "react";

export function Project() {
  const { styles } = useContext(ThemeContext);
  useEffect(() => {
    AOS.init();
  }, []);
  const projects = [
    {
      id: "E-kart",
      title: "E Kart",
      imgSrc: Ekart,
      frontEndSource: "https://github.com/AJITH1509/e-commerce-frontend",
      live: "https://e-kart-shop.netlify.app",
      backEndSource: "https://github.com/AJITH1509/e-commerce-backend",
      techStack: "Reactjs, NodeJs, Express, MongoDb",
    },
    {
      id: "daily-color",
      title: "Daily color suggestion",
      imgSrc: dailycolor,
      frontEndSource: "https://github.com/AJITH1509/capstone-project-front-end",
      live: "https://daily-color.netlify.app",
      backEndSource: "https://github.com/AJITH1509/Capstone-project-back-end",
      techStack: "Reactjs, NodeJs, Express, MongoDb",
    },
    {
      id: "web-scrapper",
      title: "Web Scrapper",
      imgSrc: webScrapper,
      frontEndSource:
        "https://github.com/AJITH1509/webcode-2-webscrape-frontend",
      live: "https://graceful-syrniki-59528c.netlify.app/",
      backEndSource:
        "https://github.com/AJITH1509/webcode-2-webscraping-backend",
      techStack: "Reactjs, NodeJs, Express, MongoDb",
    },
    {
      id: "color-blocks",
      title: "Color Block",
      imgSrc: colorBlock,
      frontEndSource: "https://github.com/AJITH1509/Color-Game",
      live: "https://color-blocks.netlify.app/",
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