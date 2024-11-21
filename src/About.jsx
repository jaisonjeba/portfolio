import * as React from "react";
import { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "./NavBar";
import { useContext } from "react";

export const About = () => {
  const { styles } = useContext(ThemeContext);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={{ backgroundColor: styles }} className="about-container">
      <h1 data-aos="fade-down" data-aos-duration="1000">
        About Me
      </h1>
      <p data-aos="fade-up" data-aos-duration="1500">
        As a fresh graduate with a passion for web development, I am excited to
        start my career as a FullStack Developer. I have a strong foundation in
        <span> HTML, CSS, and JavaScript,</span> as well as proficiency in
        <span className="courses"> React, Node, Express and MongoDB</span>. I am
        knowledgeable in both Frontend and Backend development, and I am
        confident in my ability to handle any part of the process with ease,
        including database management with MongoDB. As a collaborative team
        player with a positive attitude, I am willing to learn and grow with the
        organization. I am committed to staying up-to-date with the latest
        industry trends and technologies, and I am confident that my dedication
        and proficiency will allow me to excel in my role and contribute to the
        success of the team.
      </p>
    </div>
  );
};