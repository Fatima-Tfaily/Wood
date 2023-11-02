import React from "react";
import video1 from "../images/video1.mp4";
import video2 from "../images/video2.mp4";
import "../styles/work.css";

const Video = () => {
  return (
    <div className="Vwork">
      <h1 className="title">Video</h1>
      <div display="flex" flex-direction="row">
        <div className="video">
          <video className="Video" controls muted>
            <source src={video1} type="video/mp4" />
          </video>
        </div>
        <div className="video">
          <video className="Video" controls muted>
            <source src={video2} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Video;
