import React from "react";
import "./Home.css";
import { Button } from "@mui/material";
import astronaut from "../images/homeimage.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import gmail from "../images/gmail.png";
import { useEffect } from "react";
import AOS from "aos";
import { ThemeContext } from "./NavBar";
import { useContext } from "react";
function redirectToLink() {
  window.open(
    "https://drive.google.com/file/d/1rBkWA1D5bZtwIdlWzAvmGD8rOI0JvfU3/view?usp=sharing"
  );
}

export const Home = () => {
  const { styles } = useContext(ThemeContext);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={{ backgroundColor: styles }} className="intro">
      <div className="i-left">
        <div className="i-name">
          <span className="hi" data-aos="fade-down" data-aos-delay="1050">
            Hi 👋, I am
          </span>
          <span className="myname" data-aos="fade-right" data-aos-delay="450">
            JAISON JEBA
          </span>
          <span className="role" data-aos="fade-up" data-aos-delay="1000">
            Full stack developer
          </span>
          <Button onClick={redirectToLink} id="i-btn" variant="outlined" className="highlighted-button">
            Resume
          </Button>
          <div className="i-icons">
            <div onClick={() => window.open("https://github.com/jaisonjeba")}>
              <img src={github} />
              <p>jaisonjeba</p>
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/jaison-jeba-8328b6195/"
                )
              }
            >
              <img src={linkedin} />
              <p>Jaison Jeba</p>
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">
        <img className="floating-image" src={astronaut} alt="astronaut" />
      </div>
    </div>
  );
};