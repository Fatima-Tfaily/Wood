import React from "react";
import "../styles/about.css";
import image5 from "../images/image5.jpg";

const About = () => {
  return (
    <div className="About">
      <h1 className="title">About</h1>
      <div className="about">
        <div className="content">
          <p>
            I am the rare Lebanese designer Hassan Shehaytli who com the past
            anbinesd the present with the finest design, time and distinction. I
            have many beautiful works and I have a shop in Shmestar.
          </p>
        </div>
        <div className="image">
          <img className="img" src={image5} />
        </div>
      </div>
    </div>
  );
};

export default About;
