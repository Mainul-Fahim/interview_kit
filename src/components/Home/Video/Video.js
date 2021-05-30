import React from "react";
import jhankaar from "../../../Images/Jhankar.jpg";
import "./videos.css";

const Video = () => {
  return (
    <div id="videos">
      <div className="container-fluid my-2">
        <h1 className="text-center">
          <b className="section_title">VIDEO</b>
        </h1>

        <div className="row my-5">
          <div className="col-md-6">
            <iframe
              className="iframe"
              width="550px"
              height="400px"
              src="https://www.youtube.com/embed/5KIWo4ZamAg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-md-4 offset-md-1">
            <img className="w-100 video-image" src={jhankaar} alt="image_" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
