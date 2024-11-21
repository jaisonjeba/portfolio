import React, { useRef } from "react";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";
import { ThemeContext } from "./NavBar";
import { useContext } from "react";

export const ContactUs = () => {
  const { styles } = useContext(ThemeContext);
  useEffect(() => {
    AOS.init();
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8hd2fg9",
        "template_jjwtq2g",
        form.current,
        "qsqYNEMSzyRpibm1f"
      )
      .then(
        (result) => {
          console.log(result);
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div style={{ backgroundColor: styles }} className="contact-container">
      <div className="contact-left">
        <h1 data-aos="fade-right" data-aos-duration="500">
          Get in touch
        </h1>
        <p data-aos="fade-left" data-aos-duration="500">
          Contact me
        </p>
      </div>
      <form
        data-aos="fade-up"
        data-aos-duration="1000"
        className="form-container"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="text-field-container">
          <TextField
            sx={{ maxWidth: "400px" }}
            fullWidth
            id="standard-basic"
            type="text"
            name="user_name"
            label="Name"
            variant="outlined"
          />
          <TextField
            sx={{ maxWidth: "400px" }}
            fullWidth
            id="standard-basic"
            type="email"
            name="user_email"
            label="Email"
            variant="outlined"
          />
          <TextField
            fullWidth
            sx={{ maxWidth: "400px" }}
            id="outlined-multiline-static"
            name="message"
            label="Message"
            color="success"
            multiline
            rows={4}
          />
          <Button color="secondary" variant="contained" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};