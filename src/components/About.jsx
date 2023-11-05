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
            The rare Lebanese designer who combines the past and the present
            with the finest design and time Distinguished artist Hassan
            Shehitli, for those interested, external 81815087
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
