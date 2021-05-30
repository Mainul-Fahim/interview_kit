import React from "react";
import jhankaar from "../../../Images/Jhankar.jpg";
import './videos.css'

const Video = () => {
  return (
    <div id="videos">
      <div className="container-fluid">
        <h1 className="text-center">
          <b>VIDEO</b>
        </h1>
        <div className="row my-5">
          <div className="col-md-6">
            <iframe
            className="iframe"
              width="500"
              height="315"
              src="https://www.youtube.com/embed/5KIWo4ZamAg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-md-6 vedio-image mx-auto">
            <a href="https://www.linkedin.com/in/jhankar/">
              <img src={jhankaar} alt="image_" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
